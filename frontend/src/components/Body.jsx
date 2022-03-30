import { Card, Button } from "react-bootstrap";
import Girl from "./img_girl.jpg"
const Body = () => {
  return (<div>
  <h1>Hello world</h1>
  <img src={Girl} alt="Girl in a jacket" width="500" height="600"></img>

<Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

  </div>);
};

export default Body;
