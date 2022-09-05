import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'

const Navigation = () => {

    const [hamburgerToggle, setHamburgerToggle] = useState(true);

    let toggleHam = () => {
        setHamburgerToggle(!hamburgerToggle);
    }

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
                {hamburgerToggle ?
                    <div className={styles.tempMobileNav}>
                        <div className={styles.navbarImageMobile} >
                            <Image src="/home/exigent-logo.png" width={124} height={24} />
                        </div>
                        <div className={styles.navbarHamburgerImageMobile} onClick={toggleHam}>
                            <Image src="/hamburgerMenu.png" width={32} height={32} />
                        </div>

                    </div>
                    :
                    <div>
                        <div className={styles.tempMobileNav}>
                            <div className={styles.navbarImageMobile}>
                                <Image src="/home/exigent-logo.png" width={124} height={24} />
                            </div>
                            <div className={styles.navbarHamburgerImageMobile} onClick={toggleHam}>
                                <Image src="/hamburgerMenu.png" width={32} height={32} />
                            </div>

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
                    </div>}
            </div>
        </>


    );
}

export default Navigation;