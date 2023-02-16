import { useSelector } from "react-redux";

import PageOne from "../PageOne/PageOne";
import PageSecond from "../PageSecond/PageSecond";
import PageThird from "../PageThird/PageThird";
import PageFourth from "../PageFourth/PageFourth";
import PageFinal from "../PageFinal/PageFinal";

import { selectCurrentPage } from "../../redux/userSlice";

export default function RegistrationModal() {
  const currentPage = useSelector(selectCurrentPage);

  return (
    <>
      {currentPage === 1 && <PageOne />}
      {currentPage === 2 && <PageSecond />}
      {currentPage === 3 && <PageThird />}
      {currentPage === 4 && <PageFourth />}
      {currentPage === 5 && <PageFinal />}
    </>
  );
}
