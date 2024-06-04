import Link from 'next/link';
import styled from 'styled-components';
import SecondaryButtonLayout from '../../layout/SecondaryButtonLayout';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';
import { FileType } from '../../../shared/types/types';
import FooterContent from '../../blocks/FooterContent';

type Props = {
	telegram: string | null;
	twitter: string | null;
	privacy: string | null;
	terms: string | null;
	cookies: string | null;
	animateContent: boolean;
	migrationGuideContent: any | null;
	documentationPdf: string | null;
};

const OuterWrapper = styled(motion.div)`
	padding-top: ${pxToRem(36)};
`;

const FooterWrapper = styled(motion.footer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid var(--colour-white);
	padding-top: ${pxToRem(26)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		gap: ${pxToRem(20)};
		align-items: flex-start;
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
	}
`;

const SecondaryLinksWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(20)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		justify-content: space-between;
		width: 100%;
	}
`;

const TextLink = styled.span`
	color: var(--colour-white);
	font-size: 1rem;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(13)};
	}

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
	const {
		telegram,
		twitter,
		privacy,
		terms,
		cookies,
		animateContent,
		documentationPdf,
		migrationGuideContent
	} = props;

	return (
		<AnimatePresence>
			{animateContent && (
				<OuterWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<FooterContent
						documentationPdf={documentationPdf}
						migrationGuideContent={migrationGuideContent}
					/>
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
						<SecondaryLinksWrapper>
							<Link href={'/'} target="_blank">
								<TextLink className="type-book">
									Privacy Policy
								</TextLink>
							</Link>
							<Link href={'/'} target="_blank">
								<TextLink className="type-book">
									Cookie Policy
								</TextLink>
							</Link>
							<Link href={'/'} target="_blank">
								<TextLink className="type-book">
									Terms & Conditions
								</TextLink>
							</Link>
						</SecondaryLinksWrapper>
					</FooterWrapper>
				</OuterWrapper>
			)}
		</AnimatePresence>
	);
};

export default Footer;
