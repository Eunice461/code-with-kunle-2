import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import CoursePage from "./pages/CoursePage";
import Course from "./pages/CoursePage";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Reviews from "./pages/Reviews";

function App() {
  return (
		<div>
			<Router>
				<Navbar />
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/learn'>
					<LearnPage />
				</Route>
				<Route path='/register'>
					<RegisterPage />
				</Route>
				<Route path='/login'>
					<LoginPage />
				</Route>
				<Route path='/course'>
					<CoursePage />
				</Route>
				<Newsletter />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
