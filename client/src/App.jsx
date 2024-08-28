import { Fragment } from "react";

import { Navigate, Routes, Route } from "react-router-dom";

import AccountBar from "./components/AccountBar";

import AuthProvider from "./context/AuthContext";
import AppBar from "./components/AppBar";
// import NavBar from "./components/NavBar";
import Main from "./views/Main";
import Details from "./views/Details";
import UpdateItemForm from "./views/UpdateItemForm";
import MainList from "./views/MainList";

function App() {
  return (
    <AuthProvider>
      {/* <NavBar /> */}
      <AppBar />
      <AccountBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/items" />} />
          <Route path="/items" element={<MainList />} />
          <Route path="/items/new" element={<Main />} />
          <Route path="/items/:id" element={<Details />} />
          <Route path="/items/:id/edit" element={<UpdateItemForm />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

// import { Fragment } from "react";

// import { Navigate, Routes, Route } from "react-router-dom";

// /* local */
// import AccountBar from "./components/AccountBar";
// import AppBar from "./components/AppBar";
// import AuthProvider from "./context/AuthContext";
// import NavBar from "./components/NavBar.jsx";
// import Main from "./views/Main.jsx";
// import Details from "./views/Details.jsx";
// import UpdateItemForm from "./views/UpdateItemForm";

// function App() {
//   return (
//     <AuthProvider>
//       <AppBar />
//       <NavBar />
//       <AccountBar />
//       <Container className="pb-3">
//         <Routes>
//           <Route path="/" element={<Navigate to="/items" />} />
//           <Route path="/items" element={<Main />} />
//           <Route path="/items/:id" element={<Details />} />
//           <Route path="/items/:id/edit" element={<UpdateItemForm />} />
//         </Routes>
//       </Container>
//     </AuthProvider>
//   );
// }

// export default App;
