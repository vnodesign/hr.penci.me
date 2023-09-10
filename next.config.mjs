import nextra from 'nextra'
import withBundleAnalyzer from '@next/bundle-analyzer'
import withPWAInit from 'next-pwa'
import emoji from 'remark-emoji'

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
})

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: true,
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [
      emoji, {
        emoticon: true
      }
    ]
  }
})

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = withNextra(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
    return [
      {
        source: '/group-hr',
        destination: 'https://www.facebook.com/groups/xomhr',
        permanent: true
      },
      {
        source: '/group-dev',
        destination: 'https://www.facebook.com/groups/2827248757496356',
        permanent: true
      },
      {
        source: '/group-design',
        destination: 'https://www.facebook.com/groups/1868252066694465',
        permanent: true
      },
      {
        source: '/blog',
        destination: 'https://hrpenci.site',
        permanent: true
      },
      {
        source: '/blog/khai-niem-giua-back-end-va-front-end',
        destination: 'https://redirect.hrpenci.site/khai-niem-giua-back-end-va-front-end',
        permanent: true
      }
    ]},
    images: {
      formats: ['image/webp'],
      domains: ['ik.imagekit.io'],
      loader: 'custom',
      loaderFile: './imagekitLoader.js'
    },
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat'
        })
      }
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    }
  })
)

export default bundleAnalyzer(nextConfig)
