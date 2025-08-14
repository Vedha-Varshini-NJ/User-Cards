// src/App.tsx

import React from 'react';
import './App.css';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchUsers } from './services/userService';
import UserCard from './components/userCard';
import { User } from './interfaces/user';

// Create a client
const queryClient = new QueryClient();

const AppContent: React.FC = () => {
 // Use useQuery to fetch data
 const { data: user, isLoading, isError } = useQuery<User[], Error>({
   queryKey: ['user'],
   queryFn: fetchUsers,
 });

 if (isLoading) {
   return <div className="app-container">Loading...</div>;
 }

 if (isError) {
   return <div className="app-container">Error fetching data.</div>;
 }

 return (
   <div className="app-container">
     <h1>Cards</h1>
     <div className="cards-grid">
       {user?.map(user => (
         <UserCard key={user.id} user={user} />
       ))}
     </div>
   </div>
 );
};

const App: React.FC = () => {
 return (
   <QueryClientProvider client={queryClient}>
     <AppContent />
   </QueryClientProvider>
 );
};

export default App;