import React, { Component } from "react"
import { Link } from "react-router-dom"

class Links extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="flex-1">
					<Link to="/" className="">MERN</Link>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to="/movies/list" className="nav-link">List Movies</Link>
						</li>
						<li>
							<Link to="/movies/create" className="nav-link">Create Movie</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}

export { Links }
