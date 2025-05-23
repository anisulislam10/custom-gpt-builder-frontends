// public/embed.js
(function () {
    const script = document.currentScript;
    const flowId = script.getAttribute('flowId');
    const userId = script.getAttribute('userId');
    const theme = script.getAttribute('theme') || 'light';
  
    // Load required styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://custom-gpt-builder-frontends-lvhs.vercel.app/styles/chatbot.css`; // You'll create this CSS file
    document.head.appendChild(link);
  
    // Load React and ReactDOM (or bundle them if possible)
    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
    document.head.appendChild(reactScript);
  
    const reactDOMScript = document.createElement('script');
    reactDOMScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
    document.head.appendChild(reactDOMScript);
  
    // Create widget container
    const container = document.createElement('div');
    container.id = 'chatbot-widget-container';
    const target = document.getElementById('chatbot-widget') || document.body;
    target.appendChild(container);
  
    // Load widget bundle (you'll need to create this)
    const widgetScript = document.createElement('script');
    widgetScript.src = `https://custom-gpt-builder-frontends-lvhs.vercel.app//widget.bundle.js`;
    widgetScript.onload = () => {
      window.renderChatbotWidget(container.id, { flowId, userId, theme });
    };
    document.head.appendChild(widgetScript);
  })();