import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUsersById } from "../../services/api";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUsersById(params.userId).then((data) => setUser(data));
  }, [params.userId]);
  return (
    <div>
      <p>User details #{params.userId}</p>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
    </div>
  );
};
export default UserDetails;
