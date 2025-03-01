import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router-dom"; // CORREGIDO: Debe ser "react-router-dom"

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        resolve(
          name
            ? products.filter((elemento) => elemento.category === name)
            : products
        );
      } else {
        reject({ message: "error", status: 400 });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <section className="container my-4">
      <h2 className="text-center mb-4">Mis Productos</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 mb-4">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
