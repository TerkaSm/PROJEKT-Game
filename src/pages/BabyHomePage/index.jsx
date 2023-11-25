import "./style.scss";
import { useParams } from "react-router-dom";
import { PETS } from "../../pets";
import { Link } from "react-router-dom";

export const BabyHomePage = () => {
    const { profileId } = useParams();
    const {
      id,
    } = PETS[profileId];
  
    return (
      <main>

      </main>
    );
  };