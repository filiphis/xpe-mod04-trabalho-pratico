import { Wrapper } from "./styles";
import Link from "next/link";

export type ProductProps = {
  id: number;
  description: string;
  title: string;
  price: string;
};

export default function Product({
  id,
  title,
  description,
  price,
}: ProductProps) {
  return (
    // <Link
    //   // style={{ display: "inline-block" }}
    //   href={`http://localhost:3000/products/${id}`}
    // >
    <Wrapper>
      <div>
        <h4>{title}</h4>
        <span>{description}</span>
        <span>{price}</span>
      </div>
    </Wrapper>
    // </Link>
  );
}
