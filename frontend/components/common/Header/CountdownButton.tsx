import { useEffect, useState } from 'react';
import Link from 'next/link';
import ButtonLayout from '../../layout/ButtonLayout';

type Props = {
	mergerText: string;
};

const getTimeRemaining = (targetDate: Date) => {
	const total = targetDate.getTime() - Date.now();
	// const total = Date.parse(endTime) - Date.now();
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));
	return {
		total,
		days,
		hours,
		minutes,
		seconds
	};
};

const CountdownButton = ({ mergerText }: Props) => {
	const targetDate = new Date(Date.UTC(2024, 6, 1, 15, 0, 0)); // Month is 0-indexed, so 11 is December
	const now = new Date();

	const [timeRemaining, setTimeRemaining] = useState(
		getTimeRemaining(targetDate)
	);
	const [isLinkActive, setIsLinkActive] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			const timeLeft = getTimeRemaining(targetDate);
			setTimeRemaining(timeLeft);
			if (timeLeft.total <= 0) {
				setIsLinkActive(true);
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [targetDate]);

	// const utcTimeString = `${year}-${month}-${date} ${hours}:${minutes}:${seconds} UTC`;

	return (
		<Link
			href="/white-paper"
			// onMouseOver={() => setIsHovered(true)}
			// onMouseOut={() => setIsHovered(false)}
		>
			<ButtonLayout
				title={
					isLinkActive
						? mergerText
						: `${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`
				}
				isActive={true}
			/>
		</Link>
	);
};

export default CountdownButton;
