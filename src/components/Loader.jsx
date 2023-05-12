import React, { useEffect } from "react";
import $ from "jquery";

const Loader = () => {
    useEffect(() => {
		$("#pre-load").delay(1000).fadeOut(500);
	}, []);
    
	return (
		<div id="pre-load">
			<div id="loader" className="loader">
				<div className="loader-container">
					<div className="loader-icon">
						<img
							src="./assets/images/duro_sign_light.svg"
							alt="DURŌ, Niche perfumery"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
