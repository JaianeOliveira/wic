import { useState } from 'react';

type TimerProps = {
	started: boolean;
};

const Timer = ({ started = false }: TimerProps) => {
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	const [time, setTime] = useState(0);

	let interval: NodeJS.Timer | undefined;

	const formatTime = () => {
		interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
	};

	console.log(time);

	return (
		<div>
			{hours < 10 ? `0${hours}` : hours}:
			{minutes < 10 ? `0${minutes}` : minutes}:
			{seconds < 10 ? `0${seconds}` : seconds}
		</div>
	);
};

export default Timer;
