import React, { useState } from "react"

const MoviesInsert = () => {
	const [rating, setRating] = useState(0)
	return (
		<div className="form-control w-1/2">
			<label>Movie Name</label>
			<input type="text" className="input input-bordered mb-5" />
			<label>Rating</label>
			<input
				type="range"
				min="0"
				max="10"
				step="0.1"
				value={rating}
				className="range range-lg"
				onChange={(event) => setRating(event.target.value)}
			/>
			<div className="w-full flex justify-between text-xs px-2">
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
			</div>
		</div>
	)
}

export default MoviesInsert
