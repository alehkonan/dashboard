import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { BookingPage } from './pages/booking';
import { DashboardPage } from './pages/dashboard';
import { SupplyPage } from './pages/supply';
import { routes } from './routes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={routes.dashboard.to} />} />
        <Route path={routes.dashboard.to} element={<DashboardPage />} />
        <Route path={routes.supply.to} element={<SupplyPage />} />
        <Route path={routes.booking.to} element={<BookingPage />} />
      </Route>
    </Routes>
  );
}
