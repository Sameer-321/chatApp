import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import { Conversation } from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const socket = useRef()
  const [newMessages, setNewMessages] = useState("");

  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(()=>{
    socket.current=io("ws://localhost:8900")
  },[])

  useEffect(() => {
   socket.current.emit("addUser",user._id)
   socket.current.on("getUsers",users=>{
    console.log(users)
   })
  }, [user]);

  useEffect(() => {
    socket?.on("welcome", (message) => {
      console.log(message);
    });
  }, [socket]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    // console.log(messages);
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessages,
      conversationId: currentChat._id,
    };
    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          {" "}
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div
                onClick={() => {
                  setCurrentChat(c);
                }}
              >
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message messages={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMesageInput"
                    placeholder="write message"
                    onChange={(e) => setNewMessages(e.target.value)}
                    value={newMessages}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>{" "}
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="onlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
