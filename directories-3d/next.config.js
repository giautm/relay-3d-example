const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const relay = require('./relay.config.json');
/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
      language: relay.language,
    },
  },
  turbopack: {
    root: path.join(__dirname, '..'),
    rules: {
      '*.graphql': {
        loaders: [{loader: 'graphql-tag/loader'}],
        as: '*.js',
      },
    },
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
