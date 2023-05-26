import { useState } from 'react';

const Candy = () => {
	const src =
		'https://i5.walmartimages.com/asr/5d503cbc-52c1-4384-8a4b-9b9699681328.143272567d0aae6071feb3c8dc884020.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF';

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
			<h1>Candy</h1>
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

export default Candy;
