import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import { TasksContext } from '../../TaskContext/TaskContext';
import TaskCard from '../TaskCard/index';

import { Container, Button } from './styles';

const TasksList: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const [todoTasks, setTodoTasks] = useState(false);
  const [active, setActive] = useState(false);
  const [activeType, setActiveType] = useState('todo');

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
  }, [tasks, toggleButton]);

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
      {todoTasks ? <TaskCard closedTask={active} /> : <p className="empty-task">No Task</p>}
    </Container>
  );
};

export default TasksList;
