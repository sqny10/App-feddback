import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from "./components/context/FeedbackContext";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
              </>
            }>
            </Route>
            <Route 
              path="/about" 
              element={<AboutPage/>}
            />
          </Routes>
        </div>
        <AboutIconLink/>
      </Router>
    </FeedbackProvider>
  )
}

export default App
