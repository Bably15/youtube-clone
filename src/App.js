import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
// import VideoItem from "./components/Video/VideoItem";
import router from "./router/mainRouter";
import { RouterProvider } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="main__content">
                <Sidebar />
                <div className="main__content--body">
                    <RouterProvider router={router} />
                </div>
            </div>
        </div>
    );
}

export default App;
