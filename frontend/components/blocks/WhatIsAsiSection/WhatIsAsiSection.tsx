import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import formatHTML from '../../../utils/formatHTML';
import BlurContentLayout from '../../layout/BlurContentLayout';
import AnimateText from '../../layout/AnimateText';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	title: MainPageType['whatIsAsiHeading'];
	subheading: MainPageType['whatIsAsiSubheading'];
	content: MainPageType['whatIsAsiContent'];
};

const WhatIsAsiSectionWrapper = styled.section``;

const Title = styled.h2`
	margin-bottom: ${pxToRem(40)};
`;

const Subheading = styled.h3`
	margin-bottom: ${pxToRem(24)};
`;

const Content = styled.div``;

const WhatIsAsiSection = (props: Props) => {
	const { title, subheading, content } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<WhatIsAsiSectionWrapper ref={ref} className="section-padding-y">
			<BlurContentLayout>
				{title && (
					<Title className="type-h2 type-h2--blur-in">
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
						className="rich-text"
						dangerouslySetInnerHTML={{
							__html: formatHTML(content)
						}}
					/>
				)}
			</BlurContentLayout>
		</WhatIsAsiSectionWrapper>
	);
};

export default WhatIsAsiSection;
