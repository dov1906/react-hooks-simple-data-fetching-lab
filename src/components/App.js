import React, {useState, useEffect} from "react";

function App(){
    const [data, setData] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setData(data.message))
    }, [])

    if (!data) return <p>Loading...</p>;

    return <img alt="A Random Dog" src={data}></img>

}

export default App