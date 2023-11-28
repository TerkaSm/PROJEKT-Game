import './style.scss';
import { Link } from "react-router-dom";
import { Button, buttonColor } from "../../components/Button";

export const InfoPage = () => {
    return (
      <main>
        <section className="section">
            {/* <Link className="button button--primary" to="/">Zpět</Link> */}
            <Button to={"/"} color={buttonColor.primary}>domů</Button>
        </section>
      </main>
    );
  };