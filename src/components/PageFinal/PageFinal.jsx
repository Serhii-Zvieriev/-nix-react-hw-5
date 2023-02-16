import { useSelector } from "react-redux";
import {
  getName,
  getSurname,
  getEmail,
  getCity,
  getStreet,
  getHouse,
  getAvatar,
} from "../../redux/userSlice";

export default function PageFinal() {
  const name = useSelector(getName);
  const surname = useSelector(getSurname);
  const email = useSelector(getEmail);
  const city = useSelector(getCity);
  const street = useSelector(getStreet);
  const house = useSelector(getHouse);
  const avatar = useSelector(getAvatar);

  return (
    <div className="container final">
      <p className="bold">Спасибо за регистрацию</p>
      <div className="center">
        <img height="96" src={avatar} alt="avatar" />
      </div>
      <p className="bold">Контактная информация</p>
      <p>Имя: {name}</p>
      <p>Фамилия: {surname}</p>
      <p>Email: {email}</p>
      <p>Город: {city}</p>
      <p>Улица: {street}</p>
      <p>Дом: {house}</p>
    </div>
  );
}
