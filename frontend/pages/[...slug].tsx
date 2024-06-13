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

type Props = {
	data: PageType;
	pageTransitionVariants: TransitionsType;
};

const PageWrapper = styled(motion.div)`
	padding: ${pxToRem(280)} 0;
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(100)};
	position: relative;
	z-index: 2;
`;

const Headline = styled.h2`
	margin-bottom: ${pxToRem(100)};
	position: relative;
	z-index: 2;
`;

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

	console.log('data', data);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
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
			<HeroVideoSection data={data?.heroVideo} />
			{data?.title && (
				<Title ref={ref} className="type-h2 type-h2--blur-in">
					<AnimateText text={data?.title} active={inView} />
				</Title>
			)}
			{data?.articleHeading && (
				<Headline>
					<AnimateText text={data?.articleHeading} active={inView} />
				</Headline>
			)}
			<PageBuilder data={data?.pageBuilder} />
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
		fallback: true
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
			'imageTwo': imageTwo.asset->url,
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
