// @ts-check

import typescriptESLint from "typescript-eslint"
import configConventions from "./eslint.config.js"

export default typescriptESLint.config(...configConventions, {
  ignores: ["test/fixtures/*"],
})
