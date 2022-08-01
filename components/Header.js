import headerStyles from '../styles/Header.module.css'

export const Header = () => {
    
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> news
            </h1>
            <p className={headerStyles.description}>keep up to date lastest dev news</p>
        </div>
    )
}
