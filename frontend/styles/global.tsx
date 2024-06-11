import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-grey: ${theme.colours.grey};
		--colour-lime: ${theme.colours.lime};
		--font-default: ${theme.fonts.default};
		--font-mono: ${theme.fonts.mono};
		--font-book: ${theme.fonts.book};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
	}

	-webkit-text-size-adjust: 100%;

	::selection {
		background-color: var(--colour-lime);
		color: var(--colour-black);
	}

	html {
		background: var(--colour-white);
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-default);
		color: var(--colour-black);
		line-height: normal;
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: none;
		color: var(--colour-black);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1,
	h2,
	.type-h2,
	h3,
	.type-h3,
	h4,
	.type-h4{
		font-size: ${pxToRem(77)};
		line-height: ${pxToRem(77)};
		letter-spacing: -3.1px;
		font-weight: 200;

		@media ${theme.mediaBreakpoints.tabletMedium} {
			font-size: ${pxToRem(50)};
			line-height: ${pxToRem(50)};
			letter-spacing: -2.5px;
		}

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(35)};
			line-height: ${pxToRem(35)};
			letter-spacing: -1.4px;
		}

		&--blur-in {
			* {
				font-size: ${pxToRem(77)};
				line-height: ${pxToRem(77)};
				letter-spacing: -3.1px;
				font-weight: 200;

				@media ${theme.mediaBreakpoints.tabletMedium} {
					font-size: ${pxToRem(50)};
					line-height: ${pxToRem(50)};
					letter-spacing: -2.5px;
				}

				@media ${theme.mediaBreakpoints.tabletPortrait} {
					font-size: ${pxToRem(35)};
					line-height: ${pxToRem(35)};
					letter-spacing: -1.4px;
				}
			}
		}
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${pxToRem(14)};
		line-height: ${pxToRem(18)};

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(12)};
			line-height: ${pxToRem(16)};
		}
	}

	.rich-text {
		* {
			font-size: ${pxToRem(22)};
			line-height: ${pxToRem(29)};
			letter-spacing: -0.7px;
			color: var(--colour-white);
			font-family: var(--font-book);
	
			@media ${theme.mediaBreakpoints.tabletPortrait} {
				font-size: ${pxToRem(16)};
				line-height: ${pxToRem(20)};
			}
		}

		b {
			font-weight: 900;
		}
	
		p {
			&:not(:last-child) {
				margin-bottom: ${pxToRem(24)};

				@media ${theme.mediaBreakpoints.tabletPortrait} {
					margin-bottom: ${pxToRem(16)};
				}
			}
		}

		ul {
			padding-left: ${pxToRem(20)};

			li {
				position: relative;
				list-style-type: none;
				padding-left: 10px;

				&::before {
					content: '•';
					position: absolute;
					left: -10px;
					top: 0;
					color: var(--colour-white);
				}
			}
		}
	}

	.type-mono {
		font-family: var(--font-mono);
		font-size: ${pxToRem(12)};
		line-height: ${pxToRem(15)};

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(11)};
			line-height: ${pxToRem(14)};
		}
	}

	.type-book {
		font-family: var(--font-book);
	}

	mux-player {
		--media-object-fit: contain;
		--media-object-position: center;
		--controls: none;
		--media-object-fit: cover;
		--media-object-position: center;
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity var(--transition-speed-default) ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1), transform var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity var(--transition-speed-default) ease, transform var(--transition-speed-default) ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.embla {
		overflow: hidden;
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	.performance {
		-webkit-transform: translateZ(0);
		backface-visibility: hidden;
		perspective: 1000;
		transform: translate3d(0,0,0);
		transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${pxToRem(16)};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 5rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}


	html.lenis {
		height: auto;
	}

	.lenis.lenis-smooth {
		scroll-behavior: auto !important;
	}

	.lenis.lenis-smooth [data-lenis-prevent] {
		overscroll-behavior: contain;
	}

	.lenis.lenis-stopped {
		overflow: hidden;
	}

	.lenis.lenis-scrolling iframe {
		pointer-events: none;
	}
`;
