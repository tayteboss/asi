import styled from 'styled-components';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
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
	image?: string | null;
	useDarkLink?: boolean;
	multiLine?: boolean;
};

const ColumnCardWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 100%;

	gap: ${pxToRem(36)};
	flex: 1;

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

const Title = styled.h3<{ $multiLine: boolean }>`
	font-size: ${pxToRem(40)};
	line-height: ${pxToRem(44)};
	letter-spacing: -1.2px;
	font-weight: 200;
	min-height: ${(props) => (props.$multiLine ? '135px' : 'auto')};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(30)};
		line-height: ${pxToRem(33)};
		letter-spacing: -0.9px;
		font-weight: 200;
		min-height: auto;
	}
`;

const Content = styled.div`
	/* for alignment, feels slightlsy hacky */
	min-height: 170px;
`;

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
		image,
		useDarkLink = false,
		multiLine = false
	} = props;

	const contentIsPortableText = typeof content !== 'string';

	const ref: any = useRef(null);
	const siblingsRef: any = useRef([]);

	return (
		<ColumnCardWrapper
			variants={childVariants}
			key={`icon-${type}`}
			ref={ref}
		>
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
			<Title $multiLine={multiLine}>{title || ''}</Title>

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
					<ButtonLayout title={linkTitle} isActive={!useDarkLink} />
				</Link>
			)}
		</ColumnCardWrapper>
	);
};

export default ColumnCard;
