import "./App.css";
import { ChatIcon } from "./ChatIcon";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <ChatIcon />
      <button className="text-base font-medium rounded-lg p-3 bg-slate-100 text-slate-900">
        Decline
      </button>
      <button className="text-base font-medium rounded-lg p-3 bg-sky-500 text-white">
        Accept
      </button>
    </div>
  );
}

export default App;
