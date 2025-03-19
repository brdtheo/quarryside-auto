import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

// @ts-expect-error Mock BigInt serialization
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
