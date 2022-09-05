import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.scss'

const DestinationCard = ({ image, title, content, icon, icon2, icon3, link }) => {
    return (
        <div className={styles.DestinationCardContainer}>
            <Image src={image} layout="responsive" objectFit="contain" width={300} height={300} />
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardContent}>{content}</p>
            <div className={styles.bottomDestinationCard}>
                <div className={styles.bottomDestinationCard}>
                    <div className={styles.iconBottom}>
                        <Image src={icon} width={30} height={30} />
                    </div>
                    <div className={styles.iconBottom}>
                        <Image src={icon2} width={30} height={30} />
                    </div>
                    <div className={styles.iconBottom}>
                        <Image src={icon3} width={30} height={30} />
                    </div>
                </div>
                <Link href={link}>Read more &rarr;</Link>
            </div>
        </div>
    );
}

export default DestinationCard;