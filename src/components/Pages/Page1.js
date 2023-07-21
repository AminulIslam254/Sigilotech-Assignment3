import { makeStyles } from '@material-ui/core';
import { Form, Input } from 'antd'
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  '@media (min-width: 780px)': {
    width: '80%'
  },
  validationText1: {
    '@media (max-width: 780px)': {
      left: "167px !important",
      top: "227px !important",
    },

  },
  validationText2: {
    '@media (max-width: 780px)': {
      left: "167px !important",
      top: "327px !important",
    },

  },
  validationText3: {
    '@media (max-width: 780px)': {
      left: "167px !important",
      top: "427px !important",
    },

  },




}));



const Page1 = () => {

  const classes = useStyles();

  const [formValue, setFormValue] = useState({ name: "", email: "", phone_no: "" });

  const handleChange = (event) => {

    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <div>
        <h1 style={{ margin: 0, marginBottom: 10 }}>Personal Info</h1>
        <span style={{ color: "grey" }}>Please provide your name, email address, and phone number.</span>
      </div>
      <div style={{ marginTop: 15 }}>

        <Form
          layout="vertical"
          style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column" }}
        >
          <p className={classes.validationText1} style={{display:(!formValue.name)?"block":"none", position: "absolute", zIndex: 1, top: 176, left: 1000, color: "red" }}>Name is required</p>
          <Form.Item  name="input1" label="Name" rules={[
            {
              required: true,
              message: '',

            },

          ]}>

            <Input onChange={handleChange} name="name" style={{ height: 43 }} placeholder="input placeholder" />
          </Form.Item>
          <p  className={classes.validationText2} style={{ display:(!formValue.email)?"block":"none",position: "absolute", zIndex: 1, top: 280, left: 998, color: "red" }}>Email is required</p>
          <Form.Item
            
            label="Email"
            name='input2'
            rules={[
              {
                required: true,
                message: '',

              },

            ]}
          >
            
            <Input onChange={handleChange} name='email' style={{ height: 43 }} placeholder="input placeholder" />
          </Form.Item>
          <p className={classes.validationText3} style={{display:(!formValue.phone_no)?"block":"none", position: "absolute", zIndex: 1, top: 378, left: 994, color: "red" }}>Phone No is required</p>
          <Form.Item
          name="phone_no"
            
            label="Phone No"
            rules={[
              {
                required: true,
                message: '',

              },

            ]}
          >
            
            <Input onChange={handleChange} name='phone_no' style={{ height: 43 }} placeholder="input placeholder" />
          </Form.Item>
        </Form>



      </div>

    </>
  )
}

export default Page1