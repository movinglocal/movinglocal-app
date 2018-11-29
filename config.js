module.exports = {
  title: 'Moving Local App',
  meta: {
    description: 'Moving Local App Description',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'noindex,nofollow'
  },
  map: {
    center: [53.0934, 8.8083],
    tileurl: 'https://maps.tilehosting.com/styles/bright/{z}/{x}/{y}.png?key=IA1qWrAbZAe6JUuSfLgB',
    userRadius: 1000
  },
  HERE_APP_ID: 'WOhEXnd20kbhT8Lxx4n4',
  HERE_APP_CODE: 'uFkDYK0WKXBPZgG8mRb9Rg',
  showReset: true,
  SOURCES_COLLECTION: 'sources',
  FAVS_COLLECTION: 'favs',
  DB_NAME: 'movinglocal_db',
  BASE_URL: process.env.BASE_URL || 'https://movinglocal-staging.herokuapp.com',
  ARTICLE_PATH: '/artikel',
  FAVORITE_PATH: '/favoriten',
  FILTER_PATH: '/filter',
  IMPRINT_PATH: '/impressum',
  PRIVACY_PATH: '/datenschutz',
  FEEDBACK_PATH: '/feedback',
  ONBOARDING_PATH: '/onboarding',
  ORGANISATION_PATH: '/organisation',
  ABOUT_PATH: '/about',
  WATCH_INTERVAL: 600000, // 10 min
  DEXIE_VERSION: 1
};
