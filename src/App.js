import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"

const App = () => {
  return (
    <div className="w-[70%] h-auto border-2 border-b-0 p-6 my-16 m-auto">
      <Header />
      <Main/>
    </div>
  );
};

export default App;
