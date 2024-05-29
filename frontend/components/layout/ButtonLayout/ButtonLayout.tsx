import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	type?: 'link' | 'download';
	title?: string;
};

const ButtonLayoutWrapper = styled.div`
	padding: ${pxToRem(10)} ${pxToRem(20)};
	background: var(--colour-grey);
	backdrop-filter: blur(10px);
	color: var(--colour-black);
	display: flex;
	gap: ${pxToRem(8)};
	border-radius: 100px;
	position: relative;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-lime);
	}
`;

const Title = styled(motion.span)``;

const HoverTitle = styled(motion.span)``;

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
	const { type = 'link', title = '' } = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<ButtonLayoutWrapper
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
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
			<span>{type === 'link' ? '↗' : '↧'}</span>
		</ButtonLayoutWrapper>
	);
};

export default ButtonLayout;
