/** @format */

import { useState, useEffect } from "react";

import { ReactComponent as UpSVG } from "../assets/images/icon-up-arrow.svg";
import { ReactComponent as DownSVG } from "../assets/images/icon-down-arrow.svg";
import ErrorBoundary from "../reusable/ErrorBoundary";

const ScrollIndicator = ({ id, className, children }) => {
  const [scroll, setScroll] = useState(true);
  const [hasVerticalScrollbar, setHasVerticalScrollbar] = useState(true);

  const handleScroll = (e) => {
    const { scrollTop, offsetHeight, scrollHeight } = e.target;
    // console.log(
    // 	'ScrollIndicator SCROLL : >',
    // 	'scrollTop :',
    // 	scrollTop,
    // 	'offsetHeight : ',
    // 	offsetHeight,
    // 	'scrollHeight : ',
    // 	scrollHeight
    // );

    if (scrollTop === 0) {
      setScroll(true);
    } else if (
      offsetHeight + scrollTop !== scrollHeight &&
      offsetHeight + scrollTop >= scrollHeight
    ) {
      setScroll(true);
    } else if (
      offsetHeight + scrollTop === scrollHeight &&
      offsetHeight + scrollTop <= scrollHeight
    ) {
      setScroll(false);
    }
  };
  useEffect(() => {
    const elem = document.getElementById(id);
    const isScroll = elem.offsetWidth > elem.scrollWidth;
    setHasVerticalScrollbar(isScroll);
  }, [id]);
  return (
    <ErrorBoundary>
      <aside id={id} className={className} onScroll={handleScroll}>
        {scroll ? null : (
          <div className="div--up">
            <UpSVG className="custom-icon icon--up--svg" />
          </div>
        )}
        {children}
        {scroll && hasVerticalScrollbar ? (
          <div className="div--down">
            <DownSVG className="custom-icon icon--down--svg" />
          </div>
        ) : null}
      </aside>
    </ErrorBoundary>
  );
};

export default ScrollIndicator;
