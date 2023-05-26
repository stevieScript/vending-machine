import { useState } from 'react';

const Drink = () => {
	const src =
		'https://i5.walmartimages.com/asr/d873d3ed-21bc-4db1-a83e-cbdc4fb5960c.f8d4a7ecd39238308a7057358186cc95.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF';
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
			<h1>Drink</h1>
			{products.map((p, i) => (
				<img
					key={i}
					src={p.src}
					alt='can of soda'
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

export default Drink;
