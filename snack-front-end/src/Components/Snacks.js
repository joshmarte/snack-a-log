import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";
import { Link } from "react-router-dom";

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
  }, [snacks]);

  return (
    <div className="Snacks">
      <h4>the snack health</h4>
      {snacks.map((snack) => {
        return (
          <Link to={`/snacks/${snack.id}`}>
            <Snack key={snack.id} snack={snack} />
          </Link>
        );
      })}
    </div>
  );
}
