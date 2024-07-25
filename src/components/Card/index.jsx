import './card.css'

export function Card( 
        {   nome='', 
            idade='',
            image='', 
            width=100, 
            descricao=''
        } 
    ){
    return(
        <article nome={nome} idade={idade} image={image} width={width} descricao={descricao} >
            <img src={image} alt="imagem" width={width} />
            <h2 >{nome} - {idade}</h2>
            <p>{descricao}</p>

            
        </article>
    )
}