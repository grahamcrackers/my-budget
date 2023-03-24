module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-my-budget`
    extends: ["my-budget"],
    settings: {
        next: {
            rootDir: ["apps/*/"],
        },
    },
};
