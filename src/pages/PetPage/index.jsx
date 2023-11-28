import "./style.scss";
import { Button, buttonColor } from "../../components/Button";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import imgCat from "./img/kocka_uvod.gif"
import imgPanda from "./img/panda_uvod.gif"
import imgTiger from "./img/tygr_uvod.gif"
import imgBubbleLeft from "./img/bublina-nalevo.svg"
import imgBubbleRight from "./img/bublina-napravo.svg"
import imgBed from "./img/postylka.png"
import imgCubes from "./img/kosticky.png"
import imgSwing from "./img/houpacka.png"

export const BabyHomePage = () => {
    // const { profileId } = useParams();
    // const {
    //   id,
    // } = PETS[profileId];
    
  
    return (
      <main>
        <section className="section">
          <Navigation />
        </section>

      </main>
    );
  };