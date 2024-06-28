import styled from 'styled-components';
import { TeamMemberType } from '../../../shared/types/types';
import MemberCard from '../../elements/MemberCard';
import useEmblaCarousel from 'embla-carousel-react';
import pxToRem from '../../../utils/pxToRem';
import { useState, useCallback, useEffect } from 'react';
import DownloadArrowSvg from '../../svgs/DownloadArrowSvg';
import { ForwardBlobSvg, BackwardBlobSvg } from '../../svgs/ForwardBlob';
type Props = {
	data: TeamMemberType[] | null;
};

const TeamCarouselWrapper = styled.div`
	position: relative;

	z-index: 2;
	backdrop-filter: blur(10px);
	width: 100%;
	border-radius: ${pxToRem(20)};
	background: rgba(255, 255, 255, 0.2);
	/* pointer-events: none; */

	display: flex;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		backdrop-filter: blur(5px);
	}
`;

const Embla = styled.div`
	padding: ${pxToRem(50)} 0;
	/* background-color: blue; */

	/* display: flex;
	justify-content: center;
	align-items: center; */
`;
const ScrollIndicatorRight = styled.div<{ $isScrolled: boolean }>`
	position: fixed;
	/* right: 1rem; */
	top: 20%;
	cursor: pointer;
	transition: opacity 0.25s ease-in-out;
	opacity: ${(props) => (props.$isScrolled ? 0 : 1)};

	padding: ${pxToRem(12)} ${pxToRem(16)};
	border-radius: 17.04px;
	/* background: rgba(189, 177, 177, 0.2); */
	/* backdrop-filter: blur(10px); */
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
	transform: translateY(-50%);

	svg {
		transition: color 0.25s ease-in-out;
		color: rgba(177, 252, 171, 1);
	}

	&:hover {
		svg {
			color: black;
		}
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const ScrollIndicatorLeft = styled.div<{ $isScrolled: boolean }>`
	position: fixed;
	/* left: 1rem; */
	top: 20%;
	transform: translateY(-50%);
	cursor: pointer;
	transition: opacity 0.25s ease-in-out;
	opacity: ${(props) => (props.$isScrolled ? 0 : 1)};

	padding: ${pxToRem(12)} ${pxToRem(16)};
	border-radius: 17.04px;
	/* background: rgba(189, 177, 177, 0.2); */
	/* backdrop-filter: blur(10px); */
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999999999;

	svg {
		z-index: 99999999999;
		transition: color 0.25s ease-in-out;
		color: rgba(177, 252, 171, 1);
	}

	&:hover {
		svg {
			color: black;
		}
	}
	/* transform: translateY(-50%); */
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Container = styled.div`
	padding-left: ${pxToRem(36)};
	margin-right: ${pxToRem(36)};

	/* display: flex;
	justify-content: center;
	align-items: stretch; */

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-left: ${pxToRem(16)};
		margin-right: ${pxToRem(16)};

		/* flex-direction: column; */
	}
`;

const Slide = styled.div`
	pointer-events: all;
`;

const TeamCarousel = (props: Props) => {
	const { data } = props;

	const [isHovered, setIsHovered] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(true);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		dragFree: true,
		watchDrag: true,
		skipSnaps: false
	});

	const scrollToLastSlide = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollTo(emblaApi.slideNodes().length - 1);
	}, [emblaApi]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) {
			const nextIndex = Math.min(
				emblaApi.selectedScrollSnap() + 1,
				emblaApi.scrollSnapList().length - 1
			);
			emblaApi.scrollTo(nextIndex);
		}
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => {
			setCanScrollPrev(emblaApi.canScrollPrev());
			setCanScrollNext(emblaApi.canScrollNext());
		};

		emblaApi.on('select', onSelect);
		emblaApi.on('init', onSelect);

		return () => {
			emblaApi.off('select', onSelect);
			emblaApi.off('init', onSelect);
		};
	}, [emblaApi]);

	return (
		<TeamCarouselWrapper>
			<ScrollIndicatorLeft
				onClick={scrollPrev}
				$isScrolled={!canScrollPrev}
			>
				<BackwardBlobSvg
					style={{
						width: '80px',
						height: '80px'
					}}
				/>
			</ScrollIndicatorLeft>
			<Embla className="embla" ref={emblaRef}>
				<Container className="embla__container">
					{data?.map((member, i) => (
						<Slide className="embla__slide" key={i}>
							<MemberCard
								{...member}
								isPriority={i <= 4}
								setIsHovered={setIsHovered}
								isHovered={isHovered}
							/>
						</Slide>
					))}
				</Container>
			</Embla>
			<ScrollIndicatorRight
				onClick={scrollNext}
				$isScrolled={!canScrollNext}
			>
				<ForwardBlobSvg
					style={{
						// color: 'rgba(177, 252, 171, 1)',
						width: '80px',
						height: '80px'
					}}
				/>
			</ScrollIndicatorRight>
		</TeamCarouselWrapper>
	);
};

export default TeamCarousel;
