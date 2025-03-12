
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				notify: {
					purple: '#6E56CF',
					blue: '#3E63DD',
					teal: '#14B8A6',
					amber: '#F59E0B',
					dark: '#0B0F19',
					darker: '#070A12',
					muted: '#1A1F2C',
					neon: '#9eff00',     // New vibrant green color from the image
					green: '#63FF00',    // Bright green from the image
					lime: '#8AFF44',     // Lighter green variant
					darkgreen: '#141E0F' // Dark green background tone
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-light': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'rotate-in': {
					'0%': { transform: 'rotate(-10deg) scale(0.95)', opacity: '0' },
					'100%': { transform: 'rotate(0) scale(1)', opacity: '1' }
				},
				'bounce-in': {
					'0%': { transform: 'translateY(40px)', opacity: '0' },
					'50%': { transform: 'translateY(-15px)' },
					'70%': { transform: 'translateY(5px)' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(158, 255, 0, 0.5), 0 0 10px rgba(158, 255, 0, 0.3)'
					},
					'50%': { 
						textShadow: '0 0 15px rgba(158, 255, 0, 0.8), 0 0 25px rgba(158, 255, 0, 0.5)'
					}
				},
				'border-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(158, 255, 0, 0.5), 0 0 10px rgba(158, 255, 0, 0.3)' },
					'50%': { boxShadow: '0 0 15px rgba(158, 255, 0, 0.8), 0 0 25px rgba(158, 255, 0, 0.5)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-light': 'pulse-light 3s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
				'scale-in': 'scale-in 0.7s ease-out forwards',
				'rotate-in': 'rotate-in 0.6s ease-out forwards',
				'bounce-in': 'bounce-in 1s ease-out forwards',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'border-glow': 'border-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
