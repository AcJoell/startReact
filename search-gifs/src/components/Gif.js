import './Gif.css'

const Gif = ({title, id, url}) => {
    return (
			<div className='boxGif'>
				<section className='sectionGif'>
					<h4>{title}</h4>
					<img src={url} alt={id} />
				</section>
			</div>
    )
}

export default Gif;