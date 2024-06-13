export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'SEO Description',
      name: 'seoDescription',
      type: 'string',
    },
    {
      title: 'Hero Video',
      name: 'heroVideo',
      type: 'mux.video',
    },
    {
      title: 'Article Headline',
      name: 'articleHeadline',
      type: 'string',
    },
    {
      title: 'Article Content',
      name: 'articleContent',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [
              {title: 'Link', value: 'link', type: 'object', fields: [{name: 'href', type: 'url'}]},
            ],
          },
        },
      ],
    },
    {
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'array',
      of: [{type: 'richText'}, {type: 'media'}],
    },
  ],
}
