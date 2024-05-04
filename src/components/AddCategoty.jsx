import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategoty = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if ( inputValue.trim().length <= 1) { return; }
        onNewCategory(inputValue.trim());
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit = { onSubmit }>
            <input 
                type="text"
                placeholder="Buscar GIFs"
                value = { inputValue }
                onChange = { onInputChange }
                />
        </form>
    )
}



AddCategoty.propTypes = {
    // setCategories: PropTypes.func,
    onNewCategory: PropTypes.func
}

