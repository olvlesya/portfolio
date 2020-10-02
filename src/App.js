import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./main.scss";
import { AboutMe } from "./components/AboutMe";
import { BiographyMy } from "./components/BiographyMy";

import { ContactsForm } from "./components/ContactsForm";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <BiographyMy />
      <ContactsForm />
    </div>
  );
}

export default App;
