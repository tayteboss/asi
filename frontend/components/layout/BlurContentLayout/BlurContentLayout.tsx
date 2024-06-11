import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children?: React.ReactNode;
};

const BlurContentLayoutWrapper = styled.div`
	padding: ${pxToRem(50)};
	backdrop-filter: blur(30px);
	width: ${pxToRem(980)};
	margin: 0 auto;
	border-radius: ${pxToRem(20)};
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(50)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 100%;
		margin: 0 ${pxToRem(16)};
		padding: ${pxToRem(32)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin: 0 ${pxToRem(8)};
		padding: ${pxToRem(16)};
	}
`;

const BlurContentLayout = (props: Props) => {
	const { children } = props;

	return <BlurContentLayoutWrapper>{children}</BlurContentLayoutWrapper>;
};

export default BlurContentLayout;
