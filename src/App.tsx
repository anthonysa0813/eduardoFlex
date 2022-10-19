import React from "react";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="mainGrid debug">
      <header>
        <h1>Empresa</h1>
        <nav>
          <ul>
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
            <li>Menu4</li>
          </ul>
        </nav>
      </header>
      <Form />
    </div>
  );
};

export default App;
