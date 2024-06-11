import { title } from 'process';
import styled from 'styled-components';
import ColumnCard from '../../elements/ColumnCard';
import BlurContentLayout from '../../layout/BlurContentLayout';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import BlurMainContent from '../BlurMainContent';
import { MainPageType } from '../../../shared/types/types';

type Props = {
	title: string;
	content: MainPageType['pathwayToAsi'];
	content1: MainPageType['pathwayContact1'];
	content2: MainPageType['pathwayContact2'];
	content3: MainPageType['pathwayContact2'];
	contactLink: MainPageType['pathwayContactLink'];
};

const PathwaySectionWrapper = styled.section`
	position: relative;
	z-index: 2;
`;

const PathwaySection = (props: Props) => {
	const { title, content, content1, content2, content3, contactLink } = props;

	return (
		<PathwaySectionWrapper
			className="section-padding-y"
			id="pathway-to-asi"
		>
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
				<ColumnsWrapper>
					<ColumnCard title="Application" content={content1} />
					<ColumnCard title="Types of Members" content={content2} />
					<ColumnCard
						title="Contact Us"
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
