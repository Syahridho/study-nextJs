// import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
// import useSWR from "swr";
import { ProductType } from "../types/Product.type";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();
  // client side
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetcher
  // );

  return (
    <div>
      {/* client side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      {/* Server Side & static */}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

// server Side
// export async function getServerSideProps({ params }: { params: string }) {
//   // fetch data
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();
//   console.log(response);

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// Static
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id,
    },
    revalidate: 10,
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: string }) {
  // fetch data
  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
