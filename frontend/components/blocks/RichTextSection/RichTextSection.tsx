import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const RichTextSectionWrapper = styled.section`
	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: 0 16px;
	}
`;

const Inner = styled.div`
	padding: ${pxToRem(50)};
	backdrop-filter: blur(10px);
	width: ${pxToRem(980)};
	margin: 0 auto;
	border-radius: ${pxToRem(20)};
	background: rgba(255, 255, 255, 0.2);
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 100%;
		padding: ${pxToRem(32)};
	}
`;

const RichTextSection = ({ content }: any) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.01,
		rootMargin: '-50px'
	});

	return (
		<RichTextSectionWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<Inner className="rich-text">
				<PortableText value={content} />
			</Inner>
		</RichTextSectionWrapper>
	);
};

export default RichTextSection;
