import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return <div>页面建设中， 敬请期待... <span> <a href="/">返回</a></span></div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
