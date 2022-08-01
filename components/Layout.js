import styles from "../styles/Home.module.css" 
import { Header } from "./Header"
import Nav from "./nav"

function Layout({children}) {
  return (
    <>
    <Nav/>
      <div className={styles.container}>
        <div className={styles.main}>
          <Header/>
            {children}
          </div>
          
      </div>
    </>
  )
}

export default Layout