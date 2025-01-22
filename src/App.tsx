import "./App.css";
import MenuNavBar from "./menu";
import DarkVariantExample from "./Carrousel";
import ContactForm from "./formulario";

import "./carrousel.css";
import "./formulario.css";
import "./Boton.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <MenuNavBar />
      <Container fluid style={{ padding: "0px" }}>
        <div className="contenedorLanding">
          <DarkVariantExample />
          <ContactForm />
        </div>
      </Container>
    </>
  );
}

export default App;
