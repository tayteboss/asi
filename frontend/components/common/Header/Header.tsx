import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import LogoSvg from '../../svgs/LogoSvg';
import MenuTrigger from '../../elements/MenuTrigger';
import HeaderDecoration from '../../blocks/HeaderDecoration';
import useScrolled from '../../../hooks/useScrolled';
import { SiteSettingsType } from '../../../shared/types/types';
import CountdownButton from './CountdownButton';
import useViewportWidth from '../../../hooks/useViewportWidth';

type StyledProps = {
	$hasScrolled: boolean;
	$menuIsActive: boolean;
};

type Props = {
	setMenuIsActive: (isActive: boolean) => void;
	menuIsActive: boolean;
	logo: SiteSettingsType['logoSvg'];
};

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	padding: ${pxToRem(24)} ${pxToRem(8)};
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	z-index: 100;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(24)} ${pxToRem(8)};
	}
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${pxToRem(16)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const LogoWrapper = styled.div<StyledProps>`
	padding: ${(props) => (props.$hasScrolled ? pxToRem(16) : pxToRem(24))};
	border-radius: 27.04px;
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.$menuIsActive ? 0 : 1)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(16)};
		border-radius: 12px;
		backdrop-filter: blur(5px);
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(12)} ${pxToRem(8)};
	}

	img {
		width: ${(props) => (props.$hasScrolled ? pxToRem(200) : pxToRem(300))};
		height: auto;

		transition: all var(--transition-speed-default) var(--transition-ease);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${pxToRem(200)};
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			width: ${pxToRem(180)};
		}
	}
`;

const Header = (props: Props) => {
	const { setMenuIsActive, menuIsActive, logo } = props;

	const hasScrolled = useScrolled(200);

	const viewport = useViewportWidth();
	const isMobile = viewport === 'mobile' || viewport === 'tabletPortrait';

	return (
		<>
			<HeaderDecoration />
			<HeaderWrapper className="header">
				<LinkWrapper>
					<Link href="/">
						<LogoWrapper
							$hasScrolled={hasScrolled}
							$menuIsActive={menuIsActive}
						>
							{logo && <img src={logo} alt="logo" />}
						</LogoWrapper>
					</Link>
					{isMobile && (
						<CountdownButton mergerText="Take part in the token merger" />
					)}
				</LinkWrapper>
				<LinkWrapper>
					{!isMobile && (
						<CountdownButton mergerText="Take part in the token merger" />
					)}
					<MenuTrigger
						setMenuIsActive={setMenuIsActive}
						menuIsActive={menuIsActive}
					/>
				</LinkWrapper>
			</HeaderWrapper>
		</>
	);
};

export default Header;
