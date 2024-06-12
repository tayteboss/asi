import styled from 'styled-components';
import FetchIconSvg from '../../svgs/FetchIconSvg';
import pxToRem from '../../../utils/pxToRem';
import { PortableText } from '@portabletext/react';
import ButtonLayout from '../../layout/ButtonLayout';
import Link from 'next/link';
import formatHTML from '../../../utils/formatHTML';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
	type?: 'fetch' | 'singularity' | 'ocean';
	title: string | null;
	content: string | null | [];
	link?: string | null;
	linkTitle?: string;
	image: string | null;
};

const ColumnCardWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${pxToRem(36)};
	flex: 1;
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(24)};
	}

	a {
		margin-top: auto;
	}
`;

const ImageContainer = styled.div`
	width: 90%;
`;

const ImageWrapper = styled.div`
	width: 100%;
	padding-top: 100%;
	position: relative;
`;

const RatioWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: ${pxToRem(15)};
`;

const Title = styled.h3`
	font-size: ${pxToRem(40)};
	line-height: ${pxToRem(44)};
	letter-spacing: -1.2px;
	font-weight: 200;
`;

const Content = styled.div``;

const childVariants = {
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

const ColumnCard = (props: Props) => {
	const {
		type,
		title,
		content,
		link,
		linkTitle = 'Learn more',
		image
	} = props;

	const contentIsPortableText = typeof content !== 'string';

	return (
		<ColumnCardWrapper variants={childVariants} key={`icon-${type}`}>
			{image && (
				<ImageContainer>
					<ImageWrapper>
						<RatioWrapper>
							<Image
								src={image}
								alt={type || ''}
								fill
								style={{
									objectFit: 'cover'
								}}
							/>
						</RatioWrapper>
					</ImageWrapper>
				</ImageContainer>
			)}
			<Title>{title || ''}</Title>
			{contentIsPortableText ? (
				<div className="rich-text rich-text--small">
					{content && <PortableText value={content} />}
				</div>
			) : (
				<>
					{content && (
						<Content
							dangerouslySetInnerHTML={{
								__html: formatHTML(content)
							}}
						/>
					)}
				</>
			)}
			{link && (
				<Link href={link} target="_blank">
					<ButtonLayout title={linkTitle} isActive={true} />
				</Link>
			)}
		</ColumnCardWrapper>
	);
};

export default ColumnCard;
