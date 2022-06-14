import React, { useState, useEffect } from 'react';
import '../../grid.css';
import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import Tutorial from './Tutorial';
import Button from '../../component/Button';
import Item from '../../component/Item';
import images from '../../assets/img';
import axios from 'axios';

const cx = classNames.bind(styles);

const Body = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [tag, setTag] = useState('date_added');
    // const [scrollTag, setScrollTag] = useState(0);

    const scrollRight = (e) => {
        e.target.parentNode.parentNode.parentNode.firstChild.scrollLeft += 180;
        // setScrollTag(setTag + 200);
    };
    const scrollLeft = (e) => {
        e.target.parentNode.parentNode.parentNode.firstChild.scrollLeft -= 180;
        // setScrollTag(setTag - 200);
    };

    const handleFilterButtonClick = (e) => {
        if (e.target.name) {
            setTag(e.target.name); 
        }
        else {
            setTag(e.target.parentNode.name); 
        }
    };

    useEffect(() => {
        axios
            .get(
                `https://yts.torrentbay.to/api/v2/list_movies.json?limit=20&page=${page}&sort_by=${tag}`,
            )
            .then((res) => {
                setMovies([...res.data.data.movies]);
            })
            .catch((error) => console.log(error));
    }, [page, tag]);


    return (
        <div className={cx('body')}>
            <div className={cx('tag')}>
                <div
                    className={cx('tag-list')}
                    // scrollLeft={scrollTag}
                >
                    <Button primary large className={cx('tag-item')}>
                        Editing
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Camera Action, Angle
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Sound, Beat
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Graphical
                    </Button>
                    <Button
                        primary
                        large
                        className={cx('tag-item', 'tag-active')}
                    >
                        Experimental
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Elements
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Cars
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Gun
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Editing
                    </Button>
                    <Button primary large className={cx('tag-item')}>
                        Gun
                    </Button>
                </div>
                <Button rounded className={cx('tag-left')} onClick={scrollLeft}>
                    <img src={images.lRedCircleArrow} alt="left-arrow" />
                </Button>
                <Button
                    rounded
                    className={cx('tag-right')}
                    onClick={scrollRight}
                >
                    <img src={images.rRedCircleArrow} alt="right-arrow" />
                </Button>
            </div>

            <div className={cx('filter')}>
                <Button
                    text
                    className={cx('filter-item')}
                    name="title"
                    onClick={handleFilterButtonClick}
                >
                    Title
                </Button>
                <Button
                    text
                    className={cx('filter-item')}
                    name="year"
                    onClick={handleFilterButtonClick}
                >
                    Year
                </Button>
                <Button
                    text
                    className={cx('filter-item')}
                    name="rating"
                    onClick={handleFilterButtonClick}
                >
                    Rating
                </Button>
                <Button
                    text
                    className={cx('filter-item')}
                    name="peers"
                    onClick={handleFilterButtonClick}
                >
                    Peers
                </Button>
                <Button
                    text
                    className={cx('filter-item')}
                    name="down_count"
                    onClick={handleFilterButtonClick}
                >
                    Down Count
                </Button>
                <Button
                    text
                    className={cx('filter-item')}
                    name="like_count"
                    onClick={handleFilterButtonClick}
                >
                    Like Count
                </Button>
            </div>

            <div className={cx('body-grid', 'grid')}>
                <div className={cx('body-row', 'row')}>
                    {movies.map((movie, idx) => {
                        return (
                            <Item
                                key={idx}
                                className={cx('body-col', 'col s-12 m-4 l-2-4')}
                                img={movie.background_image}
                                title={movie.title}
                            />
                        );
                    })}
                </div>
            </div>

            <Tutorial />

            <div className={cx('body-grid', 'grid')}>
                <div className={cx('body-row', 'row')}>
                    {movies.map((movie, idx) => {
                        if (idx < 5) {

                            return (
                                <Item
                                    key={idx}
                                    className={cx('body-col', 'col s-12 m-4 l-2-4')}
                                    img={movie.background_image}
                                    title={movie.title}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Body;
