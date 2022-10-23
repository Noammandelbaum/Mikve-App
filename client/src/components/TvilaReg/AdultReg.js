import DipTab from "./DipTab";
import { useContext } from "react";
import MyContext from "../MyContext";

export default function AdultReg() {
  const { adult } = useContext(MyContext);
  const [countAdult, setCountAdult] = adult;
  return (
    <DipTab
      tovlCategoryName={"מבוגר"}
      noteCategory={"18+"}
      costPerTovel={10}
      counter={countAdult}
      setCounter={setCountAdult}
    />
  );
}
