import styled from 'styled-components';
import BlurContentLayout from '../../layout/BlurContentLayout';
import BlurMainContent from '../BlurMainContent';
import VideoSection from '../VideoSection';
import { MainPageType } from '../../../shared/types/types';
import TeamCarousel from '../TeamCarousel';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	title: string | null;
	content: MainPageType['foundationTeam'];
	teamMembers: MainPageType['teamMembers'];
	videoData: MainPageType['videoThree'];
	videoMobileData?: MainPageType['videoThreeMobile'];
};

const FoundationSectionWrapper = styled.section`
	position: relative;
	z-index: 2;

	.blur-content-layout {
		margin-bottom: ${pxToRem(40)};
	}
`;

const FoundationSection = (props: Props) => {
	const { title, content, teamMembers, videoData, videoMobileData } = props;
	return (
		<FoundationSectionWrapper
			className="section-padding-y"
			id="foundation-team"
		>
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
			</BlurContentLayout>
			<TeamCarousel data={teamMembers} />
			<VideoSection
				data={videoData}
				mobileData={videoMobileData}
				animateIn
				index={2}
				key={2}
			/>
		</FoundationSectionWrapper>
	);
};

export default FoundationSection;
