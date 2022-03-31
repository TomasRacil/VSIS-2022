<<<<<<< HEAD
import {Accordion} from 'react-bootstrap'
const Body = () => {

  return (<div>
<h1>Tour de kosova</h1>
<Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Nějaky nadpis</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Nějaky text</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>)
=======
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
>>>>>>> f322e2ce19bd9e8f07be96deb7f1b4420a763cf2
};

export default Body;
