import React from "react";

const CounterTwo = () => {
	const inialCount = 0;
    const [count, setCount] = React.useState(inialCount);
    
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount + 1);
		}
	};

	return (
		<>
			<h2>CounterTwo.js</h2>
			<p>Count: {count}</p>
			<button onClick={() => setCount(inialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
		</>
	);
};

export default CounterTwo;
