import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/register" />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
