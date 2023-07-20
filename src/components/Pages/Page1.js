import { Form, Input } from 'antd'
import React from 'react'

const Page1 = () => {
  return (
    <>
      <div>
        <h1 style={{ margin: 0, marginBottom: 10 }}>Personal Info</h1>
        <span style={{ color: "grey" }}>Please provide your name, email address, and phone number.</span>
      </div>
      <div style={{ marginTop: 15 }}>

        <Form
          layout="vertical"
          style={{display:"flex",justifyContent:"flex-end",flexDirection:"column",border:"1px solid"}}
        >
          <p style={{position:"absolute",zIndex:1,top:176,left:1000}}>Hi</p>
          <Form.Item validateTrigger={["onChange", "onBlur"]} name="input1" label="Field A" rules={[
            {
              required: true,
              message: '',
              
            },
            
          ]}>
            
            <Input name="input1" style={{ height: 43 }} placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Field B"
          >
            <Input style={{ height: 43 }} placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Field C"
          >
            <Input style={{ height: 43 }} placeholder="input placeholder" />
          </Form.Item>
        </Form>



      </div>

    </>
  )
}

export default Page1