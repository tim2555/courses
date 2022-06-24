var map;

DG.then(function () {
		map = DG.map('map', {
				center: [42.860707, 74.617405],
				zoom: 18
		});
		var myIcon = DG.icon({
			iconUrl: './logo.webp',
			iconRetinaUrl: 'my-icon@2x.png',
			iconSize: [38, 38],

	});
		DG.marker([42.860707, 74.617405], {icon:myIcon,
			label : 'Я подсказка!'}).addTo(map).bindPopup('Вы кликнули по мне!');
});

Inputmask({"mask": "+\\7(999)99-99-99"}).mask(document.querySelector("#tel"));