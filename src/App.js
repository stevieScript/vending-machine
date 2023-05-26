import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Drink from './Drink';
import Candy from './Candy';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<VendingMachine />}
					/>
					<Route
						path='/chips'
						element={<Chips />}
					/>
					<Route
						path='/drink'
						element={<Drink />}
					/>
					<Route
						path='/candy'
						element={<Candy />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
