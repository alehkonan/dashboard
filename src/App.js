import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Dashboard } from './pages/dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
