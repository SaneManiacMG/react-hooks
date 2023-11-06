import React from "react";

const CounterFour = () => {
	const [items, setItems] = React.useState([]);
	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		]);
	};

	return (
		<>
			<h2>CounterFour.js</h2>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</>
	);
};

export default CounterFour;
