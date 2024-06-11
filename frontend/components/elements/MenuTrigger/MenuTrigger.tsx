import styled from 'styled-components';
import MenuTriggerSvg from '../../svgs/MenuTriggerSvg';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	setMenuIsActive: (isActive: boolean) => void;
	menuIsActive: boolean;
};

const MenuTriggerWrapper = styled.button<{ $isActive: boolean }>`
	padding: ${pxToRem(8)};

	&:hover {
		svg {
			transform: scale(0.95)
				rotate(${(props) => (props.$isActive ? '225' : '0')}deg);
		}
	}

	svg {
		transform: rotate(${(props) => (props.$isActive ? '225' : '0')}deg);

		transition: all var(--transition-speed-default) var(--transition-ease);

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			width: ${pxToRem(35)};
		}
	}
`;

const MenuTrigger = (props: Props) => {
	const { setMenuIsActive, menuIsActive } = props;

	return (
		<MenuTriggerWrapper
			$isActive={menuIsActive}
			onClick={() => setMenuIsActive(!menuIsActive)}
		>
			<MenuTriggerSvg />
		</MenuTriggerWrapper>
	);
};

export default MenuTrigger;
