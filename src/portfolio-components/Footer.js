import React, { useState } from "react";

import "../portfolio-css/footer.scss";

const url = process.env.REACT_APP_CONTACTME;

const Footer = () => {
	const [blastOff, setBlastOff] = useState("");
	const [alert, setAlert] = useState("");
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [message, setMessage] = useState("");

	const handleClick = () => {
		if (blastOff) return;
		if (!name) {
			setAlert("Enter a name");
			return;
		} else if (!contact) {
			setAlert("Enter an email address");
			return;
		}
		setBlastOff("blast-off");

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, contact, text: message }),
		})
			.then((response) => response.json())
			.then((sent) => {
				if (sent) setAlert("Sent");
				else setAlert("Invalid Email Address");
				setTimeout(() => {
					setAlert("");
				}, 5000);
			});

		setTimeout(() => {
			setBlastOff("");
			setName("");
			setContact("");
			setMessage("");
		}, 1000);
	};

	const handleInput = (event) => {
		const { name, value } = event.target;
		if (value === " ") return;
		setAlert("");
		if (name === "name") setName(value);
		else if (name === "contact") setContact(value);
		else if (name === "message") setMessage(value);
	};

	return (
		<footer className="footer" id="contact-me">
			<div className="triangle"></div>
			<div className="contact-info">
				<h1>Contact Me</h1>
				<p>Have any questions or want to work together?</p>
				<input
					type="text"
					placeholder="Name"
					className={blastOff}
					name="name"
					value={name}
					onChange={handleInput}
				/>
				<input
					type="text"
					placeholder="Email Address"
					name="contact"
					className={blastOff}
					value={contact}
					onChange={handleInput}
				/>
				<textarea
					placeholder="Leave a message (optional)"
					resize="none"
					name="message"
					className={blastOff}
					value={message}
					onChange={handleInput}
				/>
				{alert && (
					<p
						className="alert"
						style={
							alert === "Sent"
								? { color: "#7FFF00" }
								: { color: "#DC143C" }
						}
					>
						{alert}
					</p>
				)}
				<button type="button" onClick={handleClick}>
					Send
				</button>
			</div>
			<div className="copyright">
				<p>
					Handcrafted with{" "}
					<span style={{ color: "red", fontSize: "1.2em" }}>❤</span>{" "}
					by Yash &copy; 2021
				</p>
			</div>
		</footer>
	);
};

export default Footer;