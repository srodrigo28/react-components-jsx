
export function Input( 
        { 
            placeholder = 'texto placeholder', 
            value='', 
            onChange='',
            className='', 
            ...props
        } 
    ){
    return(
        <input 
            type="text" 
            placeholder={placeholder} 
            {...props}
        />
    )
}