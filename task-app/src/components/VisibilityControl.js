const VisibilityControl = ({isChecked, setShowCompleted, cleanTask}) => {

  const handleDelete = () => {
    if(window.confirm('Are you sure want to delete it?')){
      cleanTask()
    }
  }

  return (
    <div>
      <input 
        type='checkbox' 
        checked={isChecked}
        onChange={e => setShowCompleted(e.target.checked)}
        />
        <label>
          Show Tasks Done
        </label>

        <button onClick={handleDelete}>Clear</button>
    </div>
  )
}

export default VisibilityControl