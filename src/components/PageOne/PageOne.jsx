import { useRef } from "react";
import { useDispatch } from "react-redux";
import { pageNext, setName, setSurname, setEmail } from "../../redux/userSlice";

export default function PageOne() {
  const dispatch = useDispatch();

  const username = useRef();
  const surname = useRef();
  const email = useRef();

  const onClickOnFirstPage = () => {
    if (
      username.current.value === "" ||
      surname.current.value === "" ||
      email.current.value === ""
    ) {
      alert("Заполнены не все поля");
      return;
    }
    dispatch(setName(username.current.value));
    dispatch(setSurname(surname.current.value));
    dispatch(setEmail(email.current.value));
    dispatch(pageNext());
  };

  return (
    <div className="container">
      <p>Шаг: 1</p>

      <label htmlFor="username">Имя</label>
      <input
        type="text"
        id="username"
        ref={username}
        autoComplete="off"
      ></input>

      <label htmlFor="surname">Фамилия</label>
      <input type="text" id="surname" ref={surname} autoComplete="off"></input>

      <label htmlFor="email">Email</label>
      <input type="text" id="email" ref={email} autoComplete="none"></input>

      <div className="buttons">
        <button onClick={onClickOnFirstPage} type="button">
          Next
        </button>
      </div>
    </div>
  );
}
