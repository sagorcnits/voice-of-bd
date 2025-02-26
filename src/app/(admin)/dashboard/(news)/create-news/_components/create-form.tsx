"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createNews } from "@/lib/api";
import { toast, ToastContainer } from "react-toastify";

export default function CreateNewsForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      image: "",
      content: "",
    },
  });

  async function onSubmit(values: any) {
    try {
      // Here you would typically make an API call to create the news
      const res = await createNews(values);
      console.log("News created successfully:", res);
      if (res.message) {
        toast.success(res.message);
      }
      form.reset();
    } catch (error) {
      console.error("Error creating news:", error);
      toast.error("Error creating news");
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ToastContainer />
      <CardHeader>
        <CardTitle>Create News Article</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter news title" {...field} />
                  </FormControl>
                  <FormDescription>
                    The main title of your news article.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a URL for the news article image.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your news article content here..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The main content of your news article.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Create Article
            </Button>
          </form>
        </Form>
      </CardContent>
    </div>
  );
}
