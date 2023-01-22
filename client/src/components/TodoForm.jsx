import { useState } from "react";
import { useDispatch } from "react-redux";
import { adNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch=useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(adNewTodo(text));
    setText('');
  };

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
        value={text}
      />
    </form>
  );
};
export default TodoForm;
