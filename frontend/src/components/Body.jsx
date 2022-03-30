import { Card, Button} from "react-bootstrap";
import UO from "./Logo_of_UO.svg.png"
import Flag from "./Flag_of_Kosovo.svg.png"
const Body = () => {
  return (<div>
  <h1>Hello world</h1>

<Card className="text-center">
  <Card.Header>Mapa</Card.Header>
  <Card.Body>
    <Card.Title>Tour de Kosovo</Card.Title>
    <Card.Text>
      Zde si prohlédněte mapku celého závodu
    </Card.Text>
    <center><img src={Flag} class="center" alt="Tour de Kosovo" width="150" height="150" ></img></center>
    <Button variant="primary" a href="https://www.google.com/maps/d/viewer?ie=UTF8&hl=en&msa=0&ll=42.65012200000002%2C20.742188&spn=3.232133%2C3.713379&z=6&source=embed&mid=1QA-ent10r6q_RRp7vKXTOKzrlV8"> Mapa</Button>
  </Card.Body>
</Card>

<Card className="text-center">
  <Card.Header>Sponzoři</Card.Header>
  <Card.Body>
    <Card.Title>Seznam sponzorů</Card.Title>
    <Card.Text>
      Vděčnost patří našim partnerům
    </Card.Text>
    <center><img src={UO} class="center" alt="Tour de Kosovo" width="150" height="150" ></img></center>
    <Button variant="primary" a href="https://www.unob.cz/Stranky/default.aspx"> Oficiální stránky partnera</Button>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>

  </div>);
};

export default Body;
