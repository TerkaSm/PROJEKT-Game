import './style.scss';
import { Link } from "react-router-dom";
import kockaImg from './img/kocka.svg'
import pandaImg from './img/panda.svg'
import tygrImg from './img/tygr.svg'

export const HomePage = () => {
  return (
    <main>
        <section class="section">
            <div class="home">
                <div class="home__content">
                    <h1 class="home__title">Vítejte ve hře</h1>
                    <p class="home__text">Pomozte dětem lépe zvládat vypjaté emoce</p>
                </div>
                <div class="home__flex">
                    <a class="button button--secondary" href="#">Info o projektu</a>
                    <a class="button button--primary" href="detska-titulka.html">Vstup do hry</a>
                </div>
            </div>
            <img class="img img--1" src="img/panda_uvod.svg" alt="panda">
            <img class="img img--2" src="img/kocka_uvod.svg" alt="kočka">
            <img class="img img--3" src="img/tygr_uvod.svg" alt="tygr">
        </section>
    </main>
  );
};
