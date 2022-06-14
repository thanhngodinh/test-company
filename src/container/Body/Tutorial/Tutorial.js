import React from 'react';
import styles from './Tutorial.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/img';
import Button from '../../../component/Button';
import '../../../grid.css';

const cx = classNames.bind(styles);

const Tutorial = ({ className }) => {
    const classes = cx('tutorial', 'grid', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className={cx('tutorial-row', 'row')}>
                <div className={cx('intro', 'col s-12 m-12 l-4')}>
                    <div className={cx('title')}>Tutorial</div>
                    <p>
                        Let's look at 7 ways to use motion trend more
                        effectively in the first tutorial.
                    </p>
                    <Button primary>watch now</Button>
                </div>
                <div className={cx('video', 'col s-12 m-12 l-4')}>
                    <img src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/C7A28626-004F-45A9-9B53-5C56B3BC8A29.png" />
                    <img
                        src={images.playIcon}
                        alt="play-icon"
                        className={cx('play-icon')}
                    />
                    <img
                        src={images.liveBox}
                        alt="live-icon"
                        className={cx('live-icon')}
                    />
                </div>
                <div className={cx('list-tut', 'col s-12 m-12 l-4')}>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <img src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/13EDA2E0-4BF1-4C33-BDC0-1DC74CEF28CC.png" />
                            <div className={cx('description')}>
                                <div className={cx('item-title')}>Tutorial</div>
                                <p>
                                    A tutorial video with Motion Trend. Let's
                                    Learn Motion Trends.
                                </p>
                                <div className={cx('like-and-view')}>
                                    <div className={cx('like-info')}>
                                        <img
                                            src={images.likeIcon}
                                            alt="like-icon"
                                            className={cx('like-icon')}
                                        />
                                        18
                                    </div>
                                    <div className={cx('view-info')}>
                                        <img
                                            src={images.viewIcon}
                                            alt="view-icon"
                                            className={cx('view-icon')}
                                        />
                                        18
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={cx('item')}>
                            <img src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/EAFFE3F2-2C3C-4524-82AF-B1821BF04A0D.png" />
                            <div className={cx('description')}>
                                <div className={cx('item-title')}>Tutorial</div>
                                <p>
                                    A tutorial video with Motion Trend. Let's
                                    Learn Motion Trends.
                                </p>
                                <div className={cx('like-and-view')}>
                                    <div className={cx('like-info')}>
                                        <img
                                            src={images.likeIcon}
                                            alt="like-icon"
                                            className={cx('like-icon')}
                                        />
                                        18
                                    </div>
                                    <div className={cx('view-info')}>
                                        <img
                                            src={images.viewIcon}
                                            alt="view-icon"
                                            className={cx('view-icon')}
                                        />
                                        18
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={cx('item')}>
                            <img src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/C852F498-DB76-48DE-B91C-8F4CB84251F5.png" />
                            <div className={cx('description')}>
                                <div className={cx('item-title')}>Tutorial</div>
                                <p>
                                    A tutorial video with Motion Trend. Let's
                                    Learn Motion Trends.
                                </p>
                                <div className={cx('like-and-view')}>
                                    <div className={cx('like-info')}>
                                        <img
                                            src={images.likeIcon}
                                            alt="like-icon"
                                            className={cx('like-icon')}
                                        />
                                        18
                                    </div>
                                    <div className={cx('view-info')}>
                                        <img
                                            src={images.viewIcon}
                                            alt="view-icon"
                                            className={cx('view-icon')}
                                        />
                                        18
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;
