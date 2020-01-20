module.exports = {
  title: 'Formik Material-UI',
  tagline: 'Easily combine formik with Material-UI',
  url: 'https://stackworx.github.io/formik-material-ui/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'stackworx', // Usually your GitHub org/user name.
  projectName: 'formik-material-ui', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Formik Material-UI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/guide/getting-started', label: 'Guide', position: 'left' },
        { to: 'docs/api/material-ui', label: 'API', position: 'left' },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/stackworx/formik-material-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ciaran Liedeman, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
