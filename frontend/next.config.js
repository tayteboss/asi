const nextConfig = {
	reactStrictMode: true,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true
	},
	typescript: {
		// Warning: This allows production builds to successfully complete even if
		// your project has type errors.
		ignoreBuildErrors: true
	},
	env: {
		SITE_URL: process.env.SITE_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.mux.com',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '**'
			}
		]
	},
	compiler: {
		styledComponents: true
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			use: ['raw-loader', 'glslify-loader']
		});

		return config;
	}
};

module.exports = nextConfig;
