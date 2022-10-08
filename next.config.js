/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 렌더링 두번 발생되는 문제 해결하는법 (production 에선 적용되지않음)
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
