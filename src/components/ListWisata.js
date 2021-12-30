import {Card} from "react-bootstrap"

function ListWisata() {
  return (
    <div>
      <Card style={{ width: "18rem", borderRadius: "10px"}}>
        <Card.Img 
        style={{borderRadius: "10px 10px 0px 0px"}}
        variant="top" src="https://i.ibb.co/ck77bkD/Dalam-Loka.jpg" />
        <Card.Body>
          <button className="btnName">Istana Dalam Loka</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListWisata;
