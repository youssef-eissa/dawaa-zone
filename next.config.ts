import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    experimental:{
        reactCompiler: true
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          },
        ],
      },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);