import "./style.css";

export const ChatIcon = () => {
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
