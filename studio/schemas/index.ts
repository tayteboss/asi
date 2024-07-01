import homePage from './homePage'
import mainPage from './mainPage'
import media from './media'
import page from './page'
import richtext from './richtext'
import siteSettings from './siteSettings'
import teamMember from './teamMember'
import tokenMigrationAccordion from './tokenMigrationAccordion'

export const schemaTypes = [
  // Site Settings
  siteSettings,

  // Pages
  homePage,
  mainPage,
  page,

  // Documents
  teamMember,
  richtext,
  media,
  tokenMigrationAccordion,
]
