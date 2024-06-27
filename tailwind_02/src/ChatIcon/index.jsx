import "./style.css";

export const ChatIcon = () => (
  <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shodow-lg flex items-center space-x-4">
    <div className="shrink-0">
      <img
        className="h-12 w-12"
        src="/logos/chat-icon.png"
        alt="ChitChat Logo"
      />
    </div>
    <div>
      <div className="text-xl font-medium text-block">ChitChat</div>
      <p className="text-slate-500">You have a new message!</p>
    </div>
  </div>
);

export const _ChatIcon = () => {
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
