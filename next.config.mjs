import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
};

const withMDX = nextMDX({
  // Turbopack에서는 options에 함수나 복잡한 플러그인을 직접 넣을 수 없습니다.
  // (serializable options 에러 발생 원인)
});

export default withMDX(nextConfig);
