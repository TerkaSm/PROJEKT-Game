import './style.scss';
import { Button, buttonColor } from "../../components/Button";
import kockaImg from './img/kocka.svg'
import pandaImg from './img/panda.svg'
import tygrImg from './img/tygr.svg'

export const HomePage = () => {
  return (
    <main>
        <section className="section">
            <div className="home">
                <div className="home__content">
                    <h1 className="home__title">Vítejte ve hře</h1>
                    <p className="home__text">Pomozte dětem lépe zvládat vypjaté emoce</p>
                </div>
                <div className="home__flex">
                    <Button to={"/info"} color={buttonColor.secondary}>Info o projektu</Button>
                    <Button to={"/vyber-zviratka"} color={buttonColor.primary}>Vstup do hry</Button>
                </div>
            </div>
            <img className="img img--1" src={pandaImg} alt="panda" />
            <img className="img img--2" src={kockaImg} alt="kočka" />
            <img className="img img--3" src={tygrImg} alt="tygr" />
        </section>
    </main>
  );
};
