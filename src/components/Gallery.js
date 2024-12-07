import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Gallery = ( { onSlideClick, images = [] } ) => {


	return (
		<div className="f-container__side f-container__side_gallery">

			<div className="f-gallery relative">
				<Swiper
					modules={ [ Navigation, Pagination ] }
					spaceBetween={ 20 }
					slidesPerView={ 1 }
					loop
					navigation={ {
						nextEl: '.f-gallery__nav_next',
						prevEl: '.f-gallery__nav_prev',
					} }
					pagination={ {
						clickable: true,
						el: '.f-gallery__pagination',
					} }
				>
					{ images.map( ( v, index ) => (
						<SwiperSlide key={ `g${ index }` }>
							<div
								className="f-gallery__item img-cover"
								onClick={ () => onSlideClick( index ) }
							>
								<img src={ v } alt=""/>
							</div>
						</SwiperSlide>
					) ) }
				</Swiper>

				<button className="f-gallery__nav f-gallery__nav_prev absolute flex aic jcc f-hover">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd"
							d="M14.4949 5.50483C14.7683 5.7782 14.7683 6.22141 14.4949 6.49478L9.20205 11.7877C9.11688 11.8728 9.0508 11.939 8.99563 11.997C8.99475 11.9979 8.99386 11.9989 8.99298 11.9998C8.99386 12.0007 8.99475 12.0017 8.99563 12.0026C9.0508 12.0606 9.11688 12.1268 9.20205 12.2119L14.4949 17.5048C14.7683 17.7782 14.7683 18.2214 14.4949 18.4948C14.2216 18.7681 13.7784 18.7681 13.505 18.4948L8.21211 13.2019C8.20431 13.1941 8.19648 13.1863 8.18862 13.1784C8.04266 13.0326 7.88803 12.878 7.77556 12.7306C7.64472 12.5591 7.50708 12.3179 7.50708 11.9998C7.50708 11.6817 7.64472 11.4405 7.77556 11.269C7.88803 11.1216 8.04266 10.9671 8.18862 10.8212C8.19648 10.8133 8.20431 10.8055 8.21211 10.7977L13.505 5.50483C13.7784 5.23146 14.2216 5.23146 14.4949 5.50483Z"
							fill="#20467B"/>
					</svg>

				</button>
				<button className="f-gallery__nav f-gallery__nav_next absolute flex aic jcc f-hover">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd"
							d="M9.50212 5.50483C9.22876 5.7782 9.22876 6.22141 9.50212 6.49478L14.795 11.7877C14.8802 11.8728 14.9463 11.939 15.0014 11.997C15.0023 11.9979 15.0032 11.9989 15.0041 11.9998C15.0032 12.0007 15.0023 12.0017 15.0014 12.0026C14.9463 12.0606 14.8802 12.1268 14.795 12.2119L9.50212 17.5048C9.22876 17.7782 9.22876 18.2214 9.50212 18.4948C9.77549 18.7681 10.2187 18.7681 10.4921 18.4948L15.785 13.2019C15.7928 13.1941 15.8006 13.1863 15.8085 13.1784C15.9544 13.0326 16.109 12.878 16.2215 12.7306C16.3523 12.5591 16.49 12.3179 16.49 11.9998C16.49 11.6817 16.3523 11.4405 16.2215 11.269C16.109 11.1216 15.9544 10.9671 15.8085 10.8212C15.8006 10.8133 15.7928 10.8055 15.785 10.7977L10.4921 5.50483C10.2187 5.23146 9.77549 5.23146 9.50212 5.50483Z"
							fill="#20467B"/>
					</svg>
				</button>

				<div className="f-gallery__pagination absolute"></div>
			</div>

		</div>
	);
}

export default Gallery;
