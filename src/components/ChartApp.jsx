import React, { useState } from "react";
import SideBar from "./sideBar";
import ChatBox from "./chatBox";
const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chat-app-container">
      <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ChatBox selectedUser={selectedUser} />
    </div>
  );
};

export default ChatApp;
