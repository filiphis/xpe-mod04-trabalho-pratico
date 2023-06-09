import ProductList from "@/components/ProductList";
import { ProductProps } from "@/components/Product";
import Title from "@/components/Title";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type ProductsProps = {
  products: ProductProps[];
};

async function getProducts() {
  const res = await axios.get("https://fakestoreapi.com/products?limit=15");
  const products = res.data;

  return products;
}

export async function getStaticProps() {
  const products = await getProducts();

  return { props: { products } };
}

// export async function getStaticPaths() {}

export default function Products({ products: initialProducts }: ProductsProps) {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: initialProducts,
    staleTime: 1000 * 60,
  });

  return (
    <div>
      <Title>Products</Title>

      <ProductList products={products as ProductProps[]} />
    </div>
  );
}
