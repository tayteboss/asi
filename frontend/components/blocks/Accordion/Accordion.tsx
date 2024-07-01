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
	cursor: pointer;
	position: relative;

	&:not(:last-child) {
		margin-bottom: ${pxToRem(44)};
	}
`;

const AccordionTitle = styled.h3`
	margin-bottom: ${pxToRem(30)};
	padding-right: ${pxToRem(80)};
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

const AccordionItem = (props: any) => {
	const { title, content, index } = props;

	const [isOpened, setIsOpened] = useState(index === 0 ? true : false);

	return (
		<AccordionItemWrapper onClick={() => setIsOpened(!isOpened)}>
			<TriggerWrapper
				style={{
					transform: isOpened ? 'rotate(45deg)' : 'rotate(0deg)'
				}}
			>
				<PlusSvg colour="var(--colour-black)" />
			</TriggerWrapper>
			{title && <AccordionTitle>{title}</AccordionTitle>}
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

	return (
		<AccordionWrapper>
			{data.map((item: any, i: number) => (
				<AccordionItem key={i} {...item} index={i} />
			))}
		</AccordionWrapper>
	);
};

export default Accordion;
