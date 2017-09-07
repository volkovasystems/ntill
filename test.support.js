"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "ntill",
              			"path": "ntill/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/ntill.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"ntill": "ntill"
              		}
              	@end-include
              */

var assert = require("should/as-function");



//: @client:
var ntill = require("./ntill.support.js");
//: @end-client







//: @client:
describe("ntill", function () {

	describe("`ntill with method and condition parameter`", function () {
		it("should prevent calls to callback until condition is met", function () {
			var callback = ntill(function test(error, result) {
				assert.deepEqual(result, [1, 2, 3], "should be equal to [ 1, 2, 3 ]");
			}, 3);

			callback(null, 1);
			callback(null, 2);
			callback(null, 3);
		});
	});

	describe("`ntill with method, condition and evaluate parameter`", function () {

		it("should prevent calls to callback until condition is met", function () {
			var method = ntill(function test(error, result) {
				assert.deepEqual(result, ["yeah", "right"], "should be equal to [ 'yeah', 'right' ]");
			}, false, true);

			method(null, "yeah");
			method(null, "right");
			method(null, false);
		});

		it("should prevent calls to callback until condition is met", function () {
			var procedure = ntill(function test(error, result) {
				assert.equal(result, "yeah", "should be equal to 'yeah'");
			}, true, true);

			procedure(null, "yeah");
			procedure(null, true);
		});

	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnRpbGwiLCJkZXNjcmliZSIsIml0IiwiY2FsbGJhY2siLCJ0ZXN0IiwiZXJyb3IiLCJyZXN1bHQiLCJkZWVwRXF1YWwiLCJtZXRob2QiLCJwcm9jZWR1cmUiLCJlcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFFBQVFELFFBQVMsb0JBQVQsQ0FBZDtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsT0FBVixFQUFtQixZQUFPOztBQUV6QkEsVUFBVSw2Q0FBVixFQUF5RCxZQUFPO0FBQy9EQyxLQUFJLHlEQUFKLEVBQStELFlBQU87QUFDckUsT0FBSUMsV0FBV0gsTUFBTyxTQUFTSSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCO0FBQ25EUixXQUFPUyxTQUFQLENBQWtCRCxNQUFsQixFQUEwQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUExQixFQUF1QyxnQ0FBdkM7QUFDQSxJQUZjLEVBRVosQ0FGWSxDQUFmOztBQUlBSCxZQUFVLElBQVYsRUFBZ0IsQ0FBaEI7QUFDQUEsWUFBVSxJQUFWLEVBQWdCLENBQWhCO0FBQ0FBLFlBQVUsSUFBVixFQUFnQixDQUFoQjtBQUNBLEdBUkQ7QUFTQSxFQVZEOztBQVlBRixVQUFVLHVEQUFWLEVBQW1FLFlBQU87O0FBRXpFQyxLQUFJLHlEQUFKLEVBQStELFlBQU87QUFDckUsT0FBSU0sU0FBU1IsTUFBTyxTQUFTSSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCO0FBQ2pEUixXQUFPUyxTQUFQLENBQWtCRCxNQUFsQixFQUEwQixDQUFFLE1BQUYsRUFBVSxPQUFWLENBQTFCLEVBQStDLHdDQUEvQztBQUNBLElBRlksRUFFVixLQUZVLEVBRUgsSUFGRyxDQUFiOztBQUlBRSxVQUFRLElBQVIsRUFBYyxNQUFkO0FBQ0FBLFVBQVEsSUFBUixFQUFjLE9BQWQ7QUFDQUEsVUFBUSxJQUFSLEVBQWMsS0FBZDtBQUNBLEdBUkQ7O0FBVUFOLEtBQUkseURBQUosRUFBK0QsWUFBTztBQUNyRSxPQUFJTyxZQUFZVCxNQUFPLFNBQVNJLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsTUFBdEIsRUFBOEI7QUFDcERSLFdBQU9ZLEtBQVAsQ0FBY0osTUFBZCxFQUFzQixNQUF0QixFQUE4QiwyQkFBOUI7QUFDQSxJQUZlLEVBRWIsSUFGYSxFQUVQLElBRk8sQ0FBaEI7O0FBSUFHLGFBQVcsSUFBWCxFQUFpQixNQUFqQjtBQUNBQSxhQUFXLElBQVgsRUFBaUIsSUFBakI7QUFDQSxHQVBEOztBQVNBLEVBckJEOztBQXVCQSxDQXJDRDtBQXNDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm50aWxsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJudGlsbC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnRpbGwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm50aWxsXCI6IFwibnRpbGxcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG50aWxsID0gcmVxdWlyZSggXCIuL250aWxsLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwibnRpbGxcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbnRpbGwgd2l0aCBtZXRob2QgYW5kIGNvbmRpdGlvbiBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHByZXZlbnQgY2FsbHMgdG8gY2FsbGJhY2sgdW50aWwgY29uZGl0aW9uIGlzIG1ldFwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGNhbGxiYWNrID0gbnRpbGwoIGZ1bmN0aW9uIHRlc3QoIGVycm9yLCByZXN1bHQgKXtcblx0XHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIsIDMgXSwgXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzIF1cIiApO1xuXHRcdFx0fSwgMyApO1xuXG5cdFx0XHRjYWxsYmFjayggbnVsbCwgMSApO1xuXHRcdFx0Y2FsbGJhY2soIG51bGwsIDIgKTtcblx0XHRcdGNhbGxiYWNrKCBudWxsLCAzICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG50aWxsIHdpdGggbWV0aG9kLCBjb25kaXRpb24gYW5kIGV2YWx1YXRlIHBhcmFtZXRlcmBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBwcmV2ZW50IGNhbGxzIHRvIGNhbGxiYWNrIHVudGlsIGNvbmRpdGlvbiBpcyBtZXRcIiwgKCApID0+IHtcblx0XHRcdGxldCBtZXRob2QgPSBudGlsbCggZnVuY3Rpb24gdGVzdCggZXJyb3IsIHJlc3VsdCApe1xuXHRcdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXCJ5ZWFoXCIsIFwicmlnaHRcIiBdLCBcInNob3VsZCBiZSBlcXVhbCB0byBbICd5ZWFoJywgJ3JpZ2h0JyBdXCIgKTtcblx0XHRcdH0sIGZhbHNlLCB0cnVlICk7XG5cblx0XHRcdG1ldGhvZCggbnVsbCwgXCJ5ZWFoXCIgKTtcblx0XHRcdG1ldGhvZCggbnVsbCwgXCJyaWdodFwiICk7XG5cdFx0XHRtZXRob2QoIG51bGwsIGZhbHNlICk7XG5cdFx0fSApO1xuXG5cdFx0aXQoIFwic2hvdWxkIHByZXZlbnQgY2FsbHMgdG8gY2FsbGJhY2sgdW50aWwgY29uZGl0aW9uIGlzIG1ldFwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHByb2NlZHVyZSA9IG50aWxsKCBmdW5jdGlvbiB0ZXN0KCBlcnJvciwgcmVzdWx0ICl7XG5cdFx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcInllYWhcIiwgXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3llYWgnXCIgKTtcblx0XHRcdH0sIHRydWUsIHRydWUgKTtcblxuXHRcdFx0cHJvY2VkdXJlKCBudWxsLCBcInllYWhcIiApO1xuXHRcdFx0cHJvY2VkdXJlKCBudWxsLCB0cnVlICk7XG5cdFx0fSApO1xuXG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
