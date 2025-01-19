import "./App.css";
import MenuNavBar from "./menu";
import DarkVariantExample from "./Carrousel";
import ContactForm from "./formulario";
import "./carrousel.css";
import "./formulario.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
