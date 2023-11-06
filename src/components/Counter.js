import React from "react";

const Counter = () => {
	const [count, setCount] = React.useState(0);
	const increment = () => setCount(count + 1);

	return (
		<>
			<h2>Counter.js</h2>
			<button onClick={increment}>Count {count}</button>
		</>
	);
};

export default Counter;
