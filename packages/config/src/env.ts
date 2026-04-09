import { z } from "zod";

export const IpMode = z.enum(["inspired", "homage"]);
export type IpMode = z.infer<typeof IpMode>;

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  IP_MODE: IpMode.default("inspired"),

  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),

  NEXTAUTH_SECRET: z.string().min(16),
  NEXTAUTH_URL: z.string().url(),

  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),

  S3_BUCKET: z.string().default("ridgemont-uploads"),
  S3_ENDPOINT: z.string().url().optional(),
  S3_ACCESS_KEY: z.string().optional(),
  S3_SECRET_KEY: z.string().optional(),

  MCP_GATEWAY_URL: z.string().url().default("http://localhost:8400"),
  AI_SERVICE_URL: z.string().url().default("http://localhost:8500"),

  NEWS_API_KEY: z.string().optional(),

  FEATURE_LABS_ENABLED: z
    .string()
    .transform((v) => v === "true")
    .default("true"),
  FEATURE_MEDIA_EXPLORER: z
    .string()
    .transform((v) => v === "true")
    .default("true"),
  FEATURE_BLOCKCHAIN_TRACK: z
    .string()
    .transform((v) => v === "true")
    .default("false"),
});

export type Env = z.infer<typeof envSchema>;

let _env: Env | null = null;

export function getEnv(): Env {
  if (!_env) {
    _env = envSchema.parse(process.env);
  }
  return _env;
}

export function isInspiredMode(): boolean {
  return getEnv().IP_MODE === "inspired";
}

export function isHomageMode(): boolean {
  return getEnv().IP_MODE === "homage";
}
