'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { useSession } from '../../hooks/useSession';

export default function Dashboard() {
  interface User {
    firstName: string;
    email: string;
  }

  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();
  const { user, loading } = useSession();
  const isAuthenticated = !loading && !!user;

  // Protect this page — if not authenticated, redirect to login
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Fetch user data if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      api
        .get('/auth/user')
        .then((res) => setUserData(res.data))
        .catch((err) => console.error('Failed to fetch user data', err));
    }
  }, [isAuthenticated]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      
      {isAuthenticated ? (
        <div>
          <div className="mb-6">
            <p className="text-xl">Welcome, {userData ? userData.firstName : 'Loading...'}</p>
            <p className="text-gray-500">Email: {userData ? userData.email : 'Loading...'}</p>
          </div>

          <div className="space-x-4">
            <button
              onClick={() => console.log('Logout functionality not implemented')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
