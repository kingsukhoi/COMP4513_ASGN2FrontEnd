import React,{useState} from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../style/Login.css'
// import { Button } from 'react-bulma-components/dist';



const Login = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  //const update = (({ target }) => setForm({ ...form, [target.name]: target.value }));
  
  const postData = async (values) => {

    console.log('Success:', JSON.stringify(values));
  }

  return (
    <div id="login-container">
      <Form
        name="login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={postData}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true, 
              message: 'Please input your username.', 
            }
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true, 
              message: 'Please input your password.',
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      
    </div>
  )
};

export default () => (<Login/>);
