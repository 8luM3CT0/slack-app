import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/channel/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter channel name");

    if (channelName) {
      db.collection("channels").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sOption__channel">
          <span className="sOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
