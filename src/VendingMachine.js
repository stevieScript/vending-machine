import { NavLink } from 'react-router-dom';
// import Chips from './Chips';
// import Drink from './Drink';

const VendingMachine = () => {
	return (
		<div className='machine'>
			<h1>Vending Machine</h1>
			<NavLink
				className={'link'}
				exact
				to='/chips'
			>
				Chips
			</NavLink>
			<NavLink
				className={'link'}
				exact
				to='/drink'
			>
				Drink
			</NavLink>
			<NavLink
				className={'link'}
				exact
				to='/candy'
			>
				Candy
			</NavLink>
		</div>
	);
};

export default VendingMachine;
