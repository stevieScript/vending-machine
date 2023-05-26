import { useState } from 'react';

const Chips = () => {
	const src =
		'https://i5.walmartimages.com/asr/af780c28-d0c0-4fe3-aaa1-61c104098b11.38a97b15d730e88e9c2f3e75ff50a017.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF';

	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([]);

	const genRandom = () => {
		return Math.floor(Math.random() * 100);
	};

	const addProduct = () => {
		setProducts([...products, { src, x: genRandom(), y: genRandom() }]);
	};

	const handleClick = () => {
		setCount(count + 1);
		addProduct();
	};
	return (
		<div>
			<h1>Chips</h1>
			{products.map((p, i) => (
				<img
					key={i}
					src={p.src}
					alt='bag of chips'
					style={{
						position: 'absolute',
						left: `${p.x}vw`,
						top: `${p.y}vh`,
						width: '100px',
						height: '100px',
					}}
				/>
			))}
			<p>Count: {count}</p>
			<button onClick={handleClick}>Add</button>
			<button
				onClick={() => {
					window.history.back();
				}}
			>
				Go Back
			</button>
		</div>
	);
};

export default Chips;
