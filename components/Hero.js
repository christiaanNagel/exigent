import Image from "next/image";
import styles from '../styles/Home.module.scss'

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.hero}>
                <Image src="/home/hero/tinted.jpg" layout="fill" objectFit="stretch" />
            </div>
            <div className={styles.heroTextContainer}>
                <h1>
                    Main heading here
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris
                </p>
            </div>
            <div className={styles.heroButtons}>
                <div className={styles.heroButtonsText}>Lorem Ipsum Dolor Sit</div>
                <div className={styles.heroButtonsTextGroup}>
                    <button className={styles.pinkButton}>Button One</button>
                    <button className={styles.blackButton}>Button Two</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;