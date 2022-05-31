import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Sidebar sidebarElements={props.state.sidebar}/>
            <div className="App-main">
                <Routes>
                    <Route path='/profile' element={<Profile updatePost={props.updatePost} addPost={props.addPost} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText}/>}/>
                    <Route path='/dialogs' element={<Dialogs messages={props.state.dialogsPage.messages}
                                                             dialogs={props.state.dialogsPage.dialogs}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
