import {HomeIcon} from '@sanity/icons'

export default {
  title: 'Main Page',
  name: 'mainPage',
  type: 'document',
  icon: HomeIcon,
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO Information',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'whatIsAsi',
      title: 'What is ASI Information',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'alliances',
      title: 'Alliances Information',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'tokenMerge',
      title: 'Token Merge Information',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'foundationTeam',
      title: 'Foundation Team Information',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'pathwayToAsi',
      title: 'Pathway to ASI Information',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'resources',
      title: 'Resources Information',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'media',
      title: 'Media',
      options: {collapsible: true, collapsed: true},
    },
  ],
  fields: [
    {
      title: 'Reference title',
      name: 'referenceTitle',
      type: 'string',
      description: 'This is an internal reference title.',
    },
    {
      title: 'SEO title',
      name: 'seoTitle',
      type: 'string',
      description: 'This is the SEO title that appears in search engines.',
      fieldset: 'seo',
    },
    {
      title: 'SEO description',
      name: 'seoDescription',
      type: 'string',
      description: 'This is the SEO description that appears in search engines.',
      fieldset: 'seo',
    },
    {
      title: 'Hero title',
      name: 'heroTitle',
      type: 'string',
    },
    {
      title: 'What is ASI Heading',
      name: 'whatIsAsiHeading',
      type: 'string',
      fieldset: 'whatIsAsi',
    },
    {
      title: 'What is ASI Subheading',
      name: 'whatIsAsiSubheading',
      type: 'string',
      fieldset: 'whatIsAsi',
    },
    {
      title: 'What is ASI Content',
      name: 'whatIsAsiContent',
      type: 'text',
      fieldset: 'whatIsAsi',
    },
    {
      title: 'About the alliance',
      name: 'aboutTheAlliance',
      type: 'text',
      fieldset: 'alliances',
    },
    {
      title: 'Fetch.ai content',
      name: 'fetchAiContent',
      type: 'text',
      fieldset: 'alliances',
    },
    {
      title: 'Fetch.ai Link',
      name: 'fetchAiLink',
      type: 'url',
      fieldset: 'alliances',
    },
    {
      title: 'Singularity.Net content',
      name: 'singularityNetContent',
      type: 'text',
      fieldset: 'alliances',
    },
    {
      title: 'Singularity.Net Link',
      name: 'singularityNetLink',
      type: 'url',
      fieldset: 'alliances',
    },
    {
      title: 'Ocean Protocol content',
      name: 'oceanProtocolContent',
      type: 'text',
      fieldset: 'alliances',
    },
    {
      title: 'Ocean Protocol Link',
      name: 'oceanProtocolLink',
      type: 'url',
      fieldset: 'alliances',
    },
    {
      title: 'Token Merge',
      name: 'tokenMerge',
      type: 'text',
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge About',
      name: 'tokenMergeContent1',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge Merger',
      name: 'tokenMergeContent2',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge Migration Ratio',
      name: 'tokenMergeContent3',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      fieldset: 'tokenMerge',
    },
    {
      title: 'Foundation Team',
      name: 'foundationTeam',
      type: 'text',
      fieldset: 'foundationTeam',
    },
    {
      title: 'Team Members',
      name: 'teamMembers',
      type: 'array',
      of: [{type: 'teamMember'}],
      fieldset: 'foundationTeam',
    },
    {
      title: 'Pathway to ASI',
      name: 'pathwayToAsi',
      type: 'text',
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Application',
      name: 'pathwayContent1',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Types of Members',
      name: 'pathwayContent2',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Contact',
      name: 'pathwayContent3',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Contact Link',
      name: 'pathwayContactLink',
      type: 'string',
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Resources White Paper',
      name: 'resourcesWhitePaper',
      type: 'url',
      fieldset: 'resources',
    },
    {
      title: 'Resources General Questions Link',
      name: 'resourcesGeneralQuestionsLink',
      type: 'url',
      fieldset: 'resources',
    },
    {
      title: 'Resources Documentation Link',
      name: 'resourcesDocumentationLink',
      type: 'url',
      fieldset: 'resources',
    },
    {
      title: 'Video one',
      name: 'videoOne',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video two',
      name: 'videoTwo',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video three',
      name: 'videoThree',
      type: 'mux.video',
      fieldset: 'media',
    },
  ],
}
