import styled from 'styled-components';
import Link from 'next/link';
import { MainPageType } from '../../../shared/types/types';
import BlurContentLayout from '../../layout/BlurContentLayout';
import BlurMainContent from '../BlurMainContent';
import ButtonLayout from '../../layout/ButtonLayout';
import CountdownButton from '../../common/Header/CountdownButton';
import pxToRem from '../../../utils/pxToRem';
import Accordion from '../Accordion';

type Props = {
	title: MainPageType['tokenMigrationHeading'];
	data: MainPageType['tokenMigrationAccordion'];
};

const TokenMigrationSectionWrapper = styled.section`
	position: relative;
	z-index: 2;

	.type-h2 {
		margin-bottom: 0;
	}
`;

const TokenMigrationButtonWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(15)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		gap: ${pxToRem(8)};
	}
`;

const TokenMigrationSection = (props: Props) => {
	const { title, data } = props;

	const hasData = data && data.length > 0;

	return (
		<TokenMigrationSectionWrapper
			className="section-padding-y performance"
			id="token-migration"
		>
			<BlurContentLayout useGreen>
				<BlurMainContent title={title} />
				{hasData && <Accordion data={data} />}

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
			</BlurContentLayout>
		</TokenMigrationSectionWrapper>
	);
};

export default TokenMigrationSection;
