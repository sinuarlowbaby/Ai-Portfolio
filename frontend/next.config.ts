import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: "/Sinu_Arlow_Baby_Resume.pdf",
                headers: [
                    {
                        key: "Content-Disposition",
                        value: 'attachment; filename="Sinu_Arlow_Baby_Resume.pdf"',
                    },
                    {
                        key: "Content-Type",
                        value: "application/pdf",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
