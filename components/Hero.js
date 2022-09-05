import Image from "next/image";
import styles from '../styles/Home.module.scss'

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.hero}>
                <Image src="/home/hero/heroBackground.png" layout="fill" width={1780} height={608} />
            </div>
            <div className={styles.heroTextContainer}>
                <h1>
                    Main heading here
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris
                </p>
            </div>
        </div>
    );
}

export default Hero;