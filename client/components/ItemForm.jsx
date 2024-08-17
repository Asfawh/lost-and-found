import { useState } from "react";
import axios from "axios";
// import ITEM_SERVICE from "../services/item.service";
import ITEM_SERVICE from "../../services/item.service";

const initialItem = {
  itemName: "",
  timestamp: "",
  location: "",
  discription: "",
  markItem: "",
  image: "",
  note: "",
};

const ItemForm = ({ setIsLoaded }) => {
  const [item, setItem] = useState(initialItem);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const readyToSubmit = () => {
    for (let key in errors) {
      if (errors[key] !== true) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!readyToSubmit()) {
      alert("Please make a correction to the form.");
      window.location.reload();
      return;
    }

    ITEM_SERVICE.createItem(item)
      .then(() => setItem(initialItem))
      .catch((err) => setErrors(err.response.data.errors));
    setIsLoaded(false);
  };

  return (
    <div className="card shadow">
      <h3 className="card-header text-center"> Lost/Found Item Form</h3>
      <p className="text-center mt-3">Add Item!</p>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <fieldset>
              <legend className="fs-6">LOST/FOUND:</legend>
              <div className="d-flex justify-content-around">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="markItem"
                    id="Lost"
                    value="Lost"
                    checked={item.markItem === "Lost"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="Lost">
                    Lost
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="markItem"
                    id="Found"
                    value="Found"
                    checked={item.markItem === "Found"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="Found">
                    Found
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="mb-3">
            {errors.itemName && (
              <p className="error">{errors.itemName.message}</p>
            )}
            <label htmlFor="itemName" className="form-label">
              Item Name:
            </label>
            <input
              type="text"
              name="itemName"
              id="itemName"
              value={item.itemName}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}

            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={item.description}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={item.location}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            {errors.timestamp && (
              <p className="error">{errors.timestamp.message}</p>
            )}
            <label htmlFor="timestamp" className="form-lable">
              Date:
            </label>
            <input
              type="date"
              name="timestamp"
              id="timestamp"
              className="form-control"
              value={item.timestamp}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imgUrl" className="form-label">
              IMAGE URL(Optional):
            </label>
            <input
              type="text"
              name="imgUrl"
              id="imgUrl"
              value={item.imgUrl}
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note (Optional):
            </label>
            <input
              type="text"
              name="note"
              id="note"
              value={item.note}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Add Item!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
