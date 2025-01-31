const TitleRating = ( { rating, count } ) => {

	return (
		<div className="f-title__rating flex aic">
			<div className="f-title__rating-icon-container img-contain">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.57666 1.9976C8.31974 1.55484 7.68034 1.55483 7.42342 1.9976L5.61405 5.11581C5.48713 5.33453 5.26777 5.48379 5.01772 5.52156L1.62685 6.03371C1.05733 6.11973 0.857554 6.8388 1.30109 7.20627L3.82715 9.29908C4.06098 9.49281 4.17093 9.79838 4.11413 10.0967L3.45335 13.5668C3.34889 14.1153 3.92475 14.5415 4.41885 14.2814L7.61179 12.6002C7.85481 12.4722 8.14527 12.4722 8.38829 12.6002L11.5812 14.2814C12.0753 14.5415 12.6512 14.1153 12.5467 13.5668L11.886 10.0967C11.8292 9.79838 11.9391 9.49281 12.1729 9.29908L14.699 7.20627C15.1425 6.8388 14.9428 6.11973 14.3732 6.03371L10.9824 5.52156C10.7323 5.48379 10.5129 5.33453 10.386 5.11581L8.57666 1.9976Z"
						fill="#FC3B2D"/>
				</svg>
			</div>
			<div className="f-title__rating-value-container flex aic">
				<span className="f-title__rating-value">{ rating }</span>
			</div>
			{ count &&
				<div className="f-title__rating-count-container flex aic">
					<span className="f-title__rating-count">({ count })</span>
				</div>
			}
		</div>
	);
}

export default TitleRating;
