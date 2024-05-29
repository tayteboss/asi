import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import {
	HomePageType,
	SiteSettingsType,
	TransitionsType
} from '../shared/types/types';
import { motion } from 'framer-motion';
import client from '../client';
import {
	homePageQueryString,
	siteSettingsQueryString
} from '../lib/sanityQueries';
import Footer from '../components/common/Footer';
import Intro from '../components/blocks/Intro';
import pxToRem from '../utils/pxToRem';

const PageWrapper = styled(motion.div)`
	background: var(--colour-black);
	padding: ${pxToRem(30)};
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(30)};
	height: 100dvh;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${pxToRem(20)};
		gap: ${pxToRem(20)};
	}
`;

type Props = {
	data: HomePageType;
	siteSettings: SiteSettingsType;
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const { data, siteSettings, pageTransitionVariants } = props;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title={data?.seoTitle || ''}
				description={data?.seoDescription || ''}
			/>
			<Intro
				title={data?.title}
				migrationGuideUrl={data?.migrationGuideUrl}
				generalQuestionsUrl={data?.generalQuestionsUrl}
				whitePaperPdf={data?.whitePaperPdf}
			/>
			<Footer
				telegram={siteSettings?.telegram}
				twitter={siteSettings?.twitter}
				cookies={siteSettings?.cookiesUrl}
				privacy={siteSettings?.privacyUrl}
				terms={siteSettings?.termsUrl}
			/>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(homePageQueryString);

	return {
		props: {
			data,
			siteSettings
		}
	};
}

export default Page;
