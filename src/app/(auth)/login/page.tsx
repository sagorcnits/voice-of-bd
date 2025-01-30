import LoginForm from "./_components/form";

const Login = () => {
  return (
    <main className="h-screen flex justify-center items-center bg-[#0c0c0c] ">
      <div className="flex flex-col w-[450px] mx-auto p-6 rounded-md sm:p-10  bg-white dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
