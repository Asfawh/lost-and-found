import { Fragment } from "react";

import { Navigate, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./views/Main";
import Details from "./views/Details";
import UpdateItemForm from "./views/UpdateItemForm";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}

          <Route path="/" element={<Navigate to="/items" />} />
          <Route path="/items" element={<Main />} />
          <Route path="/items/:id" element={<Details />} />
          <Route path="/items/:id/edit" element={<UpdateItemForm />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
