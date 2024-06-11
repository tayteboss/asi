import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import LogoSvg from '../../svgs/LogoSvg';
import MenuTrigger from '../../elements/MenuTrigger';

type Props = {
	setMenuIsActive: (isActive: boolean) => void;
	menuIsActive: boolean;
};

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	padding: ${pxToRem(16)} ${pxToRem(8)};
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	z-index: 100;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(8)};
	}
`;

const LogoWrapper = styled.div<{ $menuIsActive: boolean }>`
	padding: ${pxToRem(28)};
	border-radius: 27.04px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.$menuIsActive ? 0 : 1)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(16)};
		border-radius: 12px;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(12)} ${pxToRem(8)};
	}

	svg {
		width: ${pxToRem(300)};
		height: auto;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${pxToRem(200)};
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			width: ${pxToRem(150)};
		}
	}
`;

const Header = (props: Props) => {
	const { setMenuIsActive, menuIsActive } = props;

	return (
		<HeaderWrapper className="header">
			<Link href="/">
				<LogoWrapper $menuIsActive={menuIsActive}>
					<LogoSvg />
				</LogoWrapper>
			</Link>
			<MenuTrigger
				setMenuIsActive={setMenuIsActive}
				menuIsActive={menuIsActive}
			/>
		</HeaderWrapper>
	);
};

export default Header;
