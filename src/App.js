import { useState } from "react";

export default function App(){
    const [clothes, setClothes] = useState([]);

    function handleDeleteClothing(name){
        setClothes(clothes.filter((item) => item !== name));
    }

    function handleAddClothing(name){
        setClothes([...clothes, name]);
    }

    return(
        <div>
            <h1>Clothing Closet</h1>
            <AddClothingForm onAdd={handleAddClothing}/>
            <ClothingList clothes={clothes} onDelete={handleDeleteClothing}/>
        </div>

    );
}

function AddClothingForm({ onAdd }){
    const [name, setName] = useState("");

    function handleAdd(){
        onAdd(name)
    }

    return(
        <div>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={handleAdd}>Add Clothing</button>
        </div>
    );
}


function ClothingList({clothes, onDelete}){
    return(clothes.length > 0 ? (
        <ul>
        {clothes.map((item) => (
            <li key={item}><ClothingCard clothe={item} onDelete={onDelete}/></li>
        ))}
        </ul>) : (<p>No clothes yet.</p>)
    );
}

function ClothingCard({clothe, onDelete}){
    return(
    <div>
        <p>{clothe}</p>
        <button onClick={() => onDelete(clothe)}>
            Delete
        </button>
    </div>
);
}