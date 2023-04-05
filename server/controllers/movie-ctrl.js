const Movie = require("../models/movie-model")

createMovie = (req, res) => {	
	try {
		const body = req.body

		if (!body) {
			return res.status(400).json({
				success: false,
				error: "You must provide a movie",
			})
		}

		const movie = new Movie(body)

		if (!movie) {
			return res.status(400).json({
				success: false,
				error: err
			})
		}

		movie
			.save()
			.then(() => {
				return  res.status(200).json({
					success: true,
					id: movie._id,
					message: "Movie created!",
				})
			})
			.catch(e => {
				return res.status(400).json({
					error,
					message: "Movie not created",
				})
			})
	} catch (error) {
		return res.status(400).json({
			success: false,
			error,
		})
	}
}

updateMovie = async (req, res) => {
	try {
		const body = req.body

		if (!body) {
			return res.status(400).json({
				success: false,
				error: "You must provide something to update",
			})
		}

		const movie = await Movie.findById({ _id: req.params.id })
		console.log(movie)
		movie.name = body.name
		movie.time = body.time
		movie.rating = body.rating
		movie
			.save()
			.then(() => {
				return  res.status(200).json({
					success: true,
					id: movie._id,
					message: "Movie updated!",
				})
			})
			.catch(error => {
				return res.status(400).json({
					error,
					message: "Movie not updated",
				})
			})
	} catch (error) {
		return res.status(400).json({
			success: false,
			error,
		})
	}
}

deleteMovie = async (req, res) => {
	try {
		const movie = await Movie.findByIdAndDelete({ _id: req.params.id })

		if (!movie) {
			return res.status(404).json({
				success: false,
				error: "Movie not found",
			})
		}

		return res.status(200).json({
			success: true,
			data: movie,
		})
	} catch (error) {
		return res.status(400).json({
			success: false,
			error,
		})
	}
}

getMovieById = async (req, res) => {
	try {
		const movie = await Movie.findOne({ _id: req.params.id })

		if (!movie) {
			return res.status(404).json({
				success: false,
				error: "Movie not found",
			})
		}

		return res.status(200).json({
			success: true,
			data: movie,
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

getMovies = async (req, res) => {
	try {
		const data = await Movie.find()
		if (!data.length) {
			return res.status(404).json({
				success: false,
				message: "No movies to return"
			})
		}
		return res.status(200).json({
			success: true,
			data,
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

module.exports = {
	createMovie,
	updateMovie,
	deleteMovie,
	getMovies,
	getMovieById,
}
