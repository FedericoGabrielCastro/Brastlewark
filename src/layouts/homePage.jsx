import React from 'react'
import {Link} from 'react-router-dom'
import {useStyles} from '../styles/layouts/homePageStyle'

import {secondRoutes} from '../routes/routes'

const HomePage = () => {
    const classes = useStyles()
    
    return (
        <section>
            <header className={classes.titlePageContent}>
                <h1 className={classes.titlePage}> What city do you want to visit hero ... </h1>
            </header>
            <body className={classes.homePage}>
                    {secondRoutes.map((item) => {
                        return (
                            <main key={item.index} className={classes.boxContainer}>
                                <Link to={item.path}>
                                    <div className={classes.box}>
                                        <h1 className={classes.titleCard}>{item.title}</h1>
                                        <img className={classes.imageBoxCastle} src={item.image} alt={item.title}/>
                                    </div>
                                </Link>
                            </main>
                        )
                    })}
            </body>
        </section>
    )
}

export default HomePage