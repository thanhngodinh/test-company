import classNames from 'classnames/bind';
import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

function Tag({
    color,
    backgroundColor,
    borderColor,
    children,
    className,
    ...props
}) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    const divStyle = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderStyle: 'solid',
        borderWidth: 1,
        // border: `solid 1 ${borderColor}`,
    };

    return (
        <div style={divStyle} className={classes} {...props}>
            <span style={{ color: color }} className={cx('title')}>
                {children}
            </span>
        </div>
    );
}

export default Tag;
