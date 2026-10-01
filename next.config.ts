import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: process.env.NODE_ENV === "production" ? "/esraa-syam" : "",
	images: {
		unoptimized: true,
		localPatterns: [
			{
				pathname: "/images/**",
				search: "?v=2",
			},
		],
	},
};

export default nextConfig;
