import React from "react";
import "./main.scss";
import { AboutMe } from "./components/AboutMe.jsx";
import { BiographyMy } from "./components/BiographyMy";
import { Contacts } from "./components/Contacts";
import { ContactsForm } from "./components/ContactsForm";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <BiographyMy />
      <Contacts />
      <ContactsForm />
    </div>
  );
}

export default App;
