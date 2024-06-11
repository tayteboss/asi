import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import LogoIconSvg from '../../svgs/LogoIconSvg';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import { useRef } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';

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
		padding: ${pxToRem(16)};
	}
`;

const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(8)};
`;

const Item = styled(motion.a)`
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
					>
						<Inner variants={childVariants}>
							<LogoIconSvg />
							<ItemsWrapper
								onClick={() => setMenuIsActive(false)}
							>
								<Link href="/#what-is-asi">
									<Item variants={childVariants}>
										What is ASI?
									</Item>
								</Link>
								<Link href="/#about-the-alliance">
									<Item variants={childVariants}>
										About the Alliance
									</Item>
								</Link>
								<Link href="/#token-merge">
									<Item variants={childVariants}>
										Token Merge
									</Item>
								</Link>
								<Link href="/#foundation-team">
									<Item variants={childVariants}>
										Foundation Team
									</Item>
								</Link>
								<Link href="/#pathway-to-asi">
									<Item variants={childVariants}>
										Pathway to ASI
									</Item>
								</Link>
								<Link href="/#resources">
									<Item variants={childVariants}>
										Resources
									</Item>
								</Link>
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
