import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
  Col,
  Nav,
  Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowExample from './Components/show';
import MovieExample from './Components/movie';
import GameExample from './Components/video_game';
import Details from './Components/details';
import { render } from "@testing-library/react";

export default function App() {
  return (
    <Router>
      <Nav className="navbar navbar-expand-lg navbar-dark navbar-full" >
        <Nav.Link href="/" style={{ color: "black", fontWeight: "bold" }}>
          Photo Gallery
        </Nav.Link>
        <Nav.Link href="/movies" style={{ color: "black", fontWeight: "bold" }} >
          Movies
        </Nav.Link>
        <Nav.Link href="/shows" style={{ color: "black", fontWeight: "bold" }} >
          Shows
        </Nav.Link>
        <Nav.Link href="/video_games" style={{ color: "black", fontWeight: "bold" }} >
          Video Games
        </Nav.Link>
        <Nav.Link href="/details" style={{ color: "black", fontWeight: "bold" }} >
          Details
        </Nav.Link>
      </Nav>
      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/movies">
          <MovieCategory />
        </Route>
        <Route path="/shows">
          <ShowCategory />
        </Route>
        <Route path="/video_games">
          <VideoGameCategory />
        </Route>
        <Route path="/details">
          <DetailCategory />
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
        <div>
          <h1 align="center">Photo Gallery</h1>
        </div>
        <Row>
          <MovieExample />
          <ShowExample />
          <GameExample />
        </Row>
      </Container>
    )
  );
}

function MovieCategory() {
  return (
    (document.title = "Movie Album"),
    (
      <Container>
        <div>
          <h1 align="center">Movies</h1>
        </div>
        <Row>
          <Col xs={3} md={4} lg={4}>
            <MovieExample />
          </Col>
        </Row>
      </Container>
    )
  );
}

function ShowCategory() {
  return (
    (document.title = "TV Show Album"),
    (
      <Container>
        <div>
          <h1 align="center">Tv Shows</h1>
        </div>
        <Row>
          <Col xs={3} md={4} lg={4}>
            <ShowExample />
          </Col>
        </Row>
      </Container>
    )
  );
}

function VideoGameCategory() {
  return (
    (document.title = "Video Game Album"),
    (
      <Container>
        <div>
          <h1 align="center">Video Games</h1>
        </div>
        <Row>
          <Col xs={3} md={4} lg={4}>
            <GameExample />
          </Col>
        </Row>
      </Container>
    )
  );
}

// Share: https://youtu.be/bNNaZdtGZVc
// URL: https://www.youtube.com/watch?v=bNNaZdtGZVc
function DetailCategory() {
  render()(
    (document.title = "Photo Details"),
    (
      <Container>
        <Row>
          <Col xs={3} md={4} lg={4}>
            <Details />
          </Col>
        </Row>
      </Container>
    )
  );
}