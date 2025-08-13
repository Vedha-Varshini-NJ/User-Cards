// src/services/userService.ts

import { User } from '../interfaces/user';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

/*
export const fetchUsers = async (): Promise<User[]> => {
 try {
   const response = await fetch(API_URL);
   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   }
   const data: User[] = await response.json();
   return data;
 } catch (error) {
   console.error("Error fetching data:", error);
   return [];
 }
};
*/

export const fetchUsers = async (): Promise<User[]> => {
 try {
   const response = await axios.get<User[]>(API_URL);
   return response.data;
 } catch (error) {
   console.error("Error fetching data:", error);
   throw new Error("Failed to fetch users");
 }
};
