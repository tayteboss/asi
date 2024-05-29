import {HomeIcon} from '@sanity/icons'

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      title: 'Reference Title',
      name: 'referenceTitle',
      type: 'string',
      description: 'This is an internal reference title.',
    },
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
      description: 'This is the SEO title that appears in search engines.',
    },
    {
      title: 'SEO Description',
      name: 'seoDescription',
      type: 'string',
      description: 'This is the SEO description that appears in search engines.',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Media',
      name: 'media',
      type: 'mux.video',
    },
    {
      title: 'Migration Guide URL',
      name: 'migrationGuideUrl',
      type: 'url',
    },
    {
      title: 'White Paper PDF',
      name: 'whitePaperPdf',
      type: 'file',
    },
    {
      title: 'General Questions URL',
      name: 'generalQuestionsUrl',
      type: 'url',
    },
  ],
}
