import styled from 'styled-components';
import { FileType } from '../../../shared/types/types';
import LogoSvg from '../../svgs/LogoSvg';
import pxToRem from '../../../utils/pxToRem';
import ButtonLayout from '../../layout/ButtonLayout';
import Link from 'next/link';

type Props = {
	title: string | null;
	migrationGuideUrl: string | null;
	generalQuestionsUrl: string | null;
	whitePaperPdf: FileType | null;
};

const IntroWrapper = styled.div`
	flex: 1;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: var(--colour-grey);
	border-radius: ${pxToRem(30)};
	padding: ${pxToRem(40)};
	overflow: auto;
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${pxToRem(30)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(20)};
	}
`;

const LogoWrapper = styled.div`
	svg {
		width: ${pxToRem(236)};
		height: auto;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${pxToRem(200)};
		}
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(46)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-top: ${pxToRem(20)};
	}
`;

const Title = styled.h1`
	color: var(--colour-black);
	width: 80%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 100%;
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		align-items: flex-start;
		gap: ${pxToRem(10)};
	}
`;

const BlankCell = styled.div``;

const Intro = (props: Props) => {
	const { title, migrationGuideUrl, generalQuestionsUrl, whitePaperPdf } =
		props;

	return (
		<IntroWrapper>
			<Inner>
				<LogoWrapper>
					<LogoSvg colour="var(--colour-black)" />
				</LogoWrapper>
				<TitleWrapper>
					{title && <Title>{title}</Title>}
					<LinksWrapper>
						{migrationGuideUrl && (
							<Link href={migrationGuideUrl} target="_blank">
								<ButtonLayout isPrimary>
									Migration Guide
								</ButtonLayout>
							</Link>
						)}
						{whitePaperPdf?.asset?.url && (
							<Link
								href={whitePaperPdf.asset.url}
								target="_blank"
							>
								<ButtonLayout type="download">
									White Paper
								</ButtonLayout>
							</Link>
						)}
						{generalQuestionsUrl && (
							<Link href={generalQuestionsUrl} target="_blank">
								<ButtonLayout>White Paper</ButtonLayout>
							</Link>
						)}
					</LinksWrapper>
				</TitleWrapper>
				<BlankCell />
			</Inner>
		</IntroWrapper>
	);
};

export default Intro;
