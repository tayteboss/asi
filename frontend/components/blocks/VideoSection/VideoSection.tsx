import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import MuxPlayer from '@mux/mux-player-react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
	data: MainPageType['videoOne'];
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

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		top: 0;
		width: 200%;
		transform: translateX(-50%);
	}

	mux-player {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const VideoSection = (props: Props) => {
	const { data, animateIn = false, index } = props;

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const { scrollY } = useViewportScroll();

	const y = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + windowHeight * 2],
		[0, 1000]
	);

	const router = useRouter();

	useEffect(() => {
		if (wrapperRef?.current) {
			setDistanceToTop(
				window.pageYOffset +
					wrapperRef.current.getBoundingClientRect().top
			);
		}

		setWindowHeight(window.innerHeight);

		const timer = setTimeout(() => {
			if (wrapperRef?.current) {
				setDistanceToTop(
					window.pageYOffset +
						wrapperRef.current.getBoundingClientRect().top
				);
			}

			setWindowHeight(window.innerHeight);
		}, 1000);

		return () => clearTimeout(timer);
	}, [distanceToTop, router]);

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
			{data && (
				<MuxPlayer
					streamType="on-demand"
					playbackId={data}
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
