import './App.css';
import ChatGPTTypewriterEffect from 'react-chatgpt-typewriter';
import 'react-chatgpt-typewriter/lib/index.css';

function App() {
  return (
    <div className="App">
      <ChatGPTTypewriterEffect
        delay={50}
        cursor={{
          width: '2em',
          height: '3em',
          marginLeft: '1em',
        }}
        onFinished={() => {
          console.log('Text writed');
        }}
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis corporis magnam esse? At asperiores molestias fugit mollitia vero adipisci debitis?"
      />
    </div>
  );
}

export default App;
