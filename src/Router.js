import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Works from './pages/Works/Works';
import Feeds from './pages/Feeds/Feeds';
import AccountInfo from './components/AccountInfo/AccountInfo';
import CardDetailContent from './components/CardDetailContent/CardDetailContent';
import Channel from './components/Channel/Channel';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import Upload from './pages/Upload/Upload';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);
  //처음 접속 시 토큰 여부에 따라 시작 페이지 설정
  if (
    (window.location.href === 'http://localhost:3000/') &
    (isLogin === false)
  ) {
    window.location.href = 'http://localhost:3000/works';
  } else if (
    (window.location.href === 'http://localhost:3000/') &
    (isLogin === true)
  ) {
    window.location.href = 'http://localhost:3000/feeds';
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/works" element={<Works />} />
        <Route path="/accountInfo" element={<AccountInfo />} />
        <Route path="/cardDetailContent" element={<CardDetailContent />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/myChannel" element={<Channel />} />
        <Route path="/user/signup" element={<Join />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
