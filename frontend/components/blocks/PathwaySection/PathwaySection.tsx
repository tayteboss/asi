import { title } from 'process';
import styled from 'styled-components';
import ColumnCard from '../../elements/ColumnCard';
import BlurContentLayout from '../../layout/BlurContentLayout';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import BlurMainContent from '../BlurMainContent';
import { MainPageType } from '../../../shared/types/types';

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
		heading3
	} = props;

	return (
		<PathwaySectionWrapper
			className="section-padding-y"
			id="pathway-to-asi"
		>
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
				<ColumnsWrapper>
					<ColumnCard title={heading1} content={content1} />
					<ColumnCard title={heading2} content={content2} />
					<ColumnCard
						title={heading3}
						content={content3}
						link={contactLink}
						linkTitle="Enquire"
					/>
				</ColumnsWrapper>
			</BlurContentLayout>
		</PathwaySectionWrapper>
	);
};

export default PathwaySection;
