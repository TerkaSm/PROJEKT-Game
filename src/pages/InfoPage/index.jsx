import './style.scss';
import { Link } from "react-router-dom";

export const InfoPage = () => {
    return (
      <main>
        <section className="section">
            <Link className="button button--primary" to="/">Zpět</Link>
        </section>
      </main>
    );
  };