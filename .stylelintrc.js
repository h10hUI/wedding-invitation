module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'string-quotes': 'single',
    'at-rule-no-unknown': [
      true,
      {'ignoreAtRules': [
        'include','use','forward','if','mixin','return','function','keyframes',
      ]},
    ],
    'no-invalid-position-at-import-rule': null,
  },
}
