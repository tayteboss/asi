export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'referenceTitle',
      type: 'string',
      description: 'This is an internal reference title.',
      initialValue: 'Site Settings',
    },
    {
      title: 'Telegram',
      name: 'telegram',
      type: 'string',
    },
    {
      title: 'Twitter / X',
      name: 'twitter',
      type: 'string',
    },
    {
      title: 'Privacy URL',
      name: 'privacyUrl',
      type: 'url',
    },
    {
      title: 'Cookies URL',
      name: 'cookiesUrl',
      type: 'url',
    },
    {
      title: 'Terms URL',
      name: 'termsUrl',
      type: 'url',
    },
    {
      title: 'Footer Content',
      name: 'footerContent',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {title: 'Link', value: 'link', type: 'object', fields: [{name: 'href', type: 'url'}]},
            ],
          },
        },
      ],
    },
  ],
}
