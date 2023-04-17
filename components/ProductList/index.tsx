import { ProductsProps } from "@/pages/products";
import Link from "next/link";
import Product from "../Product";
import { Wrapper } from "./styles";

export default function ProductList({ products }: ProductsProps) {
  return (
    <Wrapper>
      {products.map(({ id, title, description, price }) => (
        <Link key={id} href={`http://localhost:3000/products/${id}`}>
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
          />
        </Link>
      ))}
    </Wrapper>
  );
}
