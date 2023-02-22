import React from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function SignIn() {
	const signIn = useSignIn();
	const navigator = useNavigate();

	// login handler
	const login_form_handler = async (e) => {
		e.preventDefault();

		const target = e.target;
		const email = target.email.value;
		const password = target.password.value;

		const data = {
			email,
			password,
		};

		fetch(`${process.env.REACT_APP_BASE_URL}/admin/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.status === 200 && response.role === 'admin') {
					if (
						signIn({
							token: response.token, //Just a random token
							tokenType: 'Bearer', // Token type set as Bearer
							authState: { name: response.username }, // Dummy auth user state
							expiresIn: 120, // Token Expriration time, in minutes
						})
					) {
						// If Login Successfull, then Redirect the user to secure route
						navigator('/admin-dashboard');
					} else {
						// Else, there must be some error. So, throw an error
						alert('Error Occoured. Try Again');
					}
					swal('Welcome!', response.message || '', 'success');
				} else {
					swal('Not found!', response.message || '', 'error');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="sign-inup" id="body">
			<div className="container d-flex align-items-center justify-content-center form-height-login">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10">
						<div className="card">
							<div className="card-header bg-primary">
								<div className="ec-brand">
									<a href="index.html" title="Ekka">
										<img
											className="ec-brand-icon"
											src="assets/img/logo/logo-login.png"
											alt=""
										/>
									</a>
								</div>
							</div>
							<div className="card-body p-5">
								<h4 className="text-dark mb-5">Sign In</h4>

								<form onSubmit={login_form_handler}>
									<div className="row">
										<div className="form-group col-md-12 mb-4">
											<input
												type="email"
												className="form-control"
												id="email"
												name="email"
												required
												placeholder="Username"
											/>
										</div>

										<div className="form-group col-md-12 ">
											<input
												type="password"
												className="form-control"
												required
												id="password"
												placeholder="Password"
											/>
										</div>

										<div className="col-md-12">
											<div className="d-flex my-2 justify-content-between">
												<div className="d-inline-block mr-3">
													<div className="control control-checkbox">
														Remember me
														<input type="checkbox" />
														<div className="control-indicator"></div>
													</div>
												</div>

												<p>
													<a className="text-blue" href="#">
														Forgot Password?
													</a>
												</p>
											</div>

											<button
												type="submit"
												className="btn btn-primary btn-block mb-4"
											>
												Sign In
											</button>

											<p className="sign-upp">
												Don't have an account yet ?
												<a className="text-blue" href="sign-up.html">
													Sign Up
												</a>
											</p>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
