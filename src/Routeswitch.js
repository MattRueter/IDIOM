import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import LandingPage from './Pages/Landing-page.js';
import LoginPage from './Pages/Login-page.js';
import ExercisePage from './Pages/Exercise-page.js';


export default function Routeswitch () {

	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage/>}/>
				<Route path='home' element={<Home/>}/>
				<Route path='exercises' element={<ExercisePage/>}/>
				<Route path='login' element={<LoginPage/>}/>
			</Routes>
		</BrowserRouter>
	)
}