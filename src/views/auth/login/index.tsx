import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <h1 className="font-semibold text-2xl">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-96">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            className="border p-1.5 rounded"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="***"
            className="border p-1.5 rounded"
          />
          <button
            type="submit"
            className="bg-slate-800 text-white py-1.5 rounded shadow"
          >
            {isLoading ? "Loading.." : "Login"}
          </button>
        </form>
        <button
          className="mt-3 border-2 border-slate-800 w-full py-1.5 rounded shadow-sm"
          onClick={() => signIn("google", { callbackUrl, redirect: false })}
        >
          Sign In With Google
        </button>
      </div>
      <p className="mt-8">
        Dont have an account?{" "}
        <Link href={"/auth/register"} className="underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
