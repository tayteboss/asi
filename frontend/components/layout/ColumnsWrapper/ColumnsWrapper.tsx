import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type Props = {
	children: JSX.Element[];
};

const ColumnsWrapperWrapper = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	gap: ${pxToRem(40)};
	padding: ${pxToRem(50)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		gap: ${pxToRem(60)};
	}
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

const ColumnsWrapper = (props: Props) => {
	const { children } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<ColumnsWrapperWrapper
			ref={ref}
			variants={wrapperVariants}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			exit="hidden"
		>
			{children}
		</ColumnsWrapperWrapper>
	);
};

export default ColumnsWrapper;
