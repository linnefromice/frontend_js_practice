import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QiitaPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    callApi()
  }, [])

  const callApi = () => {
    fetch(`https://qiita.com/api/v2/tags?sort=count`)
      .then(response => response.json())
      .then(resultDatas => {
        setDatas(resultDatas);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Layout>
      <SEO title="Qiita Page" />
      <Link to="/">Go back to the homepage</Link>
      <div>
        {datas.map((data) => 
          <li>{data.id}</li>
        )}
      </div>
    </Layout>
  );
}

export default QiitaPage
