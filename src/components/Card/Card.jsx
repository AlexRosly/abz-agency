import EllipsisText from "react-ellipsis-text";
import "./Card.scss";
import defaultImg from "../../assets/images/photo-cover.svg";

export const Card = ({ users }) => {
  // console.log(users);

  return (
    <div className="card__section">
      <ul className="card__list">
        {users.map(({ id, name, email, phone, position, photo }) => (
          <li key={id} className="card__item">
            <img src={photo} alt="user_photo" className="card__photo" />
            <p className="card__name">{name}</p>
            {/* <EllipsisText text={name} length={180} tail /> */}
            <div className="card__block">
              <p>{position}</p>
              {/* <EllipsisText text={position} length={40} /> */}
              {/* <p className="card__email">{email}</p> */}
              <EllipsisText text={email} length={30} />
              <p>{phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Card.defaultProps = {
  photo: defaultImg,
};
