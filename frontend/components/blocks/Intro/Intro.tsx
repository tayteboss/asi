import styled from 'styled-components';
import { FileType } from '../../../shared/types/types';
import LogoSvg from '../../svgs/LogoSvg';
import pxToRem from '../../../utils/pxToRem';
import ButtonLayout from '../../layout/ButtonLayout';
import Link from 'next/link';
import VideoComponent from '../../common/MediaStack/VideoComponent';
import { AnimatePresence, motion } from 'framer-motion';
import FetchLogoSvg from '../../svgs/FetchLogoSvg';
import OceanLogoSvg from '../../svgs/OceanLogoSvg';
import SingularityLogo from '../../svgs/SingularityLogo';
import useViewportWidth from '../../../hooks/useViewportWidth';

type Props = {
	title: string | null;
	animateContent: boolean;
	animation: any;
};

const IntroWrapper = styled.div`
	flex: 1;

	.media-wrapper {
		height: 100%;
		width: 100%;
	}
`;

const Inner = styled.div<{ $animateContent: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: ${(props) => (props.$animateContent ? pxToRem(30) : '0')};
	padding: ${pxToRem(44)} ${pxToRem(40)};
	overflow: auto;
	height: 100%;
	position: relative;

	transition: border-radius var(--transition-speed-slow)
		var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${pxToRem(36)} ${pxToRem(30)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(26)} ${pxToRem(20)};
	}
`;

const PrimaryLogoWrapper = styled.div`
	position: relative;
	z-index: 2;

	svg {
		width: ${pxToRem(417)};
		height: auto;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${pxToRem(300)};
		}
	}
`;

const TitleWrapper = styled(motion.div)`
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(46)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-top: ${pxToRem(20)};
	}
`;

const Title = styled(motion.h1)`
	color: var(--colour-black);
	width: 80%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 100%;
	}
`;

const Partnership = styled(motion.p)`
	color: var(--colour-black);
`;

const LogosWrapper = styled(motion.div)`
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	gap: ${pxToRem(35)};

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

const ColourBlock = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	overflow: hidden;
	background: var(--colour-lime);
`;

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

const Intro = (props: Props) => {
	const { title, animateContent } = props;

	const viewport = useViewportWidth();
	const isMobile = viewport === 'tabletPortrait' || viewport === 'mobile';

	return (
		<IntroWrapper>
			<Inner $animateContent={animateContent}>
				<ColourBlock />
				<PrimaryLogoWrapper>
					<LogoSvg colour="var(--colour-black)" />
				</PrimaryLogoWrapper>
				<AnimatePresence>
					{animateContent && (
						<TitleWrapper
							variants={wrapperVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							key="title"
						>
							{title && (
								<Title variants={titleVariants} key={0}>
									{title}
								</Title>
							)}
						</TitleWrapper>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{animateContent && (
						<LogosWrapper
							variants={wrapperVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							key="logos"
						>
							<Partnership
								className="type-book"
								variants={titleVariants}
							>
								A partnership between
							</Partnership>
							<SecondaryLogosWrapper>
								<Link
									href="https://singularitynet.io"
									target="_blank"
								>
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
								<Link
									href="https://oceanprotocol.com"
									target="_blank"
								>
									<SecondaryLogoWrapper
										$height={isMobile ? 24 : 38}
										variants={titleVariants}
									>
										<OceanLogoSvg />
									</SecondaryLogoWrapper>
								</Link>
							</SecondaryLogosWrapper>
						</LogosWrapper>
					)}
				</AnimatePresence>
			</Inner>
		</IntroWrapper>
	);
};

export default Intro;
