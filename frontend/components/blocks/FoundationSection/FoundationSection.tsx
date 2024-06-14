import styled from 'styled-components';
import BlurContentLayout from '../../layout/BlurContentLayout';
import BlurMainContent from '../BlurMainContent';
import { MainPageType } from '../../../shared/types/types';
import TeamCarousel from '../TeamCarousel';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	title: string | null;
	content: MainPageType['foundationTeam'];
	teamMembers: MainPageType['teamMembers'];
};

const FoundationSectionWrapper = styled.section`
	position: relative;
	z-index: 2;

	.blur-content-layout {
		margin-bottom: ${pxToRem(40)};
	}
`;

const FoundationSection = (props: Props) => {
	const { title, content, teamMembers } = props;
	return (
		<FoundationSectionWrapper
			className="section-padding-y"
			id="foundation-team"
		>
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
			</BlurContentLayout>
			<TeamCarousel data={teamMembers} />
		</FoundationSectionWrapper>
	);
};

export default FoundationSection;
