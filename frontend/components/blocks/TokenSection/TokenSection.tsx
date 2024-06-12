import styled from 'styled-components';
import ColumnCard from '../../elements/ColumnCard';
import BlurContentLayout from '../../layout/BlurContentLayout';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import BlurMainContent from '../BlurMainContent';
import { MainPageType } from '../../../shared/types/types';

type Props = {
	title: string;
	content: MainPageType['aboutTheAlliance'];
	content1: MainPageType['tokenMergeContent1'];
	content2: MainPageType['tokenMergeContent2'];
	content3: MainPageType['tokenMergeContent3'];
};

const TokenSectionWrapper = styled.section`
	position: relative;
	z-index: 2;
`;

const TokenSection = (props: Props) => {
	const { title, content, content1, content2, content3 } = props;

	return (
		<TokenSectionWrapper className="section-padding-y" id="token-merge">
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
				<ColumnsWrapper>
					<ColumnCard title="About" content={content1} />
					<ColumnCard title="Merger" content={content2} />
					<ColumnCard title="Migration Ratio" content={content3} />
				</ColumnsWrapper>
			</BlurContentLayout>
		</TokenSectionWrapper>
	);
};

export default TokenSection;
