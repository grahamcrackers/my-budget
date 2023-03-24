module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        "turbo",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:react/jsx-runtime", // Disables the need for importing React in each JSX file
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {},
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
    ignorePatterns: [
        // dependencies
        ".npm",
        "node_modules",
        // database
        "prisma",
        // build
        ".turbo",
        ".cache",
        "dist",
        "build",
        "storybook-static",
        // testing
        "coverage",
        // misc
        ".env",
    ],
};
