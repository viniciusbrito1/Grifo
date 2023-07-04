import Image from "next/image"
import Link from "next/link"

export default function BannerEventos(props){
    let linkDecoration={
        textDecoration: 'none',
        color: 'white',
        height: 'fit-content',
        width: 'fit-content',
        backgroundColor: '#700909',
        padding: '1.7%',
        paddingLeft: '3%',
        paddingRight: '3%',
        borderRadius: '20px',
        textTransform: 'uppercase',
        fontWeight: '600',
        textShadow: '2px 2px 4px black'
    }
    return (
        <divBanner style={{margin: 0}}>
            <divImagem>
            <Image
                src={props.img}
                width={0}
                height={0}
                sizes="(max-width: 768px) 90vw, 50vw"
                style={{ width: 'auto', height: 'auto' }}
            />
            </divImagem>
            
            <divTexto>
                <titulo>{props.titulo}</titulo>
                <descricao>{props.descricao}</descricao>
                <linkavel>
                    <Link href="/" style={linkDecoration}>fotos do último evento</Link>
                </linkavel>
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
                    gap: 1.2vw;
                    text-align: justify;
                    
                }
                titulo{
                    font-family: "Helvetica", sans-serif;
                    font-size: 5vw;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    font-weight: 800;
                }
                descricao{
                    font-size: 1.2vw;
                    padding-bottom: 1.2vw;
                }
                linkavel{
                    font-size: 1vw;
                }
                @media screen and (max-width: 768px) {
                    divBanner{
                        flex-direction: column;
                        padding: 5%;
                        gap: 4vw;
                    }
                    divTexto{
                        width: 90vw;
                    }
                    titulo{
                        text-shadow: 0px 0px 0px;
                        text-align: center;
                        font-size: 8vw;
                    }
                    descricao{
                        font-size: 3.5vw;
                        padding-bottom: 6vw;
                    }
                    linkavel{
                        text-align: center;
                        font-size: 3vw;
                        padding-bottom: 2vw;
                    }
                }
            `}</style>

        </divBanner>
    )
}