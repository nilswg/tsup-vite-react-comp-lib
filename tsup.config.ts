import { defineConfig } from "tsup";

export default defineConfig({
  shims: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: false,
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"], //
  outDir: "dist",
  dts: true,
});
