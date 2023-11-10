import "./screen.css"
import Close from '../imgs/arrClose.png'

function screen({ onChildEvent }) {
	function handleClick() {
		onChildEvent();
	}
	return (
		<>
			<div class='screen_div'>
				<div class='screen'>

				</div>
				<img src={Close} onClick={handleClick}></img>
			</div>
		</>
	);
}
export default screen;