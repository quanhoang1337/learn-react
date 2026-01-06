
const TodoData = (a) => {

    const { name, age, data } = a;
    console.log(">>>>check props: ", a)

    return (
        <div className="todo-data">
            <div>My name is {name} </div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )

}


export default TodoData;