import React, { useState } from "react";
import Header from "./components/header";
import feedbackData from "./data/feedbackData";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/feedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutLink from "./components/aboutLink";
import { FeedbackProvider } from "./context/feedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
