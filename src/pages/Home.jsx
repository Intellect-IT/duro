import React, { useEffect, useState } from "react";
import $ from "jquery"
import Loader from "../components/Loader";
import SwiperDesktop from "../components/SwiperDesktop";
import SwiperMobile from "../components/SwiperMobile";

export default function Home() {
	const [viewScrollUp, setViewScrollUp] = useState(false);
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

	function getCurrentDimension() {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension());
		};
		window.addEventListener("resize", updateDimension);

		return () => {
			window.removeEventListener("resize", updateDimension);
		};
	}, [screenSize]);

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
        <>
		<Loader />
		<div className="home-blue">
			{/* <!-- Main content Start --> */}
			<div className="main-content">
				{screenSize.width > 991 ? (
					// desktop swiper
					<SwiperDesktop />
				) : (
					// mobile swiper
					<SwiperMobile />
				)}
			</div>
			{/* <!-- Main content End --> */}

			{/* <!-- start scrollUp  --> */}
			<div
				id="scrollUp"
				className={viewScrollUp ? "orange-color show" : "orange-color"}
                onClick={() => $("html,body").animate(
                    {
                        scrollTop: 0,
                    },
                    500
                )}
			>
				<i className="fa fa-angle-up"></i>
			</div>
			{/* <!-- End scrollUp  --> */}

			{/* <!-- Search Modal Start --> */}
			<div
				className="modal fade search-modal"
				id="searchModal"
				tabIndex="-1"
			>
				<button type="button" className="close" data-bs-dismiss="modal">
					<span className="flaticon-cross"></span>
				</button>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="search-block clearfix">
							<form>
								<div className="form-group">
									<input
										className="form-control"
										placeholder="Search Here..."
										type="text"
									/>
									<button type="submit" value="Search">
										<i className="flaticon-search"></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Search Modal End --> */}
		</div>
        </>
	);
}
