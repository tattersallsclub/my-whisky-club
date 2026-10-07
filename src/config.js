// Same backend as the staff app, the two are separate frontends sharing
// one Apps Script / Google Sheet. Replace with the NEW backend URL from
// the account migration (Part A), not the old one.
export const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycby4_BvjmaVu5CVm_6dAhIJCKKpP4NyfYmLIQvinS842EZq5Cqeg4smP4ylNX2aO83Gq/exec/exec'

// The full whiskey list, with descriptions, lives outside the app
// entirely, as a PDF on Google Drive, not something this project
// generates or maintains, this just links to it.
export const WHISKEY_LIST_PDF_URL =
  'https://drive.google.com/file/d/1zMeWLZtX5N1ydESmNu_J51QrHOXExJZT/view?usp=share_link'
