import type { Config } from "tailwindcss";
import sharedConfig from "@wepl/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [sharedConfig],
};

export default config;
