import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ITEM_SERVICE from "../services/item.service";
// import NavBar from "../components/NavBar";

import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const baseUrl = "http://localhost:8004/api/items";

  const removeItem = (id) => {
    ITEM_SERVICE.deleteItemById(id);
    setItem((prev) => prev.filter((item) => id != item._id));
  };

  // Convert the string to a Date object
  const dateObject = new Date(item.timestamp);

  // Format the date (for example: "August 30, 2024")
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Fragment>
      {/* <NavBar disnN={item.itemName} /> */}
      <p className="text-center mt-3">
        <strong>
          {" "}
          {item.itemName} {item.markItem}
        </strong>
      </p>
      <div className="card-footer text-end mb-3">
        <Link
          to={`/items/`}
          className="btn btn-sm btn-danger"
          onClick={() => removeItem(item._id)}
        >
          Remove
        </Link>
      </div>
      {item && (
        <Card bg="light" text="dark" className="shadow">
          <Card.Body>
            <Figure>
              <p className="mb-3">
                <strong>Description:</strong> {item.description}
              </p>
              <p className="mb-3">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="mb-3">
                {" "}
                <strong>TimeStamp:</strong> {formattedDate}
              </p>
              <p className="mb-3">
                <strong> Contact Info:</strong> {item.contact}
              </p>
            </Figure>
          </Card.Body>
        </Card>
      )}
    </Fragment>
  );
}
export default Details;
