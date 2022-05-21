import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Sidebar />
        <div className="App-main">
            <Profile />
        </div>
    </div>
  );
}

export default App;
