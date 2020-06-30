import React, { useState } from "react"
import Header from "app/layouts/header"
import SideDrawer from "app/layouts/side_drawer"

const BaseContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Header openDrawer={() => setIsOpen(true)} />
      <SideDrawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
      {children}
    </div>
  )
}

export default BaseContainer
