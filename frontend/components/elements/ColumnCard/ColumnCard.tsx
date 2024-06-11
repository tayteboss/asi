import styled from 'styled-components';
import FetchIconSvg from '../../svgs/FetchIconSvg';
import SingularityIconSvg from '../../svgs/SingularityIconSvg';
import OceanIconSvg from '../../svgs/OceanIconSvg';
import pxToRem from '../../../utils/pxToRem';
import { PortableText } from '@portabletext/react';
import ButtonLayout from '../../layout/ButtonLayout';
import Link from 'next/link';
import formatHTML from '../../../utils/formatHTML';
import { motion } from 'framer-motion';

type Props = {
	icon?: 'fetch' | 'singularity' | 'ocean';
	title: string | null;
	content: string | null | [];
	link?: string | null;
	linkTitle?: string;
};

const ColumnCardWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${pxToRem(36)};
	flex: 1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(24)};
	}

	a {
		margin-top: auto;
	}
`;

const IconWrapper = styled.div``;

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
	const { icon, title, content, link, linkTitle = 'Learn more' } = props;

	const contentIsPortableText = typeof content !== 'string';

	return (
		<ColumnCardWrapper variants={childVariants} key={`icon-${icon}`}>
			<IconWrapper>
				{icon === 'fetch' && <FetchIconSvg />}
				{icon === 'singularity' && <SingularityIconSvg />}
				{icon === 'ocean' && <OceanIconSvg />}
			</IconWrapper>
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
