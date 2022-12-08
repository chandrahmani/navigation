import { useForm } from "react-hook-form";

const NavForm = ({ setLists, lists }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setLists([...lists, data]);
  };

  return (
    <>
      <header className="header-wrapper">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <label>Title</label>

          <input
            type="text"
            placeholder="enter title"
            {...register("title", {
              required: true,
            })}
          />

          <label>Link</label>
          <input
            type="url"
            placeholder="enter url"
            {...register("url", {
              required: true,
            })}
          />

          <button>Add</button>
        </form>
      </header>
    </>
  );
};

export default NavForm;
