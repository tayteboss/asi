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
		media {
			${mediaField}
		},
		whitePaperPdf {
			asset-> {
				url,
			},
		},
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
