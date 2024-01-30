import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Script from "next/script";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <h1 className="big" id="title"></h1>
      <Script id="script-title" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'Navbar'`}
      </Script>
      <div className="flex items-center">
        {data?.user?.image ? (
          <Image
            className="w-8 h-8 rounded-full me-2"
            src={data.user.image}
            alt={data.user.fullname}
            width={100}
            height={100}
          />
        ) : null}
        {data && data.user.fullname}
        {data ? (
          <button
            className="text-black bg-white px-2 py-1 rounded ms-4"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="text-black bg-white px-2 py-1 rounded  ms-4"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
