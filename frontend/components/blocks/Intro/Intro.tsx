import styled from 'styled-components';
import { FileType } from '../../../shared/types/types';
import LogoSvg from '../../svgs/LogoSvg';
import pxToRem from '../../../utils/pxToRem';
import ButtonLayout from '../../layout/ButtonLayout';
import Link from 'next/link';
import VideoComponent from '../../common/MediaStack/VideoComponent';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	title: string | null;
	migrationGuideUrl: string | null;
	generalQuestionsUrl: string | null;
	whitePaperPdf: FileType | null;
	animateContent: boolean;
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
	padding: ${pxToRem(40)};
	overflow: auto;
	height: 100%;
	position: relative;

	transition: border-radius var(--transition-speed-slow)
		var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${pxToRem(30)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(20)};
	}
`;

const LogoWrapper = styled.div`
	position: relative;
	z-index: 2;

	svg {
		width: ${pxToRem(236)};
		height: auto;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${pxToRem(200)};
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

const LinksWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		align-items: flex-start;
		gap: ${pxToRem(10)};
	}
`;

const BlankCell = styled.div``;

const VideoWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const MotionWrapper = styled(motion.div)``;

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

const childVariants = {
	hidden: {
		opacity: 0,
		y: 3,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const Intro = (props: Props) => {
	const {
		title,
		migrationGuideUrl,
		generalQuestionsUrl,
		whitePaperPdf,
		animateContent
	} = props;

	return (
		<IntroWrapper>
			<Inner $animateContent={animateContent}>
				<VideoWrapper>
					<VideoComponent isPriority />
				</VideoWrapper>
				<LogoWrapper>
					<LogoSvg colour="var(--colour-black)" />
				</LogoWrapper>
				<AnimatePresence>
					{animateContent && (
						<TitleWrapper
							variants={wrapperVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
						>
							{title && (
								<Title variants={titleVariants} key={0}>
									{title}
								</Title>
							)}
							<LinksWrapper>
								{migrationGuideUrl && (
									<MotionWrapper
										variants={childVariants}
										key={1}
									>
										<Link
											href={migrationGuideUrl}
											target="_blank"
										>
											<ButtonLayout
												isPrimary
												title="Migration Guide"
											/>
										</Link>
									</MotionWrapper>
								)}
								{whitePaperPdf?.asset?.url && (
									<MotionWrapper
										variants={childVariants}
										key={2}
									>
										<Link
											href={whitePaperPdf.asset.url}
											target="_blank"
										>
											<ButtonLayout
												type="download"
												title="White Paper"
											/>
										</Link>
									</MotionWrapper>
								)}
								{generalQuestionsUrl && (
									<MotionWrapper
										variants={childVariants}
										key={3}
									>
										<Link
											href={generalQuestionsUrl}
											target="_blank"
										>
											<ButtonLayout title="White Paper" />
										</Link>
									</MotionWrapper>
								)}
							</LinksWrapper>
						</TitleWrapper>
					)}
				</AnimatePresence>
				<BlankCell />
			</Inner>
		</IntroWrapper>
	);
};

export default Intro;
