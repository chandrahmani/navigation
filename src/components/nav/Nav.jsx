import { useState } from "react";
import { navLists } from "../../model";
import Home from "./Home";

import NavForm from "../NavForm";
import NavList from "./NavList";

const Nav = () => {
  const [lists, setLists] = useState(navLists);
  console.log(lists);

  return (
    <>
      <NavForm setLists={setLists} lists={lists} />

      {lists.map((list, index) => {
        <div key={index}>
          <NavList list={list}></NavList>
        </div>;
      })}
    </>
  );
};

export default Nav;
