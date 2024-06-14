import styled from 'styled-components';
import { IconCarouselProps } from '../../../shared/types/types';
import useEmblaCarousel from 'embla-carousel-react';
import pxToRem from '../../../utils/pxToRem';
import ColumnCard from '../../elements/ColumnCard';

type Props = {
	data: IconCarouselProps;
};

const IconCarouselWrapper = styled.div`
	position: relative;
	z-index: 2;
	backdrop-filter: blur(10px);
	width: 100%;
	border-radius: ${pxToRem(20)};
	background: rgba(255, 255, 255, 0.2);
	pointer-events: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		backdrop-filter: blur(5px);
	}
`;

const Embla = styled.div`
	padding: ${pxToRem(50)} 0;
`;

const Container = styled.div`
	padding-left: ${pxToRem(36)};
	margin-right: ${pxToRem(36)};
`;

const Slide = styled.div`
	pointer-events: all;
	display: flex;
	flex-direction: column;
	height: 100%;

	&.embla__slide {
		flex: 0 0 15%;
		min-width: 220px;
	}
`;

const IconCarousel = (props: Props) => {
	const { data } = props;

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		dragFree: true
	});

	return (
		<IconCarouselWrapper>
			<Embla className="embla" ref={emblaRef}>
				<Container className="embla__container">
					{data?.map((slide, i) => (
						<Slide className="embla__slide" key={i}>
							<ColumnCard
								type={slide.type}
								title={slide.title}
								content={slide?.content}
								link={slide?.link}
								image={slide?.image}
							/>
						</Slide>
					))}
				</Container>
			</Embla>
		</IconCarouselWrapper>
	);
};

export default IconCarousel;
