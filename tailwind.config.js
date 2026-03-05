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
                    50: "#f0f4ff",
                    100: "#e0e9ff",
                    200: "#c2d3ff",
                    300: "#93b4ff",
                    400: "#6090ff",
                    500: "#3b6bff",
                    600: "#2952ff",
                    700: "#1a3de6",
                    800: "#1632b8",
                    900: "#162c91",
                    950: "#111c54",
                },
                accent: {
                    400: "#a78bfa",
                    500: "#8b5cf6",
                    600: "#7c3aed",
                },
                surface: {
                    dark: "#0a0a1a",
                    card: "#12121f",
                    border: "#1e1e35",
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
                    from: { boxShadow: "0 0 10px rgba(59, 107, 255, 0.3)" },
                    to: { boxShadow: "0 0 30px rgba(59, 107, 255, 0.7)" },
                },
            },
        },
    },
    plugins: [],
};
