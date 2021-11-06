import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputvalue] = useState("");

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evita hacer refresh del navegador

        if( inputValue.trim().length > 2 ) {
            setCategories(cate => [ inputValue, ...cate,]);
            setInputvalue("");
        }
        //aunque no se esté pasando como argumento el arreglo, el callback que tiene setCategories
        //posee el estado anterior
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
