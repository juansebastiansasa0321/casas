import "./App.css";
import MenuNavBar from "./menu";
import DarkVariantExample from "./Carrousel";
import ContactForm from "./formulario";
import "./carrousel.css"; // O la ruta donde guardes tu archivo CSS
import "./formulario.css";

function App() {
  return (
    <>
      <MenuNavBar />
      <DarkVariantExample />
      <ContactForm />
    </>
  );
}

export default App;
