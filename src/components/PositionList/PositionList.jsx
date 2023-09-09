// import ellipse from "../../assets/images/ellipse.jpg";
// import doubleEllipse from "../../assets/images/doubleEllipse.jpg";

export const PositionList = ({ position, setForm }) => {
  return position.map(({ id, name }) => (
    <label className="postRequest__radioLabel" key={id}>
      <input
        type="radio"
        name="position"
        value={name}
        className="postRequest__radioInput"
        onChange={setForm}
      />
      {name}
    </label>
  ));
};
