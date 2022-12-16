import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { format } from "timeago.js";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        console.log(res.data)
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <li className="widgetSmListItem">
            <div className="widgetSmUser">
              <span className="widgetSmUsername">FIRST NAME</span>
              <span className="widgetSmname">LAST NAME</span>
              <span className="widgetSmemail">EMAIL</span>
              <span className="widgetSmjoin">USERNAME</span>
              <span className="widgetSmjoin">JOIN</span>
            </div>
            
      </li>
      <hr/>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.firstname}</span>
              <span className="widgetSmname">{user.lastname}</span>
              <span className="widgetSmemail">{user.email}</span>
              <span className="widgetSmjoin">{user.username}</span>
              <span className="widgetSmjoin">{format(user.createdAt)}</span>
            </div>
             <hr/>
          </li>
          
        ))}
       
      </ul>
    </div>
  );
}
