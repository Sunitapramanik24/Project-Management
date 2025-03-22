import React, { useState } from 'react';
import { Modal, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Sidebar from '../components/SideBar';

function Tasks() {
  const [Tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTasks, setSelectedtasks] = useState(null);

  const handleCreateClick = () => {
    setSelectedTasks(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (tasks) => {
    setSelectedTasks(tasks);
    setIsModalOpen(true);
  };

  const handleSaveClick = (tasksData) => {
    if (selectedtasks) {
      // Update existing expense
      const updatedTasks = Tasks.map((tasks) =>
        tasks === selectedTasks ? tasksData : tasks
      );
      setTasks(updatedTasks);
    } else {
      // Add new Tasks
      setTasks([...Tasks, tasksData]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteClick = (tasks) => {
    const updatedTasks = tasks.filter((e) => e !== tasks);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Sidebar>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Expenses</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleCreateClick}
      >
        Create
      </button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Expense Name</TableCell>
            <TableCell>Amount</TableCell>
            {/* Add other table headers */}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tasks.map((tasks) => (
            <TableRow key={tasks.id}>
              <TableCell>{tasks.name}</TableCell>
              <TableCell>{tasks.amount}</TableCell>
              {/* Add other table cells */}
              <TableCell>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleEditClick(tasks)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDeleteClick(tasks)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-white p-4 rounded">
          <TextField label="Task Name" />
          {/* Add other input fields */}
          <Button onClick={() => handleSaveClick(/* Get data from input fields */)}>Save</Button>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
        </div>
      </Modal>
    </div>
    </Sidebar>
    </div>
  );
}

export default Tasks;