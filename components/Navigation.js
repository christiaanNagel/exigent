import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Navigation = () => {
    return (
        <>
        {/* //Desktop navigation */}
        <div className={styles.navbar}>
            <div className={styles.navbarImage}>
                <Image src="/home/exigent-logo.png" width={124} height={24} />
            </div>
            <ul className={styles.navbarMenu}>
                <Link href="./">
                    <li>
                        Item 1
                    </li>
                </Link>
                <Link href="./item2">
                <li>
                    Item 2
                </li>
                </Link>
                <Link href="./item3">
                <li>
                    Item 3
                </li>
                </Link>
                <Link href="./item4">
                <li>
                    Item 4
                </li>
                </Link>
                <Link href="./item5">
                <li>
                    Item 5
                </li>
                </Link>
            </ul>
            <button href="#" className={styles.navbarButton}>Button</button>
        </div>
        {/* Mobile navigation */}
        <div className={styles.navbarMobile}>
            <div className={styles.navbarImage}>
                <Image src="/home/exigent-logo.png" width={124} height={24} />
            </div>
            <ul className={styles.navbarMenuMobile}>
                <Link href="./">
                    <li>
                        Item 1
                    </li>
                </Link>
                <Link href="./item2">
                <li>
                    Item 2
                </li>
                </Link>
                <Link href="./item3">
                <li>
                    Item 3
                </li>
                </Link>
                <Link href="./item4">
                <li>
                    Item 4
                </li>
                </Link>
                <Link href="./item5">
                <li>
                    Item 5
                </li>
                </Link>
            </ul>
            <button href="#" className={styles.navbarButtonMobile}>Button</button>
        </div>
        </>

        
    );
}

export default Navigation;