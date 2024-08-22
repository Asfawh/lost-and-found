/* react */
import { useContext } from "react";

/* react bootstrap */
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";

/* react router */
import { Link } from "react-router-dom";

/* local */
import { AuthContext } from "../context/AuthContext";

// import LikeButton from "../layout-ui/LikeButton";
import LikeButton from "./LikeButton";

function EachItem({ item, setIsCurrent }) {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <Card bg="light" text="dark" className="shadow">
      <Card.Body>
        <Figure>
          <blockquote>
            <Card.Text>
              {item.itemName} {item.markItem}
            </Card.Text>
            <Card.Text className="mb-0">
              Description: {item.description}
            </Card.Text>
          </blockquote>
          <Figure.Caption className="blockquote-footer">
            {/* {item.creator.username} */}
          </Figure.Caption>
        </Figure>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center gap-2 bg-light">
        <small>
          <Link to={`/items/${item._id}`} className="link-primary">
            View
          </Link>
        </small>
        {/* {user && user.id !== item.creator._id && (
          <LikeButton size="sm" item={item} setIsCurrent={setIsCurrent}>
            {item.likes.length}
          </LikeButton>
        )} */}
      </Card.Footer>
    </Card>
  );
}

export default EachItem;
