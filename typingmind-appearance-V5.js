(function () {
  // Load Inter from Google Fonts
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(font);

  const css = `
    /* Typeface across the app */
    body,
    button,
    input,
    textarea,
    [data-element-id="chat-space-middle-part"],
    [data-element-id="response-block"],
    [data-element-id="user-message"] {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    }

    /* User message: neutral bubble instead of brand blue */
    [data-element-id="user-message"] {
      background: hsl(212deg 16% 92%) !important;
      color: #1a1a1a !important;
      font-size: 1rem !important;
      line-height: 1.65 !important;
    }

    html.dark [data-element-id="user-message"] {
      background: hsl(212deg 16% 19%) !important;
      color: #e2e5e9 !important;
    }

    /* AI response: match the size, leave the background alone */
    [data-element-id="response-block"] {
      font-size: 1rem !important;
      line-height: 1.65 !important;
    }

    /* Muted palette.
       TypingMind colours come from two places: CSS variables, and
       Tailwind slate classes applied directly. Both are handled below. */
    body {
      --brand-color: hsl(212deg 26% 40%) !important;
      --sidebar-color: hsl(212deg 18% 8%) !important;
      --sidebar-menu-color: hsl(212deg 16% 17%) !important;
      --popup-color: hsl(212deg 16% 20%) !important;
      --workspace-color: hsl(212deg 15% 18%) !important;
      --main-dark-color: hsl(212deg 15% 11%) !important;
      --main-dark-popup-color: hsl(212deg 14% 15%) !important;
    }

    /* Muted versions of Tailwind's slate, hue kept, saturation reduced.
       Raise the middle percentage in any line for more blue. */
    html.dark [class*="bg-slate-950"] {
      background-color: hsl(212deg 18% 9%) !important;
    }
    html.dark [class*="bg-slate-900"] {
      background-color: hsl(212deg 16% 13%) !important;
    }
    html.dark [class*="bg-slate-800"] {
      background-color: hsl(212deg 15% 18%) !important;
    }

    /* Muted blues for buttons and active toggles.
       Raise the 28% for more colour, lower it for greyer. */
    html.dark [class*="bg-blue-400"],
    html.dark [class*="bg-blue-500"],
    html.dark [class*="bg-blue-600"],
    html.dark [class*="bg-blue-700"],
    html.dark [class*="bg-blue-800"],
    html.dark [class*="bg-indigo-500"],
    html.dark [class*="bg-indigo-600"] {
      background-color: hsl(212deg 28% 38%) !important;
    }

    /* Icon colour inside those buttons */
    html.dark [class*="text-blue-200"],
    html.dark [class*="text-blue-600"] {
      color: #c8d2dd !important;
    }

    /* Scroll hint gradient. Its baked-in colour no longer matches
       the backgrounds above, so it shows as a patch. */
    .scroll-indicator-gradient::after,
    .scroll-indicator-gradient::before {
      display: none !important;
    }

    /* Focus rings, borders and outlines. Tailwind rings are driven by
       a CSS variable, so that has to be set rather than border-color. */
    html.dark [class*="ring-blue"],
    html.dark [class*="border-blue"],
    html.dark [class*="outline-blue"],
    html.dark [class*="ring-indigo"] {
      --tw-ring-color: hsl(212deg 24% 45%) !important;
      border-color: hsl(212deg 24% 45%) !important;
      outline-color: hsl(212deg 24% 45%) !important;
    }

    html.dark input:focus,
    html.dark textarea:focus {
      --tw-ring-color: hsl(212deg 24% 45%) !important;
      border-color: hsl(212deg 24% 45%) !important;
    }

    /* Catch remaining blue shades on toggles and switches */
    html.dark [class*="bg-blue-300"],
    html.dark [class*="bg-blue-900"],
    html.dark [aria-checked="true"] {
      background-color: hsl(212deg 28% 38%) !important;
    }

    /* Right-align the user's own messages */
    [data-element-id="response-block"]:has([data-element-id="user-message"]) {
      padding-left: 0.5rem !important;
      padding-right: 3rem !important;
    }

    [data-element-id="response-block"]:has([data-element-id="user-message"]) [data-element-id="chat-avatar-container"] {
      left: auto !important;
      right: 0.5rem !important;
    }

    [data-element-id="response-block"]:has([data-element-id="user-message"]) .flex.flex-col {
      align-items: flex-end !important;
    }
  `;

  const style = document.createElement('style');
  style.id = 'tm-appearance';
  style.textContent = css;
  document.head.appendChild(style);
})();
