import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	isPrimary?: boolean;
	type?: 'link' | 'download';
	title?: string;
};

const ButtonLayoutWrapper = styled.div<{ $isPrimary: boolean }>`
	padding: ${pxToRem(10)} ${pxToRem(20)};
	background: ${(props) =>
		props.$isPrimary ? 'var(--colour-lime)' : 'var(--colour-grey)'};
	backdrop-filter: ${(props) => (props.$isPrimary ? '' : 'blur(10px)')};
	color: var(--colour-black);
	display: flex;
	gap: ${pxToRem(8)};
	border-radius: 100px;
	position: relative;
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
	const { isPrimary = false, type = 'link', title = '' } = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<ButtonLayoutWrapper
			$isPrimary={isPrimary}
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
