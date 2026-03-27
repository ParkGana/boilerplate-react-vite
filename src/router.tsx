import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import SignInPage from './pages/SignIn';
import AuthenticatedRoute from './routes/authenticatedRoute';
import NonAuthenticatedRoute from './routes/nonAuthenticatedRoute';

const Router = () => {
  return (
    <Routes>
      <Route element={<NonAuthenticatedRoute />}>
        <Route path="/signin" element={<SignInPage />} />
      </Route>

      <Route element={<AuthenticatedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* 등록되지 않은 경로 접속 시 NotFound 페이지로 이동 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
