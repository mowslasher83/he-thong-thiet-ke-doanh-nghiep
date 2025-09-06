import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import './styles/global.css';

const App = () => {
  return (
    <div>
      <h1>Hệ Thống Thiết Kế Doanh Nghiệp</h1>
      <Card title="Chào mừng đến với hệ thống" content="Đây là nơi cung cấp các công cụ thiết kế cho doanh nghiệp." />
      <Button label="Tìm Hiểu Thêm" onClick={() => alert('Tìm hiểu thêm!')} />
    </div>
  );
};

export default App;