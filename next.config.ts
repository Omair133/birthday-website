import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.100.101","192.168.100.100","192.168.100.104"],
  output: "export"
};

export default nextConfig;
