import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useStyles} from '../styles/layouts/homePageStyle'

import {secondRoutes} from '../routes/routes'

const HomePage = () => {
    const classes = useStyles()

    useEffect(() => {
        document.title = `Chose city`
    }, [])
    
    return (
        <section>
            <div className={classes.titlePageContent}>
                <h1 className={classes.titlePage}> What city do you want to visit hero ... </h1>
            </div>
            <section className={classes.homePage}>
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
            </section>
        </section>
    )
}

export default HomePage