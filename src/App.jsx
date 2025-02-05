import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const DescripcionSaludo = "Hola, Buenos días!";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={DescripcionSaludo} />
      <Footer />
    </div>
  );
}

export default App;
