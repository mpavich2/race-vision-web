import React, { createContext, RefObject, useContext, useRef } from 'react'

interface ScrollContextType {
  scrollRef: RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <ScrollContext.Provider value={{ scrollRef }}>
      {children}
    </ScrollContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
}
