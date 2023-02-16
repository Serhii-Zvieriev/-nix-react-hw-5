import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  pageNext,
  pagePrevious,
  setCity,
  setStreet,
  setHouse,
} from "../../redux/userSlice";

export default function PageSecond() {
  const dispatch = useDispatch();

  const city = useRef();
  const street = useRef();
  const house = useRef();

  const onClickOnSecondPage = () => {
    if (
      city.current.value === "" ||
      street.current.value === "" ||
      house.current.value === ""
    ) {
      alert("Заполнены не все поля");
      return;
    }
    dispatch(setCity(city.current.value));
    dispatch(setStreet(street.current.value));
    dispatch(setHouse(house.current.value));
    dispatch(pageNext());
  };

  const onClickOnSecondPagePrevious = () => {
    dispatch(pagePrevious());
  };

  return (
    <div className="container">
      <p>Шаг: 2</p>

      <label htmlFor="city">Город</label>
      <input type="text" id="city" ref={city} autoComplete="none"></input>

      <label htmlFor="street">Улица</label>
      <input type="text" id="street" ref={street} autoComplete="none"></input>

      <label htmlFor="house">Дом</label>
      <input type="text" id="house" ref={house} autoComplete="none"></input>

      <div className="buttons">
        <button type="button" onClick={onClickOnSecondPagePrevious}>
          Previous
        </button>
        <button type="button" onClick={onClickOnSecondPage}>
          Next
        </button>
      </div>
    </div>
  );
}
