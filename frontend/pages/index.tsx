import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import {
	HomePageType,
	MainPageType,
	SiteSettingsType,
	TransitionsType
} from '../shared/types/types';
import { motion, useAnimation } from 'framer-motion';
import client from '../client';
import {
	homePageQueryString,
	mainPageQueryString,
	siteSettingsQueryString
} from '../lib/sanityQueries';
import Footer from '../components/common/Footer';
import Intro from '../components/blocks/Intro';
import pxToRem from '../utils/pxToRem';
import AllianceSection from '../components/blocks/AllianceSection';
import FoundationSection from '../components/blocks/FoundationSection';
import HeroSection from '../components/blocks/HeroSection';
import PathwaySection from '../components/blocks/PathwaySection';
import TokenSection from '../components/blocks/TokenSection';
import WhatIsAsiSection from '../components/blocks/WhatIsAsiSection';

const PageWrapper = styled(motion.div)<{ $animateContent: boolean }>`
	background: var(--colour-black);
	padding: ${(props) => (props.$animateContent ? pxToRem(30) : '0')};

	transition: padding var(--transition-speed-slow) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${(props) => (props.$animateContent ? pxToRem(20) : '0')};
	}
`;

type Props = {
	data: HomePageType;
	mainData: MainPageType;
	siteSettings: SiteSettingsType;
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const { data, mainData, siteSettings, pageTransitionVariants } = props;

	const animateContent = true;

	console.log('mainData', mainData);

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			$animateContent={animateContent}
		>
			<NextSeo
				title={data?.seoTitle || ''}
				description={data?.seoDescription || ''}
			/>
			<HeroSection />
			<WhatIsAsiSection />
			<AllianceSection />
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
