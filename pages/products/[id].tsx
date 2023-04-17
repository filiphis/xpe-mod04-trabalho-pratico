// import Product from "@/components/Product";
// import { useRouter } from "next/router";

import Product from "@/components/Product";
import { ProductProps } from "@/components/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getProducts() {
  const res = await axios.get("https://fakestoreapi.com/products?limit=10");
  const products = res.data;
  return products;
}

export async function getStaticPaths() {
  const products = await getProducts();
  {
    console.log("servidor foi chamado!!!");
  }

  const paths = products.map((item: any) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return { paths, fallback: true };
}

async function getProduct(id: string) {
  const res = await axios(`https://fakestoreapi.com/products/${id}`);
  const product = res.data;
  return product;
}

export async function getStaticProps({ params }: { params: any }) {
  if (params) {
    const product = await getProduct(params.id);
    const date = new Date();

    return {
      props: {
        product,
        lastRender: date.getSeconds(),
      },
      revalidate: 15,
    };
  }
}

export default function ProductPage({ product, lastRender }: any) {
  // const toStringQueryKey = ;

  const { data: qProduct } = useQuery({
    queryKey: [`products/${product.id}`],
    queryFn: () => getProduct(product.id),
    staleTime: 1000 * 60,
  });
  // const testeQuery = useQuery(
  //   ["teste"],
  //   () => {
  //     return axios.get("https://fakestoreapi.com/products");
  //   },
  //   {
  //     // Tempo em (ms) que determina um "bloqueio" de tempo de quando será feito o proximo refresh
  //     // staleTime default: 0
  //     staleTime: 0,
  //     // Define se será feito request quando a janela for focada.
  //     refetchOnWindowFocus: true,
  //     // Determina um tempo em (ms) que será feito um refresh nessa rota. OBS: Estudar mais sobre o funcionamento do staleTime e refetchInterval juntos.
  //     refetchInterval: false, //1000 * 10
  //     // Caso o cliente perca a conexão, irá realizar um request assim que reconectar.
  //     refetchOnReconnect: true,
  //     // Informa se é necessário realizar request's quando o cliente não está com foco no site. (Segue o tempo informado em refetchInterval )
  //     refetchIntervalInBackground: false,
  //     // Define se ocorrera um request nos dados do componente depois que ele for montado. Por exemplo, ao mostrar/ocultar um component.
  //     refetchOnMount: true,
  //     // Define o tempo que os dados do component ficarão em cache. Caso tenha dado em cache irá mostrar os dados em cache enquanto faz outros request dos dados atualizados! cacheTime é utilizado em conjunto com o refetchOnMount.
  //     // cacheTime default: 5 minutos
  //     cacheTime: 1000 * 60 * 5,
  //   }
  // );

  return (
    <div>
      <h1>{lastRender}</h1>
      {qProduct ? (
        <Product
          id={qProduct?.id}
          title={qProduct?.title}
          description={qProduct?.description}
          price={qProduct?.price}
        />
      ) : null}
    </div>
  );
}
