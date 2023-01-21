import { useState } from "react";
const TodoForm = () => {
  const [text, setText] = useState("");

  const onFormSubmit = () => {};
  const onInputChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <form className="Form" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter new todo"
        onChange={onInputChange}
      />
    </form>
  );
};
export default TodoForm;
