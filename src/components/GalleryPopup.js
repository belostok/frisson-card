import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

const GalleryPopup = ( { activeSlideIndex, onClose, images } ) => {
	const [ swiperInstance, setSwiperInstance ] = useState( null );
	const [ activeIndex, setActiveIndex ]       = useState( activeSlideIndex );

	const handleThumbnailClick = ( index ) => {
		if ( swiperInstance ) {
			swiperInstance.slideTo( index );
		}
	};

	useEffect( () => {
		if ( swiperInstance ) {
			swiperInstance.slideTo( activeSlideIndex );
		}
	}, [ swiperInstance, activeSlideIndex ] );

	useEffect( () => {
		if ( swiperInstance ) {
			swiperInstance.on( 'slideChange', () => {
				setActiveIndex( swiperInstance.realIndex );
			} );
		}
	}, [ swiperInstance ] );

	return (
		<div className="f-gallery-popup">
			<div className="f-gallery-popup__container">
				<div className="f-gallery-popup__close-container flex jcfe">
					<button
						className="f-gallery-popup__close flex jcc aic"
						onClick={ onClose }
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd"
								d="M3.75435 3.75386C3.98216 3.52606 4.3515 3.52606 4.57931 3.75386L10.0002 9.17472L15.421 3.75386C15.6488 3.52606 16.0182 3.52606 16.246 3.75386C16.4738 3.98167 16.4738 4.35101 16.246 4.57882L10.8251 9.99967L16.246 15.4205C16.4738 15.6483 16.4738 16.0177 16.246 16.2455C16.0182 16.4733 15.6488 16.4733 15.421 16.2455L10.0002 10.8246L4.57931 16.2455C4.3515 16.4733 3.98216 16.4733 3.75435 16.2455C3.52654 16.0177 3.52654 15.6483 3.75435 15.4205L9.1752 9.99967L3.75435 4.57882C3.52654 4.35101 3.52654 3.98167 3.75435 3.75386Z"
								fill="#20467B"/>
						</svg>
					</button>
				</div>

				<div className="f-gallery-popup__gallery-container">
					<Swiper
						spaceBetween={ 20 }
						slidesPerView={ 1 }
						autoHeight
						loop
						onSwiper={ setSwiperInstance }
						initialSlide={ activeSlideIndex }
					>
						{ images.map( ( imageUrl, index ) => (
							<SwiperSlide key={ `g${ index }` }>
								<div className="f-gallery-popup__item">
									<img className="f-gallery-popup__image" src={ imageUrl } alt=""/>
								</div>
							</SwiperSlide>
						) ) }
					</Swiper>
				</div>

				<div className="f-gallery-popup__thumbs-container">
					{ images.map( ( imageUrl, index ) => (
						<div
							key={ `p${ index }` }
							className={ cn( 'f-gallery-popup__thumbs-item', 'img-cover', activeIndex === index ? 'f-gallery-popup__thumbs-item_active' : '' ) }
							onClick={ () => handleThumbnailClick( index ) }
							style={ { cursor: 'pointer' } }
						>
							<img className="f-gallery-popup__preview-image" src={ imageUrl } alt=""/>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}

export default GalleryPopup;
