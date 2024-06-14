import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import LogoIconSvg from '../../svgs/LogoIconSvg';
import pxToRem from '../../../utils/pxToRem';
import { useLenis } from '@studio-freight/react-lenis';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
	menuIsActive: boolean;
	setMenuIsActive: (value: boolean) => void;
};

const wrapperVariants = {
	hidden: {
		x: '100%',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'afterChildren',
			staggerChildren: 0.1,
			staggerDirection: -1
		}
	},
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.1
		}
	}
};

const childVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const MenuWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	background: rgba(178, 178, 178, 0.5);
	backdrop-filter: blur(10px);
	z-index: 95;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
	}
`;

const Inner = styled(motion.div)`
	padding: ${pxToRem(30)} ${pxToRem(80)} ${pxToRem(50)} ${pxToRem(30)};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	position: relative;
	z-index: 10;
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(16)} ${pxToRem(16)} 50vh ${pxToRem(16)};
	}
`;

const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(8)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		position: relative;
		transform: translateY(50%);
	}
`;

const Item = styled(motion.button)`
	text-align: left;
	font-size: ${pxToRem(70)};
	line-height: ${pxToRem(70)};
	letter-spacing: -2.8px;
	color: var(--colour-lime);
	position: relative;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-black);
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(50)};
		line-height: ${pxToRem(50)};
		letter-spacing: -2.5px;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(35)};
		line-height: ${pxToRem(35)};
		letter-spacing: -1.4px;
	}
`;

const ClickOutside = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100dvh;
	background: rgba(0, 0, 0, 0.4);
	z-index: 5;
	cursor: pointer;
`;

const Menu = (props: Props) => {
	const { menuIsActive, setMenuIsActive } = props;
	const router = useRouter();
	const lenis = useLenis(({ scroll }) => {});

	const handleScrollToAnchor = async (anchor: string) => {
		if (window.location.pathname !== '/') {
			await router.push('/');
			setTimeout(() => {
				if (lenis) {
					lenis.scrollTo(`#${anchor}`, {
						duration: 1
					});
				}
			}, 1200); // Adjust the delay as needed
		} else {
			if (lenis) {
				lenis.scrollTo(`#${anchor}`, {
					duration: 1
				});
			}
		}
	};

	return (
		<AnimatePresence>
			{menuIsActive && (
				<>
					<MenuWrapper
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						key="menu-wrapper"
						onClick={() => setMenuIsActive(false)}
					>
						<Inner variants={childVariants}>
							<LogoIconSvg />
							<ItemsWrapper
								onClick={() => setMenuIsActive(false)}
							>
								<Item
									variants={childVariants}
									onClick={() =>
										handleScrollToAnchor('what-is-asi')
									}
								>
									What is ASI?
								</Item>
								<Item
									variants={childVariants}
									onClick={() => {
										handleScrollToAnchor(
											'about-the-alliance'
										);
									}}
								>
									About the Alliance
								</Item>
								<Item
									variants={childVariants}
									onClick={() => {
										handleScrollToAnchor('token-merge');
									}}
								>
									Token Merge
								</Item>
								<Item
									variants={childVariants}
									onClick={() => {
										handleScrollToAnchor('token-migration');
									}}
								>
									Token Migration
								</Item>
								<Item
									variants={childVariants}
									onClick={() => {
										handleScrollToAnchor('foundation-team');
									}}
								>
									Foundation Team
								</Item>
								<Item
									variants={childVariants}
									onClick={() => {
										handleScrollToAnchor('pathway-to-asi');
									}}
								>
									Pathway to ASI
								</Item>
								<Item
									variants={childVariants}
									onClick={() => {
										handleScrollToAnchor('resources');
									}}
								>
									Resources
								</Item>
							</ItemsWrapper>
						</Inner>
					</MenuWrapper>
					<ClickOutside
						variants={childVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						key="menu-wrapper"
						onClick={() => setMenuIsActive(false)}
					/>
				</>
			)}
		</AnimatePresence>
	);
};

export default Menu;
