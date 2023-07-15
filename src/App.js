import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./constants/sidebar";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Sidebar />
        </div>
    );
}

export default App;
