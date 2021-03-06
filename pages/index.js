import { useSession, signIn, signOut } from "next-auth/client"
import Image from 'next/image'
import imgLogo from '../pages/image/Artboard_3.png'

//UseSession Hook passa unm objeto da sessao com as infos do usuario
export default function Home() {
  const [session, loading] = useSession()

console.log(session)


  if (session) {
    return (
      <>
        <span style={{color: '#fff'}}><h3>Voce está logado como: </h3>Email: {session.user.email}<br /> UserName: {session.user.name}<br />
        <img style={{width: '50px'}} src={session.user.image} />
        <br />
        </span>
        <button onClick={() => signOut()}>Singn out</button>

        <h1 style={{color: '#fff'}}>BEM VINDO A PAGINA PRINCIPAL</h1>

        </>

    )

  }



  if (loading) {
    return <h1 style={{color: '#fff'}}>carregando...</h1>
  } 



  return (
    <>
      <section>
        <div className="login" id="login">
          <div className="form_login">
            <div className="copyRight" id="logo">
              <Image src={imgLogo} alt="logo" />
            </div>
            <br />

            <div className="text">
            Bem vindo ao Genesis! 
            </div>

            <div id="button-container">
              <button onClick={() => signIn('auth0')}>Singn in</button>
            </div>

          </div>
          <footer>IM Designs ®</footer>
        </div>
      </section>
    </>
  )

}