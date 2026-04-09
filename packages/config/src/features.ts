import { getEnv } from "./env";

export function featureFlags() {
  const env = getEnv();
  return {
    labsEnabled: env.FEATURE_LABS_ENABLED,
    mediaExplorer: env.FEATURE_MEDIA_EXPLORER,
    blockchainTrack: env.FEATURE_BLOCKCHAIN_TRACK,
    characterMode: env.CHARACTER_MODE,
    videoTeachingEnabled: env.VIDEO_TEACHING_ENABLED,
  };
}
