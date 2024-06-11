import styled from 'styled-components';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Menu from '../blocks/Menu';
import useNoScroll from '../../hooks/useNoScroll';

const siteSettings = require('../../json/siteSettings.json');

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const { children } = props;

	const [menuIsActive, setMenuIsActive] = useState(false);

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
			/>
			<Main>{children}</Main>
			<Footer
				telegram={siteSettings?.telegram}
				twitter={siteSettings?.twitter}
				privacy={siteSettings?.privacyUrl}
				terms={siteSettings?.termsUrl}
				cookies={siteSettings?.cookiesUrl}
			/>
		</>
	);
};

export default Layout;
