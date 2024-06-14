import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import AnimateText from '../../layout/AnimateText';
import LayoutWrapper from '../../layout/LayoutWrapper';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useViewportWidth from '../../../hooks/useViewportWidth';
import SingularityLogo from '../../svgs/SingularityLogo';
import FetchLogoSvg from '../../svgs/FetchLogoSvg';
import OceanLogoSvg from '../../svgs/OceanLogoSvg';
import HeroVideoSection from '../HeroVideoSection';

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.2
		}
	}
};

const titleVariants = {
	hidden: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 0.4,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: 'easeInOut'
		}
	}
};

const HeroSectionWrapper = styled.section`
	height: 100svh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	position: relative;

	.layout-wrapper {
		width: 100%;
		z-index: 2;
		pointer-events: none;
	}
`;

const Blank = styled.div`
	height: ${pxToRem(82)};
`;

const TitleWrapper = styled.div`
	pointer-events: none;
`;

const Title = styled.h1``;

const Partnership = styled(motion.p)`
	color: var(--colour-black);
`;

const LogosWrapper = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: center;
	gap: ${pxToRem(35)};
	padding-bottom: ${pxToRem(36)};
	pointer-events: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(16)};
		flex-direction: column;
		align-items: flex-start;
	}
`;

const SecondaryLogoWrapper = styled(motion.div)<{ $height: number }>`
	height: ${(props) => props.$height}px;
	width: auto;

	svg {
		height: 100%;
		width: auto;

		path {
			transition: all var(--transition-speed-default)
				var(--transition-ease);
		}
	}

	&:hover {
		svg {
			path {
				opacity: 0.5;
			}
		}
	}
`;

const SecondaryLogosWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(35)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(20)};
	}
`;

type Props = {
	title: MainPageType['heroTitle'];
	videoData: MainPageType['videoOne'];
	videoMobileData: MainPageType['videoOneMobile'];
};

const HeroSection = (props: Props) => {
	const { title, videoData, videoMobileData } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	const viewport = useViewportWidth();
	const isMobile = viewport === 'mobile' || viewport === 'tabletPortrait';

	return (
		<HeroSectionWrapper ref={ref} className="performance">
			<Blank />
			<LayoutWrapper>
				<TitleWrapper>
					{title && (
						<Title className="type-h1 type-h1--blur-in">
							<AnimateText active={inView} text={title} />
						</Title>
					)}
				</TitleWrapper>
			</LayoutWrapper>
			<LayoutWrapper>
				<LogosWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					key="logos"
				>
					<Partnership className="type-book" variants={titleVariants}>
						A partnership between
					</Partnership>
					<SecondaryLogosWrapper>
						<Link href="https://singularitynet.io" target="_blank">
							<SecondaryLogoWrapper
								$height={isMobile ? 22 : 46}
								variants={titleVariants}
							>
								<SingularityLogo />
							</SecondaryLogoWrapper>
						</Link>
						<Link href="https://fetch.ai" target="_blank">
							<SecondaryLogoWrapper
								$height={isMobile ? 15 : 23}
								variants={titleVariants}
							>
								<FetchLogoSvg />
							</SecondaryLogoWrapper>
						</Link>
						<Link href="https://oceanprotocol.com" target="_blank">
							<SecondaryLogoWrapper
								$height={isMobile ? 24 : 40}
								variants={titleVariants}
							>
								<OceanLogoSvg />
							</SecondaryLogoWrapper>
						</Link>
					</SecondaryLogosWrapper>
				</LogosWrapper>
			</LayoutWrapper>
			<HeroVideoSection data={videoData} mobileData={videoMobileData} />
		</HeroSectionWrapper>
	);
};

export default HeroSection;
