import styled from 'styled-components';
import AnimateText from '../../layout/AnimateText';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import formatHTML from '../../../utils/formatHTML';

type Props = {
	title?: string | null;
	subheading?: string | null;
	content?: string | null;
};

const BlurMainContentWrapper = styled.div``;

const Title = styled.h2`
	margin-bottom: ${pxToRem(40)};
`;

const Subheading = styled.h3`
	margin-bottom: ${pxToRem(24)};
`;

const Content = styled.div``;

const BlurMainContent = (props: Props) => {
	const { title, subheading, content } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<BlurMainContentWrapper>
			{title && (
				<Title className="type-h2 type-h2--blur-in" ref={ref}>
					<AnimateText text={title} active={inView} />
				</Title>
			)}
			{subheading && (
				<Subheading className="type-h3 type-h3--blur-in">
					<AnimateText text={subheading} active={inView} />
				</Subheading>
			)}
			{content && (
				<Content
					className={`rich-text view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
					dangerouslySetInnerHTML={{
						__html: formatHTML(content)
					}}
				/>
			)}
		</BlurMainContentWrapper>
	);
};

export default BlurMainContent;
