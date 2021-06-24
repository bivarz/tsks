import React, {
  createContext, ReactNode, useState,
} from 'react';

interface Task {
  id: number;
  taskTitle: string;
  taskDescription: string;
  createdAt: string;
  isClosed: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  openedTask: Task[];
  closeTask: Task[];
  createTask: (task: Task) => void;
  changeTaskActive: (id: number) => void;
}

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const closeTask = tasks.filter((task) => task.isClosed === true);
  const openedTask = tasks.filter((task) => task.isClosed === false);

  function createTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function changeTaskActive(id: number) {
    const newTask = tasks.map((task) => (task.id === id ? {
      ...task,
      isClosed: !task.isClosed,
    } : task));
    setTasks(newTask);
  }

  return (
    <TasksContext.Provider value={{
      tasks, createTask, changeTaskActive, closeTask, openedTask,
    }}
    >
      {children}
    </TasksContext.Provider>
  );
};
