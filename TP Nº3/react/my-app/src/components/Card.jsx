import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/logo192.png" />
      <Card.Body>
        <Card.Title>Repuesto: .....</Card.Title>
        <Card.Text>
          Descripcion: Aca iria la descripcion....
        </Card.Text>
        <Card.Text>
          Precio: Aca iria la precio....
        </Card.Text>
        <Card.Text>
          SKU: Aca iria el codigo....
        </Card.Text>
        <Card.Text>
          Cantidad: Aca iria la cantidad....
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
