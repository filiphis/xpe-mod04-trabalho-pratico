// import Product from "@/components/Product";
// import { useRouter } from "next/router";

import Product from "@/components/Product";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

async function getProduct(id: any) {
  return await fetch(`https://fakestoreapi.com/products/${id}`);
}

export async function getStaticProps({ params }: { params: any }) {
  const res = await getProduct(params.id);
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 100,
  };
}

export default function ProductPage(props: any) {
  const testeQuery = useQuery(
    ["teste"],
    () => {
      return axios.get("https://fakestoreapi.com/products");
    },
    {
      // Tempo em (ms) que determina quando será feito o proximo refresh
      staleTime: 10000,
      // Define se será feito request quando a janela for focada.
      refetchOnWindowFocus: true,
      // Determina um tempo em (ms) que será feito um refresh nessa rota. OBS: NÃO sobrepõe o staleTime
      refetchInterval: false, //1000 * 10
      // Caso o cliente perca a conexão, irá realizar um request assim que reconectar.
      refetchOnReconnect: true,
      // Informa se é necessário realizar request's quando o cliente não está com foco no site. (Segue o tempo informado em refetchInterval )
      refetchIntervalInBackground: false,
      // More info latter...
      refetchOnMount: true,
    }
  );
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
