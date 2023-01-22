import {BrowserRouter, Routes, Route } from 'react-router-dom';


function Routeswitch () {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App/>}/>
			</Routes>
		</BrowserRouter>
	)
}