// Copyright (c) 2024, jafar sidik and contributors
// For license information, please see license.txt

frappe.ui.form.on("Monitoring", {
	refresh(frm) {
		let map = frm.get_field('map').map
		map.setView([-0.166,114.038]);
		map.setZoom(5);
		
		let marker = L.marker([-1.5024,127.4581],{
			alt: 'Kyiv'
		})
		.addTo(map) // "Kyiv" is the accessible name of this marker
		.bindPopup('Lokasi K3');
 	},
});
