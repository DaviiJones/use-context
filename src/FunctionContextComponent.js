import React, { useContext } from 'react';

//using a hook called usercontext

import { ThemeContext } from'./App';

export default function FunctionContextComponent(){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: dark ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    };
    return(
        <div style={themeStyles}>Function Theme</div>
    )
}

