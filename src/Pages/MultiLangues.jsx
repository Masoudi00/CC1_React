import React from "react";
import Contenu from "../Components/MultiLan/Components/Contenu/Contenu";
import ToggleLangs from "../Components/MultiLan/Components/ToggleLangs/ToggleLangs";
import ContextProvider from "../Components/MultiLan/context/langContext";

function MultiLangues() {
  return (
    <div className="">
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
    </div>
  );
}

export default MultiLangues;
