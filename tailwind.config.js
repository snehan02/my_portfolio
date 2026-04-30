/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Outfit", "sans-serif"],
            },
            colors: {
                primary: {
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#ffd700", // Brighter Gold
                    600: "#d4af37",
                    700: "#b8860b",
                    800: "#a16207",
                    900: "#854d0e",
                    950: "#713f12",
                },
                accent: {
                    400: "#fcd34d",
                    500: "#ffd700",
                    600: "#d4af37",
                },
                surface: {
                    dark: "#000000",
                    card: "#0a0a0a",
                    border: "#1a1a1a",
                },
            },
            animation: {
                "fade-up": "fadeUp 0.6s ease-out forwards",
                "fade-in": "fadeIn 0.5s ease-out forwards",
                float: "float 6s ease-in-out infinite",
                "gradient-x": "gradientX 4s ease infinite",
                glow: "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                gradientX: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                glow: {
                    from: { boxShadow: "0 0 10px rgba(212, 175, 55, 0.2)" },
                    to: { boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)" },
                },
            },
        },
    },
    plugins: [],
};
