// @ts-check

import typescriptESLint from "typescript-eslint"
import eslintConfigConventions from "./eslint.config.js"

export default typescriptESLint.config(...eslintConfigConventions, {
  ignores: ["test/fixtures/*"],
})
