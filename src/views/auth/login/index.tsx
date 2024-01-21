import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.container}>
      <h1 className="font-bold my-12 text-3xl">Login Page</h1>
      <button className={styles.button} onClick={() => handleLogin()}>
        ini login
      </button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "4px" }}>
        Belum punya akun? register
        <Link href={"/auth/register"}> disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
