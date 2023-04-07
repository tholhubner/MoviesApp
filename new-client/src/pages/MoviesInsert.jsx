import React, { useState } from "react"
import api from "../api"

const MoviesInsert = () => {
	const [movieName, setMovieName] = useState("")
	const [movieRating, setRating] = useState(0)
	const [movieTimes, setMovieTimes] = useState("")
	const [loading, setLoading] = useState(false)

	const onSubmitHandler = async () => {
		setLoading(true)
		console.log(movieName, movieRating, movieTimes)
		if (movieName, movieRating, movieTimes) {
			let timesArray = []
			movieTimes.split(",").forEach(item => timesArray.push(String(item).trim()))
			const payload = { name: movieName, rating: movieRating, time: timesArray }
			console.log("Ready, ", payload)
			await api.insertMovie(payload)
				.then(res => {
					window.alert("Movie inserted successfully")
					setMovieName("")
					setRating(0)
					setMovieTimes("")
					setLoading(false)
				})
		} else {
			setLoading(false)
		}
	}

	return (
		<div className="form-control w-1/2">
			<label>Movie Name</label>
			<input
				type="text" 
				className="input input-bordered mb-5"
				value={movieName}
				onChange={(event) => setMovieName(event.target.value)}
			/>
			<label>Rating</label>
			<input
				type="range"
				min="0"
				max="10"
				step="0.1"
				value={movieRating}
				className="range range-lg"
				onChange={(event) => setRating(event.target.value)}
			/>
			<div className="w-full flex justify-between text-xs px-2 mb-5">
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
			<label>Movie Times</label>
			<input
				type="text"
				className="input input-bordered mb-5"
				value={movieTimes}
				onChange={(event) => setMovieTimes(event.target.value)}
			/>
			<div className="btn-group justify-end">
				<button className={loading ? "btn btn-primary loading" : "btn btn-primary"} onClick={() => onSubmitHandler()}>Submit</button>
				<button className="btn btn-error" onClick={() => window.location.href = "/movies/list"}>Cancel</button>
			</div>
		</div>
	)
}

export default MoviesInsert
