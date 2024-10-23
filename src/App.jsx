import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MarketStatsTable from "./components/MarketStatsTable";
import CustomerInterval from "./components/CustomerInterval";

function App() {
	return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<MarketStatsTable />} />
					<Route path="/interval" element={<CustomerInterval />} />
				</Routes>
    </BrowserRouter>
	);
}
export default App;
