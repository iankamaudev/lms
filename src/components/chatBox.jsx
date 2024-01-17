import React, { useState, useEffect, useRef  } from "react";
import user1 from "../assets/images/img1.jpg";
import user2 from "../assets/images/img2.jpg";
import user3 from "../assets/images/img3.jpg";
import user4 from "../assets/images/img4.jpg";
import user5 from "../assets/images/img5.jpg";
import send from "../assets/images/send.png";
import SideBar from "./sideBar";

const users = [
  { id: 1, name: "John Doe", profileImage: user1 },
  { id: 2, name: "Marie Davis", profileImage: user2 },
  { id: 3, name: "Michael Njogu", profileImage: user3 },
  { id: 4, name: "Melvin Mbae", profileImage: user4 },
  { id: 5, name: "Ted Lasso", profileImage: user5 }
  // ... add more users as needed
];

function ChatBox() {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(users[1]); // Default user
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      messagesContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [allMessages]);

  function handleMessageChange(e){
    e.preventDefault();
    setMessage(val => val = e.target.value)
  }
  function handleSendMessage(e){
    e.preventDefault();
    setAllMessages(prev => [...prev, message])
    setMessage("")
    
  }
  return (
    <div className="d-flex">
      <SideBar setSelectedUser={setSelectedUser} />
      <section className="chat-box">
        <header className="py-1 chat-header navbar nav sticky-top">
        <div className="chat-header-user d-flex justify-content-start gap-3 px-4 align-items-center flex-nowrap">
          <div className="profile">
            <img className="profile-img" src={selectedUser.profileImage} alt="profile" />
          </div>
          <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
            <h6 className="text-start fw-bold">{selectedUser.name}</h6>
            <div className="d-flex align-items-center gap-1">
              <div className="dot"></div>
              <p className="mb-0 new-message">Online</p>
            </div>
          </div>
        </div>
      </header>
      <section className="messages-container px-2 position-relative w-100 mb-5" ref={messagesContainerRef}>
        <div className="messages-inner d-flex flex-column justify-content-end align-items-center w-100 h-auto">
          <div className="received-message px-2 py-3 my-3 ml-4">
            who let the dogs out?!
          </div>
          <div className="sent-message px-2 py-3 my-3">lorem200</div>
          <div className="received-message px-2 py-3 my-3 ml-4">
            who let the dogs out?!
          </div>
          <div className="sent-message px-2 py-3 my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quos
            dolor adipisci commodi aspernatur at cupiditate est exercitationem
            nihil reprehenderit, quidem nesciunt architecto laudantium fuga!
            Necessitatibus illum alias distinctio beatae exercitationem, nulla
            iste minus error nemo. Vitae dolorem blanditiis quidem doloremque
            perspiciatis porro necessitatibus enim eum mollitia unde quod ab
            fuga cum non ut magnam eaque veritatis ratione quos quae, sapiente
            odio numquam beatae. Deleniti ipsa sunt veniam, fuga consectetur
            illo dolorem facilis! Harum dolorum adipisci odit unde praesentium
            odio error, nobis atque rerum fugiat accusantium voluptatum
            quibusdam magnam tenetur ipsam id nesciunt nam, debitis, suscipit
            cumque. Reprehenderit, itaque repellat!
          </div>
          <div className="received-message px-2 py-3 my-3 ml-4">
            who let the dogs out?!
          </div>
          <div className="sent-message px-2 py-3 my-3">lorem200</div>
          <div className="received-message px-2 py-3 my-3 ml-4">
            who let the dogs out?!
          </div>
          {
            allMessages && allMessages.map( (msg, index) => {
              return (
                <div key={index} className="sent-message px-2 py-3 my-3">
                  <p className="p-0 m-0">{msg}</p>
                  <span className="message-time">12:01am</span>
                </div>
              )
            })
          }
        </div>
        <form
            className="chat-input position-relative mx-4 w-100 py-2"
            onSubmit={handleSendMessage}
          >
            <div className="inner-input  d-flex flex-row justify-content-end gap-2 m-0 ">
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                className="form-control px-4"
                id="messageinput"
                placeholder="Type your message"
                autoComplete="off"
              />
              <button type="submit" className=" send-btn">
                <img src={send} alt="send message" height={40} width={40} />
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default ChatBox;
