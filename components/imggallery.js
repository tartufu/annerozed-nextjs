import styles from "./imggallery.module.css";
import { SRLWrapper } from "simple-react-lightbox";

export default function ImgGallery(props) {
  return (
    <div className={styles.imgGalleryDiv}>
      <h2> Image Gallery</h2>
      <div className={`card-columns ${styles.imgGalleryCards}`}>
        <SRLWrapper>
          <div className="card">
            <img src="images/artdump/art2.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art3.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art4.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art5.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art6.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art7.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art8.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art9.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art10.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art11.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art12.jpg" />
          </div>
          <div className="card">
            <img src="images/artdump/art1.jpg" />
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
}

// https://www.npmjs.com/package/simple-react-lightbox
