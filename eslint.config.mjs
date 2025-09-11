import { defineConfig } from "eslint/config"
import configConventions from "./eslint.config.js"

export default defineConfig(...configConventions, {
  ignores: ["test/fixtures/*"],
})
