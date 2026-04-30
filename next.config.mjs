import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["sanity", "@sanity/ui", "@sanity/icons", "styled-components"],
};

export default withMDX(nextConfig);
