module.exports = {
    plugins: ['stylelint-scss'],
    extends: ['stylelint-config-recommended-scss'],
    rules: {
        'scss/at-if-no-null': null,
        'scss/selector-no-redundant-nesting-selector': true,
        'block-no-empty': null,
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            {
                ignore: ['stylelint-commands', 'after-comment'],
            },
        ],
        'selector-pseudo-element-colon-notation': 'single',
        'at-rule-empty-line-before': null,
        'no-empty-source': null,
        'property-no-unknown': [true, { ignoreProperties: ['syntax', 'inherits'] }],
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'export'] }],
        'no-descending-specificity': null,
        'scss/at-import-partial-extension': null,
        'scss/at-import-no-partial-leading-underscore': null,
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
            },
        ],
        'selector-class-pattern': null,
        'selector-id-pattern': null,
        'scss/dollar-variable-pattern': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'scss/at-mixin-pattern': null,
        'scss/no-global-function-names': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': null,
    },
};
