import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { Header, Section } from "../../components/styled";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const onSubmit = (data) => {
    console.log(data);

    setNavLists([...navLists, data]);

    localStorage.setItem("data", JSON.stringify([...navLists, data]));
    setOpen(false);
  };

  return (
    <>
      <div>
        <Header className="header">
          <div className="header-container">
            <ul className="list">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>

              <NavLink to="nav">
                <li>NavForm</li>
              </NavLink>
            </ul>
          </div>
          <div className="btn-wrapper">
            <button className="btn"></button>
          </div>
        </Header>

        <Section>
          <div className="txt">
            <h2>Navigation Builder</h2>
          </div>
          <div>
            <p>Create navigation based on your app requirements using</p>
            <h4>navigation builder</h4>
          </div>

          <div className="btn-contain">
            <button onClick={handleOpen}>Add Naigation</button>
          </div>

          <div className="box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB6O_lfxeRec_iL5xnCkXpYVSKcbR2ouoMA&usqp=CAU"
              alt="abc"
            />
          </div>
        </Section>
      </div>

      {open && (
        <Modal>
          <section>
            <div className="txt">
              <h2>Navigation Builder</h2>
              <p>Add new menu here</p>
            </div>
            <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
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
            </form>
          </section>
        </Modal>
      )}
    </>
  );
};

export default Home;
