import type { StorybookConfig } from "@storybook/react-vite";
import type { ViteFinal } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};

export default config;

// https://github.com/storybookjs/builder-vite#typescript
export const viteFinal: ViteFinal = async (config, options) => {
    return mergeConfig(config, {
        // these need to be defined for some of the headless ui components
        // https://github.com/storybookjs/storybook/issues/18920#issuecomment-1342865124
        define: {
            NODE_ENV: "development",
            TEST_BYPASS_TRACKED_POINTER: "false",
        },
    });
};
