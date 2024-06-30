import styled from 'styled-components';
import client from '../client';
import { PageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import PageBuilder from '../components/common/PageBuilder/PageBuilder';
import HeroVideoSection from '../components/blocks/HeroVideoSection';
import AnimateText from '../components/layout/AnimateText';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../utils/pxToRem';
import { PortableText } from '@portabletext/react';
import ResourcesSection from '../components/blocks/ResourcesSection';

type Props = {
	data: PageType;
	pageTransitionVariants: TransitionsType;
};

const PageWrapper = styled(motion.div)`
	padding-top: ${pxToRem(280)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: ${pxToRem(250)};
	}
`;

const IntroContentWrapper = styled.section`
	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: 0 16px;
	}
`;

const IntroContentInner = styled.div`
	padding: ${pxToRem(50)};
	backdrop-filter: blur(10px);
	width: ${pxToRem(980)};
	margin: 0 auto;
	border-radius: ${pxToRem(20)};
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(50)};
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 100%;
		padding: ${pxToRem(32)};
		backdrop-filter: blur(5px);
	}
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(80)};
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(30)};
	}
`;

const Headline = styled.h2`
	margin-bottom: ${pxToRem(80)};
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(30)};
	}
`;

const ContentWrapper = styled.div``;

const workPageVariants = {
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

const Page = (props: Props) => {
	const { data } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.01,
		rootMargin: '-50px'
	});

	return (
		<PageWrapper
			variants={workPageVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title={data?.title || ''}
				description={data?.seoDescription || ''}
			/>
			{/* <HeroVideoSection data={data?.heroVideo} /> */}
			<IntroContentWrapper>
				<IntroContentInner>
					{/* hide title  */}
					{/* {data?.title && (
						<Title ref={ref} className="type-h2 type-h2--blur-in">
							<AnimateText text={data?.title} active={inView} />
						</Title>
					)} */}
					{data?.articleHeadline && (
						<Headline className="type-h1 type-h1--blur-in">
							<AnimateText
								text={data?.articleHeadline}
								active={inView}
								useDelay
							/>
						</Headline>
					)}
					{data?.articleContent && (
						<ContentWrapper
							className={`rich-text view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							<PortableText value={data.articleContent} />
						</ContentWrapper>
					)}
				</IntroContentInner>
			</IntroContentWrapper>
			<PageBuilder data={data?.pageBuilder} />
			<ResourcesSection />
		</PageWrapper>
	);
};

export async function getStaticPaths() {
	const pageListQuery = `
		*[_type == 'page'] [0...100] {
			slug
		}
	`;

	const allPages = await client.fetch(pageListQuery);

	return {
		paths: allPages.map((item: any) => {
			return `/${item?.slug?.current}`;
		}),
		fallback: false
	};
}

export async function getStaticProps({ params }: any) {
	const pageQuery = `
		*[_type == 'page' && slug.current == "${params.slug[0]}"][0] {
			...,
			'heroVideo': heroVideo.asset->playbackId,
			pageBuilder[]{
			...,
			'imageOne': imageOne.asset->url,
			'imageOneCaption': imageOne.caption,
			'imageTwo': imageTwo.asset->url,
			'imageTwoCaption': imageTwo.caption
		},
		}
	`;

	const data = await client.fetch(pageQuery);

	return {
		props: {
			data
		}
	};
}

export default Page;
