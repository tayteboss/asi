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
import ResourcesSection from '../components/blocks/ResourcesSection';
import TokenMigrationSection from '../components/blocks/TokenMigrationSection';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: HomePageType;
	mainData: MainPageType;
	siteSettings: SiteSettingsType;
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const { data, mainData, pageTransitionVariants } = props;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="performance"
		>
			<NextSeo
				title={data?.seoTitle || ''}
				description={data?.seoDescription || ''}
			/>
			<HeroSection
				title={mainData?.heroTitle}
				videoData={mainData?.videoOne}
				videoMobileData={mainData?.videoOneMobile}
			/>
			<WhatIsAsiSection
				title={mainData?.whatIsAsiHeading}
				subheading={mainData?.whatIsAsiSubheading}
				content={mainData?.whatIsAsiContent}
			/>
			<AllianceSection
				title={mainData?.aboutTheAllianceHeading}
				content={mainData?.aboutTheAlliance}
				fetchAiThumbnail={mainData?.fetchAiThumbnail}
				fetchAiContent={mainData?.fetchAiContent}
				fetchAiLink={mainData?.fetchAiLink}
				singularityNetThumbnail={mainData?.singularityNetThumbnail}
				singularityNetContent={mainData?.singularityNetContent}
				singularityNetLink={mainData?.singularityNetLink}
				oceanProtocolThumbnail={mainData?.oceanProtocolThumbnail}
				oceanProtocolContent={mainData?.oceanProtocolContent}
				oceanProtocolLink={mainData?.oceanProtocolLink}
				videoData={mainData?.videoTwo}
				videoMobileData={mainData?.videoTwoMobile}
			/>
			<TokenSection
				title={mainData?.tokenMergeHeading}
				content={mainData?.tokenMerge}
				heading1={mainData?.tokenMergeHeading1}
				content1={mainData?.tokenMergeContent1}
				heading2={mainData?.tokenMergeHeading2}
				content2={mainData?.tokenMergeContent2}
				heading3={mainData?.tokenMergeHeading3}
				content3={mainData?.tokenMergeContent3}
			/>
			<TokenMigrationSection
				title={mainData?.tokenMigrationHeading}
				points={mainData?.tokenMigrationPoints}
				content={mainData?.tokenMigrationContent}
				heading1={mainData?.tokenMigrationHeading1}
				content1={mainData?.tokenMigrationContent1}
				heading2={mainData?.tokenMigrationHeading2}
				content2={mainData?.tokenMigrationContent2}
				heading3={mainData?.tokenMigrationHeading3}
				content3={mainData?.tokenMigrationContent3}
				videoData={mainData?.videoThree}
				videoMobileData={mainData?.videoThreeMobile}
			/>
			<FoundationSection
				title={mainData?.foundationTeamHeading}
				content={mainData?.foundationTeam}
				teamMembers={mainData?.teamMembers}
			/>
			<PathwaySection
				title={mainData?.pathwayToAsiHeading}
				content={mainData?.pathwayToAsi}
				heading1={mainData?.pathwayHeading1}
				content1={mainData?.pathwayContent1}
				heading2={mainData?.pathwayHeading2}
				content2={mainData?.pathwayContent2}
				heading3={mainData?.pathwayHeading3}
				content3={mainData?.pathwayContent3}
				contactLink={mainData?.pathwayContactLink}
				videoData={mainData?.videoFour}
				videoMobileData={mainData?.videoFourMobile}
			/>
			<ResourcesSection />
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
