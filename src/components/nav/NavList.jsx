const NavList = ({ item }) => {
  console.log(item);
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
