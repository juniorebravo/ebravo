
/*
 Template Name: Upcube - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Morris init js
 */

!function(e) {
	"use strict";
	var a = function() {
	};
	a.prototype.createLineChart = function(e, a, r, t, o, i) {
		Morris.Line({
			element : e,
			data : a,
			xkey : r,
			ykeys : t,
			labels : o,
			hideHover : "auto",
			gridLineColor : "#eef0f2",
			resize : !0,
			lineColors : i
		})
	}, a.prototype.createLineChart1 = function(e, a, r, t, o, i) {
		Morris.Line({
			element : e,
			data : a,
			xkey : r,
			ykeys : t,
			labels : o,
			gridLineColor : "#3d434a",
			gridTextColor : "#eee",
			hideHover : "auto",
			pointSize : 3,
			resize : !0,
			lineColors : i
		})
	}, a.prototype.createAreaChart = function(e, a, r, t, o, i, l, s) {
		Morris.Area({
			element : e,
			pointSize : 3,
			lineWidth : 2,
			data : t,
			xkey : o,
			ykeys : i,
			labels : l,
			resize : !0,
			hideHover : "auto",
			gridLineColor : "#eef0f2",
			lineColors : s
		})
	}, a.prototype.createBarChart = function(e, a, r, t, o, i) {
		Morris.Bar({
			element : e,
			data : a,
			xkey : r,
			ykeys : t,
			labels : o,
			gridLineColor : "#eef0f2",
			barSizeRatio : .4,
			resize : !0,
			hideHover : "auto",
			barColors : i
		})
	}, a.prototype.createDonutChart = function(e, a, r) {
		Morris.Donut({
			element : e,
			data : a,
			resize : !0,
			colors : r
		})
	}, a.prototype.createDonutChart1 = function(e, a, r) {
		Morris.Donut({
			element : e,
			data : a,
			resize : !0,
			colors : r,
			labelColor : "#fff",
			backgroundColor : "#0097a7"
		})
	}, a.prototype.createStackedChart = function(e, a, r, t, o, i) {
		Morris.Bar({
			element : e,
			data : a,
			xkey : r,
			ykeys : t,
			stacked : !0,
			labels : o,
			hideHover : "auto",
			resize : !0,
			gridLineColor : "#4ac18e",
			gridTextColor : "#eee",
			barColors : i
		})
	}, a.prototype.init = function() {
		var e = [ {
			y : "2009",
			a : 100,
			b : 90
		}, {
			y : "2010",
			a : 75,
			b : 65
		}, {
			y : "2011",
			a : 50,
			b : 40
		}, {
			y : "2012",
			a : 75,
			b : 65
		}, {
			y : "2013",
			a : 50,
			b : 40
		}, {
			y : "2014",
			a : 75,
			b : 65
		}, {
			y : "2015",
			a : 100,
			b : 90
		} ];
		this.createLineChart("morris-line-example", e, "y", [ "a", "b" ], [
				"Series A", "Series B" ], [ "#0f9cf3", "#0097a7" ]);
		var a = [ {
			y : "2009",
			a : 10,
			b : 20
		}, {
			y : "2010",
			a : 75,
			b : 65
		}, {
			y : "2011",
			a : 50,
			b : 40
		}, {
			y : "2012",
			a : 75,
			b : 65
		}, {
			y : "2013",
			a : 50,
			b : 40
		}, {
			y : "2014",
			a : 75,
			b : 65
		}, {
			y : "2015",
			a : 90,
			b : 60
		}, {
			y : "2016",
			a : 90,
			b : 75
		} ];
		this.createAreaChart("morris-area-example", 0, 0, a, "y", [ "a", "b" ],
				[ "Series A", "Series B" ], [ "#f32f53", "#ffbb44" ]);
		var r = [ {
			y : "2009",
			a : 100,
			b : 90
		}, {
			y : "2010",
			a : 75,
			b : 65
		}, {
			y : "2011",
			a : 50,
			b : 40
		}, {
			y : "2012",
			a : 75,
			b : 65
		}, {
			y : "2013",
			a : 50,
			b : 40
		}, {
			y : "2014",
			a : 75,
			b : 65
		}, {
			y : "2015",
			a : 100,
			b : 90
		}, {
			y : "2016",
			a : 90,
			b : 75
		} ];
		this.createBarChart("morris-bar-example", r, "y", [ "a", "b" ], [
				"Series A", "Series B" ], [ "#0097a7", "#ffbb44" ]);
		var t = [ {
			y : "2005",
			a : 45,
			b : 180
		}, {
			y : "2006",
			a : 75,
			b : 65
		}, {
			y : "2007",
			a : 100,
			b : 90
		}, {
			y : "2008",
			a : 75,
			b : 65
		}, {
			y : "2009",
			a : 100,
			b : 90
		}, {
			y : "2010",
			a : 75,
			b : 65
		}, {
			y : "2011",
			a : 50,
			b : 40
		}, {
			y : "2012",
			a : 75,
			b : 65
		}, {
			y : "2013",
			a : 50,
			b : 40
		}, {
			y : "2014",
			a : 75,
			b : 65
		}, {
			y : "2015",
			a : 100,
			b : 90
		}, {
			y : "2016",
			a : 80,
			b : 65
		} ];
		this.createStackedChart("morris-bar-stacked", t, "y", [ "a", "b" ], [
				"Series A", "Series B" ], [ "#0e74b3", "#f9f9f9" ]);
		var o = [ {
			label : "Download Sales",
			value : 12
		}, {
			label : "In-Store Sales",
			value : 30
		}, {
			label : "Mail-Order Sales",
			value : 20
		} ];
		this.createDonutChart("morris-donut-example", o, [ "#ffbb44",
				"#0097a7", "#67a8e4" ]);
		var i = [ {
			label : "Download Sales",
			value : 12
		}, {
			label : "In-Store Sales",
			value : 30
		}, {
			label : "Mail-Order Sales",
			value : 20
		} ];
		this.createDonutChart1("morris-donut-example-dark", i, [ "#f0f1f4",
				"#f0f1f4", "#f0f1f4" ]);
		var l = [ {
			y : "2009",
			a : 20,
			b : 5
		}, {
			y : "2010",
			a : 45,
			b : 35
		}, {
			y : "2011",
			a : 50,
			b : 40
		}, {
			y : "2012",
			a : 75,
			b : 65
		}, {
			y : "2013",
			a : 50,
			b : 40
		}, {
			y : "2014",
			a : 75,
			b : 65
		}, {
			y : "2015",
			a : 100,
			b : 90
		} ];
		this.createLineChart1("morris-line-example-dark", l, "y", [ "a", "b" ],
				[ "Series A", "Series B" ], [ "#3292e0", "#dcdcdc" ])
	}, e.MorrisCharts = new a, e.MorrisCharts.Constructor = a
}(window.jQuery), function(e) {
	"use strict";
	e.MorrisCharts.init()
}(window.jQuery);