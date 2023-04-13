// import Product from "@/components/Product";
// import { useRouter } from "next/router";

import Product from "@/components/Product";

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const products = await res.json();

  const paths = products.map((item: any) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: any }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 100,
  };
}

export default function ProductPage(props: any) {
  const product = props.products;
  return (
    <div>
      <Product
        id={product?.id}
        title={product?.title}
        description={product?.description}
        price={product?.price}
      />
    </div>
  );
}
