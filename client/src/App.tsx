import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <aside className='sidemenu'>
        <div className='sidemenu-btn'>
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-input-holder'>
          <textarea rows={1} className='chat-input-textarea' placeholder='Message ChatGPT...'></textarea>
        </div>
      </section>
    </div>
  )
}

export default App
