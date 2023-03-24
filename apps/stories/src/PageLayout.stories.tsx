import React from "react";
import { Page } from "@my-budget/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PlaceHolder } from "./utils";
// import { userEvent, within } from "@storybook/testing-library";

export default {
    title: "Templates/PageLayout",
    component: Page,
    // parameters: {
    //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    //     layout: "fullscreen",
    // },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
    <Page {...args}>
        <Page.Header>
            <PlaceHolder padding="px-6 py-3" />
        </Page.Header>
        <Page.Wrapper>
            <Page.Main>
                <PlaceHolder />
            </Page.Main>
            <Page.Aside>
                <PlaceHolder />
            </Page.Aside>
        </Page.Wrapper>
    </Page>
);

export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// LoggedIn.play = async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole("button", { name: /Log in/i });
//     await userEvent.click(loginButton);
// };
