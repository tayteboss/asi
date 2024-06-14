import styled from 'styled-components';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Menu from '../blocks/Menu';
import useNoScroll from '../../hooks/useNoScroll';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import Cursor from '../elements/Cursor';

const siteSettings = require('../../json/siteSettings.json');

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const { children } = props;

	const [menuIsActive, setMenuIsActive] = useState(false);

	const lenis = useLenis(({ scroll }) => {});

	useEffect(() => useNoScroll(menuIsActive), [menuIsActive]);

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
				<Main>{children}</Main>
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
