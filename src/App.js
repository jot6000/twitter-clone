import './App.css';
import Feed from './features/feed/Feed';
import Navbar from './features/navbar/Navbar';
import DirectMessagesFeed from './features/directMessages/DirectMessageFeed';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Feed/>
      <DirectMessagesFeed/>
    </div>
  );
}

export default App;
