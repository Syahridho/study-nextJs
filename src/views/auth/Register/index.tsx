import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <h1 className="font-semibold text-2xl">Register</h1>
      {error && <p className="text-ref-500">{error}</p>}
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
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="asep"
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
            {isLoading ? "Loading.." : "Register"}
          </button>
        </form>
      </div>
      <p className="mt-8">
        Have an account?{" "}
        <Link href={"/auth/login"} className="underline">
          Sign in here
        </Link>
      </p>
    </div>
  );
};

export default RegisterView;
