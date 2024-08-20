import MealRow from "./ItemRow";

function ItemsList({ items, setIsLoaded }) {
  return (
    <div className="card shadow ">
      <h3 className="card-header text-center">All Items List</h3>
      <p className="text-center mt-3">Find Lost or Found items!</p>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Catagory:</th>
              <th>Date:</th>
              <th>Location:</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <MealRow key={item._id} item={item} setIsLoaded={setIsLoaded} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ItemsList;
