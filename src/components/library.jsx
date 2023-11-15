import nightsky from '../imgs/nightsky_light.jpg'
import Archives from './archives.jsx'
import Stream from './stream.jsx'
import Screen from './screen.jsx'
import './library.css'
import { useState } from 'react'

function library() {
	const [expension, isExpension] = useState(false);
	const changeWindow = () => {
		isExpension(!expension);
	}

	return (
		<>
			<img src={nightsky} className='library_background'></img>
			{!expension ?
				<div>
					<ul>
						<li><Archives /></li>
						<li><Stream onChildEvent={changeWindow} /></li>
					</ul>
				</div>
				:
				<Screen onChildEvent={changeWindow} />
			}
		</>
	);
}

export default library;