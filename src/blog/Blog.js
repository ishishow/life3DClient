import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Top', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Game', url: '#' },
  { title: 'Technology', url: '#' },
];

const mainFeaturedPost = {
  title: 'LifeGame 3D Top Page',
  description:
    "生命の誕生、進化、淘汰などのプロセスをモデルで再現したライフゲーム3Dバージョン",
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbihgOPtSQt7T3Rro-H9T-YcIb1S8jxR43dYVmIcTrfTxkpL1Dc2NJ29U7VhMhhN5u4Nk&usqp=CAU',
  imgText: 'main image description',
  linkText: 'Wikipedia link...',
};

const featuredPosts = [
  {
    title: 'What\'s lifegame ?',
    date: '--',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbihgOPtSQt7T3Rro-H9T-YcIb1S8jxR43dYVmIcTrfTxkpL1Dc2NJ29U7VhMhhN5u4Nk&usqp=CAU',
    imageText: 'Image Text',
  },
  {
    title: 'Visit mysterious world...',
    date: '--',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbihgOPtSQt7T3Rro-H9T-YcIb1S8jxR43dYVmIcTrfTxkpL1Dc2NJ29U7VhMhhN5u4Nk&usqp=CAU',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon , url: 'https://github.com/ishishow'},
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/home'},
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="LifeGame 3D" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
