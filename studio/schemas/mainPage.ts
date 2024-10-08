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
      name: 'tokenMigration',
      title: 'Token Migration Guide',
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
      title: 'About the Alliance Heading',
      name: 'aboutTheAllianceHeading',
      type: 'string',
      fieldset: 'alliances',
    },
    {
      title: 'About the Alliance Content',
      name: 'aboutTheAlliance',
      type: 'text',
      fieldset: 'alliances',
    },
    {
      title: 'Fetch.ai Thumbnail',
      name: 'fetchAiThumbnail',
      type: 'image',
      fieldset: 'alliances',
    },
    {
      title: 'Fetch.ai Content',
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
      title: 'Singularity.Net Thumbnail',
      name: 'singularityNetThumbnail',
      type: 'image',
      fieldset: 'alliances',
    },
    {
      title: 'Singularity.Net Content',
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
      title: 'Ocean Protocol Thumbnail',
      name: 'oceanProtocolThumbnail',
      type: 'image',
      fieldset: 'alliances',
    },
    {
      title: 'Ocean Protocol Content',
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
      title: 'Token Merge Heading',
      name: 'tokenMergeHeading',
      type: 'string',
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge Content',
      name: 'tokenMerge',
      type: 'text',
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge Column 1 Heading',
      name: 'tokenMergeHeading1',
      type: 'string',
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge Column 1 Content',
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
      title: 'Token Merge Column 2 Heading',
      name: 'tokenMergeHeading2',
      type: 'string',
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge Column 2 Content',
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
      title: 'Token Merge Column 3 Heading',
      name: 'tokenMergeHeading3',
      type: 'string',
      fieldset: 'tokenMerge',
    },
    {
      title: 'Token Merge Column 3 Content',
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
      title: 'Token Migration Heading',
      name: 'tokenMigrationHeading',
      type: 'string',
      fieldset: 'tokenMigration',
    },
    {
      title: 'Token Migration Accordion',
      name: 'tokenMigrationAccordion',
      type: 'array',
      of: [{type: 'tokenMigrationAccordion'}],
      fieldset: 'tokenMigration',
    },
    {
      title: 'Foundation Team Heading',
      name: 'foundationTeamHeading',
      type: 'string',
      fieldset: 'foundationTeam',
    },
    {
      title: 'Foundation Team Content',
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
      title: 'Pathway to ASI Heading',
      name: 'pathwayToAsiHeading',
      type: 'string',
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway to ASI Content',
      name: 'pathwayToAsi',
      type: 'text',
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Column 1 Heading',
      name: 'pathwayHeading1',
      type: 'string',
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Column 1 Content',
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
      title: 'Pathway Column 2 Heading',
      name: 'pathwayHeading2',
      type: 'string',
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Column 2 Content',
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
      title: 'Pathway Contact Heading',
      name: 'pathwayHeading3',
      type: 'string',
      fieldset: 'pathwayToAsi',
    },
    {
      title: 'Pathway Contact Content',
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
      title: 'Video One Desktop',
      name: 'videoOne',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video One Mobile',
      name: 'videoOneMobile',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video Two Desktop',
      name: 'videoTwo',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video Two Mobile',
      name: 'videoTwoMobile',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video Three Desktop',
      name: 'videoThree',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video Three Mobile',
      name: 'videoThreeMobile',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video Four Desktop',
      name: 'videoFour',
      type: 'mux.video',
      fieldset: 'media',
    },
    {
      title: 'Video Four Mobile',
      name: 'videoFourMobile',
      type: 'mux.video',
      fieldset: 'media',
    },
  ],
}
