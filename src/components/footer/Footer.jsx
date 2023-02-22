import React from 'react';

function Footer() {
	return (
		<>
			<footer className="footer mt-auto">
				<div className="copyright bg-white">
					<p>
						Copyright &copy; <span id="ec-year"></span>
						<a
							className="text-primary"
							rel="noreferrer"
							href="https://themeforest.net/user/ashishmaraviya"
							target="_blank"
						>
							Ekka Admin Dashboard
						</a>
						. All Rights Reserved.
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
