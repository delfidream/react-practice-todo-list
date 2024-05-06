

export const Task = (props) => {
  return (
    <div key={props.id} id={props.id} className={"panel-block is-flex " + props.status}>
      <span>&nbsp;</span>
      <a className="todo-icon remove" onClick={() => props.deleteTask(props.id)}>
        <props.FontAwesomeIcon icon="fa-solid fa-minus" />
      </a>
      <div className="todo-task">{props.taskName}</div>
      <a className="todo-icon check" onClick={() => props.completeTask(props.id)}>
        <props.FontAwesomeIcon icon="fa-solid fa-check" />
      </a>
    </div>
  );
};