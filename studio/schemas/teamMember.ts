import {UserIcon} from '@sanity/icons'

export default {
  title: 'Team Member',
  name: 'teamMember',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
}
