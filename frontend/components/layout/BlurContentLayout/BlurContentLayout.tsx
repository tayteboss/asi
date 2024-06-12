import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children?: React.ReactNode;
};

const BlurContentLayoutWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: 0 16px;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: 0 8px;
	}
`;

const Inner = styled.div`
	padding: ${pxToRem(50)};
	backdrop-filter: blur(30px);
	width: ${pxToRem(980)};
	margin: 0 auto;
	border-radius: ${pxToRem(20)};
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(50)};
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 100%;
		padding: ${pxToRem(32)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(16)};
	}
`;

const BlurContentLayout = (props: Props) => {
	const { children } = props;

	return (
		<BlurContentLayoutWrapper className="blur-content-layout">
			<Inner>{children}</Inner>
		</BlurContentLayoutWrapper>
	);
};

export default BlurContentLayout;
