const NavList = ({ item }) => {
  console.log(list);
  return (
    <>
      <section className="cot">
        <ul>
          <li>{item.title}</li>
          <li>{item.url}</li>
        </ul>
      </section>
    </>
  );
};

export default NavList;
