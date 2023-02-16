import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  pageNext,
  pagePrevious,
  setAvatar,
  getAvatar,
} from "../../redux/userSlice";

import Avatars from "../Avatars/Avatars";

export default function PageThird() {
  const dispatch = useDispatch();
  const avatar = useSelector(getAvatar);

  const input = useRef();
  const img = useRef();

  function readFile(input) {
    let file = input.target.files[0];
    console.log(input.target.files[0]);
    let reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    } else {
      img.src = "";
    }

    reader.onload = function () {
      console.log(reader.result);
      dispatch(setAvatar(reader.result));
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  const onClickOnThirdPage = () => {
    console.log(avatar);
    if (!avatar) {
      alert("выбирете аватарку");
      return;
    }
    dispatch(pageNext());
  };

  const onClickOnThirdPagePrevious = () => {
    dispatch(pagePrevious());
  };

  return (
    <div className="container">
      <p>Шаг: 3</p>

      <input
        type="file"
        ref={input}
        onChange={readFile}
        // placeholder="Прикрепите файл"
      ></input>

      <div className="center">
        <img
          // width="auto"
          height="64"
          ref={img}
          src={avatar}
          alt="ImagePreview..."
        />
      </div>

      <Avatars />

      <div className="buttons">
        <button type="button" onClick={onClickOnThirdPagePrevious}>
          Previous
        </button>
        <button type="button" onClick={onClickOnThirdPage}>
          Next
        </button>
      </div>
    </div>
  );
}
