(function(document, window, $) {
  'use strict';

  var Site = window.Site;

  $(document).ready(function($) {
    Site.run();
  });


  // Example Morris Line
  // -------------------
  (function() {
    Morris.Line({
      element: 'exampleMorrisLine',
      data: [{
        "y": "2015 Q3",
        "a": 36      
      }, {
        "y": "2015 Q2",
        "a": 12
      
      }, {
        "y": "2015 Q1",
        "a": 63
      }, {
        "y": "2014 Q4",
        "a": 11
      }, {
        "y": "2013 Q4",
        "a": 32
      }, {
        "y": "2012 Q4",
        "a": 11
      }, {
        "y": "2011 Q4",
        "a": 12
      }],
      xkey: 'y',
      ykeys: ['a'],
      labels: ['CPU use'],
      resize: true,
	  ymin:0,
	  ymax:100,
 
      smooth: true,
      gridTextColor: '#474e54',
      gridLineColor: '#eef0f2',
     
   
      gridtextSize: 1,
      lineWidth: 1,
      lineColors: [$.colors("green", 600)]
    });
  })();
  
  
    (function() {
    Morris.Line({
      element: 'exampleMorrisLine1',
      data: [{
        "y": "01 AM",
        "a": 36      
      }, {
        "y": "02 AM",
        "a": 12
      
      }, {
        "y": "03 AM",
        "a": 63
      }, {
        "y": "04 AM",
        "a": 11
      }, {
        "y": "05 AM",
        "a": 32
      }, {
        "y": "06 AM",
        "a": 11
      }, {
        "y": "07AM",
        "a": 12
      }],
      xkey: 'y',
      ykeys: ['a'],
      labels: ['CPU use'],
      resize: true,
	  ymin:0,
	  ymax:100,
 
      smooth: true,
      gridTextColor: '#474e54',
      gridLineColor: '#eef0f2',
     
   
      gridtextSize: 1,
      lineWidth: 1,
      lineColors: [$.colors("green", 600)]
    });
  })();
  
  (function() {
    Morris.Line({
      element: 'exampleMorrisLine2',
      data: [{
        "y": "2015 Q3",
        "a": 36,
        "b": 96
      }, {
        "y": "2015 Q2",
        "a": 12,
        "b": 65
      }, {
        "y": "2015 Q1",
        "a": 23,
        "b": 63
      }, {
        "y": "2014 Q4",
        "a": 11,
        "b": 25
      }, {
        "y": "2013 Q4",
        "a": 32,
        "b": 66
      }, {
        "y": "2012 Q4",
        "a": 11,
        "b": 68
      }, {
        "y": "2011 Q4",
        "a": 12,
        "b": 88
      }],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['read', 'write'],
      resize: true,
      pointSize: 3,
      smooth: true,
      gridTextColor: '#474e54',
      gridLineColor: '#eef0f2',
      goalLineColors: '#e3e6ea',
      gridTextFamily: $.configs.get('site', 'fontFamily'),
      gridTextWeight: '300',
 
      gridtextSize: 1,
      lineWidth: 1,
      lineColors: [$.colors("green", 600), $.colors("primary", 600)]
    });
  })();
  
  (function() {
    Morris.Line({
      element: 'exampleMorrisLine3',
      data: [{
        "y": "2015 Q3",
        "a": 36,
        "b": 96
      }, {
        "y": "2015 Q2",
        "a": 12,
        "b": 65
      }, {
        "y": "2015 Q1",
        "a": 23,
        "b": 63
      }, {
        "y": "2014 Q4",
        "a": 11,
        "b": 25
      }, {
        "y": "2013 Q4",
        "a": 32,
        "b": 66
      }, {
        "y": "2012 Q4",
        "a": 11,
        "b": 68
      }, {
        "y": "2011 Q4",
        "a": 12,
        "b": 88
      }],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['read', 'write'],
      resize: true,
      pointSize: 3,
      smooth: true,
      gridTextColor: '#474e54',
      gridLineColor: '#eef0f2',
      goalLineColors: '#e3e6ea',
      gridTextFamily: $.configs.get('site', 'fontFamily'),
      gridTextWeight: '300',
 
      gridtextSize: 1,
      lineWidth: 1,
      lineColors: [$.colors("green", 600), $.colors("primary", 600)]
    });
  })();
})(document, window, jQuery);