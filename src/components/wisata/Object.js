import { useHistory } from "react-router";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

import "../all.css";

function Object() {
  const history = useHistory();

  return (
    <div className="boxWisata">
      <Container>
        <Row style={{ marginTop: "20px" }} xs={1} md={2} className="g-4">
          <Col>
            <Card
              className="cardWisata"
              style={{
                borderRadius: "30px 30px 30px 30px",
                paddingBottom: "10px",
                height: "41rem",
                alignItems: "center",
              }}
            >
              <Card.Img
                style={{ borderRadius: "30px 30px 0px 0px" }}
                variant="top"
                src="https://i.ibb.co/ck77bkD/Dalam-Loka.jpg"
              />
              <Card.Body>
                <Card.Title>Sumbawa</Card.Title>
                <Card.Text>
                  Tana Samawa atau yang sekarang disebut Kabupaten Sumbawa,
                  Wilayah Kabupaten Sumbawa juga mencakup sejumlah pulau-pulau
                  di sebelah utara Pulau Sumbawa, termasuk Pulau Moyo (pulau
                  terbesar), Pulau Medang, Pulau Panjang, Pulau Liang, Pulau
                  Ngali dan Pulau Rakit. Dimana pulau atau gili ini sudah tidak
                  diragukan lagi keindahan alamnya, membuatnya menjadi target
                  utama bagi wisatawan asing, khususnya menjadi tempat favorit
                  bagi bangsawan ingris, oleh karena itu kami menyuguhkan
                  beberapa tempat wisata yang bisa anda kunjungi.
                </Card.Text>
              </Card.Body>
              <button
                className="btnName"
                onClick={() => history.push("/wisata?kabupaten=Sumbawa")}
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "20px",
                  width: "150px",
                }}
              >
                <b>More Detail</b>
              </button>
            </Card>
          </Col>
          <Col>
            <Card
              className="cardWisata"
              style={{
                borderRadius: "30px 30px 30px 30px",
                paddingBottom: "10px",
                height: "41rem",
                alignItems: "center",
              }}
            >
              <Card.Img
                style={{ borderRadius: "30px 30px 0px 0px" }}
                variant="top"
                src="https://i.ibb.co/NNstGTn/Masjid-Agung-Darussalam.jpg"
              />
              <Card.Body>
                <Card.Title>Sumbawa Barat</Card.Title>
                <Card.Text>
                  Kabupaten Sumbawa Barat, adalah sebuah kabupaten di provinsi
                  Nusa Tenggara Barat, Indonesia. Kabupaten terletak di bagian
                  barat Pulau Sumbawa, berbatasan dengan Laut Flores di utara,
                  Kabupaten Sumbawa di timur, Samudera Hindia di selatan serta
                  Selat Alas di barat. Secara geografis, sumbawa barat memiliki
                  banyak perbukitan dan pesisir pantai yang Panjang, membuat
                  para pelancong merasa dimanjakan oleh kekayaan alamnya asri
                  dan belum terjamah, berikut beberapa tempat wisata yang bisa
                  anda mikmati.
                </Card.Text>
              </Card.Body>
              <button
                className="btnName"
                onClick={() => history.push("/wisata?kabupaten=Sumbawa+Barat")}
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "20px",
                  width: "150px",
                }}
              >
                <b>More Detail</b>
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Object;
