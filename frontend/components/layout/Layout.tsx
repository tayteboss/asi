import styled from 'styled-components';
import { ReactNode, useEffect, useState, useRef } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Menu from '../blocks/Menu';
import useNoScroll from '../../hooks/useNoScroll';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import Cursor from '../elements/Cursor';
import Scene from './Canvas/Scene';
import useViewportWidth from '../../hooks/useViewportWidth';
const siteSettings = require('../../json/siteSettings.json');

const Main = styled.main`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: auto;
	touch-action: auto;
`;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const { children } = props;

	const mainRef = useRef<HTMLElement>(null);

	const [menuIsActive, setMenuIsActive] = useState(false);

	const lenis = useLenis(({ scroll }) => {});

	const viewport = useViewportWidth();
	const isMobile = viewport === 'mobile' || viewport === 'tabletPortrait';

	useEffect(() => useNoScroll(menuIsActive), [menuIsActive]);

	const camZ = isMobile ? 12 : 6.5;

	return (
		<>
			<Menu
				setMenuIsActive={setMenuIsActive}
				menuIsActive={menuIsActive}
			/>
			<Header
				setMenuIsActive={setMenuIsActive}
				menuIsActive={menuIsActive}
				logo={siteSettings?.logoSvg}
			/>
			<ReactLenis root>
				<Main ref={mainRef}>
					<Scene
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100vw',
							height: '100vh',
							pointerEvents: 'none',
							transition: 'all 0.25s linear',
							zIndex: -1
						}}
						eventSource={mainRef}
						eventPrefix="client"
						camera={{
							fov: 45,
							near: 0.1,
							far: 200,
							position: [0, 0, camZ]
						}}
					/>
					{children}
				</Main>
			</ReactLenis>
			<Footer
				telegram={siteSettings?.telegram}
				twitter={siteSettings?.twitter}
				privacy={siteSettings?.privacyUrl}
				terms={siteSettings?.termsUrl}
				cookies={siteSettings?.cookiesUrl}
				footerContent={siteSettings?.footerContent}
			/>
		</>
	);
};

export default Layout;
