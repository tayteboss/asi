import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children?: React.ReactNode;
};

const BlurContentLayoutWrapper = styled.div`
	padding: ${pxToRem(50)};
	backdrop-filter: blur(10px);
	/* background: rgba(0, 0, 0, 0); */
	width: ${pxToRem(980)};
	margin: 0 auto;
`;

const BlurContentLayout = (props: Props) => {
	const { children } = props;

	return <BlurContentLayoutWrapper>{children}</BlurContentLayoutWrapper>;
};

export default BlurContentLayout;
