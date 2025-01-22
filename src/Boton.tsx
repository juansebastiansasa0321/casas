import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";

function BotonFormulario() {
  const [show, setShow] = useState(false);

  return (
    <Container className="contenedorBoton">
      <Button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        className="boton"
        variant="primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "mostrar Información" : "cerrar"}
      </Button>
    </Container>
  );
}

export default BotonFormulario;
