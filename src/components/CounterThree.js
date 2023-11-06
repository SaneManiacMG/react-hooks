import React from "react";

const CounterThree = () => {
	const [name, setName] = React.useState({ firstName: "", lastName: "" });

	return (
		<div>
			<h2>CounterThree.js</h2>
			<input
				type="text"
				value={name.firstName}
				onChange={(e) => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={(e) => setName({ ...name, lastName: e.target.value })}
			/>
			<h3>Your first name is {name.firstName}</h3>
			<h3>Your last name is {name.lastName}</h3>
			<h3>{JSON.stringify(name)}</h3>
		</div>
	);
};

export default CounterThree;
