import {Accordion, Card, Button} from 'react-bootstrap'
import UO from "./Logo_of_UO.svg.png"
import Flag from "./logo_of_TDK.png"
const Body = () => {

  return (<div>
<h1>Tour de kosová</h1>
<Card className="text-center">
  <Card.Header>Mapa</Card.Header>
  <Card.Body>
    <Card.Title>Tour de Kosova</Card.Title>
    <Card.Text>
      Níže si prohlédněte obě trasy závodu
    </Card.Text>
    <center><img src={Flag} class="center" alt="Tour de Kosova" width="500" height="300" ></img></center>
    <Button variant="primary" a href="https://frame.mapy.cz/s/botonacucu">Trasa A</Button>
    <Button variant="primary" a href="https://frame.mapy.cz/s/desucucogo">Trasa B</Button>
  </Card.Body>
</Card>


<Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>O závodu</Accordion.Header>
    <Accordion.Body>
    Obě trasy závodu vás provedou skrze malebnou rekreační oblast Kosová. Po cestě narazíte na několik přírodních rybníčků.
    Závod bude měřen profesionální časomírou. Každý závodník na místě obdrží čip. 
    Zázemí závodu poskytuje areál letního koupaliště v Moravských Budějovicích, kam budou mít všichni závodníci i jejich doprovod vstup zdarma. 
    Na koupališti můžete využít bazény, sportoviště, stánky s občerstvením, šatny, sprchy i toalety.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Pravidla závodu</Accordion.Header>
    <Accordion.Body>
    Všichni přihlášení startují na vlastní nebezpečí včetně posouzení připravenosti na závod.
    Pro závod je povoleno trekingové a horské kolo dle vlastního uvážení (elektrokola jsou zakázána).
    Závodník musí být v každém případě vybaven přilbou, kterou musí mít nasazenou po celou dobu závodu.
    Trasa vede i po veřejných komunikacích za plného provozu. Účastníci jsou povinni dbát pravidel silničního provozu, pokynů PČR a pořadatelů.
    Závodu se může zúčastnit každý, kdo dosáhl věku 15 let (závodníci mladší 18 let přinesou v den závodu POTVRZENÍ ZÁKONNÉHO ZÁSTUPCE, že se mohou zúčastnit závodu).
    Každý závodník je povinen ctít ETICKÝ KODEX ZÁVODU. Řídíme se heslem „Není důležité vyhrát, ale zúčastnit se."
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Card className="text-center">
  <Card.Header>Sponzoři</Card.Header>
  <Card.Body>
    <Card.Title>Seznam sponzorů</Card.Title>
    <Card.Text>
      Vděčnost patří našim partnerům
    </Card.Text>
    <center><img src={UO} class="center" alt="Tour de Kosovo" width="150" height="150" ></img></center>
    <Button variant="primary" a href="https://www.unob.cz/Stranky/default.aspx"> Oficiální stránky partnera</Button>
    <Card.Title>Sponzoři dlouhodobě spolupracující s UO</Card.Title>
    <Button variant="primary" a href="https://miro.medium.com/max/1280/1*BMdNGcek6kqR5J5pwjQwAw.png" target="blank">NUKIB</Button>
    <Button variant="primary" a href="http://thumbpress.com/wp-content/uploads/2012/02/Hackers.jpg" target="blank">VeKySIO</Button>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
</div>);
};
export default Body;