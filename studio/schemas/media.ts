import {ImageIcon} from '@sanity/icons'

interface Document {
  useVideo: boolean
}

export default {
  title: 'Media',
  name: 'media',
  type: 'document',
  icon: ImageIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'This is an internal reference title.',
      initialValue: 'Media',
    },
    {
      title: 'Image One',
      name: 'imageOne',
      type: 'image',
      description: 'Using one image will use full width styles',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      title: 'Image Two',
      name: 'imageTwo',
      type: 'image',
      description: 'Using two images will use two column styles',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
  ],
}
