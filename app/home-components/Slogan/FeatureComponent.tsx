import React from 'react';
import styles from "../../styles/Slogan.module.scss"
import Image from "next/image";

interface IFeatureComponentProps {
    icon: string,
    title: string,
    description: string,
}

const FeatureComponent = (props: IFeatureComponentProps) => {
    return (
        <div className={styles.featuresBorder}>
            <Image src={props.icon} alt='feature-icon' width={64} height={64}/>
            <h1> {props.title} </h1>
            <p> {props.description} </p>
        </div>
    );
};

export default FeatureComponent;