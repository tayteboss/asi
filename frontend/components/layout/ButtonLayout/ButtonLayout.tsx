import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children: React.ReactNode;
	isPrimary?: boolean;
	type?: 'link' | 'download';
};

const ButtonLayoutWrapper = styled.div<{ $isPrimary: boolean }>`
	padding: ${pxToRem(10)} ${pxToRem(20)};
	background: ${(props) =>
		props.$isPrimary ? 'var(--colour-lime)' : 'var(--colour-grey)'};
	backdrop-filter: ${(props) => (props.$isPrimary ? '' : 'blur(10px)')};
	color: var(--colour-black);
	display: flex;
	gap: ${pxToRem(8)};
	border-radius: 100px;
`;

const ButtonLayout = (props: Props) => {
	const { children, isPrimary = false, type = 'link' } = props;

	return (
		<ButtonLayoutWrapper $isPrimary={isPrimary}>
			<span>{children}</span>
			<span>{type === 'link' ? '↗' : '↧'}</span>
		</ButtonLayoutWrapper>
	);
};

export default ButtonLayout;
