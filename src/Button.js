import React from 'react';
import './style.css';
import {useState} from 'react';
import {PoweroffOutlined} from '@ant-design/icons';
import {Button} from 'antd';

export default function AntdButton() {
  return (
      <div>
      <Button type='primary'>Click</Button>
      <Button type='primary' block>Click</Button>
      <Button type='link' href="https://google.com">Go to Google</Button>
</div>
  );
}
