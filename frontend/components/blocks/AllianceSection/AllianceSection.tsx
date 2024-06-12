import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import BlurContentLayout from '../../layout/BlurContentLayout';
import BlurMainContent from '../BlurMainContent';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import ColumnCard from '../../elements/ColumnCard';
import VideoSection from '../VideoSection';

type Props = {
	title: string;
	content: MainPageType['aboutTheAlliance'];
	fetchAiContent: MainPageType['fetchAiContent'];
	fetchAiLink: MainPageType['fetchAiLink'];
	singularityNetContent: MainPageType['singularityNetContent'];
	singularityNetLink: MainPageType['singularityNetLink'];
	oceanProtocolContent: MainPageType['oceanProtocolContent'];
	oceanProtocolLink: MainPageType['oceanProtocolLink'];
	videoData: MainPageType['videoTwo'];
};

const AllianceSectionWrapper = styled.section`
	position: relative;
	z-index: 2;
`;

const AllianceSection = (props: Props) => {
	const {
		title,
		content,
		fetchAiContent,
		fetchAiLink,
		singularityNetContent,
		singularityNetLink,
		oceanProtocolContent,
		oceanProtocolLink,
		videoData
	} = props;

	return (
		<AllianceSectionWrapper
			className="section-padding-y"
			id="about-the-alliance"
		>
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
				<ColumnsWrapper>
					<ColumnCard
						icon="fetch"
						title="Fetch.ai"
						content={fetchAiContent}
						link={fetchAiLink}
					/>
					<ColumnCard
						icon="singularity"
						title="Singularity Net"
						content={singularityNetContent}
						link={singularityNetLink}
					/>
					<ColumnCard
						icon="ocean"
						title="Ocean Protocol"
						content={oceanProtocolContent}
						link={oceanProtocolLink}
					/>
				</ColumnsWrapper>
			</BlurContentLayout>
			<VideoSection data={videoData} animateIn index={2} key={2} />
		</AllianceSectionWrapper>
	);
};

export default AllianceSection;
