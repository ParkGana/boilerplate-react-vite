import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/not-found" element={<NotFoundPage />} />

      {/* 등록되지 않은 경로로 접속할 경우 /not-found 경로로 redirect */}
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default Router;
