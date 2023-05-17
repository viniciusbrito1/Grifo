import Image from "next/image"
import Link from "next/link"

export default function BannerHeader(){
    let linkDecoration={
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.5vw'
    }
    
        return(
        <div>
            <divImagem>
                <Image
                    src="/images/mascote.png"
                    width={0}
                    height={0}
                    sizes="(max-width: 600px) 15vw , 6.5vw"
                    style={{ width: '100%', height: '100%' }}
                />
            </divImagem>
                
            <divLinks>
                <Link href={"/"} style={linkDecoration}>Home</Link>
                <Link href={"/"} style={linkDecoration}>Eventos</Link>
                <Link href={"/index.js"} style={linkDecoration}>Lojinha</Link>
                <Link href={"/parcerias"} style={linkDecoration}>Parcerias</Link>
                <Link href={"https://www.instagram.com/grifoime/"} >
                    <>
                    <Image
                    src="/images/instagram.png"
                    width={0}
                    height={0}
                    sizes="3.5vw"
                    style={{ width: '100%', height: '100%' }}
                />
                    </>
                </Link>
            </divLinks>
            <style jsx>{`
                *{
                    top: 0;
                    position: sticky;
                    z-index: 2;
                    height: fit-content;
                    background-color: black;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 0.4vw;
                    align-items: center;
                    opacity: 0.95;
                }
                divImagem{
                    padding-left: 2vw;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                divLinks{
                    color: white;
                    align-items: center;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    gap: 3vw;
                    color: red;
                }
                #Link{
                    text-decoration: none;

                }
            `}</style>
            
        </div>
    )
}