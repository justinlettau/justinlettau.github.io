module.exports = {
  siteMetadata: {
    title: 'Justin Lettau',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-TQMPQDY0MX'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Justin Lettau',
        short_name: 'Justin Lettau',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#00d1b2',
        display: 'standalone',
        icon: 'src/images/avatar.png',
      },
    },
  ],
};
