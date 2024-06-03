import styled from 'styled-components';
import { FileType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import PlusSvg from '../../svgs/PlusSvg';
import { useState } from 'react';
import ButtonLayout from '../../layout/ButtonLayout';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	migrationGuideContent: any | null;
	documentationPdf: FileType | null;
};

const FooterContentWrapper = styled.div`
	border-top: 1px solid var(--colour-white);
	padding-top: ${pxToRem(20)};
	margin-bottom: ${pxToRem(20)};
`;

const Upper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(15)};
	}
`;

const IndicatorWrapper = styled(motion.div)``;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(20)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(15)};
	}
`;

const Trigger = styled.button``;

const AccordionWrapper = styled(motion.div)``;

const AccordionInner = styled(motion.div)`
	padding: ${pxToRem(30)} 0 ${pxToRem(10)};
`;

const ContentWrapper = styled.div`
	max-width: ${pxToRem(1500)};
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			when: 'afterChildren'
		}
	},
	visible: {
		opacity: 1,
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

const FooterContent = (props: Props) => {
	const { documentationPdf, migrationGuideContent } = props;

	const [accordionActive, setAccordionActive] = useState(false);

	const handleAccordion = () => {
		if (accordionActive) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});

			const timer = setTimeout(() => {
				setAccordionActive(!accordionActive);
			}, 500);

			return () => {
				clearTimeout(timer);
			};
		} else {
			setAccordionActive(!accordionActive);

			const timer = setTimeout(() => {
				window.scrollTo({
					top: document.body.scrollHeight,
					behavior: 'smooth'
				});
			}, 500);

			return () => {
				clearTimeout(timer);
			};
		}
	};

	return (
		<FooterContentWrapper>
			<Upper>
				<IndicatorWrapper
					initial={{ rotate: 0 }}
					animate={{
						rotate: accordionActive ? 45 : 0
					}}
				>
					<PlusSvg />
				</IndicatorWrapper>
				<ButtonsWrapper>
					{migrationGuideContent && (
						<Trigger onClick={() => handleAccordion()}>
							<ButtonLayout
								title="Migration Guide"
								isActive={accordionActive}
							/>
						</Trigger>
					)}
					{documentationPdf && (
						<Link
							href={documentationPdf?.asset?.url}
							target="_blank"
						>
							<ButtonLayout
								title="Documentation"
								type="download"
							/>
						</Link>
					)}
				</ButtonsWrapper>
			</Upper>
			<AnimatePresence>
				{accordionActive && (
					<AccordionWrapper
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						<AccordionInner variants={childVariants}>
							<ContentWrapper className="rich-text">
								<PortableText value={migrationGuideContent} />
							</ContentWrapper>
						</AccordionInner>
					</AccordionWrapper>
				)}
			</AnimatePresence>
		</FooterContentWrapper>
	);
};

export default FooterContent;
