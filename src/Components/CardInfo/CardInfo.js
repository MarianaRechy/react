import React from "react";
import styles from './CardInfo.module.scss'

const CardInfo = (props) => {
    return(
        <div className={styles.infoCard}>
            <div>
            <label className={styles.label}>Last Known Location</label>
            </div>
            <div>
            <p>{props.origin}</p>
            </div>
        </div>
    )
};

export default CardInfo;