import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const MediaSectionWrapper = styled.section`
	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: 0 16px;
	}
`;

const Inner = styled.div`
	width: ${pxToRem(980)};
	margin: 0 auto;
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 100%;
		padding: ${pxToRem(32)};
	}
`;

const TwoColumnWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(40)};
	width: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		gap: ${pxToRem(50)};
	}
`;

const OneColumnWrapper = styled.div`
	width: 100%;
`;

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${pxToRem(24)};
`;

const RatioWrapper = styled.div<{ ratio: number }>`
	position: relative;
	width: 100%;
	overflow: hidden;
	border-radius: ${pxToRem(20)};
	padding-top: ${(props) => props.ratio}%;
`;

const ImageInner = styled.div`
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100%;
`;

const Caption = styled.p``;

interface MediaSectionProps {
	imageOne: string;
	imageTwo?: string;
	imageOneCaption?: string;
	imageTwoCaption?: string;
}

const MediaSection: React.FC<MediaSectionProps> = ({
	imageOne,
	imageTwo,
	imageOneCaption,
	imageTwoCaption
}) => {
	const useTwoColumns = imageOne && imageTwo;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.01,
		rootMargin: '-50px'
	});

	return (
		<MediaSectionWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<Inner>
				{useTwoColumns ? (
					<TwoColumnWrapper>
						<ImageWrapper>
							<RatioWrapper ratio={100}>
								<ImageInner
									className={`view-element-blur-in ${
										inView
											? 'view-element-blur-in--in-view'
											: ''
									}`}
								>
									<Image
										src={imageOne}
										fill
										style={{ objectFit: 'cover' }}
										alt={imageOneCaption || ''}
									/>
								</ImageInner>
							</RatioWrapper>
							{imageOneCaption && (
								<Caption>{imageOneCaption}</Caption>
							)}
						</ImageWrapper>
						<ImageWrapper>
							<RatioWrapper ratio={100}>
								<ImageInner
									className={`view-element-blur-in ${
										inView
											? 'view-element-blur-in--in-view'
											: ''
									}`}
								>
									<Image
										src={imageTwo}
										fill
										style={{ objectFit: 'cover' }}
										alt={imageTwoCaption || ''}
									/>
								</ImageInner>
							</RatioWrapper>
							{imageTwoCaption && (
								<Caption>{imageTwoCaption}</Caption>
							)}
						</ImageWrapper>
					</TwoColumnWrapper>
				) : (
					<OneColumnWrapper>
						<ImageWrapper>
							<RatioWrapper ratio={50}>
								<ImageInner
									className={`view-element-blur-in ${
										inView
											? 'view-element-blur-in--in-view'
											: ''
									}`}
								>
									<Image
										src={imageOne}
										fill
										style={{ objectFit: 'cover' }}
										alt={imageOneCaption || ''}
									/>
								</ImageInner>
							</RatioWrapper>
							{imageOneCaption && (
								<Caption>{imageOneCaption}</Caption>
							)}
						</ImageWrapper>
					</OneColumnWrapper>
				)}
			</Inner>
		</MediaSectionWrapper>
	);
};

export default MediaSection;
