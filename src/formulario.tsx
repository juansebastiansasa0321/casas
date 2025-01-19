import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactForm() {
  // Estado para cada campo del formulario
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Maneja el cambio de los valores en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica: asegurarse de que los campos no estén vacíos
    if (!name || !phone || !message) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Mostrar los datos en consola (esto puede ser reemplazado por una API)
    console.log("Formulario enviado:", { name, phone, message });

    // Limpiar el formulario después de enviarlo
    setName("");
    setPhone("");
    setMessage("");
    setSubmitted(true); // Muestra un mensaje de éxito
  };

  return (
    <Container className="containerFormulario">
      <Row>
        <Col xs lg="4" className="formulario">
          {" "}
          <div style={{ padding: "20px" }}>
            <h2>Formulario de Contacto</h2>
            {submitted && (
              <p style={{ color: "green" }}>¡Gracias por contactarnos!</p>
            )}

            <form onSubmit={handleSubmit}>
              {/* Campo de nombre */}
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

              {/* Campo de teléfono (número de celular o WhatsApp) */}
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="phone">Número de celular o WhatsApp:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Tu número"
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

              {/* Campo de mensaje */}
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje"
                  rows={4}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Enviar
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
