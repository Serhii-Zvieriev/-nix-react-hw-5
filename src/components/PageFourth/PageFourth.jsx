import { useRef } from "react";
import { useDispatch } from "react-redux";

import { setPassword, pageNext, pagePrevious } from "../../redux/userSlice";

export default function PageFourth() {
  const dispatch = useDispatch();

  const password = useRef();
  const confirmPassword = useRef();

  const onClickOnFourthPage = () => {
    if (password.current.value === "") {
      alert("введите пароль");
      return;
    }
    if (password.current.value !== confirmPassword.current.value) {
      alert("пароли не совпадают");
      return;
    } else {
      dispatch(setPassword(password.current.value));
      dispatch(pageNext());
    }
  };
  return (
    <div className="container">
      <p>Шаг: 4</p>

      <label htmlFor="password">Пароль</label>
      <input ref={password} type="text" id="password"></input>

      <label htmlFor="confirmPassword">Подтвердить пароль</label>
      <input ref={confirmPassword} type="text" id="confirmPassword"></input>

      <div className="buttons">
        <button type="button" onClick={() => dispatch(pagePrevious())}>
          Previous
        </button>
        <button type="button" onClick={onClickOnFourthPage}>
          Next
        </button>
      </div>
    </div>
  );
}
