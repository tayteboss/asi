import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	type?: 'link' | 'download';
	title?: string;
	isActive?: boolean;
	isSmall?: boolean;
	isLarge?: boolean;
	disabled?: boolean;
	style?: any;
};

const ButtonLayoutWrapper = styled.button<{ $isActive: boolean }>`
	padding: ${pxToRem(10)} ${pxToRem(20)};
	background: ${(props) =>
		props.$isActive ? 'var(--colour-lime)' : 'var(--colour-black)'};
	backdrop-filter: blur(10px);
	color: ${(props) =>
		props.$isActive ? 'var(--colour-black)' : 'var(--colour-white)'};
	display: flex;
	align-items: center;
	gap: ${pxToRem(8)};
	border-radius: 100px;
	position: relative;
	pointer-events: all;

	transition: all var(--transition-speed-default) var(--transition-ease);

	display: flex;
	justify-content: space-between;

	&:hover {
		background: ${(props) =>
			props.$isActive ? 'var(--colour-black)' : 'var(--colour-white)'};
		color: ${(props) =>
			props.$isActive ? 'var(--colour-lime)' : 'var(--colour-black)'};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(10)} ${pxToRem(15)};
		backdrop-filter: blur(5px);
	}
`;

const Title = styled(motion.span)<{ $isSmall: boolean; $isLarge: boolean }>`
	font-size: ${(props) =>
		props.$isSmall ? '12px' : props.$isLarge ? '24px' : '14px'};
	/* color: red !important; */

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${(props) =>
			props.$isSmall ? '9px' : props.$isLarge ? '18px' : '14px'};
		white-space: nowrap;
	}
`;

const HoverTitle = styled(motion.span)<{
	$isSmall: boolean;
	$isLarge: boolean;
}>`
	font-size: ${(props) =>
		props.$isSmall ? '12px' : props.$isLarge ? '24px' : '14px'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${(props) => (props.$isLarge ? '18px' : '13px')};
		white-space: nowrap;
	}
`;

const Icon = styled.span<{
	$isLarge: boolean;
}>`
	padding-top: 2px;
	scale: ${(props) => (props.$isLarge ? 1.5 : 1)};
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
	const {
		type = 'default',
		title = '',
		isActive,
		isSmall = false,
		disabled = false,
		isLarge = false
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<ButtonLayoutWrapper
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			$isActive={isActive}
			className="button-layout"
			disabled={disabled}
			{...props}
		>
			<AnimatePresence mode="wait">
				{isHovered ? (
					<Title
						key="title"
						variants={titleVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						$isSmall={isSmall}
						$isLarge={isLarge}
					>
						{title}
					</Title>
				) : (
					<HoverTitle
						key="hover-title"
						variants={hoverTitleVariants}
						$isSmall={isSmall}
						$isLarge={isLarge}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{title}
					</HoverTitle>
				)}
			</AnimatePresence>
			{type === 'download' && <Icon $isLarge={isLarge}>↧</Icon>}
			{type === 'default' && <Icon $isLarge={isLarge}>↗</Icon>}
		</ButtonLayoutWrapper>
	);
};

export default ButtonLayout;
