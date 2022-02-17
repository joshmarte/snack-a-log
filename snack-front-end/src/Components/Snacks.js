import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/snacks")
      .then((res) => {
        setSnacks(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Snacks">
      <article>
        {snacks.map((snack) => {
          return (
            <div key={snack.id} className="Snack">
              <img src={snack.image} alt={snack.name} />
              <Link to={`/snacks/${snack.id}`}>
                <h4>{snack.name}</h4>
                <h4>
                  <HeartHealth snackHealth={snack} />
                </h4>
              </Link>
            </div>
          );
        })}
      </article>
    </div>
  );
}
