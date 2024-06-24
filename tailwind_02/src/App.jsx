import "./App.css";
import "./chat-notification.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <ChatIcon />
    </div>
  );
}

const ChatIcon = () => {
  return (
    <div className="chat-notification">
      <div className="chat-notification-logo-wrapper">
        <img
          className="chat-notification-logo"
          src="/logos/chat-icon.png"
          alt="Chat icon"
        />
      </div>
      <div className="chat-notification-content">
        <h4 className="chat-notification-title">ChitChat</h4>
        <p className="chat-notification-message">You have a new message!</p>
      </div>
    </div>
  );
};

export default App;
