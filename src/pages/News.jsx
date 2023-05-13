import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function News({ setHeader }) {
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
	}, [setHeader]);

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
									<div className="col-lg-12 md-mb-50">
										<div className="blog-details">
											<div className="bs-img mb-35">
												<a href="#!">
													<img
														src="./assets/images/blog/4.jpg"
														alt=""
													/>
												</a>
											</div>
											<div className="blog-full">
												<ul className="single-post-meta">
													<li>
														<span className="p-date">
															<i className="fa fa-calendar-check-o"></i>{" "}
															January 21, 2020{" "}
														</span>
													</li>
													<li>
														<span className="p-date">
															{" "}
															<i className="fa fa-user-o"></i>{" "}
															{t("news.admin")}{" "}
														</span>
													</li>
													<li className="Post-cate">
														<div className="tag-line">
															<i className="fa fa-book"></i>
															<a href="#!">
															{t("news.strategy")}
															</a>
														</div>
													</li>
													<li className="post-comment">
														{" "}
														<i className="fa fa-comments-o"></i>{" "}
														1
													</li>
												</ul>
												<p>
												{t("news.desc")}
												</p>
												<blockquote>
													<p className="margin-0">
													{t("news.quote")}
														<br />
														<cite>
															Robert Calibo
														</cite>
													</p>
												</blockquote>
												<h3>
												{t("news.tips.title")}
												</h3>
												<ul className="dots">
													<li>
													{t("news.tips.tip1")}
													</li>
													<li>
													{t("news.tips.tip2")}
													</li>
													<li>
													{t("news.tips.tip3")}
													</li>
													<li>
													{t("news.tips.tip4")}
													</li>
													<li>
													{t("news.tips.tip5")}
													</li>
												</ul>
												<p>
												{t("news.tips.desc1")}
												</p>
												<div className="bs-img mb-30">
													<a href="#!">
														<img
															src="./assets/images/blog/1.jpg"
															alt=""
														/>
													</a>
												</div>
												<p>
												{t("news.tips.desc2")}
												</p>

												<div className="tag-info">
													Tags:
													<a href="#!">{t("news.tips.tag1")}</a>
													<a href="#!">{t("news.tips.tag2")}</a>
													<a href="#!">{t("news.tips.tag3")}</a>
													<a href="#!">{t("news.tips.tag4")}</a>
												</div>
												<h3 className="comment-title">
												{t("news.comments.title")}
												</h3>
												<div className="comment-body">
													<div className="comment-author">
														<img
															src="./assets/images/avatar.png"
															alt="images"
														/>
													</div>
													<div className="comment-text">
														<a href="#!">{t("news.comments.comment1.title")}</a>
														<br />
														<a
															className="timedate"
															href="#!"
														>
															<time dateTime="2021-05-26T08:43:43+00:00">
																May 26, 2021 at
																8:43 am
															</time>
														</a>
														<p>
														{t("news.comments.comment1.desc")}
														</p>
														<div className="reply-btn">
															<a href="#!">
															{t("news.comments.reply")}
															</a>
														</div>
													</div>
												</div>
												<div className="comment-body">
													<div className="comment-author">
														<img
															src="./assets/images/avatar.png"
															alt="images"
														/>
													</div>
													<div className="comment-text">
														<a href="#!">{t("news.comments.comment2.title")}</a>
														<br />
														<a
															className="timedate"
															href="#!"
														>
															<time dateTime="2021-05-26T08:43:43+00:00">
																May 26, 2021 at
																8:43 am
															</time>
														</a>
														<p>
														{t("news.comments.comment2.desc")}
														</p>
														<div className="reply-btn">
															<a href="#!">
															{t("news.comments.reply")}
															</a>
														</div>
													</div>
												</div>
												<div className="comment-body">
													<div className="comment-author">
														<img
															src="./assets/images/avatar.png"
															alt="images"
														/>
													</div>
													<div className="comment-text">
														<a href="#!">{t("news.comments.comment3.title")}</a>
														<br />
														<a
															className="timedate"
															href="#!"
														>
															<time dateTime="2021-05-26T08:43:43+00:00">
																May 26, 2021 at
																8:43 am
															</time>
														</a>
														<p>
														{t("news.comments.comment3.title")}
														</p>
														<div className="reply-btn">
															<a href="#!">
															{t("news.comments.reply")}
															</a>
														</div>
													</div>
												</div>
												<h3 className="comment-title">
												{t("news.comments.leaveReply")}
												</h3>
												<p>
												{t("news.comments.note")}
												</p>

												<div className="comment-note">
													<div id="form-messages"></div>
													<form
														id="contact-form"
														method="post"
														action="mailer.php"
													>
														<fieldset>
															<div className="row">
																<div className="col-lg-6 mb-35 col-md-6 col-sm-6">
																	<input
																		className="from-control"
																		type="text"
																		id="name"
																		name="name"
																		placeholder="Name*"
																		required=""
																	/>
																</div>
																<div className="col-lg-6 mb-35 col-md-6 col-sm-6">
																	<input
																		className="from-control"
																		type="text"
																		id="email"
																		name="email"
																		placeholder="E-Mail*"
																		required=""
																	/>
																</div>
																<div className="col-lg-12 mb-30">
																	<textarea
																		className="from-control"
																		id="message"
																		name="message"
																		placeholder="Your message Here"
																		required=""
																	></textarea>
																</div>
															</div>
															<div className="form-group mb-0">
																<div className="post-btn">
																	<input
																		className="submit-post"
																		type="submit"
																		value="Post Comment"
																	/>
																</div>
															</div>
														</fieldset>
													</form>
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
												<a href="#!">
													<img
														src="./assets/images/blog/1.jpg"
														alt=""
													/>
												</a>
											</div>
											<div className="post-desc">
												<a href="#!">
												{t("home.news.news1.title")}
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
												<a href="#!">
													<img
														src="./assets/images/blog/2.jpg"
														alt=""
													/>
												</a>
											</div>
											<div className="post-desc">
												<a href="#!">
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
												<a href="#!">
													<img
														src="./assets/images/blog/3.jpg"
														alt=""
													/>
												</a>
											</div>
											<div className="post-desc">
												<a href="#!">
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
                                        <li><a href="#!">Branding</a></li>
                                        <li><a href="#!">Digital Marketing</a></li>
                                        <li><a href="#!">E-commerce</a></li>
                                        <li><a href="#!">Graphic Design</a></li>
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
