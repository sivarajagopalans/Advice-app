import React, { useState } from 'react'
import '../src/adviceapp.css'
import { Container, Row } from 'react-bootstrap'

export const AdviceApp = () => {
  const [advice, setAdvice] = useState("please click advice button");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  async function Advice() {
    setLoading(true)
    setLoading1(false)
    try {
      let res = await fetch("https://api.adviceslip.com/advice");
      let data = await res.json();
      setAdvice(data.slip.advice);

    } catch (error) {
      console.error("error generating advice", error);
    } finally {
      setLoading(false)
      setLoading1(true)
      setCount(count + 1)
    }


  }
  return (

    <Container className=' text-white  my-4 d-flex flex-column justify-content-center align-items-center'>
      <Row sm={12} md={12} xs={12} lg={12} className=''>
        <div className=' '>
          <div className='box-content'>
            <div className='h1 ' style={{ color: "salmon" }}>your advice</div>
            {loading1 && <div className='advice-text'><p>{advice}</p></div>}
            {loading && <p className='advice-wait'>please wait...</p>}
             <button className='show-btn' onClick={Advice}>advice</button>
            {/* <div className='advice-count'>your today advice count is
              <span style={{ border: "2px solid blue", borderRadius: "7px", padding: "2px 5px", marginLeft: "5px", color: "magenta" }}>{count}</span></div> */}
          </div>
        </div>
      </Row>
    </Container>


  )
}
