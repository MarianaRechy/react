import React from 'react'
import CardInfo from '../CardInfo';
import styles from './PostCard.module.scss'

const PostCard = (props) => {
    const name = props.name
    const status = props.status
    const species = props.species
    const image = props.image
    const origin= props.origin.name

return (
    <div className = {styles.postCard} >
        <div className={styles.imageContainer}>
            <img className={styles.image} src = {image} alt="card" />
        </div>
        <div className={styles.textContainer}>
            <div>
                <h2>{name}</h2>
            </div>
            <div className={styles.status}>
               <p>{status}-{species}</p>
            </div>
            <div>
            <CardInfo origin={origin} /> 
            </div>
       </div>
    </div>
)
};

export default PostCard;