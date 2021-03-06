import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEdit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setsnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
  });

  const updatesnack = (updatedsnack, id) => {
    axios
      .put(`${API}/snacks/${id}`, updatedsnack)
      .then((res) => navigate(`/snacks`))
      .catch((err) => console.log(err));
  };

  const handleTextChange = (e) => {
    setsnack({ ...snack, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setsnack(res.data.payload))
      .catch((err) => navigate(`/not-found`));
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatesnack(snack, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          required
          onChange={handleTextChange}
          placeholder="Snack name"
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          value={snack.image}
          onChange={handleTextChange}
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          name="fiber"
          value={snack.fiber}
          placeholder="Fiber amount"
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="protein"
          value={snack.protein}
          placeholder="Protein amount"
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          name="added_sugar"
          value={snack.added_sugar}
          placeholder="Added Sugar amount"
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
        <Link to={`/snacks/${id}`}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default SnackEdit;
