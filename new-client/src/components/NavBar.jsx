import React, { Component } from "react"

import { Logo } from "./Logo"
import { Links } from "./Links"

class NavBar extends Component {
	render() {
		return (
			<div className="navbar bg-base-100">
				<div class="flex-1">
					<Logo />
					<Links />
				</div>
			</div>
		)
	}
}

export { NavBar }
