
function WishForm({setInput,input,addTodo}) {
    
    const handleSubmit = e => {
        e.preventDefault();
    };

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
              <input
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={(e)=>{setInput(e.target.value)}}  
              />
              <button className='todo-button' onClick={addTodo} >
                Add todo
              </button> 
        </form>
    );

};

export default WishForm;