import RegisterForm from "./_components/form";

const Register = () => {
  return (
    <main className="h-screen flex justify-center items-center bg-[#1B1A19]">
      <div className="flex flex-col w-[450px] mx-auto p-6 rounded-md sm:p-10 bg-white dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p>Register your account</p>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
