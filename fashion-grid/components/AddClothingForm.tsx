"use client";

import {useState} from "react";

type AddClothingFormProps = {
    onAdd: (name: string) => void;
};

export default function AddClothingForm({onAdd} : AddClothingFormProps){
    const [name, setName] = useState("");

    function handleSubmit(){
        onAdd(name);
        setName("");
    }

    return(
        <div>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={handleSubmit}>Add Clothing</button>
        </div>
    );
}