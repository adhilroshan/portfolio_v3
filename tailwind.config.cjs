/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				marquee: 'marquee 25s linear infinite',
				'marquee-rev': 'marquee-rev 25s linear infinite',
			  },
			  keyframes: {
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-100%)' },
				},
				'marquee-rev': {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(100%)' },
				}
			  },
		},
	},
	plugins: [],
}
