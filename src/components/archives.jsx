import "./archives.css";

function archives() {
	const month = 11;
	const total_time = 31;

	return (
		<>
			<div id='block'>
				<h1 class='month'>{month}月</h1>
				<div class='day-list'>
					<div>
						<h2 class='day'>1日</h2>
						<div class="wrapper">
							<div class='li-item'></div>
							<div class='li-item'></div>
							<div class='li-item'></div>
							<div class='li-item'></div>
							<div class='li-item'></div>
							<div class='li-item'></div>
							<div class='li-item'></div>
							<div class='li-item'></div>
							<div class='li-item'></div>
						</div>
						<h2 class='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<h2 class='day'>2日</h2>
					<div class="wrapper">
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
					</div>
					<h2 class='day'>3日</h2>
					<div class="wrapper">
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
					</div>
					<h2 class='day'>4日</h2>
					<div class="wrapper">
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
						<div class='li-item'></div>
					</div>
				</div>
			</div>


		</>
	);
}

export default archives;