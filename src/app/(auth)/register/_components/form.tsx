"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerFormSchema } from "@/lib/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";

const RegisterForm = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    axios
      .post("/api/users", { ...values, role: "user" })
      .then((res) => {
        if (res.data.message == "success") {
          toast.success("Registration successful");
          form.reset();
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
        if (res.data.message == "Email already exists") {
          toast.error("Email already exists");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Form {...form}>
      <ToastContainer />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full h-10" type="submit">
          Submit
        </Button>
        <p className="px-6 text-sm text-center dark:text-gray-600">
          Don&apos;t have an account yet?{" "}
          <Link href="/login" className="hover:underline font-bold ">
            Sign in
          </Link>
          .
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
