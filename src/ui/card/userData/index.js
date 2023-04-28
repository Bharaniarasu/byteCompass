import "./userData.scss";

const UserData = (props) => {
  return (
    <div className="content_table">
      <table className="table">
        <tr>
          <th>User Name</th>
          <th> Email ID</th>
          <th>Mobile Number</th>
          <th>User Type</th>
          <th>Status</th>
          <th></th>
          <th></th>
        </tr>
        <tbody>
          {props.data &&
            props.data.map((data, index) => (
              <tr className="table-row" key={index}>
                <td className="mt-2">{data.username}</td>

                <td>{data.email}</td>
                <td>{data.phonenumber}</td>
                <td>{data.usertype}</td>
                <td>
                  <label class="switch">
                    <input type="checkbox" checked />
                    <span class="slider round"></span>
                  </label>
                </td>

                <td>
                  <button className="edit_button">Edit</button>
                </td>
                <td>
                  <button className="delete_button">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
