import React, {
  createContext, ReactNode, useState,
} from 'react';

export interface Task {
  id: number;
  taskTitle: string;
  taskDescription: string;
  createdAt?: string;
  closedAt?: string;
  isClosed: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (task: Task) => void;
  setTasks: (task: Task[]) => void
  changeTaskActive: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function changeTaskActive(id: number) {
    const newTask = tasks.map((task) => (task.id === id ? {
      ...task,
      isClosed: !task.isClosed,
      closedAt: new Date().toDateString(),
    } : task));
    setTasks(newTask);
  }

  function deleteTask(id: number) {
    const restTask = tasks.filter((task) => (task.id !== id));
    setTasks(restTask);
  }

  return (
    <TasksContext.Provider value={{
      tasks, setTasks, createTask, changeTaskActive, deleteTask,
    }}
    >
      {children}
    </TasksContext.Provider>
  );
};
