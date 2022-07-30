const API_KEY = '0LstB7RQT5O32IvVwfGpvZ0kW2Eius1r'

const getGifs = ({keyword = 'Avengers'} = {}) => {
	

	const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`
	
	return (
		fetch(URL)
		.then(res => res.json())
		.then(response => {
			const {data = []} = response;
			const gifs = data.map(unGif => {
				const {images, title, id} = unGif;
				const {url} = images.downsized_medium;
				return {title, id, url}
			})
			return gifs
		})
		
		)
	}
	
export default getGifs;