// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#394198",
      },
      backgroundColor: {
        "custom-purple": "#394198",
      },
      backgroundImage: {
        'img-services-set': "url('/public/assets/dark-blue-technology-background-vector-with-futuristic-waves_53876-136344.avif')",
      },
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      filter:{
        grayscale: 'grayscale(100%)',
      },
      scale:{
        '150': '1.8',
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-bounce-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(-20%, 0%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
        "fly-in-right": {
                    "0%": {
                        opacity: "0",
                        transform: "translate3d(-1500px, 0, 0)",
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "60%": {
                        opacity: "1",
                        transform: "translate3d(25px, 0, 0)"
                    },
                    "75%": {
                        transform: "translate3d(-10px, 0, 0)"
                    },
                    "90%": {
                        transform: "translate3d(5px, 0, 0)"
                    },
                    "100%": {
                        transform: "none"
                    },
                },
                "fly-in-left": {
                  "0%": {
                      opacity: "0",
                      transform: "translate3d(1500px, 0, 0)",
                      transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                  },
                  "60%": {
                      opacity: "1",
                      transform: "translate3d(-25px, 0, 0)"
                  },
                  "75%": {
                      transform: "translate3d(10px, 0, 0)"
                  },
                  "90%": {
                      transform: "translate3d(-5px, 0, 0)"
                  },
                  "100%": {
                      transform: "none"
                  },
              },
              "fade-in-bounce-right": {
                "0%": {
                    opacity: 0,
                    transform: "translate3d(100%, 0%, 0)",
                },
                "33%": {
                    opacity: 0.5,
                    transform: "translate3d(0%, 0%, 0)",
                },
                "66%": {
                    opacity: 0.7,
                    transform: "translate3d(20%, 0%, 0)",
                },
                "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                },
            },
            flash: {
              "0%, 50%, 100%": {
                  opacity: "1"
              },
              "25%, 75%": {
                  opacity: "0"
              },
          },
          darkToLight: {
            '0%': { filter: 'brightness(0.5)' }, 
            '100%': { filter: 'brightness(1)' },  
          },
          jiggle: {
            "0%": {
                transform: "scale3d(1, 1, 1)"
            },
            "30%": {
                transform: "scale3d(1.25, 0.75, 1)"
            },
            "40%": {
                transform: "scale3d(0.75, 1.25, 1)"
            },
            "50%": {
                transform: "scale3d(1.15, 0.85, 1)"
            },
            "65%": {
                transform: "scale3d(0.95, 1.05, 1)"
            },
            "75%": {
                transform: "scale3d(1.05, 0.95, 1)"
            },
            "100%": {
                transform: "scale3d(1, 1, 1)"
            },
        },
      },
      animation: {
        fadeinleft: "fade-in-left 1s ease-in-out 0.25s 1",
        fadeinright: "fade-in-right 1s ease-in-out 0.25s 1",
        fadein: "fade-in 1s ease-in-out 0.25s 1",
        fadeinbounceleft: 'fade-in-bounce-left 2s ease-in-out 0.25s 1',
        zoomin: 'zoom-in 1s ease-in-out 0.1s 1',
        flyinright: 'fly-in-right 0.6s ease-in-out 0.25s 1',
        flyinleft: 'fly-in-left 0.6s ease-in-out 0.25s 1',
        fadeinbounceright: 'fade-in-bounce-right 3s ease-in-out 0.12s 1',
        flash: 'flash 1s ease-in-out 0.25s 1',
        darkToLight: 'darkToLight 2s ease-out forwards',
        jiggle: 'jiggle 0.6s ease-in-out 0.25s 1',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)",
        },
        ".text-shadow-xl": {
          textShadow: "5px 4px 5px rgba(0, 0, 0, 0.7)",
        },
        ".text-shadow-custom": {
          textShadow: "5px 4px 5px rgba(3, 3, 3, 0.2)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    require('tailwindcss-filters'),
  ],
};
