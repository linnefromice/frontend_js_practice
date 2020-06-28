import React from "react"
import Header from "app/layouts/header"

const Content = () => (
  <div className="container">
    <main>
      <p>This is my page.</p>
    </main>
  </div>
)

const MyPage = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default MyPage
