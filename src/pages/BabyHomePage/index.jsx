import "./style.scss";
import { useParams } from "react-router-dom";
import { PETS } from "../../pets";
import { Link } from "react-router-dom";
import { SwitchButtons } from "../../components/SwitchButtons";
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
        <section className="section-background-chidren-homepage">
          <SwitchButtons />
          <Link to="kocka-uvod.html"><img className="img-uvod img-uvod--1" src={imgCat} alt="" /></Link>
          <Link to="panda-uvod.html"><img className="img-uvod img-uvod--2" src={imgPanda} alt="" /></Link>
          <Link to="tygr-uvod.html"><img className="img-uvod img-uvod--3" src={imgTiger} alt="" /></Link>
          <img className="bubble bubble--left" src={imgBubbleLeft} alt="" />
          <img className="bubble bubble--rotate" src={imgBubbleRight} alt="" />
          <img className="bubble bubble--right" src={imgBubbleRight} alt="" />
          <img className="bed" src={imgBed} alt="postýlka" />
          <img className="cubes" src={imgCubes} alt="kostičky" />
          <img className="swing" src={imgSwing} alt="houpačka" />
        </section>

      </main>
    );
  };