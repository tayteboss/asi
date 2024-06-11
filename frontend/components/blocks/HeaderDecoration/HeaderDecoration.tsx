import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import pxToRem from '../../../utils/pxToRem';
import useViewportWidth from '../../../hooks/useViewportWidth';

const HeaderDecorationWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const IconWrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${pxToRem(15)};
	height: ${pxToRem(15)};
	border-radius: 50%;

	svg {
		width: ${pxToRem(15)};
		height: ${pxToRem(15)};
	}
`;

const PlusSvg = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0.149902 7.53003H15.1999" stroke="#151A1A" />
		<path d="M7.67969 15.05V0" stroke="#151A1A" />
	</svg>
);

const useTransforms = (numIcons: number) => {
	const { scrollY } = useScroll();
	const [docHeight, setDocHeight] = useState(0);

	useEffect(() => {
		const body = document.body;
		const html = document.documentElement;
		if (body && html) {
			setDocHeight(
				Math.max(
					body.scrollHeight,
					body.offsetHeight,
					html.clientHeight,
					html.scrollHeight,
					html.offsetHeight
				)
			);
		}
	}, []);

	return Array.from({ length: numIcons }).map((_, index, array) =>
		useTransform(
			scrollY,
			[0, docHeight],
			[0, (360 / (array.length - 1)) * index]
		)
	);
};

const HeaderDecoration: React.FC = () => {
	const viewport = useViewportWidth();
	const isMobile = viewport === 'mobile' || viewport === 'tabletPortrait';
	const maxIcons = 12;
	const numIcons = isMobile ? 6 : maxIcons;
	const transforms = useTransforms(maxIcons); // Always use the max number of transforms

	return (
		<HeaderDecorationWrapper>
			{Array.from({ length: numIcons }).map((_, index) => (
				<div key={index}>
					<IconWrapper style={{ rotate: transforms[index] }}>
						<PlusSvg />
					</IconWrapper>
				</div>
			))}
		</HeaderDecorationWrapper>
	);
};

export default HeaderDecoration;
