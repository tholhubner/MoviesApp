import React from "react"
import api from "../api"

const DeleteButton = (props) => {
	const deleteItem = () => {
		console.log(props.id)
		if (window.confirm("Delete this item permanently?")) {
			api.deleteMovieById(props.id)
			window.location.reload()
		}
	}

	return (
		<span>
			<button
				className="btn btn-outline btn-xs btn-error"
				onClick={() => deleteItem()}
			>
				Delete
			</button>
		</span>
	)
}

export { DeleteButton }
