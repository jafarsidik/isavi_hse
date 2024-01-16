frappe.pages['monitoring-pages'].on_page_load = function(wrapper) {
	//new MonitoringPages(wrapper);
	let page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Monitoring',
		card_layout: true,
		single_column: true
	});
	let $btn = page.set_primary_action('Refresh',()=>frappe.msgprint('R'),)
	$(frappe.render_template("map", {})).appendTo(page.main);
	wrapper.monitoring_pages = new MonitoringPages(wrapper);
}

class MonitoringPages {
 	constructor(wrapper) {
 		this.wrapper = wrapper;
 		this.page = wrapper.page;
// 		//this.body = $(this.wrapper).find(".perm-engine");
 		this.make();
 		//this.get_data();
// 		//this.refresh();
// 		//this.add_check_events();
	}
 	make() {
 		let me = this;
 		let body =`<h1>Test</h1>`
		console.log(me)
		 this.table = $(
		 	"<div class='table-responsive'>\
		 	<table class='table table-borderless'>\
		 		<thead><tr>a</tr></thead>\
		 		<tbody></tbody>\
		 	</table>\
		 </div>"
		 ).appendTo(this.body);
		//  let map = L.map('map')
		//  map.setView([-0.166,114.038]);
		//  map.setZoom(5);
		 
		//  let marker = L.marker([-1.5024,127.4581],{
		// 	 alt: 'Kyiv'
		//  })
		//  .addTo(map) // "Kyiv" is the accessible name of this marker
		//  .bindPopup('Lokasi K3');
 	}
	 get_data(btn) {
		var me = this;
		// if (!this.company) {
		// 	frappe.throw(__("Please Select a Company."));
		// }

		const method_map = {
			"sales_funnel": "erpnext.selling.page.sales_funnel.sales_funnel.get_funnel_data",
			"opp_by_lead_source": "erpnext.selling.page.sales_funnel.sales_funnel.get_opp_by_lead_source",
			"sales_pipeline": "erpnext.selling.page.sales_funnel.sales_funnel.get_pipeline_data"
		};
		frappe.call({
			method: method_map[this.options.chart],
			args: {
				from_date: this.options.from_date,
				to_date: this.options.to_date,
				company: this.company
			},
			btn: btn,
			callback: function(r) {
				if(!r.exc) {
					me.options.data = r.message;
					if (me.options.data=='empty') {
						const $parent = me.elements.funnel_wrapper;
						$parent.html(__('No data for this period'));
					} else {
						me.render();
					}
				}
			}
		});
	}
}