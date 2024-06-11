import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import BlurContentLayout from '../../layout/BlurContentLayout';
import BlurMainContent from '../BlurMainContent';

type Props = {
	title: MainPageType['whatIsAsiHeading'];
	subheading: MainPageType['whatIsAsiSubheading'];
	content: MainPageType['whatIsAsiContent'];
};

const WhatIsAsiSectionWrapper = styled.section`
	position: relative;
	z-index: 2;
`;

const WhatIsAsiSection = (props: Props) => {
	const { title, subheading, content } = props;

	return (
		<WhatIsAsiSectionWrapper className="section-padding-y">
			<BlurContentLayout>
				<BlurMainContent
					title={title}
					subheading={subheading}
					content={content}
				/>
			</BlurContentLayout>
		</WhatIsAsiSectionWrapper>
	);
};

export default WhatIsAsiSection;
