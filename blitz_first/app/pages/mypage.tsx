import React, { useState } from "react"
import Header from "app/layouts/header"
import SideDrawer from "app/layouts/side_drawer"

const Content = () => (
  <div className="container">
    <main>
      <p>This is my page.</p>
    </main>
  </div>
)

const MyPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Header openDrawer={() => setIsOpen(true)} />
      <SideDrawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
      <Content />
    </div>
  )
}

export default MyPage
