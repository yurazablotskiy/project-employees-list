import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase, rise, onDelete, onToggleProp, changeSalary }) => {

  let classes = 'list-group-item d-flex justify-content-between';

  if (increase) {
    classes += ' increase';
  }

  if (rise) {
    classes += ' like';
  }

  return (
    
    <li className={classes}>
      <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm ">
          <i onClick={onToggleProp} className="fas fa-cookie" data-toggle="increase"></i>
        </button>

        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash" onClick={onDelete}></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
