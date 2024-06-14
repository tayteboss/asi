import styled from 'styled-components';
import { MainPageType } from '../../../shared/types/types';
import ColumnCard from '../../elements/ColumnCard';
import BlurContentLayout from '../../layout/BlurContentLayout';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import BlurMainContent from '../BlurMainContent';

type Props = {
	title: MainPageType['tokenMigrationHeading'];
	content: MainPageType['tokenMigrationContent'];
	content1: MainPageType['tokenMigrationContent1'];
	content2: MainPageType['tokenMigrationContent2'];
	content3: MainPageType['tokenMigrationContent3'];
	heading1: MainPageType['tokenMigrationHeading1'];
	heading2: MainPageType['tokenMigrationHeading2'];
	heading3: MainPageType['tokenMigrationHeading3'];
	points: MainPageType['tokenMigrationPoints'];
};

const TokenMigrationSectionWrapper = styled.section``;

const TokenMigrationSection = (props: Props) => {
	const {
		title,
		content,
		content1,
		content2,
		content3,
		heading1,
		heading2,
		heading3,
		points
	} = props;

	const hasColumns = content1 || content2 || content3;

	return (
		<TokenMigrationSectionWrapper
			className="section-padding-y"
			id="token-migration"
		>
			<BlurContentLayout useGreen>
				<BlurMainContent
					title={title}
					points={points}
					content={content}
				/>
				{hasColumns && (
					<ColumnsWrapper>
						<ColumnCard title={heading1} content={content1} />
						<ColumnCard title={heading2} content={content2} />
						<ColumnCard title={heading3} content={content3} />
					</ColumnsWrapper>
				)}
			</BlurContentLayout>
		</TokenMigrationSectionWrapper>
	);
};

export default TokenMigrationSection;
