import { useEffect, useState } from 'react';
import Link from 'next/link';
import ButtonLayout from '../../layout/ButtonLayout';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	mergerText: string;
	isLarge?: boolean;
	isActive?: boolean;
};

const getTimeRemaining = (targetDate: Date) => {
	const total = targetDate.getTime() - Date.now();
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

const CountdownButton = ({
	mergerText,
	isLarge = true,
	isActive = true
}: Props) => {
	const targetDate = new Date(Date.UTC(2024, 6, 1, 15, 0, 0)); // Month is 0-indexed, so 6 is July
	const [timeRemaining, setTimeRemaining] = useState({
		total: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	const [isLinkActive, setIsLinkActive] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
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

	if (!hasMounted) {
		return null; // Render nothing on the server
	}

	return (
		<>
			{isLinkActive ? (
				<Link
					href="https://singularitydao.ai/migrate-asi"
					target="_blank"
				>
					<ButtonLayout title={mergerText} isActive={isActive} />
				</Link>
			) : (
				<ButtonLayout
					title={`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}
					isActive={isActive}
					isLarge={isLarge}
					style={{
						pointerEvents: !isLinkActive ? 'none' : 'all'
					}}
				/>
			)}
		</>
	);
};

export default CountdownButton;
