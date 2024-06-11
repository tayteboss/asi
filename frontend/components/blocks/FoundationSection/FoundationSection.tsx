import styled from 'styled-components';
import BlurContentLayout from '../../layout/BlurContentLayout';
import BlurMainContent from '../BlurMainContent';
import VideoSection from '../VideoSection';
import { MainPageType } from '../../../shared/types/types';

type Props = {
	title: string;
	content: MainPageType['foundationTeam'];
	teamMembers: MainPageType['teamMembers'];
	videoData: MainPageType['videoThree'];
};

const FoundationSectionWrapper = styled.section`
	position: relative;
`;

const FoundationSection = (props: Props) => {
	const { title, content, teamMembers, videoData } = props;
	return (
		<FoundationSectionWrapper
			className="section-padding-y"
			id="Foundation Team"
		>
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
				{/* // Carousel Here */}
			</BlurContentLayout>
			<VideoSection data={videoData} animateIn index={2} key={2} />
		</FoundationSectionWrapper>
	);
};

export default FoundationSection;
