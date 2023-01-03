import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { w } from 'windstitch';
import Card from '../components/Card';
import Layout from '../components/Layout/Main';
import Timer from '../components/Timer';

const Grid = w.div(`
	h-full
	grid
	grid-cols-1
	grid-rows-5
	lg:grid-cols-3
	lg:grid-rows-2
	gap-8
`);

const Home = () => {
	const [timerStarted, setTimerStarted] = useState(false);
	return (
		<Layout>
			<Grid>
				<Card className="lg:col-span-2" title="Resumo da semana">
					chart
				</Card>
				<Card className="row-span-2" title="Novo Checkpoint">
					<Timer started={timerStarted} />
					<Button onClick={() => setTimerStarted(!timerStarted)}>Start</Button>
				</Card>
				<Card title="Resumo do dia">chart</Card>
				<Card title="To do">chart</Card>
			</Grid>
		</Layout>
	);
};

export default Home;
