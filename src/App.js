import "./App.css";
import Header from "./Components/UI/Header";
import Sidebar from "./Components/UI/Sidebar";
import RecommendedVideos from "./Components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>search page</h1>
          </Route>
          <Route path="/">
            <Header />
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
