import { useState } from "react";
import NavAdd from "../../view/navAdd/NavAdd";
import NavList from "./NavList";

const Nav = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const [navLists, setNavLists] = useState([data]);

  console.log("lo", navLists);

  const handleDelete = (index) => {
    console.log(index);
    const navClone = [...navLists];

    navClone.splice(index, 1);

    setLists(navClone);

    localStorage.setItem("data", JSON.stringify(navClone));
  };
  return (
    <>
      <NavAdd navLists={navLists} setNavLists={setNavLists} />

      {navLists.map((item, index) => {
        <div key={index}>
          <NavList item={item}></NavList>
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            X
          </button>
        </div>;
      })}
    </>
  );
};

export default Nav;
