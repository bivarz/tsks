import React, {
  useContext, useEffect, useState,
} from 'react';
import { TasksContext } from '../../TaskContext/TaskContext';

import { Container, Card, CircleVector } from './styles';

interface TaskCardProps {
  closedTask: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ closedTask }) => {
  const {
    closeTask, openedTask, changeTaskActive,
  } = useContext(TasksContext);
  const [toDo, setToDo] = useState(false);

  useEffect(() => {
    setToDo(closedTask);
  }, [closedTask]);

  const filteredTasksActive = toDo
    ? openedTask
    : closeTask;

  return (
    <Container>
      {
        filteredTasksActive.map((task) => (
          <Card key={task.id}>
            <div className="card-title">
              <div className="card-title-text">
                <button type="button" onClick={() => changeTaskActive(task.id)}>
                  <CircleVector isActive={task.isClosed} />
                </button>
                <p>{task.taskTitle}</p>
              </div>
              <p className="dots">...</p>
            </div>
            <div className="card-description">{task.taskDescription}</div>
            <div className="card-footer">Created {task.createdAt}</div>
          </Card>
        ))
      }
    </Container>
  );
};

export default TaskCard;
