import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = 'http://localhost:3005';
function App() {

  const gettAllUsers = async () => {
    //GET request to fetch all users
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  const gettUserById = async (id) => {
    //GET request to fetch a user by ID
    const response = await axios.get(BASE_URL + "/users/" + id);
    console.log(response.data);
  }

  const createUser = async (newUser) => {
    //POST request to create a new user
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    //PUT request to update an existing user
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log(response.data);
  }

  const deleteUser = async (userId) => {
    //DELETE request to delete a user
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  }
  useEffect(() => {
    // gettAllUsers();
    // gettUserById(3);
    // const newUser = {
    //   id: "4",
    //   username: "John Doe",
    //   password: "123456",
    // }
    // createUser(newUser);
    updateUser(3, { username: "Mustafa", password: "654321" });
    deleteUser(4);

  }, []);
  return (
    <div>

    </div>
  )
}

export default App
