import {TextIcon} from '@sanity/icons'

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'document',
  icon: TextIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'This is an internal reference title.',
      initialValue: 'Rich Text',
    },
    {
      title: 'Content',
      name: 'content',
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
  ],
}
