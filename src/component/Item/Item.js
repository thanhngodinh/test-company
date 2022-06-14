import React from 'react';
import styles from './Item.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/img';

const cx = classNames.bind(styles);
// { itemImg, description, authorImg, author, liked, watched }
const Item = ({ className, img, title }) => {
    const classes = cx('body-item', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className={cx('item-img')}>
                <div className={cx('img-wrapper')}>
                    <div className={cx('img-dummy')}></div>
                    <div className={cx('img-element')}>
                        <img src={img} alt="item-img" class="item-img" />
                    </div>
                </div>
                <span className={cx('item-des')}>{title}</span>
            </div>
            <div className={cx('item-info')}>
                <div className={cx('author-info')}>
                    <img
                        src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/D24F2841-88DC-41F7-9979-9EB01F9D6F0D.png"
                        alt="author-img"
                        className={cx('author-img')}
                    />
                    <span className={cx('author-name')}>author</span>
                    {/* <img
                        src={images.arrowDown}
                        alt="arrow-down"
                        className={cx('author-arrow-down')}
                    /> */}
                </div>
                <div className={cx('like-view')}>
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
        </div>
    );
};

export default Item;
