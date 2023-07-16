import { useRef } from "react";

function ReferenceHook() {
	const nameRef = useRef();

	function handleSubmit() {
		alert(nameRef.current.value);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>name</label>
				<input type="text" ref={nameRef} />
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default ReferenceHook;
