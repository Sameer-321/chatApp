import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";

export function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          {" "}
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput"/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">box</div>
        </div>
        <div className="chatOnline">
          <div className="onlineWrapper">online</div>
        </div>
      </div>
    </>
  );
}
