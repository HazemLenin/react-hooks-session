import { useEffect, useState } from "react";

function NameState() {
	const [name, setName] = useState("old name");

	function updateName() {
		setName("new name");
	}

	// useEffect(() => {
	//     console.log(name);
	// }, [name]);

	// useEffect(() => {
	// 	alert("hello world");
	// }, []);

	return (
		<>
			<h1>{name}</h1>
			<button onClick={updateName}>change</button>
		</>
	);
}

export default NameState;
