import Link from 'next/link';
import styled from 'styled-components';
import SecondaryButtonLayout from '../../layout/SecondaryButtonLayout';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../layout/LayoutWrapper';
import { PortableText } from '@portabletext/react';

type Props = {
	telegram: string | null;
	twitter: string | null;
	privacy: string | null;
	terms: string | null;
	cookies: string | null;
	footerContent: [] | null;
};

const FooterWrapper = styled.footer``;

const Inner = styled.div`
	border-top: 1px solid var(--colour-black);
`;

const ContentWrapper = styled.div`
	padding: ${pxToRem(20)} 0;
`;

const BottomWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${pxToRem(40)} 0;

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
	color: var(--colour-black);
	font-size: ${pxToRem(14)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(13)};
	}

	&:hover {
		text-decoration: underline;
	}
`;

const Footer = (props: Props) => {
	const { telegram, twitter, privacy, terms, cookies, footerContent } = props;

	return (
		<FooterWrapper>
			<LayoutWrapper>
				<Inner>
					<ContentWrapper>
						{footerContent && (
							<PortableText value={footerContent} />
						)}
					</ContentWrapper>
					<BottomWrapper>
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
					</BottomWrapper>
				</Inner>
			</LayoutWrapper>
		</FooterWrapper>
	);
};

export default Footer;
