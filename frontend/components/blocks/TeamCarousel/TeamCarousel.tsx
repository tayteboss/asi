import styled from 'styled-components';
import { TeamMemberType } from '../../../shared/types/types';
import MemberCard from '../../elements/MemberCard';
import useEmblaCarousel from 'embla-carousel-react';
import pxToRem from '../../../utils/pxToRem';
import { useState, useCallback, useEffect } from 'react';
import DownloadArrowSvg from '../../svgs/DownloadArrowSvg';
import ForwardBlobSvg from '../../svgs/ForwardBlob';
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
const ScrollIndicator = styled.div<{ $isScrolled: boolean }>`
	position: fixed;
	right: 1rem;
	top: 12%;
	cursor: pointer;
	transition: opacity 0.25s ease-in-out;
	opacity: ${(props) => (props.$isScrolled ? 0 : 1)};

	padding: ${pxToRem(12)} ${pxToRem(16)};
	border-radius: 17.04px;
	/* background: rgba(189, 177, 177, 0.2); */
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
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

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		dragFree: true,
		watchDrag: true
	});

	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => {
			if (emblaApi.selectedScrollSnap() !== 0) {
				setIsScrolled(true);
			}
		};

		emblaApi.on('select', onSelect);

		return () => {
			emblaApi.off('select', onSelect);
		};
	}, [emblaApi]);

	const scrollToLastSlide = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollTo(emblaApi.slideNodes().length - 1);
	}, [emblaApi]);

	return (
		<TeamCarouselWrapper>
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
			<ScrollIndicator
				onClick={scrollToLastSlide}
				$isScrolled={isScrolled}
			>
				<DownloadArrowSvg
					style={{
						color: 'rgba(177, 252, 171, 1)',
						width: '40px',
						height: '40px',
						transform: 'rotate(-90deg)'
					}}
				/>
			</ScrollIndicator>
		</TeamCarouselWrapper>
	);
};

export default TeamCarousel;
