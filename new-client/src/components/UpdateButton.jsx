import React from "react"

const UpdateButton = (props) => {
	const updateItem = () => {
		window.location.href = `/movies/update/${props.id}`
	}

	return (
		<span>
			<button
				className="btn btn-outline btn-xs btn-secondary"
				onClick={() => updateItem()}
			>
				Update
			</button>
		</span>
	)
}

export { UpdateButton }
