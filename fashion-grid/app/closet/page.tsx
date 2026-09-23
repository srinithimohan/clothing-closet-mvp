"use client";

import {useState} from "react";
import ClothingCard from "@/components/ClothingCard";
import AddClothingForm from "@/components/AddClothingForm";



export default function Closet(){
    const [clothes, setClothes] = useState<string[]>([]);

    function handleAddClothing(name: string){
        setClothes([...clothes, name]);
    }

    function handleDeleteClothing(name: string){
        // remove elem that does equal to name
        setClothes(clothes.filter((item) => item !== name)); 
    }
    
    return(
        <main>
            <h1>My Closet</h1>
             <p>Your clothing items will appear here.</p>
             <AddClothingForm onAdd={handleAddClothing} />

            {clothes.map((item)=>(
                <ClothingCard
                    key={item}
                    name={item}
                    onDelete={handleDeleteClothing}
                />
            ))}

        </main>
    );

}