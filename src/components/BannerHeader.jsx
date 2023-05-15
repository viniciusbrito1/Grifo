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
                    sizes="270px"
                    style={{ width: '90%', height: '90%' }}
                />
            </divImagem>
                
            <divLinks>
                <Link href={"/index.js"} style={linkDecoration}>Home</Link>
                <Link href={"/index.js"} style={linkDecoration}>Eventos</Link>
                <Link href={"/index.js"} style={linkDecoration}>Lojinha</Link>
                <Link href={"/index.js"} style={linkDecoration}>Parcerias</Link>
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
                    height: 120px;
                    background-color: black;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-left: 1%;
                    padding-right: 3vw;
                }
                divImagem{
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