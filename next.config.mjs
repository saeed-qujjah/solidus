import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["insta.sekkara.com"],
        // unoptimized: true,
    },
};

export default withNextIntl(nextConfig);
