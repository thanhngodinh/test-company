import React from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/img';
import Button from '../../../../component/Button';

const cx = classNames.bind(styles);

const Main = () => {
    return (
        <div className={cx('main')}>
            <div className={cx('header')}>
                <div className={cx('header-wrapper')}>
                    <img
                        src={images.avatar}
                        alt="avatar"
                        className={cx('header-avatar')}
                    />
                    <div className={cx('header-info-wrapper')}>
                        <div className={cx('header-title')}>
                            The first portfolio movement.
                        </div>
                        <div className={cx('header-author')}>
                            <div className={cx('header-author-name')}>
                                Kim Aeyong
                            </div>
                            <div className={cx('header-author-jobs')}>
                                Design, Music Video, Advertising
                            </div>
                        </div>
                        <div className={cx('header-button-list')}>
                            <Button outline className={cx('header-button')}>
                                <img
                                    src={images.likeButtonIcon}
                                    alt="Like"
                                    className={cx('button-icon')}
                                />
                                Like
                            </Button>
                            <Button primary className={cx('header-button')}>
                                <img
                                    src={images.followerBtnIcon}
                                    alt="Like"
                                    className={cx('button-icon')}
                                />
                                Follow
                            </Button>
                            <Button primary className={cx('header-button')}>
                                <img
                                    src={images.addButtonIcon}
                                    alt="Like"
                                    className={cx('button-icon')}
                                />
                                Add
                            </Button>
                            <Button outline className={cx('header-button')}>
                                Edit Project
                            </Button>
                        </div>
                        <div className={cx('header-tz')}>TZ</div>
                        <div className={cx('header-hr')}>HR</div>
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('body-wrapper')}>
                    <div className={cx('body-video')}>
                        <img
                            src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/25F925EA-F8DC-4F90-8EFE-21867A2A58C4.png"
                            alt="avatar"
                            className={cx('header-avatar')}
                        />
                    </div>
                    <div className={cx('body-des')}>
                        Hello. I ’m Kim Aeyong. This is my first portfolio
                        movement. Thank you very much. Hello. I ’m Kim Aeyong.
                        This is my first portfolio movement. Thank you very
                        much. Hello. I ’m Kim Aeyong. This is my first portfolio
                        movement. Thank you very much. Hello. I ’m Kim Aeyong.
                        This is my first portfolio movement. Thank you very
                        much.
                    </div>
                    <div className={cx('body-img-list')}>
                        <img
                            src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/D3528FEC-1952-4755-84D0-AEC8156AB633.png"
                            alt="avatar"
                            className={cx('body-img')}
                        />
                        <img
                            src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/829E560C-5631-44C0-A86A-2271B3E62B66.png"
                            alt="avatar"
                            className={cx('body-img')}
                        />
                        <img
                            src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/5FD17F39-391B-4A83-A0A5-6CB7D99E4458.png"
                            alt="avatar"
                            className={cx('body-img')}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('footer-title')}>
                    The first portfolio movement.
                </div>
                <div className={cx('footer-icon-list')}>
                    <div className={cx('footer-icon')}>
                        <img
                            src={images.likeIcon}
                            alt="like"
                            className={cx('footer-like-icon')}
                        />
                        1,688
                    </div>
                    <div className={cx('footer-icon')}>
                        <img
                            src={images.viewIcon}
                            alt="view"
                            className={cx('footer-view-icon')}
                        />
                        18,178
                    </div>
                    <div className={cx('footer-icon')}>
                        <img
                            src={images.followerIcon}
                            alt="follow"
                            className={cx('footer-follow-icon')}
                        />
                        332
                    </div>
                </div>
                <div className={cx('footer-date')}>
                    Publishing date : 2020.10.15
                </div>
                <div className={cx('footer-button')}>
                    <Button outline>
                        <img
                            src={images.likeButtonIcon}
                            alt="Like"
                            className={cx('button-like')}
                        />
                        Like
                    </Button>
                    <Button primary>
                        <img
                            src={images.addButtonIcon}
                            alt="Like"
                            className={cx('button-add')}
                        />
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Main;
