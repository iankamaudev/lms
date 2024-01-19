import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar"; // Ensure the correct file name is used
import ChatBox from "../components/chatBox";

function Chat() {
  const [collapsed, setCollapsed] = useState(false);
   const [selectedUser, setSelectedUser] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");

  const handleSidebarCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const currentTime = getCurrentTime();
      const newMessage = { sender: "You", message: message, timestamp: currentTime };

      setChatHistory((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileUpload = (files) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      console.log("Uploaded file content:", fileContent);
    };

    reader.readAsText(files[0]);
  };

  const openCamera = () => {
    console.log("Opening camera...");
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${hours >= 12 ? "pm" : "am"}`;
  };

  return (
    <section className="container-fluid p-3 d-flex top-container flex-row flex-nowrap">
      <SideBar
        handleSidebarCollapse={handleSidebarCollapse}
        setSelectedUser={setSelectedUser}
        setChatHistory={setChatHistory}
      />
      <ChatBox
        selectedUser={selectedUser}
        messages={chatHistory}
        handleSendMessage={handleSendMessage}
        handleMessageChange={handleMessageChange}
        handleFileUpload={handleFileUpload}
        openCamera={openCamera}
        message={message}
      />
    </section>
  );
}

export default Chat;
