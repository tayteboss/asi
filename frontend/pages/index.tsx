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
import Cursor from '../components/elements/Cursor';

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
	const [appCursorRefresh, setAppCursorRefresh] = useState<number>(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimateContent(true);
		}, 1500);

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

	useEffect(() => {
		setAppCursorRefresh(appCursorRefresh + 1);
	}, [animateContent]);

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
				migrationGuideUrl={data?.migrationGuideUrl}
				generalQuestionsUrl={data?.generalQuestionsUrl}
				whitePaperPdf={data?.whitePaperPdf}
				animateContent={animateContent}
				animation={backAnimation}
			/>
			<Footer
				telegram={siteSettings?.telegram}
				twitter={siteSettings?.twitter}
				cookies={siteSettings?.cookiesUrl}
				privacy={siteSettings?.privacyUrl}
				terms={siteSettings?.termsUrl}
				animateContent={animateContent}
			/>
			<Cursor
				cursorRefresh={() => setAppCursorRefresh(appCursorRefresh + 1)}
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
