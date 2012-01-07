// Copyright (c) 2012 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/** 
 * @fileoverview Source samples.
 *
 * @author konigsberg@google.com (Robert Konigsberg)
 */

"use strict";

var Samples = {
  interestingShapes: {
    data: function() {
      var zp = function(x) { if (x < 10) return "0"+x; else return x; };
      var r = "date,parabola,line,another line,sine wave\n";
      for (var i=1; i<=31; i++) {
        r += "201110" + zp(i);
        r += "," + 10*(i*(31-i));
        r += "," + 10*(8*i);
        r += "," + 10*(250 - 8*i);
        r += "," + 10*(125 + 125 * Math.sin(0.3*i));
        r += "\n";
      }
      return r;
    },
    options: {
      colors: [
        "rgb(51,204,204)",
        "rgb(255,100,100)",
        "#00DD55",
        "rgba(50,50,200,0.4)"
      ],
      labelsSeparateLines: true,
      labelsKMB: true,
      legend: 'always',
      width: 640,
      height: 480,
      title: 'Interesting Shapes',
      xlabel: 'Date',
      ylabel: 'Count',
      axisLineColor: 'white',
      drawXGrid: false,
      pointClickCallback: function() { alert("p-click!"); },
    }
  },
  
  sparse: {
   data: [
     [ new Date("2009/12/01"), 10, 10, 10],
     [ new Date("2009/12/02"), 15, 11, 12],
     [ new Date("2009/12/03"), null, null, 12],
     [ new Date("2009/12/04"), 20, 14, null],
     [ new Date("2009/12/05"), 15, null, 17],
     [ new Date("2009/12/06"), 18, null, null],
     [ new Date("2009/12/07"), 12, 14, null]
   ],
   options: {
     labels: ["Date", "Series1", "Series2", "Series3"]
   }
  },
  
  manyPoints: {
    data: function() {
      var numPoints = 1000;
      var numSeries = 100;
  
      var data = [];
      var xmin = 0.0;
      var xmax = 2.0 * Math.PI;
      var adj = .5;
      var delta = (xmax - xmin) / (numPoints - 1);
  
      for (var i = 0; i < numPoints; ++i) {
        var x = xmin + delta * i;
        var elem = [ x ];
        for (var j = 0; j < numSeries; j++) {
          var y = Math.pow(Math.random() - Math.random(), 7);
          elem.push(y);
        }
        data[i] = elem;
      }
      return data;
    },
    options: {
      labelsSeparateLines: true,
      width: 640,
      height: 480,
      title: 'Many Points',
      axisLineColor: 'white',
    }
  }
}
