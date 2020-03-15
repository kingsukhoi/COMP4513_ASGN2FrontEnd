import React from "react"
// import { Button } from 'react-bulma-components/dist';
// import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Button } from 'antd'
import 'antd/dist/antd.css';

 
export default () => (
    <div style={{ color: 'purple' }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <Button type='primary' color="info">Primary</Button>
    </div>
  )