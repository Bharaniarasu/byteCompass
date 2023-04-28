import "./card.scss";
import UserData from "./userData";

const Card = (props) => {
  return (
    <>
      <div className="content_card ">
        <div className="card_header">
          <div className="users_count">{props.userCount} Users</div>
          <div className="add_user">
            <button
              className="add_button"
              onClick={() => {
                props.onShowAddUser();
              }}
            >
              +Add User
            </button>
          </div>
        </div>
        <div className="card-body">
          <UserData data={props.userData} />
        </div>
      </div>
    </>
  );
};

export default Card;
