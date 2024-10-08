import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import MuxPlayer from '@mux/mux-player-react';
import {
	motion,
	useViewportScroll,
	useScroll,
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
	height: 100vh;
	z-index: 1;

	mux-player {
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
	}
`;

const Cover = styled.div`
	position: absolute;
	bottom: -2px;
	left: 0;
	width: 100%;
	height: 5px;
	background: white;
	z-index: 10;
`;

const HeroVideoSection = (props: Props) => {
	const { data, mobileData } = props;

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

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
		>
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
			<Cover />
		</HeroVideoSectionWrapper>
	);
};

export default HeroVideoSection;
