const VisibilityControl = ({isChecked, setShowCompleted, cleanTask}) => {

  const handleDelete = () => {
    if(window.confirm('Are you sure want to delete it?')){
      cleanTask()
    }
  }

  return (
    <div className="w-full items-center max-w-md mx-auto mt-10 overflow-hidden text-center mb-0">        
      <div className="overflow-x-auto relative">
        <ul className="my-4 space-y-3">
          <li>
            <span className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <input 
                type='checkbox' 
                checked={isChecked}
                onChange={e => setShowCompleted(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Show Tasks Done
              </span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium rounded">
                <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleDelete}>Clear</button>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default VisibilityControl