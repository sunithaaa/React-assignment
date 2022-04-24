import React from "react";
import Main from "./components/Main";

import Header from "./components/Header";

const App = ({contact}) => {
  return (
    <div className="w-[70%] h-auto border-b-0 p-6 my-16 m-auto">
     <Header/>
     <Main/>
    </div>
  );
};

export default App;
