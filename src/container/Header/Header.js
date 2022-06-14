import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/img';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <img src={images.logo} alt="logo" className={cx('logo')} />
            <div className={cx('header-item-wrapper')}>
                <div className={cx('header-item')}>
                    <div>Discover</div>
                    <div>Jobs</div>
                </div>

                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Search for motion trend......"
                        className={cx('search-input')}
                    />
                    <img
                        src={images.searchIcon}
                        alt="search-icon"
                        className={cx('icon')}
                    />
                </div>

                <div className={cx('auth')}>
                    <div>Login</div>
                    <div>Sign up</div>
                </div>

            </div>
        </div>
    );
};

export default Header;
