import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import {
	HomePageType,
	MainPageType,
	SiteSettingsType,
	TransitionsType
} from '../shared/types/types';
import { motion } from 'framer-motion';
import client from '../client';
import {
	homePageQueryString,
	mainPageQueryString,
	siteSettingsQueryString
} from '../lib/sanityQueries';
import AllianceSection from '../components/blocks/AllianceSection';
import FoundationSection from '../components/blocks/FoundationSection';
import HeroSection from '../components/blocks/HeroSection';
import PathwaySection from '../components/blocks/PathwaySection';
import TokenSection from '../components/blocks/TokenSection';
import WhatIsAsiSection from '../components/blocks/WhatIsAsiSection';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: HomePageType;
	mainData: MainPageType;
	siteSettings: SiteSettingsType;
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const { data, mainData, siteSettings, pageTransitionVariants } = props;

	console.log('mainData', mainData);

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
			<HeroSection
				title={mainData?.heroTitle}
				videoData={mainData?.videoOne}
			/>
			<WhatIsAsiSection
				title={mainData?.whatIsAsiHeading}
				subheading={mainData?.whatIsAsiSubheading}
				content={mainData?.whatIsAsiContent}
			/>
			<AllianceSection
				title="About the Alliance"
				content={mainData?.aboutTheAlliance}
				fetchAiContent={mainData?.fetchAiContent}
				fetchAiLink={mainData?.fetchAiLink}
				singularityNetContent={mainData?.singularityNetContent}
				singularityNetLink={mainData?.singularityNetLink}
				oceanProtocolContent={mainData?.oceanProtocolContent}
				oceanProtocolLink={mainData?.oceanProtocolLink}
			/>
			<TokenSection />
			<FoundationSection />
			<PathwaySection />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(homePageQueryString);
	const mainData = await client.fetch(mainPageQueryString);

	return {
		props: {
			data,
			mainData,
			siteSettings
		}
	};
}

export default Page;
