import React,{useState} from "react"
import { Button } from 'antd'
// import { Button } from 'react-bulma-components/dist';



const Login = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  const update = (({ target }) => setForm({ ...form, [target.name]: target.value }))
  return (
    <div>
      <Button color="primary">My button</Button>
    </div>
  )
};

export default () => (<Login/>);
