import styles from '../styles/Home.module.scss'
import DestinationCard from './DestinationCard';
import Image from 'next/image';
import { useState } from 'react';

const Tabs = () => {

    const [toggle, setToggle] = useState('tabOne')

    return (
        <div className={styles.tabsContainer}>
            <h1>Section Heading Here</h1>
            <ul className={styles.tabsWrapper}>
                <div>
                    <li onClick={() => setToggle('tabOne')}>
                        Active tab
                    </li>
                </div>
                <div>
                    <li onClick={() => setToggle('tabTwo')}>
                        Tab Heading here
                    </li>
                </div>
                <div>
                    <li onClick={() => setToggle('tabThree')}>
                        Tab Heading here
                    </li>
                </div>
                <div>
                    <li onClick={() => setToggle('tabFour')}>
                        Tab Heading here
                    </li>
                </div>
            </ul>
            {toggle == "tabOne" &&
            <div>
                                    <div className={styles.pinkDots}>
                        <Image src="/home/destinationCards/pinkDots.png" height={102} width={115} />
                    </div>
                <div className={styles.DestinationCardWrapper}>

                    <DestinationCard image="/home/destinationCards/Singapore.png" title="Lorem ipsum" content="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." icon="/home/destinationCards/destinationCardIcons.png" icon2="/home/destinationCards/Group 18.png" icon3="/home/destinationCards/Group 19.png" link="" />
                    <DestinationCard image="/home/destinationCards/Thailand.png" title="Lorem ipsum" content="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." icon="/home/destinationCards/destinationCardIcons.png" icon2="/home/destinationCards/Group 18.png" icon3="/home/destinationCards/Group 19.png" link="" />
                    <DestinationCard image="/home/destinationCards/Paris.png" title="Lorem ipsum" content="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." icon="/home/destinationCards/destinationCardIcons.png" icon2="/home/destinationCards/Group 18.png" icon3="/home/destinationCards/Group 19.png" link="" />
                    <DestinationCard image="/home/destinationCards/New Zealand.png" title="Lorem ipsum" content="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." icon="/home/destinationCards/destinationCardIcons.png" icon2="/home/destinationCards/Group 18.png" icon3="/home/destinationCards/Group 19.png" link="" />
                    <DestinationCard image="/home/destinationCards/Bora Bora.png" title="Lorem ipsum" content="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." icon="/home/destinationCards/destinationCardIcons.png" icon2="/home/destinationCards/Group 18.png" icon3="/home/destinationCards/Group 19.png" link="" />
                    <DestinationCard image="/home/destinationCards/London.png" title="Lorem ipsum" content="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." icon="/home/destinationCards/destinationCardIcons.png" icon2="/home/destinationCards/Group 18.png" icon3="/home/destinationCards/Group 19.png" link="" />
 
                </div>
                <div className={styles.greyDots}>
                        <Image src="/home/destinationCards/greyDots.png" objectFit='contain' height={132} width={115} />
                    </div>
                </div>}
            {toggle == "tabTwo" && <div className={styles.tabPlaceHolder}>Tab 2</div>}
            {toggle == "tabThree" && <div className={styles.tabPlaceHolder}>Tab 3</div>}
            {toggle == "tabFour" && <div className={styles.tabPlaceHolder}>Tab 4</div>}
        </div>
    );
}

export default Tabs;