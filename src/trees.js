import React, { useContext } from "react";
import { TreesContext } from "./";

const Trees = () => {
  const { trees } = useContext(TreesContext);

  return (
    <div>
      <h1>Trees componenent</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};
export default Trees;
