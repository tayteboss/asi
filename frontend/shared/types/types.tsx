export type MediaType = {
	mediaType: 'video' | 'image';
	video: { asset: { playbackId: string } };
	image: { asset: { url: string; metadata: { lqip: string } }; alt: string };
	mobileImage?: { asset: { url: string; metadata: { lqip: string } } };
	mobileVideo?: { asset: { playbackId: string } };
	caption?: string;
};

export type FileType = {
	asset: {
		url: string;
	};
};

export type TransitionsType = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		};
	};
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number;
		};
	};
};

export type ButtonType = {
	url: string;
	pageReference: {
		_ref: string;
	};
	title: string;
};

export type SlugType = {
	current: string;
};

export type HomePageType = {
	seoTitle: string | null;
	seoDescription: string | null;
	title: string | null;
	migrationGuideContent: any | null;
	documentationPdf: string | null;
};

export type ImageType = {
	asset: {
		url: string;
	};
};

export type IconCarouselProps = {
	type: 'fetch' | 'singularity' | 'ocean';
	title: string;
	content: string | null;
	link: string | null;
	image: string | null;
}[];

export type MuxVideoType = {
	asset: {
		playbackId: string;
	};
};

export type TeamMemberType = {
	name: string | null;
	title: string | null;
	image: ImageType | null;
	link: string | null;
	description: string | null;
};

export type MainPageType = {
	seoTitle: string | null;
	seoDescription: string | null;
	aboutTheAlliance: string | null;
	aboutTheAllianceHeading: string | null;
	fetchAiContent: string | null;
	fetchAiLink: string | null;
	foundationTeamHeading: string | null;
	foundationTeam: string | null;
	heroTitle: string | null;
	oceanProtocolContent: string | null;
	oceanProtocolLink: string | null;
	pathwayContactLink: string | null;
	pathwayHeading1: string | null;
	pathwayHeading2: string | null;
	pathwayHeading3: string | null;
	pathwayContent1: [] | null;
	pathwayContent2: [] | null;
	pathwayContent3: [] | null;
	pathwayToAsiHeading: string | null;
	pathwayToAsi: string | null;
	singularityNetContent: string | null;
	singularityNetLink: string | null;
	teamMembers: TeamMemberType[] | null;
	tokenMergeHeading: string | null;
	tokenMerge: string | null;
	tokenMergeContent1: [] | null;
	tokenMergeContent2: [] | null;
	tokenMergeContent3: [] | null;
	tokenMergeHeading1: string | null;
	tokenMergeHeading2: string | null;
	tokenMergeHeading3: string | null;
	whatIsAsiContent: string | null;
	whatIsAsiHeading: string | null;
	whatIsAsiSubheading: string | null;
	videoOne: string | null;
	videoOneMobile: string | null;
	videoTwo: string | null;
	videoTwoMobile: string | null;
	videoThree: string | null;
	videoThreeMobile: string | null;
	oceanProtocolThumbnail: string | null;
	singularityNetThumbnail: string | null;
	fetchAiThumbnail: string | null;
};

export type SiteSettingsType = {
	privacyUrl: string | null;
	telegram: string | null;
	termsUrl: string | null;
	twitter: string | null;
	cookiesUrl: string | null;
	footerContent: [] | null;
	logoSvg: string | null;
};

export type WorkPageType = {
	seoTitle: string;
	seoDescription: string;
};

export type ProjectType = {
	slug: SlugType;
};
