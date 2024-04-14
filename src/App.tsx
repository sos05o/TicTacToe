import { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import { Moon, Sun } from 'react-feather'

function App() {

  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={`w-full h-full grid grid-cols-1 grid-rows-[auto_1fr] justify-items-center ${theme === 'light' ? 'bg-stone-50' : 'bg-stone-950'} `}>
      <div className="pt-6 flex items-center gap-x-4">
        <h1 className={`font-bold tracking-wider ${theme === 'light' ? 'text-stone-950' : 'text-stone-50'}`}>Tic Tac Toe!</h1>
        <button onClick={toggleTheme} className={`p-3 ${theme === 'light' ? 'bg-slate-600/[0.12]' : 'bg-stone-700'}`}>
          {
            theme === "light" ?
            <Sun className="w-6 h-6 text-rose-400" /> :
            <Moon className="w-6 h-6 text-yellow-400" />
          }
        </button>
      </div>
      <Board theme={theme} />
    </div>
  )
}

export default App
