import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

export default function Snack({ snack }) {
  return (
    <div className="Snack">
      <article>
        <div>
          <h5>{snack.name}</h5>
          <img src={snack.image} alt={snack.name} width="150px" height="" />
          <HeartHealth snackHealth={snack} />
        </div>
      </article>
    </div>
  );
}
