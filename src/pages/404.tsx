import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={styles.erorr}>
      <Image
        src="/notFound.png"
        alt="404"
        width={600}
        height={600}
        className={styles.erorr__image}
      />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
};

export default Custom404;
