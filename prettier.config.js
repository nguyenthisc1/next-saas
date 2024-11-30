/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
    trailingComma: 'es5',
    semi: false,
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: true,
    arrowParens: 'always',
    embeddedLanguageFormatting: 'auto',
    htmlWhitespaceSensitivity: 'css',
    printWidth: 500,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    plugins: ['prettier-plugin-tailwindcss'],
}
