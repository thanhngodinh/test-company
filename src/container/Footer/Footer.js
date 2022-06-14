import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/img';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer1')}>
                <div className={cx('contact')}>
                    <div className={cx('contact-title')}>Contact</div>
                    <div>motiontrend@test.com</div>
                </div>
                <div className={cx('social')}>
                    <div className={cx('copyright')}>
                        @ Motiontrend. All rights reserved.
                    </div>
                    <img
                        src={images.istagramIcon}
                        alt="icon"
                        className={cx('icon')}
                    />
                    <img
                        src={images.facebookIcon}
                        alt="icon"
                        className={cx('icon')}
                    />
                    <img
                        src={images.youtubeIcon}
                        alt="icon"
                        className={cx('icon')}
                    />
                </div>
            </div>

            <div className={cx('footer2')}>
                <ul className={cx('item-list')}>
                    <li className={cx('item')}>Introduction</li>
                    <li className={cx('item')}>Terms of Service</li>
                    <li className={cx('item')}>
                        Language
                        <img
                            src={images.arrowDown}
                            alt="down"
                            className={cx('down')}
                        />
                    </li>
                    <li className={cx('item')}>Customer Service</li>
                </ul>

                <img src={images.blackLogo} alt="logo" className={cx('logo')} />
            </div>
        </footer>
    );
};

export default Footer;
