import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext"; // Import UserProvider
import { TaskProvider } from "./contexts/TaskContext"; // Import TaskProvider
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <UserProvider>
      <TaskProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/HomePage" exact component={HomePage} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/profile" component={ProfileEditPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      </TaskProvider>
    </UserProvider>
  );
};

export default App;
