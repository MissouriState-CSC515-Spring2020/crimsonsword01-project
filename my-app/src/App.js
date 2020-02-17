import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
  Col,
  Nav,
  Image,
  Row,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Nav
        className="navbar navbar-expand-lg navbar-dark navbar-full"
      >
        <Nav.Link href="/" style={{ color: "black", fontWeight: "bold" }}>
          Photo Gallery
        </Nav.Link>

        <Nav.Link
          href="/categories/movies"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Movies
        </Nav.Link>

        <Nav.Link
          href="/categories/shows"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Shows
        </Nav.Link>

        <Nav.Link
          href="/categories/video_games"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Video Games
        </Nav.Link>
      </Nav>

      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/categories/movies">
          <MovieCategory />
        </Route>
        <Route path="/categories/shows">
          <ShowCategory />
        </Route>
        <Route path="/categories/video_games">
          <VideoGameCategory />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

function Gallery() {
  return (
    (document.title = "Photo Gallery"),
    (
      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/58/ee/8c/58ee8c4bac9b5948b3cd132765797968.png"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/03/Ansin_BeautyandtheBeast_REG_press.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://www.insidethemagic.net/wp-content/uploads/2017/03/Mondo-Aladdin.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr02/7/20/enhanced-2000-1394241139-5.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://artfiles.alphacoders.com/730/7300.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://i5.walmartimages.com/asr/535b20a0-c3fa-4f30-a90c-6b38e9b5b0bd_1.f38213d9740c5093333806aa43ad4dfd.jpeg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/68/02/a6/6802a6384cb0175c89487cf0adfc54f7.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://www1.pictures.livingly.com/mp/r4yMiu1q-YUl.jpg"
                thumbnail
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}

function MovieCategory() {
  return (
    (document.title = "Album"),
    (
      <Container>
        <div>
          <h1 align="center">Movies</h1>
        </div>

        <Row>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/a-silent-voice-poster.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/studio-ghibli/spirited-away.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/the-boy-and-the-beast.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/walt-disney-pictures/treasure_planet.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/girl-who-leapt-through-time-poster.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/52127948e4b06d5f9d345a0f/1376943030746-UWKC9JG5TRU4UKUFCGI2/ke17ZwdGBToddI8pDm48kORGQBXhNGZU2AZjkDf_15xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYWIZjFqIhVHL5wdbUEf-_jyvmnXjmyRpH4uIQyuaMfet89qDT7zPIXm4DAzvfSgo/howlsmovingcastle.jpg?format=500w"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/walt-disney-pictures/atlantis_lost_empire-3.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/pixar-disney/walle-3.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}

function ShowCategory() {
  return (
    (document.title = "Album"),
    (
      <Container>
        <div>
          <h1 align="center">Tv Shows</h1>
        </div>

        <Row>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/74852/tvposter/avatar-the-last-airbender-590f3cebc05ad.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://media.comicbook.com/2016/03/voltron-poster-175958.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/262090/tvposter/psycho-pass-54a8915bbb9a4.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.shopify.com/s/files/1/0798/5303/products/The-Ancient-Magus_-Bride_grande.jpg?v=1510174686"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/78259/tvposter/kim-possible-54c8749f09db0.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.shopify.com/s/files/1/0747/3829/products/mL0215_grande.jpg?v=1512225771"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://image.tmdb.org/t/p/original/ac4qpPgSbK5kf5yhQHNmtzJdfCF.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/252322/tvposter/hunter-x-hunter-2011-56c9b2ebdf747.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://img.codelyoko.fr/galeries/poster/promo_cl_99.jpg"
                style={{ width: "100%", height: "500px" }}
                fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}

function VideoGameCategory() {
  return (
    (document.title = "Album"),
    (
      <Container>
        <div>
          <h1 align="center">Album Title</h1>
        </div>

        <Row>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/58/ee/8c/58ee8c4bac9b5948b3cd132765797968.png"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/03/Ansin_BeautyandtheBeast_REG_press.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://www.insidethemagic.net/wp-content/uploads/2017/03/Mondo-Aladdin.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr02/7/20/enhanced-2000-1394241139-5.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://artfiles.alphacoders.com/730/7300.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://i5.walmartimages.com/asr/535b20a0-c3fa-4f30-a90c-6b38e9b5b0bd_1.f38213d9740c5093333806aa43ad4dfd.jpeg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/68/02/a6/6802a6384cb0175c89487cf0adfc54f7.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://www1.pictures.livingly.com/mp/r4yMiu1q-YUl.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
                fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}

function Details() {
  return (
    (document.title = "Photo Details"),
    (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www1.pictures.livingly.com/mp/r4yMiu1q-YUl.jpg"
        />
        <Card.Body>
          <Card.Title>Cinderella</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>1950</ListGroupItem>
          <ListGroupItem>More Picture Details</ListGroupItem>
          <ListGroupItem>More Picture Details</ListGroupItem>
        </ListGroup>
      </Card>
    )
  );
}