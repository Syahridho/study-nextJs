import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { data }: any = useSession();
  console.log(data);
  return (
    <div className={styles.navbar}>
      <h1 className="big">Navbar</h1>
      <div>
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
