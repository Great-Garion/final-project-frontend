import { Card } from "react-bootstrap";

function Store() {
  return (
    <div>
      <Card style={{ width: "18rem", borderRadius: "10px" }}>
        <Card.Img
          style={{borderRadius: "10px 10px 0px 0px"}}
          variant="top"
          src="https://ntbmall.com/images/product/afe1e0df-2fec-44a3-ab05-8b239d8ca09e/afe1e0df-2fec-44a3-ab05-8b239d8ca09e-12021-08-10%2021:14:11.png"
        />
        <Card.Text className="judul">Permen Susu Kuda Khas Sumbawa</Card.Text>
      </Card>
    </div>
  );
}

export default Store;
