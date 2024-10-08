const ForwardBlobSvg = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="110"
			height="165"
			fill="none"
			viewBox="0 0 110 165"
			{...props}
		>
			<path
				fill="currentColor"
				d="M110 82.571c0 15.125-12.255 27.395-27.38 27.395-15.125 0-27.395 12.255-27.395 27.38 0 15.125-12.27 27.395-27.395 27.395S.45 152.471.45 137.346s12.255-27.38 27.38-27.38c15.125 0 27.395-12.27 27.395-27.395s-12.27-27.38-27.395-27.38S.45 42.92.45 27.796 12.705.416 27.83.416c15.125 0 27.395 12.255 27.395 27.38 0 15.125 12.27 27.395 27.395 27.395S110 67.446 110 82.57z"
			></path>
		</svg>
	);
};

export default ForwardBlobSvg;
