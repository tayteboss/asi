import Link from 'next/link';
import styled from 'styled-components';
import SecondaryButtonLayout from '../../layout/SecondaryButtonLayout';
import pxToRem from '../../../utils/pxToRem';
import LogoSvg from '../../svgs/LogoSvg';
import SingularityLogo from '../../svgs/SingularityLogo';
import FetchLogoSvg from '../../svgs/FetchLogoSvg';
import OceanLogoSvg from '../../svgs/OceanLogoSvg';

type Props = {
	telegram: string | null;
	twitter: string | null;
	privacy: string | null;
	terms: string | null;
};

const FooterWrapper = styled.footer`
	padding: 0 ${pxToRem(36)};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LHS = styled.div`
	display: flex;
	gap: ${pxToRem(30)};
`;

const RHS = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(30)};
`;

const LogoWrapper = styled.div<{ $height: number }>`
	height: ${(props) => props.$height}px;
	width: auto;

	svg {
		height: 100%;
		width: auto;
	}
`;

const Divider = styled.div`
	height: ${pxToRem(30)};
	width: 1px;
	background: #747474;
`;

const SecondaryLogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(30)};
`;

const Footer = (props: Props) => {
	const { telegram, twitter, privacy, terms } = props;

	return (
		<FooterWrapper>
			<LHS>
				{telegram && (
					<Link href={telegram} target="_blank">
						<SecondaryButtonLayout useTelegram>
							Join our telegram channel
						</SecondaryButtonLayout>
					</Link>
				)}
				{twitter && (
					<Link href={twitter} target="_blank">
						<SecondaryButtonLayout useTwitter>
							Follow us on X
						</SecondaryButtonLayout>
					</Link>
				)}
			</LHS>
			<RHS>
				<LogoWrapper $height={28}>
					<LogoSvg colour="#747474" />
				</LogoWrapper>
				<Divider />
				<SecondaryLogoWrapper>
					<LogoWrapper $height={23}>
						<SingularityLogo />
					</LogoWrapper>
					<LogoWrapper $height={13}>
						<FetchLogoSvg />
					</LogoWrapper>
					<LogoWrapper $height={23}>
						<OceanLogoSvg />
					</LogoWrapper>
				</SecondaryLogoWrapper>
			</RHS>
		</FooterWrapper>
	);
};

export default Footer;
