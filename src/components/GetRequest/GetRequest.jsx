import { Card } from "../Card/Card";
import "./GetRequest.scss";

export const GetRequest = ({ id, users }) => {
  return (
    <div id={id} className="getRequest__section">
      <h2 className="getRequest__title">Working with GET request</h2>
      {users && <Card users={users} />}
      <button type="button" className="getRequest__btn">
        Show more
      </button>
    </div>
  );
};
