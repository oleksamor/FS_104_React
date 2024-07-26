import s from "./UsersList.module.css";
import Users from "../../pages/Users/Users";
const UsersList = ({ users = [] }) => {
  return (
    <div>
      <h2>Users</h2>

      <ul className={s.list}>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
