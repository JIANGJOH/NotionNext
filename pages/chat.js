// pages/chat.js

import React, { useEffect } from 'react';

const ChatPage = () => {
  useEffect(() => {
    // This will be executed after the component is mounted
    var chatConfig = {
      token: 'oIrehxj3FK7hUFc0eU4X',
    };
    initializeChatWidget(chatConfig);
  }, []); // The empty dependency array ensures that this effect runs only once after initial mount

  return <div>Chat Widget is loading...</div>;
};

export default ChatPage;
