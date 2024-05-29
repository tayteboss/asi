import Link from 'next/link';
import styled from 'styled-components';
import SecondaryButtonLayout from '../../layout/SecondaryButtonLayout';
import pxToRem from '../../../utils/pxToRem';
import LogoSvg from '../../svgs/LogoSvg';
import SingularityLogo from '../../svgs/SingularityLogo';
import FetchLogoSvg from '../../svgs/FetchLogoSvg';
import OceanLogoSvg from '../../svgs/OceanLogoSvg';
import useViewportWidth from '../../../hooks/useViewportWidth';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	telegram: string | null;
	twitter: string | null;
	privacy: string | null;
	terms: string | null;
	cookies: string | null;
	animateContent: boolean;
};

const OuterWrapper = styled(motion.div)``;

const FooterWrapper = styled(motion.footer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: ${pxToRem(30)};

	@media (max-width: 1240px) {
		flex-direction: column;
		align-items: flex-start;
		gap: ${pxToRem(20)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: ${pxToRem(20)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-bottom: ${pxToRem(30)};
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(30)};
`;

const LogosWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(25)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(20)};
	}
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
	gap: ${pxToRem(20)};
`;

const SecondaryLinksWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(20)};
`;

const TextLink = styled.span`
	color: #747474;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-lime);
	}
`;

const wrapperVariants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		height: 'auto',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'beforeChildren'
		}
	}
};

const innerVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
};

const Footer = (props: Props) => {
	const { telegram, twitter, privacy, terms, cookies, animateContent } =
		props;

	const viewport = useViewportWidth();
	const isMobile = viewport === 'mobile';

	return (
		<AnimatePresence>
			{animateContent && (
				<OuterWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<FooterWrapper variants={innerVariants}>
						<LinksWrapper>
							{telegram && (
								<Link href={telegram} target="_blank">
									<SecondaryButtonLayout
										useTelegram
										title="Join our telegram channel"
									/>
								</Link>
							)}
							{twitter && (
								<Link href={twitter} target="_blank">
									<SecondaryButtonLayout
										useTwitter
										title="Follow us on X"
									/>
								</Link>
							)}
						</LinksWrapper>
						<LogosWrapper>
							<LogoWrapper $height={isMobile ? 20 : 28}>
								<LogoSvg colour="#747474" />
							</LogoWrapper>
							<Divider />
							<SecondaryLogoWrapper>
								<LogoWrapper $height={isMobile ? 20 : 23}>
									<SingularityLogo />
								</LogoWrapper>
								<LogoWrapper $height={isMobile ? 10 : 13}>
									<FetchLogoSvg />
								</LogoWrapper>
								<LogoWrapper $height={isMobile ? 16 : 23}>
									<OceanLogoSvg />
								</LogoWrapper>
							</SecondaryLogoWrapper>
						</LogosWrapper>
						<SecondaryLinksWrapper>
							{privacy && (
								<Link href={privacy} target="_blank">
									<TextLink className="type-mono">
										Privacy Policy
									</TextLink>
								</Link>
							)}
							{cookies && (
								<Link href={cookies} target="_blank">
									<TextLink className="type-mono">
										Cookie Policy
									</TextLink>
								</Link>
							)}
							{terms && (
								<Link href={terms} target="_blank">
									<TextLink className="type-mono">
										Terms & Conditions
									</TextLink>
								</Link>
							)}
						</SecondaryLinksWrapper>
					</FooterWrapper>
				</OuterWrapper>
			)}
		</AnimatePresence>
	);
};

export default Footer;
