import {ChatEngine} from 'react-chat-engine';
import {ChatFeed} from 'react-chat-engine';
// import ChatFeed from './Components/ChatFeed';

import "./App.css";

function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="4e40dd00-0495-44f2-86ae-0e7e4b6e7365"
        userName="Angelo"
        userSecret={process.env.REACT_APP_USER_PASSWORD}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play}
      />
    </div>
  );
}

export default App;
