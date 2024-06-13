import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import MuxPlayer from '@mux/mux-player-react';
import {
	motion,
	useViewportScroll,
	useTransform,
	useAnimation
} from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';

type Props = {
	data: MainPageType['videoOne'];
	mobileData?: MainPageType['videoOne'];
};

const HeroVideoSectionWrapper = styled(motion.section)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100dvh;
	z-index: 1;
	overflow: hidden;

	mux-player {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const CursorParallaxWrapper = styled(motion.div)`
	position: relative;
	height: 100%;

	&::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 100%;
		height: 10px;
		background-color: white;
		z-index: 10;
	}

	&::before {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		width: 100%;
		height: 10px;
		background-color: white;
		z-index: 10;
	}
`;

const HeroVideoSection = (props: Props) => {
	const { data, mobileData } = props;

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const { scrollY } = useViewportScroll();

	const viewport = useViewportWidth();
	const mobile = viewport === 'mobile';

	useEffect(() => {
		const handleScroll = () => {
			if (wrapperRef?.current) {
				setDistanceToTop(
					window.pageYOffset +
						wrapperRef.current.getBoundingClientRect().top
				);
			}

			setWindowHeight(window.innerHeight);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const y = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + windowHeight * 2],
		[0, 1000]
	);

	const videoData = mobile && mobileData ? mobileData : data;

	const animation = useAnimation();

	const handleMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		const moveX = clientX - window.innerWidth / 2;
		const moveY = clientY - window.innerHeight / 2;
		const offsetFactor = 50;
		animation.start({
			x: moveX / offsetFactor,
			y: moveY / offsetFactor
		});
	};

	return (
		<HeroVideoSectionWrapper
			style={{ y }}
			variants={{
				hidden: {
					opacity: 0
				},
				visible: {
					opacity: 1,
					transition: {
						duration: 0.5,
						delay: 1
					}
				}
			}}
			initial="hidden"
			animate="visible"
			exit="hidden"
			key={'intro-video'}
			ref={wrapperRef}
			onMouseMove={(e) => handleMouseMove(e)}
		>
			<CursorParallaxWrapper animate={animation}>
				{videoData && (
					<MuxPlayer
						streamType="on-demand"
						playbackId={videoData}
						autoPlay="muted"
						loop={true}
						thumbnailTime={1}
						preload="auto"
						muted
						playsInline={true}
						minResolution="1440p"
					/>
				)}
			</CursorParallaxWrapper>
		</HeroVideoSectionWrapper>
	);
};

export default HeroVideoSection;
