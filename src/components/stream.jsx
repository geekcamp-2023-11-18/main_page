import "./stream.css"
import open from "../imgs/arrOpen.png"

const stream = ({ onChildEvent }) => {

	function handleClick() {
		onChildEvent();
	}

	return (
		<>
			<div class='right'>
				<img src={open} onClick={handleClick}></img>


			</div>

		</>
	);
}

export default stream;