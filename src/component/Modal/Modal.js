import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/img';

const cx = classNames.bind(styles);

const Modal = ({ isShowing, hide, children, className }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment className={className}>
                  <div
                      className={cx('modal-wrapper')}
                      aria-modal
                      aria-hidden
                      tabIndex={-1}
                      role="dialog"
                  >
                      <div className={cx('modal-overlay')}>
                          <div className={cx('modal-header')}>
                              <button
                                  type="button"
                                  className={cx('modal-close-button')}
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  onClick={hide}
                              >
                                  <img
                                      src={images.closeWhiteIcon}
                                      alt="close"
                                      aria-hidden="true"
                                  ></img>
                              </button>
                          </div>
                      </div>

                      <div className={cx('modal')}>
                          {children}
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;

export default Modal;
