import styles from "../styles/Home.module.css" 

function Layout({children}) {
  return (
      <div className={styles.container}>
          <div className={styles.main}>
            {children}
          </div>
          
     </div>
  )
}

export default Layout