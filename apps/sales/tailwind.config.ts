import type { Config } from 'tailwindcss';
import { join } from 'path';
import colors from 'tailwindcss/colors';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { customTheme } from './custom-theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../../packages/ui/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
		join(require.resolve('@skeletonlabs/skeleton'), '../../packages/ui/**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
		colors: {
			'ts-blue': '#1575CF',
			'ts-gray-md': '#D5D5D5',
			white: colors.white,
			'ts-black': '#141414'
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [customTheme]
			}
		})
	]
} satisfies Config;
