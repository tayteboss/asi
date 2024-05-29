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
	generalQuestionsUrl: string | null;
	media: MediaType | null;
	migrationGuideUrl: string | null;
	title: string | null;
	whitePaperPdf: FileType | null;
};

export type SiteSettingsType = {
	privacyUrl: string | null;
	telegram: string | null;
	termsUrl: string | null;
	twitter: string | null;
};

export type WorkPageType = {
	seoTitle: string;
	seoDescription: string;
};

export type ProjectType = {
	slug: SlugType;
};
