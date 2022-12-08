const NavList = ({ list }) => {
  console.log(list);
  return (
    <>
      <section className="cot">
        <ul>
          <li>{list.title}</li>
          <li>{list.url}</li>
        </ul>
      </section>
    </>
  );
};

export default NavList;
