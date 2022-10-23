import { useContext } from "react";
import MyContext from "../MyContext";
import DipTab from "./DipTab";

export default function ChildReg() {
  const { child } = useContext(MyContext);
  const [countChild, setCountChild] = child;

  return (
    <DipTab
      tovlCategoryName={"ילד"}
      noteCategory={""}
      costPerTovel={6}
      counter={countChild}
      setCounter={setCountChild}
    />
  );
}
