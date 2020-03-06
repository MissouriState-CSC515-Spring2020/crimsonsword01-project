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

//import Movie Pictures
import howlCastle from "./photos/movies/howlsmovingcastle.jpg";
import boyBeast from "./photos/movies/spirited-away.jpg";
import spiritAway from "./photos/movies/the-boy-and-the-beast.jpg";
import treasurePlanet from "./photos/movies/treasure_planet.jpg";
import atlantis from "./photos/movies/atlantis_lost_empire-3.jpg";
import girlLeapt from "./photos/movies/girl-who-leapt-through-time-poster.jpg";
import bigHero from "./photos/movies/big_hero_6.jpg";
import walle from "./photos/movies/walle-3.jpg";
import silentVoice from "./photos/movies/a-silent-voice-poster.jpg";
//import TV Show Pictures
import avatar from "./photos/shows/avatar-the-last-airbender.jpg";
import voltron from "./photos/shows/psycho-pass.jpg";
import psycho from "./photos/shows/voltron-poster.jpg";
import myHero from "./photos/shows/my_hero.jpg";
import ancientMagus from "./photos/shows/The-Ancient-Magus-Bride.jpg";
import noragami from "./photos/shows/noragami.jpg";
import hunterX from "./photos/shows/hunter-x-hunter-2011.jpg";
import kimPossible from "./photos/shows/kim-possible.jpg";
import codeLyoko from "./photos/shows/code_lyoko.jpg";
//import Video Game Pictures
import final15 from "./photos/video_games/final-fantasy-xv-box-art-japan.jpg";
import persona5 from "./photos/video_games/persona-5.jpg";
import kingdom3 from "./photos/video_games/kingdom-hearts-3.jpg";
import oriBlind from "./photos/video_games/or_blind_forest.jpg";
import hollow from "./photos/video_games/hollow_knight.jpg";
import dragonQuest from "./photos/video_games/dragon_quest_XI.jpg";
import fireEmblem from "./photos/video_games/fire_emblem_three_houses.jpg";
import resEvil from "./photos/video_games/resident-evil-2.jpg";
import xenoblade from "./photos/video_games/xenoblade_chronicles.jpg";

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
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={howlCastle} alt="Howls Moving Castle" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={boyBeast} alt="The Boy and the Beast" fluid />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={spiritAway} alt="Spirited Away" fluid />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={avatar} alt="Avatar: The Last Airbender" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={voltron} alt="Voltron Legendary Defenders" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={psycho} alt="Psycho Pass" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={final15} alt="Final Fantasy XV" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={persona5} alt="Persona 5" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={kingdom3} alt="Kingdom Hearts 3" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={treasurePlanet} alt="Treasure Planet" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={atlantis} alt="Atlantis The Lost Empire" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={girlLeapt} alt="The Girl Who Leapt Through Time" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={ancientMagus} alt="The Ancient Magus Bride" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={noragami} alt="Noragami" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={myHero} alt="My Hero Academia" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={oriBlind} alt="Ori and the Blind Forest" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={hollow} alt="Hollow Knight" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={resEvil} alt="Resident Evil 2 Remake" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={bigHero} alt="Big Hero 6" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={walle} alt="Wall-e" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={silentVoice} alt="A Silent Voice" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={hunterX} alt="Hunter X Hunter 2011" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={codeLyoko} alt="Code Lyoko" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={kimPossible} alt="Kim Possible" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={dragonQuest} alt="Dragon Quest XI" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={xenoblade} alt="Xenoblade Chronicles" />
            </a>
          </div>
          <div class="col-xs-3 col-md-4 pic-box justify-content-center">
            <a href="/details">
              <img class="img-fluid" src={fireEmblem} alt="Fire Emblem Three Houses" />
            </a>
          </div>
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
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={howlCastle} alt="Howls Moving Castle" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={boyBeast} alt="The Boy and the Beast" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={spiritAway} alt="Spirited Away" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={treasurePlanet} alt="Treasure Planet" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={atlantis} alt="Atlantis The Lost Empire" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={girlLeapt} alt="The Girl Who Leapt Through Time" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={bigHero} alt="Big Hero 6" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={walle} alt="Wall-e" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={silentVoice} alt="A Silent Voice" />
            </a>
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
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={avatar} alt="Avatar: The Last Airbender" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={voltron} alt="Voltron Legendary Defenders" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={psycho} alt="Psycho Pass" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={ancientMagus} alt="The Ancient Magus Bride" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={noragami} alt="Noragami" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={myHero} alt="My Hero Academia" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={hunterX} alt="Hunter X Hunter 2011" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={codeLyoko} alt="Code Lyoko" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={kimPossible} alt="Kim Possible" />
            </a>
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
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={final15} alt="Final Fantasy XV" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={persona5} alt="Persona 5" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={kingdom3} alt="Kingdom Hearts 3" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={oriBlind} alt="Ori and the Blind Forest" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={hollow} alt="Hollow Knight" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={resEvil} alt="Resident Evil 2 Remake" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={dragonQuest} alt="Dragon Quest XI" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={xenoblade} alt="Xenoblade Chronicles" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <img class="img-fluid" src={fireEmblem} alt="Fire Emblem Three Houses" />
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
      <Container>
        <Row>
          <Col>
            <img src={voltron} alt="Voltron Legendary Defenders"
              style={{ width: "50%", height: "900px", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", align: "center" }} fluid />
            <p>
              Voltron is a show made by Netflix in 2016 and ended in 2018. The show had 8 seasons when it reached its conclusion.
            </p>
          </Col>
        </Row>
      </Container>
    )
  );
}