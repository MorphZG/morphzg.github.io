/*
Configuration documentation
  https://tailwindcss.com/docs/configuration
  https://tailwindcss.com/docs/content-configuration
  https://tailwindcss.com/docs/theme
*/

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{html,js,jsx,md,mdx,astro}",
        "./src/components/**/*.{html,js,jsx,md,mdx,astro}",
        "./src/layouts/**/*.{html,js,jsx,md,mdx,astro",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
