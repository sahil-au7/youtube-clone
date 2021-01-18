import "./App.css";
import Header from "./Components/UI/Header";
import Sidebar from "./Components/UI/Sidebar";
import RecommendedVideos from "./Components/RecommendedVideos";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
