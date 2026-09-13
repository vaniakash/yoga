const fs = require('fs');

const designHtmlPath = '/Users/akashrana/Desktop/MCA/yoga/design.html';
const globalsCssPath = '/Users/akashrana/Desktop/MCA/yoga/kalap-gram-website/src/app/[locale]/globals.css';

const htmlContent = fs.readFileSync(designHtmlPath, 'utf8');

// Extract the tailwind config JSON
const tailwindConfigMatch = htmlContent.match(/tailwind\.config\s*=\s*({[\s\S]*?})\s*<\/script>/);
if (!tailwindConfigMatch) {
  console.error("Could not find tailwind config in design.html");
  process.exit(1);
}

// Evaluate it in a sandbox (it's safe here since we know the content)
let tailwindConfig;
try {
  // It's a JS object, not strict JSON.
  const fn = new Function('return ' + tailwindConfigMatch[1]);
  tailwindConfig = fn();
} catch (e) {
  console.error("Error evaluating tailwind config:", e);
  process.exit(1);
}

const theme = tailwindConfig.theme.extend;

let cssContent = `@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
`;

// Add colors
for (const [key, value] of Object.entries(theme.colors || {})) {
  cssContent += `  --color-${key.replace(/\//g, '\\/')}: ${value};\n`;
}

// Add border radius
for (const [key, value] of Object.entries(theme.borderRadius || {})) {
  if (key === 'DEFAULT') {
    cssContent += `  --radius: ${value};\n`;
  } else {
    cssContent += `  --radius-${key}: ${value};\n`;
  }
}

// Add spacing
for (const [key, value] of Object.entries(theme.spacing || {})) {
  cssContent += `  --spacing-${key}: ${value};\n`;
}

// Add font families
for (const [key, value] of Object.entries(theme.fontFamily || {})) {
  const fontVal = Array.isArray(value) ? value.map(v => \`"\${v}"\`).join(', ') : value;
  cssContent += `  --font-${key}: ${fontVal};\n`;
}

// Add font sizes
// Tailwind v4 uses --text-* for font sizes, wait, no, --text-<size> and --text-<size>--line-height
for (const [key, value] of Object.entries(theme.fontSize || {})) {
  let size = value;
  let options = {};
  if (Array.isArray(value)) {
    size = value[0];
    options = value[1] || {};
  }
  cssContent += `  --text-${key}: ${size};\n`;
  if (options.lineHeight) {
    cssContent += `  --text-${key}--line-height: ${options.lineHeight};\n`;
  }
  if (options.letterSpacing) {
    cssContent += `  --text-${key}--letter-spacing: ${options.letterSpacing};\n`;
  }
  if (options.fontWeight) {
    cssContent += `  --text-${key}--font-weight: ${options.fontWeight};\n`;
  }
}

cssContent += `}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Custom classes from design.html */
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 1;
  display: inline-block;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}

.ashram-pattern {
  background-image: radial-gradient(rgba(31, 56, 43, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.gilded-inset {
  box-shadow: inset 0 0 0 1px rgba(184, 157, 91, 0.25);
}

.bg-radial {
  background-image: radial-gradient(var(--tw-gradient-stops));
}
`;

fs.writeFileSync(globalsCssPath, cssContent);
console.log("globals.css updated successfully.");
