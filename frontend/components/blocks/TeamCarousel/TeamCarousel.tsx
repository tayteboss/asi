import styled from 'styled-components';
import { TeamMemberType } from '../../../shared/types/types';
import MemberCard from '../../elements/MemberCard';
import useEmblaCarousel from 'embla-carousel-react';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';

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

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-left: ${pxToRem(16)};
		margin-right: ${pxToRem(16)};
	}
`;

const Slide = styled.div`
	pointer-events: all;
`;

const TeamCarousel = (props: Props) => {
	const { data } = props;

	const [isHovered, setIsHovered] = useState(false);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		dragFree: true
	});

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
		</TeamCarouselWrapper>
	);
};

export default TeamCarousel;
