import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	type?: 'link' | 'download';
	title?: string;
	isActive?: boolean;
};

const ButtonLayoutWrapper = styled.div<{ $isActive: boolean }>`
	padding: ${pxToRem(10)} ${pxToRem(20)};
	background: ${(props) =>
		props.$isActive ? 'var(--colour-lime)' : 'var(--colour-white)'};
	backdrop-filter: blur(10px);
	color: var(--colour-black);
	display: flex;
	align-items: center;
	gap: ${pxToRem(8)};
	border-radius: 100px;
	position: relative;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: ${(props) =>
			props.$isActive ? 'var(--colour-black)' : 'var(--colour-lime)'};
		color: ${(props) =>
			props.$isActive ? 'var(--colour-lime)' : 'var(--colour-white)'};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(10)} ${pxToRem(15)};
	}
`;

const Title = styled(motion.span)`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(13)};
		white-space: nowrap;
	}
`;

const HoverTitle = styled(motion.span)`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(13)};
		white-space: nowrap;
	}
`;

const Icon = styled.span`
	padding-top: 2px;
`;

const titleVariants = {
	hidden: {
		y: -5,
		opacity: 0,
		transition: {
			duration: 0.15,
			ease: 'easeInOut'
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.15,
			ease: 'easeInOut'
		}
	}
};

const hoverTitleVariants = {
	hidden: {
		y: 5,
		opacity: 0,
		transition: {
			duration: 0.15,
			ease: 'easeInOut'
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.15,
			ease: 'easeInOut'
		}
	}
};

const ButtonLayout = (props: Props) => {
	const { type = 'default', title = '', isActive } = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<ButtonLayoutWrapper
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			$isActive={isActive}
			className="button-layout"
		>
			<AnimatePresence mode="wait">
				{isHovered ? (
					<Title
						key="title"
						variants={titleVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{title}
					</Title>
				) : (
					<HoverTitle
						key="hover-title"
						variants={hoverTitleVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{title}
					</HoverTitle>
				)}
			</AnimatePresence>
			{type === 'download' && <Icon>↧</Icon>}
			{type === 'default' && <Icon>↗</Icon>}
		</ButtonLayoutWrapper>
	);
};

export default ButtonLayout;
