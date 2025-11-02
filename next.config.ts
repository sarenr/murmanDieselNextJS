import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Отключаем прерывание сборки из-за eslint-ошибок (в CI лучше фиксировать ошибки)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
