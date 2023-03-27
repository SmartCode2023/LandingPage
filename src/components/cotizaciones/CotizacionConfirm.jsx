import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CotizacionConfirm = ({ cotizacion }) => {
  return (
    <div className="cotizacion-confirm-container">
      <h2 className="text-center">Cotización #XXXXXXXX</h2>
      <Container className="mt-2">
        <strong>Fecha de envío: </strong> {cotizacion.fechaViaje}
      </Container>
      <Container className="mt-2">
        <strong>Dirección de origen: </strong> {cotizacion.dirOrigen}
      </Container>
      <Container className="mt-2">
        <strong>Dirección de entrega: </strong> {cotizacion.dirEntrega}
      </Container>
      <Container className="mt-2">
        <strong>Peso aproximado de la carga: </strong> {cotizacion.peso}
      </Container>
      <Container className="mt-2">
        <strong>Condiciones de climatización: </strong> {cotizacion.condiciones}
      </Container>
      <Container className="mt-2">
        <strong>Servicio de carga ofrecido por: </strong> {cotizacion.isCarga}
      </Container>
      <Container className="mt-2">
        <strong>Tipo de carga: </strong> {cotizacion.tipo}
      </Container>
      <Container className="mt-2">
        <strong>Dimensiones de la carga: </strong> Ancho: {cotizacion.ancho}{" "}
        Largo: {cotizacion.largo} Alto: {cotizacion.alto}
      </Container>
      <Container className="text-center mt-4">
        <h3 className="cotizacion-confirm-title">Costos</h3>
        <Container className="mt-2">
          <strong>Subtotal: </strong> XXXXXX
        </Container>
        <Container className="mt-2">
          <strong>Iva: </strong> XXXXXX
        </Container>
        <Container className="mt-2">
          <strong>Total: </strong> XXXXXX
        </Container>
        <Button className="mt-4 w-50 cotizacion-confirm-button">
          Realizar Envío
        </Button>
      </Container>
    </div>
  );
};

export default CotizacionConfirm;
