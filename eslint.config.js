// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    name: 'custom-rules',
    rules: {
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'unused-imports/no-unused-imports': ['error'],
    },
  },
  {
    ignores: ['examples/*'],
  },
)
