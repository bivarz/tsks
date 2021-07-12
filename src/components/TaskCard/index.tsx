import React, {
  useContext,
} from 'react';
import { TasksContext, Task } from '../../TaskContext/TaskContext';

import OptionButton from '../OptionButton/index';

import { Container, Card, CircleVector } from './styles';

interface TaskCardProps {
  typeOfTask: Task[]
}
const TaskCard: React.FC<TaskCardProps> = ({ typeOfTask }) => {
  const {
    changeTaskActive,
  } = useContext(TasksContext);

  return (
    <Container>
      {typeOfTask.map((task) => (
        <Card key={task.id}>
          <div className="card-title">
            <div className="card-title-text">
              <button type="button" onClick={() => changeTaskActive(task.id)}>
                <CircleVector isActive={task.isClosed} />
              </button>
              <p>{task.taskTitle}</p>
            </div>
            <div><OptionButton id={task.id} /></div>
          </div>
          <div className="card-description">{task.taskDescription}</div>
          <div className="card-footer">
            {task.isClosed
              ? `Closed  ${task.closedAt}`
              : `Created ${task.createdAt}`}
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default TaskCard;
