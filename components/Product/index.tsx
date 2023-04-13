import Link from "next/link";
import { Wrapper } from "./styles";

export type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: string;
};

export default function Product({
  id,
  title,
  description,
  price,
}: ProductProps) {
  return (
    <Link href={`http://localhost:3000/products/${id}`}>
      <Wrapper>
        <h4>{title}</h4>
        <span>{description}</span>
        <span>{price}</span>
      </Wrapper>
    </Link>
  );
}
