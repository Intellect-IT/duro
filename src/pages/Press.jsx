import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function Press({ setHeader }) {
	const { t } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 1) {
				setHeader(true);
			} else {
				setHeader(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Loader />
			{/* <!-- Main content Start --> */}
			<div className="main-content">
				{/* <!-- Breadcrumbs Start --> */}
				<div className="rs-breadcrumbs img3">
					<div className="container">
						<div className="breadcrumbs-inner">
							<h1 className="page-title">
							{t("home.news.main")}
								<span className="watermark">
								{t("home.news.main")}
								</span>
							</h1>
						</div>
					</div>
				</div>
				{/* <!-- Breadcrumbs End --> */}

				{/* <!-- Blog Section Start --> */}
				<div className="rs-inner-blog gray-bg4 pt-120 md-pt-80">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 md-mb-50">
								<div className="row">
									<div className="col-lg-12 mb-50">
										<div className="blog-item">
											<div className="blog-img">
												<a href="#">
													<img
														src="./assets/images/blog/4.jpg"
														alt=""
													/>
												</a>
												<ul className="post-categories">
													<li>
														<a href="/news">{t("home.news.news")}</a>
													</li>
												</ul>
											</div>
											<div className="blog-content">
												<h3 className="blog-title">
													<a href="#">
													{t("home.news.news1.title")}
													</a>
												</h3>
												<div className="blog-meta">
													<ul className="btm-cate">
														<li>
															<div className="blog-date">
																<i className="fa fa-calendar-check-o"></i>{" "}
																April 13, 2023
															</div>
														</li>
														<li>
															<div className="author">
																<i className="fa fa-user-o"></i>
																Lav Š.
															</div>
														</li>
													</ul>
												</div>
												<div className="blog-desc">
												{t("home.news.news1.desc")}
												</div>
												<div className="blog-button">
													<a href="#">
														<span className="btn-txt">
															{t("home.read")}
														</span>
														<i className="fa fa fa-chevron-right"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 mb-50">
										<div className="blog-item">
											<div className="blog-img">
												<a href="#">
													<img
														src="./assets/images/blog/2.jpg"
														alt=""
													/>
												</a>
												<ul className="post-categories">
													<li>
														<a href="/news">{t("home.news.news")}</a>
													</li>
												</ul>
											</div>
											<div className="blog-content">
												<h3 className="blog-title">
													<a href="#">
													{t("home.news.news2.title")}
													</a>
												</h3>
												<div className="blog-meta">
													<ul className="btm-cate">
														<li>
															<div className="blog-date">
																<i className="fa fa-calendar-check-o"></i>{" "}
																April 11, 2023
															</div>
														</li>
														<li>
															<div className="author">
																<i className="fa fa-user-o"></i>
																Lav Š.
															</div>
														</li>
													</ul>
												</div>
												<div className="blog-desc">
												{t("home.news.news2.desc")}
												</div>
												<div className="blog-button">
													<a href="#">
														<span className="btn-txt">
															{t("home.read")}
														</span>
														<i className="fa fa fa-chevron-right"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 mb-50">
										<div className="blog-item">
											<div className="blog-img">
												<a href="#">
													<img
														src="./assets/images/blog/3.jpg"
														alt=""
													/>
												</a>
												<ul className="post-categories">
													<li>
														<a href="/news">{t("home.news.news")}</a>
													</li>
												</ul>
											</div>
											<div className="blog-content">
												<h3 className="blog-title">
													<a href="#">
													{t("home.news.news3.title")}
													</a>
												</h3>
												<div className="blog-meta">
													<ul className="btm-cate">
														<li>
															<div className="blog-date">
																<i className="fa fa-calendar-check-o"></i>{" "}
																April 10, 2023
															</div>
														</li>
														<li>
															<div className="author">
																<i className="fa fa-user-o"></i>{" "}
																Lav Š.
															</div>
														</li>
													</ul>
												</div>
												<div className="blog-desc">
												{t("home.news.news3.desc")}
												</div>
												<div className="blog-button">
													<a href="#">
														<span className="btn-txt">
															{t("home.read")}
														</span>
														<i className="fa fa fa-chevron-right"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 mb-50">
										<div className="blog-item">
											<div className="blog-img">
												<a href="#">
													<img
														src="./assets/images/blog/1.jpg"
														alt=""
													/>
												</a>
												<ul className="post-categories">
													<li>
														<a href="/news">
														{t("home.news.news")}
														</a>
													</li>
												</ul>
											</div>
											<div className="blog-content">
												<h3 className="blog-title">
													<a href="#">
													{t("home.news.news4.title")}
													</a>
												</h3>
												<div className="blog-meta">
													<ul className="btm-cate">
														<li>
															<div className="blog-date">
																<i className="fa fa-calendar-check-o"></i>{" "}
																April 5, 2023
															</div>
														</li>
														<li>
															<div className="author">
																<i className="fa fa-user-o"></i>{" "}
																Lav Š.
															</div>
														</li>
													</ul>
												</div>
												<div className="blog-desc">
												{t("home.news.news4.desc")}
												</div>
												<div className="blog-button">
													<a href="#">
														<span className="btn-txt">
															{t("home.read")}
														</span>
														<i className="fa fa fa-chevron-right"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 pl-35 md-pl-15">
								<div className="widget-area">
									{/* <!--<div className="search-widget mb-50">
                                    <div className="search-wrap">
                                        <input type="search" placeholder="Searching..." name="s" className="search-input" value="">
                                        <button type="submit" value="Search"><i className="flaticon-search"></i></button>
                                    </div>
                                </div>--> */}
									<div className="recent-posts mb-50">
										<div className="widget-title">
											<h3 className="title">
											{t("home.news.recent")}
											</h3>
										</div>
										<div className="recent-post-widget no-border">
											<div className="post-img">
												<a href="#">
													<img
														src="./assets/images/blog/1.jpg"
														alt=""
													/>
												</a>
											</div>
											<div className="post-desc">
												<a href="#">
												{t("home.news.news4.title")}
												</a>
												<span className="date-post">
													{" "}
													<i className="fa fa-calendar"></i>{" "}
													April 13, 2023{" "}
												</span>
											</div>
										</div>
										<div className="recent-post-widget">
											<div className="post-img">
												<a href="#">
													<img
														src="./assets/images/blog/2.jpg"
														alt=""
													/>
												</a>
											</div>
											<div className="post-desc">
												<a href="#">
													{" "}
													{t("home.news.news2.title")}
												</a>
												<span className="date-post">
													{" "}
													<i className="fa fa-calendar"></i>{" "}
													April 11, 2023{" "}
												</span>
											</div>
										</div>
										<div className="recent-post-widget">
											<div className="post-img">
												<a href="#">
													<img
														src="./assets/images/blog/3.jpg"
														alt=""
													/>
												</a>
											</div>
											<div className="post-desc">
												<a href="#">
												{t("home.news.news3.title")}
												</a>
												<span className="date-post">
													{" "}
													<i className="fa fa-calendar"></i>{" "}
													April 10, 2023{" "}
												</span>
											</div>
										</div>
									</div>
									{/* <!--<div className="categories mb-45">
                                    <div className="widget-title">
                                        <h3 className="title">Categories</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Branding</a></li>
                                        <li><a href="#">Digital Marketing</a></li>
                                        <li><a href="#">E-commerce</a></li>
                                        <li><a href="#">Graphic Design</a></li>
                                    </ul>
                                </div>--> */}
									<div className="follow-us">
										<div className="widget-title mb-40">
											<h3 className="title">{t("home.news.follow")}</h3>
										</div>
										<ul>
											<li>
												<a href="https://www.facebook.com/duro.cologne">
													<i className="fa fa-facebook"></i>
												</a>
											</li>
											<li>
												<a href="https://www.twitter.com/DuroCologne">
													<i className="fa fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="https://www.instagram.com/duro.cologne">
													<i className="fa fa-instagram"></i>
												</a>
											</li>
											<li>
												<a href="https://www.youtube.com/@duro.cologne">
													<i className="fa fa-youtube"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Newsletter section start --> */}
					<div className="rs-newsletter style1 pt-120 md-pt-80 mb--110">
						<div className="container">
							<div className="newsletter-wrap">
								<div className="row y-middle">
									<div className="col-lg-6 md-mb-30">
										<div className="content-wrap">
											<div className="icon-img">
												<img
													src="./assets/images/mail.png"
													alt="images"
												/>
											</div>
											<h3 className="newsletter-title">
											{t("newsletter")}
											</h3>
										</div>
									</div>
									<div className="col-lg-6">
										<form className="newsletter-form">
											<input
												type="email"
												name="email"
												placeholder={t("yourEmail")}
												required=""
											/>
											<em className="paper-plane">
												<input
													type="submit"
													value="Subscribe"
												/>
											</em>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Newsletter section end --> */}
				</div>
				{/* <!-- Blog Section End -->  */}
			</div>
			{/* <!-- Main content End --> */}
		</>
	);
}
