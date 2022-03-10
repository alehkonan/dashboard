import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { BookingPage } from './pages/booking';
import { DashboardPage } from './pages/dashboard';
import { SupplyPage } from './pages/supply';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="supply" element={<SupplyPage />} />
        <Route path="booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
}
