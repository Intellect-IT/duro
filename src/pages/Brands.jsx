import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function Brands({ setHeader }) {
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
			{/* // <!-- Main content Start --> */}
			<div className="main-content">
				{/* <!-- Breadcrumbs Start --> */}
				<div className="rs-breadcrumbs img2">
					<div className="container">
						<div className="breadcrumbs-inner">
							<h1 className="page-title">
							{t("home.brands.title")}
								<span className="watermark">{t("home.brands.title")}</span>
							</h1>
						</div>
					</div>
				</div>
				{/* <!-- Breadcrumbs End --> */}

				{/* <!-- Brands Section Start --> */}
				<div
					id="rs-our-sponsor"
					className="rs-our-sponsor blue-bg style1 home3-sponsor-style height-ctrl pt-130 md-pb-70 md-pt-70"
				>
					<div className="container">
						<div className="sec-title text-center mb-60">
							<h2 className="title title2 title3 text-middle">
							{t("home.brands.title")}
							</h2>
						</div>
						<div className="row">
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div className="logo-img">
											<a
												title="Marc-Antoine Barrois"
												href="#"
											>
												<img
													src="./assets/images/event/brands/001_marc-antoine_barrois.png"
													alt="Marc-Antoine Barrois"
													title="Marc-Antoine Barrois"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div title="Jovoy" className="logo-img">
											<a href="#">
												<img
													src="./assets/images/event/brands/002_jovoy.png"
													alt="Jovoy"
													title="Jovoy"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Jeroboam"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/003_jeroboam.png"
													alt="Jeroboam"
													title="Jeroboam"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div title="Morph" className="logo-img">
											<a href="#">
												<img
													src="./assets/images/event/brands/004_morph.png"
													alt="Morph"
													title="Morph"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 md-mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div title="MDCI" className="logo-img">
											<a href="#">
												<img
													src="./assets/images/event/brands/005_mdci.png"
													alt="MDCI"
													title="MDCI"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 md-mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Puredistance"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/006_puredistance.png"
													alt="Puredistance"
													title="Puredistance"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div title="HDP" className="logo-img">
											<a href="#">
												<img
													src="./assets/images/event/brands/007_hdp.png"
													title="HDP"
													alt="HDP"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div title="Calaj" className="logo-img">
											<a href="#">
												<img
													src="./assets/images/event/brands/008_calaj.png"
													title="Calaj"
													alt="Calaj"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Indult"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/009_indult.png"
													title="Indult"
													alt="Indult"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Thameen"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/010_thameen.png"
													alt="Thameen"
													title="Thameen"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Theodoros Kalotinis"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/011_theodoros.png"
													title="Theodoros Kalotinis"
													alt="Theodoros Kalotinis"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Fragrance du Bois"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/012_fdb.png"
													title="Fragrance du Bois"
													alt="Fragrance du Bois"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div className="Ormonde Jayne">
											<a href="#">
												<img
													src="./assets/images/event/brands/013_ormonde.png"
													title="Ormonde Jayne"
													alt="Ormonde Jayne"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Paradis des Sens"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/014_paradis.png"
													title="Paradis des Sens"
													alt="Paradis des Sens"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Wesker"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/015_wesker.png"
													title="Wesker"
													alt="Wesker"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Anima Mundi"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/016_anima_mundi.png"
													title="Anima Mundi"
													alt="Anima Mundi"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Electimuss"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/017_electimuss.png"
													title="Electimuss"
													alt="Electimuss"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Acque di Italia"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/018_aque_di_italia.png"
													title="Acque di Italia"
													alt="Acque di Italia"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Portus Cale"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/019_portus_cale.png"
													title="Portus Cale"
													alt="Portus Cale"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Veronique Gabai"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/020_veronique_gabai.png"
													title="Veronique Gabai"
													alt="Veronique Gabai"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Onyrico"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/021_onyrico.png"
													title="Onyrico"
													alt="Onyrico"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Affinessence"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/022_affinessence.png"
													title="Affinessence"
													alt="Affinessence"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Castelbel"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/023_castelbel.png"
													title="Castelbel"
													alt="Castelbel"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6 mb-20">
								<div className="logo-item">
									<div className="grid-figure">
										<div
											title="Liquides Imaginaries"
											className="logo-img"
										>
											<a href="#">
												<img
													src="./assets/images/event/brands/024_liquides_imaginaries.png"
													title="Liquides Imaginaries"
													alt="Liquides Imaginaries"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Brands Section End -->  */}

				{/* <!-- Newsletter section start --> */}
				<div className="rs-newsletter blue-bg style1 pt-90 md-pt-60 mb--110">
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
			{/* // <!-- Main content End --> */}
		</>
	);
}
