import './style.css';



const MyComponent = () => {
    const quanhoang = "quan"
    const bool = undefined
    const arr = {
        name: "quan",
        age: 18
    }
    return (
        <>
            <div>{JSON.stringify(arr)} MyComponent!</div>
            <div>{console.log("ERIC")}</div>
            <div className='child'
                style={{ borderRadius: "10px" }}
            >CHILD</div>
        </>
    );
}


export default MyComponent;