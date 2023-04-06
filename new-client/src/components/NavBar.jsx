import React, { Component } from "react"

import { Logo } from "./Logo"
import { Links } from "./Links"

class NavBar extends Component {
	render() {
		return (
			<div className="navbar bg-zinc-700 border border-zinc-700 rounded-lg mt-2 mb-5">
				<div class="flex-1">
					<Logo />
					<Links />
				</div>
			</div>
		)
	}
}

export { NavBar }
