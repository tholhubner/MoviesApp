import React, { Component } from "react"

import logo from "../assets/vite.svg"

class Logo extends Component {
	render() {
		return (
			<img src={logo} width="50" height="50" alt="tylerholhubner.com" className="px-2" />
		)
	}
}

export { Logo }
