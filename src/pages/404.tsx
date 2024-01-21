import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.erorr}>
      <img src="/notFound.png" alt="404" className={styles.erorr__image} />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
};

export default Custom404;
