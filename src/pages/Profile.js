import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  return user ? <h2>{user.displayName}</h2> : "Not Logged In ";
};

export default Profile;
