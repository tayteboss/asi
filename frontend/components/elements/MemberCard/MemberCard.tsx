import styled from 'styled-components';
import { TeamMemberType } from '../../../shared/types/types';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLayout from '../../layout/ButtonLayout';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const MemberCardWrapper = styled.div<{ $isHovered: boolean }>`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	transform: ${(props) => props.$isHovered && 'scale(0.99)'} !important;

	&:hover {
		transform: none !important;

		img {
			transform: scale(1.05);
		}
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		filter: none !important;
		transform: none !important;

		img {
			transform: scale(1.05);
		}
	}

	img {
		transition: all 4000ms ease;
	}

	a {
		margin-top: auto;
	}
`;

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: ${pxToRem(32)};
`;

const RatioInner = styled.div`
	padding-top: 100%;
	position: relative;
	border-radius: 20px;
	overflow: hidden;
`;

const Name = styled.h3`
	margin-bottom: ${pxToRem(10)};
`;

const Title = styled.p`
	height: 44px;
	margin-bottom: ${pxToRem(24)};
	user-select: none;
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		/* height: auto; */
	}
`;

const Description = styled.p`
	margin-bottom: ${pxToRem(24)};
	min-height: 380px;
	height: 380px;
	user-select: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: 380px;
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(16)};
	justify-content: stretch;
	align-items: stretch;
	/* margin-top: auto; */

	/* button {
		width: 100%;
	} */
`;

type MemberCardProps = TeamMemberType & {
	isPriority: boolean;
	imageUrl?: string;
	isHovered: boolean;
	setIsHovered: (isHovered: boolean) => void;
};

const MemberCard = (props: MemberCardProps) => {
	const {
		name,
		title,
		imageUrl,
		link,
		links,
		description,
		isPriority,
		isHovered,
		setIsHovered
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<MemberCardWrapper
			ref={ref}
			className={`view-element-blur-in ${
				inView ? 'view-element-blur-in--in-view' : ''
			}`}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			$isHovered={isHovered}
		>
			<ImageWrapper>
				{imageUrl && (
					<RatioInner>
						<Image
							src={imageUrl}
							alt={`Profile image of ${name}`}
							priority={isPriority}
							fill
							style={{
								objectFit: 'cover',
								filter: 'grayscale(1)'
							}}
						/>
					</RatioInner>
				)}
			</ImageWrapper>
			{name && <Name>{name}</Name>}
			{title && <Title>{title}</Title>}
			{description && <Description>{description}</Description>}
			{/* {link && (
				// <Link href={link} target="_blank">
				// 	<ButtonLayout title="Learn More" isActive={true} isSmall />
				// </Link>
				<a href={'/'}>hi</a>
			)} */}
			{links && (
				<LinksWrapper>
					{links.map((link) => {
						return (
							<Link
								href={link.url}
								key={link._key}
								target="_blank"
							>
								<ButtonLayout
									title={link.title}
									isActive={true}
									isSmall
								/>
							</Link>
						);
					})}
				</LinksWrapper>
			)}
		</MemberCardWrapper>
	);
};

export default MemberCard;
