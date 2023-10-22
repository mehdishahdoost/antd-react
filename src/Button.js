import React from 'react';
import './style.css';
import {useState} from 'react';
import {PoweroffOutlined} from '@ant-design/icons';
import {Button} from 'antd';

export default function AntdButton() {

  const [loading, setLoading] = useState(false);

  const onClickFn = (e)=> {
      setLoading(true);
      setTimeout(()=> {
        setLoading(false);
      }, 2000);
  }

  return (
      <div>
      <Button type='primary'>Click</Button>
      <Button type='primary' block>Click</Button>
      <Button type='link' href="https://google.com">Go to Google</Button>
      <Button type='dashed'>Click</Button>
      <Button type='text'>Click</Button>
      <Button type='primary' block loading={loading} onClick={onClickFn}>Click</Button>
      
</div>
  );
}
