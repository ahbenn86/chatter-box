import {ChatEngine} from 'react-chat-engine';
import "./App.css";

function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="4e40dd00-0495-44f2-86ae-0e7e4b6e7365"
        userName="Angelo"
        userSecret={process.env.REACT_APP_USER_PASSWORD}
      />
    </div>
  );
}

export default App;
