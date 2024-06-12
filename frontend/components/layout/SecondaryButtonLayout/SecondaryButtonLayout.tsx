import styled from 'styled-components';
import TelegramSvg from '../../svgs/TelegramSvg';
import pxToRem from '../../../utils/pxToRem';
import XSvg from '../../svgs/XSvg';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
	useTelegram?: boolean;
	useTwitter?: boolean;
	title: string;
};

const SecondaryButtonLayoutWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(12)};

	span {
		color: var(--colour-black);
	}
`;

const IconWrapper = styled.div`
	height: ${pxToRem(23)};
	width: ${pxToRem(23)};
	background: var(--colour-black);
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
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

const SecondaryButtonLayout = (props: Props) => {
	const { useTelegram = false, useTwitter = false, title = '' } = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<SecondaryButtonLayoutWrapper
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<IconWrapper>
				{useTelegram && <TelegramSvg />}
				{useTwitter && <XSvg />}
			</IconWrapper>
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
		</SecondaryButtonLayoutWrapper>
	);
};

export default SecondaryButtonLayout;
