import React from 'react';
import {Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';

export default function AntdInput() {

return(
  <div>
    <Input placeholder='name' prefix={<UserOutlined />} allowClear></Input>
    <Input.Search placeholder='name' prefix={<UserOutlined />} allowClear></Input.Search>

  </div>
);

}