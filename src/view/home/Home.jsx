import { NavLink } from "react-router-dom";
import { Header, Section } from "../../components/styled";

const Home = () => {
  return (
    <>
      <div>
        <Header className="header">
          <div className="header-container">
            <ul className="list">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>

              <NavLink to="navForm">
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
            <h3>navigation builder</h3>
          </div>

          <div className="btn-container">
            <button>Add Naigation</button>
          </div>

          <div className="box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcB9pt3Tasegrjl6637LB1iJqCND1jp2oLA&usqp=CAU"
              alt="abc"
            />
          </div>
        </Section>
      </div>
    </>
  );
};

export default Home;
