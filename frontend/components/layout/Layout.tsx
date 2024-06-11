import styled from 'styled-components';
import { ReactNode } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

const siteSettings = require('../../json/siteSettings.json');

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const { children } = props;

	return (
		<>
			<Header />
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
