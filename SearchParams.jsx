import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptiles"];

const SearchParams = () => {

    const [location, setLocation ] = useState(""); //using a hook so
    const [animal, setAnimal] = useState("");
    const[breed, setBreed] = useState("");
    const breeds = [];

    return (
        <div className="search-params"> 
            <form> 
                <label htmlFor="location">
                   Location 
                   <input 
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location} placeholder="Location" 
                    />
                </label>
                <label htmlFor="animal">
                    Animal 
                    <select
                        id = "animal"
                        value={animal}
                        onChange={e => {
                            setAnimal(e.target.value)
                        }}
                    >
                        <option />
                        
                        {breed.map(breed => (
                            <option key={breed}>{breed}</option>
                        ))} 
                        
                    </select>
                </label>
                <button> Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;