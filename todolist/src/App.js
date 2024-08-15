import React from 'react'

function App() {
    const [toDo, setToDo] = React.useState("");
    const [toDos, setToDos] = React.useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    console.log(toDos);
    console.log(toDos.map((item, index) => (
            <li key={index}>{item}</li>
        )));
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
          <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder="Write your to do..."
            />
            <button>Add To Do</button>
          </form>
        <hr/>
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    );
}

export default App;
