import React from 'react';
import styles from './Recommend.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/img';
import Button from '../../../../component/Button';
import Item from '../../../../component/Item';
import '../../../../grid.css';

const cx = classNames.bind(styles);

const Recommend = () => {
    return (
        <div className={cx('recommend')}>
            <div className={cx('recommend-wrapper')}>
                <div className={cx('author')}>
                    <img
                        src={images.avatar0}
                        alt="avatar"
                        className={cx('author-avatar')}
                    />
                    <div className={cx('author-name')}>Kim Aeyong</div>
                </div>
                <div className={cx('grid')}>
                    <div className={cx('list', 'row')}>
                        <Item
                            className={cx('item', 'col l-3 m-4 s-12')}
                            img="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/B61F010B-5C06-492E-A93F-D2790F0ED04C.png"
                        />
                        <Item
                            className={cx('item', 'col l-3 m-4 s-12')}
                            img="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/013E2319-411B-4401-B7D2-FEA24E007923.png"
                        />
                        <Item
                            className={cx('item', 'col l-3 m-4 s-12')}
                            img="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/784BBAB3-EF64-48B5-8FCA-96A97B02E9E6.png"
                        />
                        <Item
                            className={cx('item', 'col l-3 m-4 s-12')}
                            img="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/6C327CE1-520C-49F6-9F32-AF9C73380C26.png"
                        />
                        <img
                            src={images.rBlackCircleArrow}
                            alt="avatar"
                            className={cx('right-arrow')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;
