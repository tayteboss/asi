import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutWrapper from '../components/layout/LayoutWrapper';
import pxToRem from '../utils/pxToRem';
import Link from 'next/link';
import ButtonLayout from '../components/layout/ButtonLayout';

const PageWrapper = styled.div`
	padding-top: ${pxToRem(200)};
`;

const Inner = styled.div`
	padding: ${pxToRem(100)} 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${pxToRem(40)};
`;

const Title = styled.h2`
	color: var(--colour-black);
`;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo title="404 | Sorry we couldn't find that page" />
			<LayoutWrapper>
				<Inner>
					<Title>Sorry, we couldn't find that page</Title>
					<Link href="/">
						<ButtonLayout title="Go Home" isActive={true} />
					</Link>
				</Inner>
			</LayoutWrapper>
		</PageWrapper>
	);
};

export default Page;
