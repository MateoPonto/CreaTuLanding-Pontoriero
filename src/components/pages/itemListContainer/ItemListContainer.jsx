import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemListContainer = ({ saludo }) => {
  let nombreDeUsuario = "pepe";
  const saludar = () => {
    console.log(nombreDeUsuario);
  };

  return (
    <section>
      <h2> {saludo} </h2>

      {console.log("hola")}

      <h2>Mis productos</h2>

      <ProductCard title="titulo 1" price="precio 1" />
      <ProductCard title="titulo 2" price="precio 2" />
      <ProductCard title="titulo 3" price="precio 3" />
    </section>
  );
};

frameElement  
