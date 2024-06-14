const mediaField = `
	mediaType,
	image {
		alt,
		asset-> {
			url,
			metadata {
				lqip
			}
		},
	},
	video {
		asset-> {
			playbackId,
		},
	},
`;

export const siteSettingsQueryString = `
	*[_type == 'siteSettings'][0] {
		...,
	}
`;

export const homePageQueryString = `
	*[_type == 'homePage'][0] {
		...,
	}
`;

export const mainPageQueryString = `
	*[_type == 'mainPage'][0] {
		...,
		"videoOne": videoOne.asset->playbackId,
		"videoTwo": videoTwo.asset->playbackId,
		"videoThree": videoThree.asset->playbackId,
		"videoFour": videoFour.asset->playbackId,
		"videoOneMobile": videoOneMobile.asset->playbackId,
		"videoTwoMobile": videoTwoMobile.asset->playbackId,
		"videoThreeMobile": videoThreeMobile.asset->playbackId,
		"videoFourMobile": videoFourMobile.asset->playbackId,
		"teamMembers": teamMembers[]{
			...,
			"imageUrl": image.asset->url,
		},
		"fetchAiThumbnail": fetchAiThumbnail.asset->url,
		"singularityNetThumbnail": singularityNetThumbnail.asset->url,
		"oceanProtocolThumbnail": oceanProtocolThumbnail.asset->url,
	}
`;

export const workPageQueryString = `
	*[_type == "workPage"] {
		...,
		seoTitle,
		seoDescription,
	}
`;

export const projectsQueryString = `
	*[_type == 'project'] | order(orderRank) [0...100] {
		...,
	}
`;
