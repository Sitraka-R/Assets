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
      background: rgba(0, 0, 0, 0.045) !important;
      color: #1a1a1a !important;
      font-size: 1rem !important;
      line-height: 1.65 !important;
    }

    html.dark [data-element-id="user-message"] {
      background: rgba(255, 255, 255, 0.055) !important;
      color: #e6e6e4 !important;
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
      --brand-color: hsl(212deg 22% 40%) !important;
      --sidebar-color: hsl(212deg 12% 7%) !important;
      --sidebar-menu-color: hsl(212deg 10% 17%) !important;
      --popup-color: hsl(212deg 10% 20%) !important;
      --workspace-color: hsl(212deg 8% 18%) !important;
      --main-dark-color: #17181b !important;
      --main-dark-popup-color: #1e2024 !important;
    }

    /* Neutral greys in place of Tailwind's blue-tinted slate */
    html.dark [class*="bg-slate-950"] {
      background-color: #131417 !important;
    }
    html.dark [class*="bg-slate-900"] {
      background-color: #1a1b1f !important;
    }
    html.dark [class*="bg-slate-800"] {
      background-color: #23252a !important;
    }

    /* Muted blues for buttons and active toggles.
       Raise the 28% for more colour, lower it for greyer. */
    html.dark [class*="bg-blue-500"],
    html.dark [class*="bg-blue-600"],
    html.dark [class*="bg-blue-700"],
    html.dark [class*="bg-indigo-500"],
    html.dark [class*="bg-indigo-600"] {
      background-color: hsl(212deg 28% 38%) !important;
    }

    /* Same treatment for coloured borders and rings on active states */
    html.dark [class*="border-blue-500"],
    html.dark [class*="ring-blue-500"] {
      border-color: hsl(212deg 28% 42%) !important;
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
