/* React */
import { Fragment, useContext, useEffect, useState } from "react";

/* react-router */
import { useOutletContext } from "react-router-dom";

/* local */
import { AuthContext } from "../context/AuthContext";
import EachItem from "../components/EachItem";
import Details from "./Details";
import styles from "../css/item-list.module.css";
import ITEM_SERVICE from "../services/item.service";

function MainList() {
  // const { getAllItems } = useOutletContext();
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    state: { user },
  } = useContext(AuthContext);

  // useEffect(() => {
  //   getAllItems()
  //     .then((items) => {
  //       setItems(items);
  //       setIsCurrent(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, [isCurrent]);

  useEffect(() => {
    ITEM_SERVICE.getAllItem()
      .then((res) => {
        setItems(res);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [isLoaded]);

  let subtitle = "Login or register for more.";

  if (user) {
    subtitle = "Click the view button for more detail and action!";
  }

  return (
    <Fragment>
      <h1>Display All </h1>
      <h5 className="mb-4">{subtitle}</h5>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <EachItem key={i} item={item} setIsLoaded={setIsLoaded} />
          // <Details />
        ))}
      </div>
    </Fragment>
  );
}

export default MainList;
