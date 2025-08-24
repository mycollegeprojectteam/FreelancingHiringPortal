import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/ui/auth/Login';
import Signup from './components/ui/auth/Signup';
import Home from './components/Home';
import Navbar from './components/ui/shared/Navbar';

// Error fallback component
function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
      <a href="/home" className="mt-4 text-blue-500 underline">Go to Home</a>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,   // Default root route
    errorElement: <ErrorPage />, // Handles unexpected errors
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
