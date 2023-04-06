import React, { useEffect, useState } from "react"
import api from "../api"
import styled from "styled-components"
import { Table } from "../components"

const Wrapper = styled.div`
	padding: 0 40px 40px 40px;
`

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
		<Wrapper>
			{showTable && (
				<Table items={movies} />
			)}
		</Wrapper>
	)
}

export default MoviesList
