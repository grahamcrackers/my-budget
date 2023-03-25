const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        // {
        //     name: "@storybook/addon-styling",
        //     options: {
        //         // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        //         // For more details on this addon's options.
        //         postCss: true,
        //     },
        // },
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
    },
    features: {
        storyStoreV7: true
    }

    //   async viteFinal(config, { configType }) {
    //     // customize the Vite config here
    //     return {
    //       ...config,
    //       resolve: {
    //         alias: [
    //           {
    //             find: "@acme/core",
    //             replacement: path.resolve(
    //               __dirname,
    //               "../../../packages/acme-core/"
    //             ),
    //           },
    //         ],
    //       },
    //     };
    //   },
};
