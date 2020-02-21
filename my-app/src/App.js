import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
  Col,
  Nav,
  Image,
  Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Nav className="navbar navbar-expand-lg navbar-dark navbar-full" >
        <Nav.Link href="/" style={{ color: "white", fontWeight: "bold" }}>
          Photo Gallery
        </Nav.Link>

        <Nav.Link href="/movies" style={{ color: "white", fontWeight: "bold" }} >
          Movies
        </Nav.Link>

        <Nav.Link href="/shows" style={{ color: "white", fontWeight: "bold" }} >
          Shows
        </Nav.Link>

        <Nav.Link href="/video_games" style={{ color: "white", fontWeight: "bold" }} >
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
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/52127948e4b06d5f9d345a0f/1376943030746-UWKC9JG5TRU4UKUFCGI2/ke17ZwdGBToddI8pDm48kORGQBXhNGZU2AZjkDf_15xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYWIZjFqIhVHL5wdbUEf-_jyvmnXjmyRpH4uIQyuaMfet89qDT7zPIXm4DAzvfSgo/howlsmovingcastle.jpg?format=500w"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/the-boy-and-the-beast.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/studio-ghibli/spirited-away.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/74852/tvposter/avatar-the-last-airbender-590f3cebc05ad.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://media.comicbook.com/2016/03/voltron-poster-175958.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/262090/tvposter/psycho-pass-54a8915bbb9a4.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn1-www.playstationlifestyle.net/assets/uploads/2016/07/final-fantasy-xv-box-art-japan.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://gearnuke.com/wp-content/uploads/2016/06/persona-5-2.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://images.pushsquare.com/812e2fe3f9c33/kingdom-hearts-3-iii-ps4-playstation-4-1.original.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/walt-disney-pictures/treasure_planet.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/walt-disney-pictures/atlantis_lost_empire-3.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/girl-who-leapt-through-time-poster.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.shopify.com/s/files/1/0798/5303/products/The-Ancient-Magus_-Bride_grande.jpg?v=1510174686"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://image.tmdb.org/t/p/original/ac4qpPgSbK5kf5yhQHNmtzJdfCF.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.shopify.com/s/files/1/0747/3829/products/mL0215_grande.jpg?v=1512225771"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95a93d8c-f701-4cd4-9cf9-ffc64bf770a0/d9uxhm2-2a0a3648-de03-4558-8d6d-e02fc0c25584.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85NWE5M2Q4Yy1mNzAxLTRjZDQtOWNmOS1mZmM2NGJmNzcwYTAvZDl1eGhtMi0yYTBhMzY0OC1kZTAzLTQ1NTgtOGQ2ZC1lMDJmYzBjMjU1ODQuanBnIn1dXX0.xMLg1TcBSzsQvuTzPX04kZh1Gr5xNLR2MEyWTztMDoQ"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://media.indiedb.com/images/games/1/37/36427/hollow_knight_boxart_idb.png"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://media.playstation.com/is/image/SCEA/resident-evil-2-deluxe-edition-box-art-01-ps4-us-12dec18?$native_nt$"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/pixar-disney/walle-3.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/a-silent-voice-poster.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/252322/tvposter/hunter-x-hunter-2011-56c9b2ebdf747.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://img.codelyoko.fr/galeries/poster/promo_cl_99.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/78259/tvposter/kim-possible-54c8749f09db0.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://gamespot1.cbsistatic.com/uploads/scale_medium/box/2/4/6/8/448607-582468.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://sickr.files.wordpress.com/2011/12/xenoblade_chronicles_us_box_art.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://sickr.files.wordpress.com/2019/03/fire_emblem_three_houses_north_american_box_art.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
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
    (document.title = "Movie Album"),
    (
      <Container>
        <div>
          <h1 align="center">Movies</h1>
        </div>

        <Row>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/52127948e4b06d5f9d345a0f/1376943030746-UWKC9JG5TRU4UKUFCGI2/ke17ZwdGBToddI8pDm48kORGQBXhNGZU2AZjkDf_15xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYWIZjFqIhVHL5wdbUEf-_jyvmnXjmyRpH4uIQyuaMfet89qDT7zPIXm4DAzvfSgo/howlsmovingcastle.jpg?format=500w"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/the-boy-and-the-beast.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/studio-ghibli/spirited-away.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/walt-disney-pictures/treasure_planet.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/walt-disney-pictures/atlantis_lost_empire-3.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/girl-who-leapt-through-time-poster.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/pixar-disney/walle-3.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.traileraddict.com/content/madman/a-silent-voice-poster.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
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
    (document.title = "TV Show Album"),
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
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://media.comicbook.com/2016/03/voltron-poster-175958.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/262090/tvposter/psycho-pass-54a8915bbb9a4.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.shopify.com/s/files/1/0798/5303/products/The-Ancient-Magus_-Bride_grande.jpg?v=1510174686"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://image.tmdb.org/t/p/original/ac4qpPgSbK5kf5yhQHNmtzJdfCF.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn.shopify.com/s/files/1/0747/3829/products/mL0215_grande.jpg?v=1512225771"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/252322/tvposter/hunter-x-hunter-2011-56c9b2ebdf747.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://img.codelyoko.fr/galeries/poster/promo_cl_99.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://fanart.tv/fanart/tv/78259/tvposter/kim-possible-54c8749f09db0.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
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
    (document.title = "Video Game Album"),
    (
      <Container>
        <div>
          <h1 align="center">Video Games</h1>
        </div>

        <Row>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://cdn1-www.playstationlifestyle.net/assets/uploads/2016/07/final-fantasy-xv-box-art-japan.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://gearnuke.com/wp-content/uploads/2016/06/persona-5-2.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="http://images.pushsquare.com/812e2fe3f9c33/kingdom-hearts-3-iii-ps4-playstation-4-1.original.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://gamespot1.cbsistatic.com/uploads/scale_medium/box/2/4/6/8/448607-582468.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95a93d8c-f701-4cd4-9cf9-ffc64bf770a0/d9uxhm2-2a0a3648-de03-4558-8d6d-e02fc0c25584.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85NWE5M2Q4Yy1mNzAxLTRjZDQtOWNmOS1mZmM2NGJmNzcwYTAvZDl1eGhtMi0yYTBhMzY0OC1kZTAzLTQ1NTgtOGQ2ZC1lMDJmYzBjMjU1ODQuanBnIn1dXX0.xMLg1TcBSzsQvuTzPX04kZh1Gr5xNLR2MEyWTztMDoQ"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://media.indiedb.com/images/games/1/37/36427/hollow_knight_boxart_idb.png"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://media.playstation.com/is/image/SCEA/resident-evil-2-deluxe-edition-box-art-01-ps4-us-12dec18?$native_nt$"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://sickr.files.wordpress.com/2011/12/xenoblade_chronicles_us_box_art.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://sickr.files.wordpress.com/2019/03/fire_emblem_three_houses_north_american_box_art.jpg"
                style={{ width: "100%", height: "500px", paddingTop: "10px", paddingBottom: "10px" }}
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
      <Container>
        <Row>
          <Col>
            <Image src="http://media.comicbook.com/2016/03/voltron-poster-175958.jpg"
              style={{ width: "50%", height: "900px", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", align: "center" }}
              fluid
            />
            <p>
              Voltron is a show made by Netflix in 2016 and ended in 2018. The show had 8 seasons when it reached its conclusion.
            </p>
          </Col>
        </Row>
      </Container>
    )
  );
}