import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../layout/LayoutWrapper';
import Link from 'next/link';
import ButtonLayout from '../../layout/ButtonLayout';
import FooterDecoration from '../../elements/FooterDecoration';
import { useState } from 'react';

const ResourcesSectionWrapper = styled.section`
	position: relative;
	z-index: 2;
	margin-bottom: ${pxToRem(100)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(60)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(40)};
	}
`;

const TopBar = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(32)};
	padding: ${pxToRem(20)} 0;
	border-top: 1px solid var(--colour-black);
	margin-bottom: ${pxToRem(80)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		align-items: flex-start;
		gap: ${pxToRem(16)};
		margin-bottom: ${pxToRem(40)};
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(32)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(16)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
		align-items: flex-start;
		gap: ${pxToRem(8)};
	}
`;

const Title = styled.h3`
	font-size: ${pxToRem(40)};
	line-height: ${pxToRem(44)};
	letter-spacing: -1.2px;
	font-weight: 200;
	padding-bottom: 5px;
`;

const ResourcesSection = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<ResourcesSectionWrapper>
			<LayoutWrapper>
				<TopBar>
					<Title>Resources</Title>
					<LinksWrapper>
						<Link
							href="/white-paper"
							onMouseOver={() => setIsHovered(true)}
							onMouseOut={() => setIsHovered(false)}
						>
							<ButtonLayout title="White Paper" isActive={true} />
						</Link>
						<Link
							href="/general-questions"
							onMouseOver={() => setIsHovered(true)}
							onMouseOut={() => setIsHovered(false)}
						>
							<ButtonLayout
								title="General Questions"
								isActive={true}
							/>
						</Link>
						<Link
							href="/documentation"
							onMouseOver={() => setIsHovered(true)}
							onMouseOut={() => setIsHovered(false)}
						>
							<ButtonLayout
								title="Documentation"
								isActive={true}
							/>
						</Link>
					</LinksWrapper>
				</TopBar>
				<FooterDecoration isHovered={isHovered} />
			</LayoutWrapper>
		</ResourcesSectionWrapper>
	);
};

export default ResourcesSection;
