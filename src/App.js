import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Counter from "./components/counter";
import CurrentCount from "./components/currentCount";
import Home from "./components/home";
import { useState } from "react";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<BrowserRouter>
			<Navbar />

			<main className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/counter"
						element={
							<Counter
								counter={counter}
								setCounter={setCounter}
							/>
						}
					/>
					<Route
						path="/currentCount"
						element={<CurrentCount counter={counter} />}
					/>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
