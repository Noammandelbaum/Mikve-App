import "./baptism_reg.css";
import Child_reg_button from "./child reg button/child_reg_button";
import Adult_reg_button from "./adult reg button/adult_reg_button";

function Baptism_reg() {
  return (
    <div className="baptism_reg">
      <Child_reg_button />
      <Adult_reg_button />
    </div>
  );
};

export default Baptism_reg;
