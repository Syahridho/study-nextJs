import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Shop Product</h1>
      {/* id ini sesuai dengan nama file, jika nama file [id].tsx maka query.id */}
      <p>
        Shop : {query.slug && query.slug[0]} - {query.slug && query.slug[1]}
      </p>
    </div>
  );
};

export default ShopPage;
