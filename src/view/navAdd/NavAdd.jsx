import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import { Header, Section } from "../../components/styled";

const NavAdd = ({ navLists, setNavLists }) => {
  console.log("cd", navLists);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("lists", data);

    setNavLists([...navLists, data]);

    localStorage.setItem("data", JSON.stringify([...navLists, data]));
  };

  return (
    <>
      <Header className="header">
        <div className="header-container">
          <ul className="list">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>

            <NavLink to="/About">
              <li>About</li>
            </NavLink>

            <li>Contact</li>
            {/* 
            <NavLink to="/navForm">
              <li>NavForm</li>
            </NavLink> */}
          </ul>
        </div>
        <div className="btn-wrapper">
          <button className="btn">X</button>
        </div>
      </Header>

      <Section>
        <div className="txt">
          <h2>Navigation Builder</h2>
          <p>Add new menu here</p>
        </div>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title"
            {...register("title", {
              required: true,
            })}
          />

          <input
            type="url"
            placeholder="URL"
            {...register("url", {
              required: true,
            })}
          />
          <select className="drop-don">
            <option>Home</option>
            <option>About</option>
          </select>
          <div className="button-wrap">
            <button className="btn">Add</button>
          </div>
        </form>
      </Section>
    </>
  );
};

export default NavAdd;
