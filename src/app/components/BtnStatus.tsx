'use client';

import { createContext, useState, useContext, useEffect } from "react";
// import { ThemeContext } from "./theme-provider";

export const ThemeContext = createContext<{
  theme: 'on' | 'off'
  toggleTheme: () => void
}>({
  theme: 'off',
  toggleTheme: () => { },
})

export default function BtnStatus({
  children
} : {
  children: React.ReactNode
}) {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState<'on' | 'off'>('off')

  useEffect(() => {
    if(typeof window !== 'undefined') {
      document.documentElement.dataset.theme = theme
    }
  }, [theme])

  const toggleTheme = () => { setTheme((t) => (t === 'off' ? 'on' : 'off')) }
  return (
    <div
      style={{
        display: 'inline-block',
        margin: '0 0 0 12px'
      }}
    >
      <button
        onClick={toggleTheme}
        aria-label="toggle theme"
      >
        Theme: {theme === 'on' ? 'off' : 'on'}
      </button>
    </div>
  );
}