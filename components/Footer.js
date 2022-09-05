import styles from '../styles/Home.module.scss'
import Image from 'next/image';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <span>
            Copyright © 2022 Exigent. All rights reserved
            </span>
            <div className={styles.footerIcons}>
                <div>
                    <Image src="/home/footer/fbIcon.png" width={33} height={33} />
                </div>
                <div>
                    <Image src="/home/footer/linkedInIcon.png" width={33} height={33} />
                </div>
                <div>
                    <Image src="/home/footer/instagramIcon.png" width={33} height={33} />
                </div>
            </div>
      </footer>
     );
}
 
export default Footer;