import { ProductsProps } from "@/pages/products";
import Product from "../Product";
import { Wrapper } from "./styles";

export default function ProductList({ products }: ProductsProps) {
  return (
    <Wrapper>
      {products.map(({ id, title, description, price }) => (
        <Product
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </Wrapper>
  );
}
