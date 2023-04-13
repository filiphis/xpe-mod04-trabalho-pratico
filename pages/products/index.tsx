import ProductList from "@/components/ProductList";
import { ProductProps } from "@/components/Product";
import Title from "@/components/Title";

export type ProductsProps = {
  products: ProductProps[];
};

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=15");
  const products = await res.json();

  return {
    props: {
      products,
    },
    // revalidate: 10,
  };
}

// export async function getStaticPaths() {}

export default function Products({ products }: ProductsProps) {
  return (
    <div>
      <Title>Products</Title>

      <ProductList products={products} />

      <div></div>
    </div>
  );
}
