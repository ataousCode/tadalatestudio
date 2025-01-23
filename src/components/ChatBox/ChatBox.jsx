import React, { useState } from 'react'
import styles from './ChatBox.module.css'

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const toggleChatBox = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      // Add the user's message
      setMessages([...messages, { text: inputValue, sender: 'user' }])
      setInputValue('')

      // Show typing indicator
      setIsTyping(true)

      // Simulate a bot reply after 3-4 seconds
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: 'Thanks for your message! I will get back to you soon.',
            sender: 'bot',
          },
        ])
      }, 3000) // 3 seconds delay
    }
  }

  return (
    <div className={`${styles.chatBox} ${isOpen ? styles.open : ''}`}>
      <div className={styles.chatHeader} onClick={toggleChatBox}>
        <h3>Chat with Me</h3>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </div>

      {isOpen && (
        <div className={styles.chatBody}>
          <div className={styles.messages}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.sender === 'user'
                    ? styles.userMessage
                    : styles.botMessage
                }`}
              >
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div
                className={`${styles.message} ${styles.botMessage} ${styles.typingIndicator}`}
              >
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            )}
          </div>

          <form className={styles.chatFooter} onSubmit={handleSendMessage}>
            <input
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Type a message...'
              required
            />
            <button type='submit'>Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatBox
