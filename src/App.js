import "./App.css";
import Header from "./Components/UI/Header";
import Sidebar from "./Components/UI/Sidebar";
import SearchPage from "./Components/SearchPage";
import RecommendedVideos from "./Components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
