import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`https://qiita.com/api/v2/tags?sort=count`)
      .then(response => response.json())
      .then(resultDatas => {
        setDatas(resultDatas);
      })
  }, [])

  return (
    <Layout>
      <SEO title="Qiita Page" />
      <div>
        {datas.map((data) => 
          <li>{data.id}</li>
        )}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export default ThirdPage
