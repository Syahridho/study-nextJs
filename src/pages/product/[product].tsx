import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detail Product</h1>
      {/* id ini sesuai dengan nama file, jika nama file [id].tsx maka query.id */}
      <p>Product : {query.product}</p>
    </div>
  );
};

export default DetailProductPage;
