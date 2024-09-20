// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/config-ui-helpers/tailwind.config.ts';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./components/**/*.{html,js,svelte,ts}'],
  presets: [sharedConfig]
};

export default config;
