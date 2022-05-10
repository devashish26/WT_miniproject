import React from "react";
//import Sidebar from "./Sidebar";
import { useHistory } from "react-router";

export default function Home() {

  const history = useHistory();
  return (
    <div>
      <div className="banner">
        <button onClick={()=>history.push("/products")}   className="standalone"> <b>Search your choice!</b> </button>
      </div>
    </div>
  );
}
