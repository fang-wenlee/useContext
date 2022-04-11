import { createRoot } from "react-dom/client";
import React, { createContext } from "react";
import App from "./App";
export const TreesContext = createContext();

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Pine" },
  { id: "2", type: "Family" }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);
