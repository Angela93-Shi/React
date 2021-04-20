import react from 'react';
import styles from './style.module.css';
import classNames from 'classnames'


function Button({children,color,type}){
    return (
        <button className = {classNames(styles.button,{
            [styles.red]:color === 'red',
            [styles.black]:color === 'black',
            [styles.white_back]:type==='white_back',
        })}>
            {children}
        </button>
    )
}

export default Button;