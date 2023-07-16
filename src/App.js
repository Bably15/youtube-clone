import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import VideoItem from "./components/Video/VideoItem";
function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="main__content">
                <Sidebar />
                <VideoItem />
            </div>
        </div>
    );
}

export default App;
