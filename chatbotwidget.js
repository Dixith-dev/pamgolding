(function(window) {
  function createChatbot() {
    // Create chat UI elements here
  }

  function sendMessageToChatbot(message) {
    fetch('https://pamgolding.onrender.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
      // Display the chatbot's response
    });
  }

  // Expose the chatbot initialization function to the window object
  window.myChatbot = { load: createChatbot };
})(window);
