import styled from 'styled-components';
import TelegramSvg from '../../svgs/TelegramSvg';
import pxToRem from '../../../utils/pxToRem';
import XSvg from '../../svgs/XSvg';

type Props = {
	useTelegram?: boolean;
	useTwitter?: boolean;
	children: React.ReactNode;
};

const SecondaryButtonLayoutWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(12)};

	span {
		color: var(--colour-lime);
	}
`;

const IconWrapper = styled.div`
	height: ${pxToRem(23)};
	width: ${pxToRem(23)};
	background: var(--colour-lime);
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SecondaryButtonLayout = (props: Props) => {
	const { useTelegram = false, useTwitter = false, children } = props;

	return (
		<SecondaryButtonLayoutWrapper>
			<IconWrapper>
				{useTelegram && <TelegramSvg />}
				{useTwitter && <XSvg />}
			</IconWrapper>
			<span>{children}</span>
		</SecondaryButtonLayoutWrapper>
	);
};

export default SecondaryButtonLayout;
