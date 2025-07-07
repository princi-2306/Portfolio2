import { saturation } from 'three/examples/jsm/nodes/Nodes.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        CoolFont1 : ["Varela", "sans-serif"]
      }
    },
  },
  plugins: [],
}