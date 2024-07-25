function Option( { value='', children='', ...props } ) {

}

export function Select( { value='', className='', onChange='', ...props } ){
    return(
        <select value={value} className={className} onChange={onchange} {...props} >
            <Option value={value}> {children} </Option>
        </select>
    )
}