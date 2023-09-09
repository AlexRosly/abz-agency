import Image from "../../assets/images/success-image.png";
import "./Succecc.scss";

export const Success = () => {
  return (
    <div className="success__block">
      <h2 className="success__header">User successfully registered</h2>
      <img src={Image} alt="User successfully registered" />
    </div>
  );
};
