import React, { useEffect, useState } from "react"
import api from "../api"
import { Table } from "../components"

const MoviesList = () => {
	const [movies, setMovies] = useState([])
	const [showTable, setShowTable] = useState(false)

	useEffect(() => {
		async function fetchMovieList() {
			const request = await api.getAllMovies()
			if (request.data.data.length > 0) {
				console.log("Movies Got :: ", request.data.data)
				setMovies(request.data.data)
				setShowTable(true)
			}
		}
		fetchMovieList()
	}, [])

	return (
		<>
			{showTable && (
				<Table items={movies} />
			)}
		</>
	)
}

export default MoviesList
