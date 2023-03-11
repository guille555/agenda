import {Routes, Route} from "react-router-dom";
import Index from "./templates/Index.jsx";
import ContactPage from "./templates/ContactPage.jsx";
import FormNewContact from "./components/FormNewContact.jsx";
import DetailContact from "./components/DetailContact.jsx";
import EditContact from "./components/EditContact.jsx";
import DeleteContact from "./components/DeleteContact.jsx";

import NotFoundPage from "./templates/NotFoundPage.jsx";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/newContact" element={<FormNewContact/>}/>
          <Route path="/detailContact/:id" element={<DetailContact/>}/>
          <Route path="/editContact/:id" element={<EditContact/>}/>
          <Route path="/eraseContact/:id" element={<DeleteContact/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};

export default App;
