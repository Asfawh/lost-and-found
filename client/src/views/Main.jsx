import { Fragment } from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import ItemForm from "../components/ItemForm";
import ItemsList from "../components/ItemsList";
import ITEM_SERVICE from "../services/item.service";

function Main() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    ITEM_SERVICE.getAllItem()
      .then((res) => {
        setItems(res);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [isLoaded]);
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <ItemForm setIsLoaded={setIsLoaded} />
        </div>
        <div className="col">
          {isLoaded && <ItemsList items={items} setIsLoaded={setIsLoaded} />}
        </div>
      </div>
    </Fragment>
  );
}
export default Main;
