import Head from "next/head";
// import styles from '../styles/Home.module.css'

import HeroBanner from "../components/herobanner";
import ChibiDiv from "../components/chibidiv";
import EmotesDiv from "../components/emotesdiv";
import ImgGallery from "../components/imggallery";
import KomaDiv from "../components/komadiv"; 
import Terms from "../components/terms";
import ComparisonDiv from "../components/comparisondiv";
import Footer from "../components/footer";

import SimpleReactLightbox from "simple-react-lightbox";

class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title> Annerozed's Commission Land</title>
          <link
            rel="icon"
            sizes="16x16 32x32 64x64"
            href="images/misc/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&family=Titan+One&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          ></link>
        </Head>

        <HeroBanner />
        <EmotesDiv /> 
        <ChibiDiv />
        {/* 4KOMA is no longer required but commented out just in case client wants it back in future */}
        {/* <KomaDiv /> */}
        <SimpleReactLightbox>
          <ImgGallery />
        </SimpleReactLightbox>
        <Terms />
        <ComparisonDiv />
        <Footer />
      </>
    );
  }
}

export default Home;
