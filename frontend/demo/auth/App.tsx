import { RouterProvider } from 'react-router';
import { AuthProvider } from './auth';
import router from './routes';

// tag::snippet[]
export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
// end::snippet[]
