import React, { useEffect, useState } from "react";
import $ from "jquery";

export default function GoToTop() {
    const [viewScrollUp, setViewScrollUp] = useState(false);

    useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 150) {
				setViewScrollUp(true);
			} else {
				setViewScrollUp(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

  return (
    <div>
      <div
        id="scrollUp"
        className={viewScrollUp ? "orange-color show" : "orange-color"}
        onClick={() =>
          $("html,body").animate(
            {
              scrollTop: 0,
            },
            500
          )
        }
      >
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  );
}
