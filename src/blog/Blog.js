import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Top from "./Top";
import About from "./About";
import Game from "./Game";
import Tech from "./Tech";
import MainFeaturedPost from "./MainFeaturedPost";
import Footer from "./Footer";

// const useStyles = makeStyles((theme) => ({
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
// }));

const sections = [
  { title: "Top", url: "#/top" },
  { title: "About", url: "#/about" },
  { title: "Game", url: "#/game" },
  { title: "Technology", url: "#/tech" },
];

const mainFeaturedPost = {
  title: "LifeGame 3D Top Page",
  description:
    "生命の誕生、進化、淘汰などのプロセスをモデルで再現したライフゲーム3Dバージョン",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbihgOPtSQt7T3Rro-H9T-YcIb1S8jxR43dYVmIcTrfTxkpL1Dc2NJ29U7VhMhhN5u4Nk&usqp=CAU",
  imgText: "main image description",
  linkText: "Wikipedia link...",
};

export default function Blog() {
  // const classes = useStyles();

  return (
    <HashRouter>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="LifeGame 3D" sections={sections} />
          <main>
            <Switch>
              <Route exact path="/top">
                <MainFeaturedPost post={mainFeaturedPost} />
                <Top />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/tech">
                <Tech />
              </Route>
              <Route component={Top}></Route>
            </Switch>
          </main>
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </Container>
      </React.Fragment>
    </HashRouter>
  );
}
