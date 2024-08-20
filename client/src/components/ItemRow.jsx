import { Link } from "react-router-dom";
import axios from "axios";

function ItemRow({ item, setIsLoaded }) {
  const baseUrl = "http://localhost:8004/api/items";

  // Convert the string to a Date object
  const dateObject = new Date(item.timestamp);

  // Format the date (for example: "August 30, 2024")
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <tr>
      <td className="align-middle">{item.itemName}</td>
      <td className="align-middle">{item.markItem}</td>
      <td className="align-middle">{formattedDate}</td>
      <td className="align-middle">{item.location}</td>

      <td className="align-middle d-flex gap-2">
        <Link to={`/items/${item._id}`} className="btn btn-info align-middle ">
          Details
        </Link>{" "}
        <Link
          to={`/items/${item._id}/edit`}
          className="btn btn-warning align-middle "
        >
          {" "}
          Edit
        </Link>
      </td>
    </tr>
  );
}
export default ItemRow;
