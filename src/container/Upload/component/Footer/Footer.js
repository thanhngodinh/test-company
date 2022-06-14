import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/img';
import Button from '../../../../component/Button';
import Tag from '../../../../component/Tag';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('comment')}>
                <div className={cx('comment-wrapper')}>
                    <div className={cx('comment-title')}>Comments</div>
                    <div className={cx('write-comment')}>
                        <input
                            type="text"
                            className={cx('comment-input')}
                            placeholder="Write a comment now......"
                        />
                        <Button
                            primary
                            small
                            className={cx('write-comment-enter')}
                        >
                            <img src={images.enterCmtIcon} alt="enter" />
                        </Button>
                    </div>
                    <div className={cx('comment-list')}>
                        <div className={cx('comment-item')}>
                            <div className={cx('commenter-info')}>
                                <img
                                    src={images.avatar1}
                                    alt="avatar"
                                    className={cx('commenter-avatar')}
                                />
                                <div className={cx('name-and-date')}>
                                    <div className={cx('commenter-name')}>
                                        Kim Aeyong
                                    </div>
                                    <div className={cx('comment-date')}>
                                        2020. 07. 26
                                    </div>
                                </div>
                            </div>
                            <div className={cx('comment-content')}>
                                Amazing work you have here. feels like an
                                alternative reality with that much saturation..
                                love it! Amazing work you have here feels like
                                an alternative reality with that much
                                saturation.. love it!
                            </div>
                        </div>
                        <div className={cx('comment-item')}>
                            <div className={cx('commenter-info')}>
                                <img
                                    src={images.avatar2}
                                    alt="avatar"
                                    className={cx('commenter-avatar')}
                                />
                                <div className={cx('name-and-date')}>
                                    <div className={cx('commenter-name')}>
                                        Kim Jimin
                                    </div>
                                    <div className={cx('comment-date')}>
                                        2020. 07. 26
                                    </div>
                                </div>
                            </div>
                            <div className={cx('comment-content')}>
                                Amazing work you have here. feels like an
                                alternative reality with that much saturation..
                                love it!
                            </div>
                        </div>
                        <div className={cx('comment-item')}>
                            <div className={cx('commenter-info')}>
                                <img
                                    src={images.avatar3}
                                    alt="avatar"
                                    className={cx('commenter-avatar')}
                                />
                                <div className={cx('name-and-date')}>
                                    <div className={cx('commenter-name')}>
                                        Im Junghan
                                    </div>
                                    <div className={cx('comment-date')}>
                                        2020. 07. 26
                                    </div>
                                </div>
                            </div>
                            <div className={cx('comment-content')}>
                                Amazing work you have here. feels like an
                                alternative reality with that much saturation..
                                love it! Amazing work you have here feels like
                                an alternative reality with that much
                                saturation.. love it!
                            </div>
                        </div>
                        <div className={cx('comment-item')}>
                            <div className={cx('commenter-info')}>
                                <img
                                    src={images.avatar4}
                                    alt="avatar"
                                    className={cx('commenter-avatar')}
                                />
                                <div className={cx('name-and-date')}>
                                    <div className={cx('commenter-name')}>
                                        Cayley
                                    </div>
                                    <div className={cx('comment-date')}>
                                        2020. 07. 26
                                    </div>
                                </div>
                            </div>
                            <div className={cx('comment-content')}>
                                Amazing work you have here. feels like an
                                alternative reality with that much saturation..
                                love it!
                            </div>
                        </div>
                        <div className={cx('comment-item')}>
                            <div className={cx('commenter-info')}>
                                <img
                                    src={images.avatar1}
                                    alt="avatar"
                                    className={cx('commenter-avatar')}
                                />
                                <div className={cx('name-and-date')}>
                                    <div className={cx('commenter-name')}>
                                        Kim Aeyong
                                    </div>
                                    <div className={cx('comment-date')}>
                                        2020. 07. 26
                                    </div>
                                </div>
                            </div>
                            <div className={cx('comment-content')}>
                                Amazing work you have here. feels like an
                                alternative reality with that much saturation..
                                love it! Amazing work you have here feels like
                                an alternative reality with that much
                                saturation.. love it!
                            </div>
                        </div>
                    </div>
                    <Button outline className={cx('comment-more')}>
                        More comments
                        <img
                            src={images.moreCmtIcon}
                            alt="more"
                            className={cx('more-icon')}
                        />
                    </Button>
                </div>
            </div>
            <div className={cx('owner')}>
                <div className={cx('author')}>
                    <div className={cx('author-wrapper')}>
                        <div className={cx('author-title')}>Owner</div>
                        <div className={cx('author-info-wrapper')}>
                            <img
                                src={images.avatar0}
                                alt="avatar"
                                className={cx('author-avatar')}
                            />
                            <div className={cx('author-info')}>
                                <div className={cx('author-name')}>
                                    Kim Aeyong
                                </div>
                                <div className={cx('author-location')}>
                                    <img
                                        src={images.locationIcon}
                                        alt="location"
                                        className={cx('location-icon')}
                                    />
                                    Korea, Republic of
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('project')}>
                    <div className={cx('project-wrapper')}>
                        <div className={cx('project-title')}>
                            The first portfolio movement.
                        </div>
                        <div className={cx('project-icon-list')}>
                            <div className={cx('project-icon')}>
                                <img
                                    src={images.likeButtonIcon}
                                    alt="like"
                                    className={cx('project-icon-img')}
                                />
                                18
                            </div>
                            <div className={cx('project-icon')}>
                                <img
                                    src={images.viewIcon}
                                    alt="view"
                                    className={cx('project-icon-img')}
                                />
                                18
                            </div>
                            <div className={cx('project-icon')}>
                                <img
                                    src={images.commentIcon}
                                    alt="comment"
                                    className={cx('project-icon-img')}
                                />
                                18
                            </div>
                        </div>
                        <div className={cx('project-date')}>
                            Publishing date : 2020.10.15
                        </div>
                    </div>
                </div>
                <div className={cx('createve-filed')}>
                    <div className={cx('createve-filed-wrapper')}>
                        <div className={cx('createve-filed-title')}>
                            Creative field
                        </div>
                        <div className={cx('createve-filed-tag-list')}>
                            <Tag
                                color="#b5b5ff"
                                backgroundColor="#00005b"
                                className={cx('reateve-filed-tag')}
                            >
                                Premiere
                            </Tag>
                            <Tag
                                color="#31a8ff"
                                backgroundColor="#001e36"
                                className={cx('reateve-filed-tag')}
                            >
                                Photoshop
                            </Tag>
                            <Tag
                                color="#ff9a00"
                                backgroundColor="#330000"
                                className={cx('reateve-filed-tag')}
                            >
                                Illustrator
                            </Tag>
                        </div>
                    </div>
                </div>
                <div className={cx('tag')}>
                    <div className={cx('tag-wrapper')}>
                        <Tag
                            color="#ff2e43"
                            borderColor="#ff2e43"
                            className={cx('tag-icon')}
                        >
                            Editing
                        </Tag>
                        <Tag
                            color="#ff2e43"
                            borderColor="#ff2e43"
                            className={cx('tag-icon')}
                        >
                            Camera action, Angle
                        </Tag>
                        <Tag
                            color="#ff2e43"
                            borderColor="#ff2e43"
                            className={cx('tag-icon')}
                        >
                            Sound, Beat
                        </Tag>
                        <Tag
                            color="#ff2e43"
                            borderColor="#ff2e43"
                            className={cx('tag-icon')}
                        >
                            Graphical
                        </Tag>
                        <Tag
                            color="#ff2e43"
                            borderColor="#ff2e43"
                            className={cx('tag-icon')}
                        >
                            Experimental
                        </Tag>
                        <Tag
                            color="#ff2e43"
                            borderColor="#ff2e43"
                            className={cx('tag-icon')}
                        >
                            Editing
                        </Tag>
                    </div>
                </div>
                <div className={cx('report-btn-wrapper')}>
                    <Button outline className={cx('report-btn')}>
                        <img
                            src={images.reportIcon}
                            alt="report"
                            className={cx('report-btn-icon')}
                        />
                        Report
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
