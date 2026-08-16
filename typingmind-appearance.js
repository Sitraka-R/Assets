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
