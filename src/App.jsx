import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Interval from "./Pages/Interval/Interval";
import Stats from "./Pages/Stats/Stats";

function App() {
	return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Stats />} />
					<Route path="/interval" element={<Interval />} />
				</Routes>
    </BrowserRouter>
	);
}
export default App;
