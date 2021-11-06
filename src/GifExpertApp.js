import { useState } from "react";

import { AddCategory } from './components/AddCategory.js';
import { GifGrid } from './components/GifGrid.js';

export const GifExpertApp = () => {

    // const category = [ "One Punch", "Samurai X", "Dragon Ball" ];
    const [ categories, setCategories ] = useState([ "One Punch" ]);

    // const handleAdd = () => {
    // 		// setCategories( [...categories, "Hunter"] );
    // 		setCategories( cate => [...cate, "Hunter"] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Add</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
}
