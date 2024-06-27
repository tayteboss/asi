import styled from 'styled-components';
import ColumnCard from '../../elements/ColumnCard';
import BlurContentLayout from '../../layout/BlurContentLayout';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import BlurMainContent from '../BlurMainContent';
import { MainPageType } from '../../../shared/types/types';
import VideoSection from '../VideoSection';

type Props = {
	title: string | null;
	content: MainPageType['pathwayToAsi'];
	content1: MainPageType['pathwayContent1'];
	content2: MainPageType['pathwayContent2'];
	content3: MainPageType['pathwayContent2'];
	heading1: MainPageType['pathwayHeading1'];
	heading2: MainPageType['pathwayHeading2'];
	heading3: MainPageType['pathwayHeading3'];
	contactLink: MainPageType['pathwayContactLink'];
	videoData: MainPageType['videoFour'];
	videoMobileData?: MainPageType['videoFourMobile'];
};

const PathwaySectionWrapper = styled.section`
	position: relative;
	z-index: 2;
`;

const PathwaySection = (props: Props) => {
	const {
		title,
		content,
		content1,
		content2,
		content3,
		contactLink,
		heading1,
		heading2,
		heading3,
		videoData,
		videoMobileData
	} = props;

	return (
		<PathwaySectionWrapper
			className="section-padding-y performance"
			id="pathway-to-asi"
		>
			<BlurContentLayout useGreen>
				<BlurMainContent
					title={title}
					useLargeTitle
					content={content}
				/>
				<ColumnsWrapper>
					<ColumnCard title={heading1} content={content1} />
					<ColumnCard title={heading2} content={content2} />
					<ColumnCard
						title={heading3}
						content={content3}
						link={contactLink}
						linkTitle="Enquire"
						useDarkLink
					/>
				</ColumnsWrapper>
			</BlurContentLayout>
			{/* <VideoSection
				data={videoData}
				mobileData={videoMobileData}
				animateIn
				index={4}
				key={4}
			/> */}
		</PathwaySectionWrapper>
	);
};

export default PathwaySection;
