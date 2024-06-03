import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import {
	HomePageType,
	SiteSettingsType,
	TransitionsType
} from '../shared/types/types';
import { motion, useAnimation } from 'framer-motion';
import client from '../client';
import {
	homePageQueryString,
	siteSettingsQueryString
} from '../lib/sanityQueries';
import Footer from '../components/common/Footer';
import Intro from '../components/blocks/Intro';
import pxToRem from '../utils/pxToRem';
import { useEffect, useState } from 'react';

const PageWrapper = styled(motion.div)<{ $animateContent: boolean }>`
	background: var(--colour-black);
	padding: ${(props) => (props.$animateContent ? pxToRem(30) : '0')};
	display: flex;
	flex-direction: column;
	height: 100dvh;

	transition: padding var(--transition-speed-slow) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${(props) => (props.$animateContent ? pxToRem(20) : '0')};
	}
`;

type Props = {
	data: HomePageType;
	siteSettings: SiteSettingsType;
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const { data, siteSettings, pageTransitionVariants } = props;

	const [animateContent, setAnimateContent] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimateContent(true);
		}, 750);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const foreAnimation = useAnimation();
	const backAnimation = useAnimation();

	const handleMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		const moveX = clientX - window.innerWidth / 2;
		const moveY = clientY - window.innerHeight / 2;
		const backOffsetFactor = 50;
		const foreOffsetFactor = 85;
		backAnimation.start({
			x: moveX / backOffsetFactor,
			y: moveY / backOffsetFactor
		});
		foreAnimation.start({
			x: moveX / foreOffsetFactor,
			y: moveY / foreOffsetFactor
		});
	};

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			$animateContent={animateContent}
			onMouseMove={(e) => handleMouseMove(e)}
		>
			<NextSeo
				title={data?.seoTitle || ''}
				description={data?.seoDescription || ''}
			/>
			<Intro
				title={data?.title}
				animateContent={animateContent}
				animation={backAnimation}
			/>
			<Footer
				documentationPdf={data?.documentationPdf}
				migrationGuideContent={data?.migrationGuideContent}
				telegram={siteSettings?.telegram}
				twitter={siteSettings?.twitter}
				cookies={siteSettings?.cookiesUrl}
				privacy={siteSettings?.privacyUrl}
				terms={siteSettings?.termsUrl}
				animateContent={animateContent}
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
