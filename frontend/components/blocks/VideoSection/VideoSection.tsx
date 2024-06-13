import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import MuxPlayer from '@mux/mux-player-react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';

type Props = {
	data: MainPageType['videoOne'];
	mobileData?: MainPageType['videoOneMobile'];
	animateIn?: boolean;
	index: number;
};

const VideoSectionWrapper = styled(motion.div)`
	position: absolute;
	top: -10vh;
	left: 0;
	width: 100%;
	height: auto;
	z-index: 1;
	mix-blend-mode: multiply;

	* {
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		top: 0;
	}

	mux-player {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const VideoSection = (props: Props) => {
	const { data, animateIn = false, index, mobileData } = props;

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
		<VideoSectionWrapper
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
			animate={animateIn ? 'visible' : 'hidden'}
			exit="hidden"
			key={index}
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
				/>
			)}
		</VideoSectionWrapper>
	);
};

export default VideoSection;
