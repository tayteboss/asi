import styled from 'styled-components';
import Link from 'next/link';
import { MainPageType } from '../../../shared/types/types';
import ColumnCard from '../../elements/ColumnCard';
import BlurContentLayout from '../../layout/BlurContentLayout';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import BlurMainContent from '../BlurMainContent';
// import VideoSection from '../VideoSection';
import ButtonLayout from '../../layout/ButtonLayout';
import CountdownButton from '../../common/Header/CountdownButton';
import pxToRem from '../../../utils/pxToRem';

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
	videoData: MainPageType['videoThree'];
	videoMobileData?: MainPageType['videoThreeMobile'];
};

const TokenMigrationSectionWrapper = styled.section`
	position: relative;
	z-index: 2;
`;

const TokenMigrationButtonWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(15)};
`;

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
		points,
		videoData,
		videoMobileData
	} = props;

	const hasColumns = content1 || content2 || content3;

	return (
		<TokenMigrationSectionWrapper
			className="section-padding-y performance"
			id="token-migration"
		>
			<BlurContentLayout useGreen>
				<BlurMainContent
					title={title}
					points={points}
					content={content}
				/>
				<TokenMigrationButtonWrapper>
					<Link href="https://asi.kremalicious.com/" target="_blank">
						<ButtonLayout title="ASI Calculator" isActive={false} />
					</Link>

					<CountdownButton
						mergerText="Take part in the token merger"
						isLarge={false}
						isActive={false}
					/>
				</TokenMigrationButtonWrapper>

				{hasColumns && (
					<ColumnsWrapper>
						<ColumnCard title={heading1} content={content1} />
						<ColumnCard title={heading2} content={content2} />
						<ColumnCard title={heading3} content={content3} />
					</ColumnsWrapper>
				)}
			</BlurContentLayout>
			{/* <VideoSection
				data={videoData}
				mobileData={videoMobileData}
				animateIn
				index={3}
				key={3}
			/> */}
		</TokenMigrationSectionWrapper>
	);
};

export default TokenMigrationSection;
