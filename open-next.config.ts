import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const openNextConfig = {
  ...defineCloudflareConfig(),
  // Keep OpenNext from recursively invoking the Cloudflare-facing build script.
  buildCommand: "npm run next:build",
};

export default openNextConfig;
