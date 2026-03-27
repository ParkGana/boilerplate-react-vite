import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* 등록되지 않은 경로 접속 시 NotFound 페이지로 이동 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
