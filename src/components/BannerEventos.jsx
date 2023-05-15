import Image from "next/image"

export default function BannerEventos(props, {children}){
    return (
        <divBanner style={{margin: 0}}>
            <divImagem>
            <Image
                src={props.img}
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, 50vw"
                style={{ width: 'auto', height: 'auto' }}
            />
            </divImagem>
            
            <divTexto>
                <titulo>{props.titulo}</titulo>
                <descricao>{props.descricao}</descricao>
            </divTexto>

            <style jsx>{`
                divBanner{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    gap: 4vw;
                    align-items: center;
                    background-color: ${props.backgroundColor};
                    height: fit-content;
                    padding: 2%;
                }
                divImagem{
                    position: relative
                    width: 50%;
                }
                divTexto{
                    color: ${props.fontColor};
                    height: 100%;
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1vw;
                    text-align: justify;
                    
                }
                titulo{
                    font-size: 4vw;
                    font-family: Graduate;
                }
                descricao{
                    font-size: 1.2vw;
                }
                @media screen and (max-width: 768px) {
                    divBanner{
                        flex-direction: column;
                    }
                    divTexto{
                        width: 100%;
                    }
                    titulo{
                        font-size: 8vw;
                        font-family: Graduate;
                    }
                    descricao{
                        font-size: 2vw;
                    }
                }
            `}</style>

        </divBanner>
    )
}