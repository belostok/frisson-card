const QRItem = ( { qr, store, link } ) => {

	return (
		<div className="f-qr__item" onClick={() => window.open(link, "_blank")}>
			<div className="f-qr__code-container img-contain">
				<img src={ qr } alt="" className="f-qr__code"/>
			</div>
			<div className="f-qr__store-container img-contain">
				<img src={ store } alt="" className="f-qr__store"/>
			</div>
		</div>
	);
}

export default QRItem
