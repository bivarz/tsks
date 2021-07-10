import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';

import { TasksContext } from '../../TaskContext/TaskContext';
import TaskCard from '../TaskCard/index';

import { Container, Button } from './styles';

interface RenderTaskProps {
  todoTasks: boolean;
  active: boolean,
}

const RenderTask: React.FC<RenderTaskProps> = ({ active, todoTasks }) => {
  const {
    tasks, createTask,
  } = useContext(TasksContext);
  const [changeButton, setChangeButton] = useState({});

  useEffect(() => {
    setChangeButton(active);
  }, [active, tasks, createTask]);

  const filteredTask = tasks.filter((task) => task.isClosed === !changeButton);

  return (
    <>
      {todoTasks
        ? <TaskCard typeOfTask={filteredTask} />
        : <p className="empty-task">No Task</p>}
    </>
  );
};

const TasksList: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const [todoTasks, setTodoTasks] = useState(false);
  const [active, setActive] = useState(true);
  const [activeType, setActiveType] = useState<'todo' | 'closed'>('todo');

  const toggleButton = useCallback((props) => {
    const isEmpty = props.length;
    isEmpty !== 0 ? setTodoTasks(true) : setTodoTasks(false);
  }, []);

  function activeButton(props: boolean) {
    setActive(props);
    props ? setActiveType('todo') : setActiveType('closed');
  }

  useEffect(() => {
    toggleButton(tasks);
  }, [active, tasks, toggleButton]);

  return (
    <Container>
      <div className="button-content">
        <Button
          type="button"
          className="todo-button"
          isActive={activeType === 'todo'}
          onClick={() => activeButton(true)}
        > To do
        </Button>

        <Button
          type="button"
          className="closed-button"
          isActive={activeType === 'closed'}
          onClick={() => activeButton(false)}
        >Closed
        </Button>
      </div>
      <RenderTask active={active} todoTasks={todoTasks} />

    </Container>
  );
};

export default TasksList;
