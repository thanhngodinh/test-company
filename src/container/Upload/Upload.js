import React from 'react';
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';
import {Main, Recommend, Footer} from './component'

const cx = classNames.bind(styles);

const Upload = () => {
    return (
        <div className={cx('upload')}>
            <Main />
            <Recommend />
            <Footer />
        </div>
    );
};

export default Upload;
