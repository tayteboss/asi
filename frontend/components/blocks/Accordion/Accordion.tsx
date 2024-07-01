import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PlusSvg from '../../svgs/PlusSvg';

type Props = {
	data: any;
};

const AccordionWrapper = styled.div``;

const AccordionItemWrapper = styled.div`
	border-bottom: 1px solid var(--colour-black);
	position: relative;

	&:not(:last-child) {
		margin-bottom: ${pxToRem(44)};
	}
`;

const AccordionTitle = styled.h3`
	margin-bottom: ${pxToRem(30)};
	padding-right: ${pxToRem(80)};
	cursor: pointer;
`;

const AccordionInnerWrapper = styled(motion.div)`
	padding-bottom: ${pxToRem(30)};
`;

const AccordionInner = styled(motion.div)``;

const TriggerWrapper = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const wrapperVariants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			when: 'afterChildren'
		}
	},
	visible: {
		height: 'auto',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			when: 'beforeChildren'
		}
	}
};

const childVariants = {
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
			ease: 'easeInOut'
		}
	}
};

type AccordionItemProps = {
	title: string;
	content: any;
	index: number;
	isOpened: boolean;
	onClick: () => void;
};

const AccordionItem = (props: AccordionItemProps) => {
	const { title, content, index, isOpened, onClick } = props;

	return (
		<AccordionItemWrapper>
			<TriggerWrapper
				style={{
					transform: isOpened ? 'rotate(45deg)' : 'rotate(0deg)'
				}}
			>
				<PlusSvg colour="var(--colour-black)" />
			</TriggerWrapper>
			{title && (
				<AccordionTitle onClick={onClick}>{title}</AccordionTitle>
			)}
			<AnimatePresence>
				{isOpened && (
					<AccordionInnerWrapper
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						<AccordionInner
							variants={childVariants}
							className="rich-text rich-text--accordion"
						>
							{content && <PortableText value={content} />}
						</AccordionInner>
					</AccordionInnerWrapper>
				)}
			</AnimatePresence>
		</AccordionItemWrapper>
	);
};

const Accordion = (props: Props) => {
	const { data } = props;
	const [openedIndex, setOpenedIndex] = useState<number | null>(0);

	const handleItemClick = (index: number) => {
		setOpenedIndex(index === openedIndex ? null : index);
	};

	return (
		<AccordionWrapper>
			{data.map((item: any, i: number) => (
				<AccordionItem
					key={i}
					index={i}
					title={item.title}
					content={item.content}
					isOpened={i === openedIndex}
					onClick={() => handleItemClick(i)}
				/>
			))}
		</AccordionWrapper>
	);
};

export default Accordion;
