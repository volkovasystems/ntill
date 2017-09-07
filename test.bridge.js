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





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:
describe("ntill", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`ntill with method and condition parameter`", function () {
		it("should prevent calls to callback until condition is met", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let callback = ntill( function test( error, result ){ }, 3 );
   
   					callback( null, 1 );
   					callback( null, 2 );
   					callback( null, 3 );
   
   					let test = mrkd( Symbol( "called-once" ), callback ) &&
   						mrkd( Symbol( "list" ), callback ) &&
   						mrkd( Symbol( "result" ), callback );
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);
		});
	});

	describe("`ntill with method, condition and evaluate parameter`", function () {

		it("should prevent calls to callback until condition is met", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let method = ntill( function test( error, result ){
   						assert.deepEqual( result, [ "yeah", "right" ], "should be equal to [ 'yeah', 'right' ]" );
   					}, false, true );
   
   					method( null, "yeah" );
   					method( null, "right" );
   					method( null, false );
   
   					let test = mrkd( Symbol( "called-once" ), method ) &&
   						mrkd( Symbol( "list" ), method ) &&
   						mrkd( Symbol( "result" ), method );
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);
		});

		it("should prevent calls to callback until condition is met", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let procedure = ntill( function test( error, result ){
   						assert.equal( result, "yeah", "should be equal to 'yeah'" );
   					}, true, true );
   
   					procedure( null, "yeah" );
   					procedure( null, true );
   
   					let test = mrkd( Symbol( "called-once" ), procedure ) &&
   						mrkd( Symbol( "list" ), procedure ) &&
   						mrkd( Symbol( "result" ), procedure );
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});

	});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLDZDQUFWLEVBQXlELFlBQU87QUFDL0RJLEtBQUkseURBQUosRUFBK0QsWUFBTztBQUNyRTtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0QjtBQUNBLEdBdkJEO0FBd0JBLEVBekJEOztBQTJCQU4sVUFBVSx1REFBVixFQUFtRSxZQUFPOztBQUV6RUksS0FBSSx5REFBSixFQUErRCxZQUFPO0FBQ3JFO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7QUFDQSxHQXpCRDs7QUEyQkFGLEtBQUkseURBQUosRUFBK0QsWUFBTztBQUNyRTtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0F6QkQ7O0FBMkJBLEVBeEREOztBQTBEQSxDQXpGRDtBQTBGQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnRpbGxcIixcblx0XHRcdFwicGF0aFwiOiBcIm50aWxsL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udGlsbC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibnRpbGxcIjogXCJudGlsbFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5kZXNjcmliZSggXCJudGlsbFwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgbnRpbGwgd2l0aCBtZXRob2QgYW5kIGNvbmRpdGlvbiBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHByZXZlbnQgY2FsbHMgdG8gY2FsbGJhY2sgdW50aWwgY29uZGl0aW9uIGlzIG1ldFwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBjYWxsYmFjayA9IG50aWxsKCBmdW5jdGlvbiB0ZXN0KCBlcnJvciwgcmVzdWx0ICl7IH0sIDMgKTtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCAxICk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIDIgKTtcblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgMyApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBtcmtkKCBTeW1ib2woIFwiY2FsbGVkLW9uY2VcIiApLCBjYWxsYmFjayApICYmXG5cdFx0XHRcdFx0XHRtcmtkKCBTeW1ib2woIFwibGlzdFwiICksIGNhbGxiYWNrICkgJiZcblx0XHRcdFx0XHRcdG1ya2QoIFN5bWJvbCggXCJyZXN1bHRcIiApLCBjYWxsYmFjayApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG50aWxsIHdpdGggbWV0aG9kLCBjb25kaXRpb24gYW5kIGV2YWx1YXRlIHBhcmFtZXRlcmBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBwcmV2ZW50IGNhbGxzIHRvIGNhbGxiYWNrIHVudGlsIGNvbmRpdGlvbiBpcyBtZXRcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgbWV0aG9kID0gbnRpbGwoIGZ1bmN0aW9uIHRlc3QoIGVycm9yLCByZXN1bHQgKXtcblx0XHRcdFx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBcInllYWhcIiwgXCJyaWdodFwiIF0sIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ3llYWgnLCAncmlnaHQnIF1cIiApO1xuXHRcdFx0XHRcdH0sIGZhbHNlLCB0cnVlICk7XG5cblx0XHRcdFx0XHRtZXRob2QoIG51bGwsIFwieWVhaFwiICk7XG5cdFx0XHRcdFx0bWV0aG9kKCBudWxsLCBcInJpZ2h0XCIgKTtcblx0XHRcdFx0XHRtZXRob2QoIG51bGwsIGZhbHNlICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IG1ya2QoIFN5bWJvbCggXCJjYWxsZWQtb25jZVwiICksIG1ldGhvZCApICYmXG5cdFx0XHRcdFx0XHRtcmtkKCBTeW1ib2woIFwibGlzdFwiICksIG1ldGhvZCApICYmXG5cdFx0XHRcdFx0XHRtcmtkKCBTeW1ib2woIFwicmVzdWx0XCIgKSwgbWV0aG9kICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cblx0XHRpdCggXCJzaG91bGQgcHJldmVudCBjYWxscyB0byBjYWxsYmFjayB1bnRpbCBjb25kaXRpb24gaXMgbWV0XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHByb2NlZHVyZSA9IG50aWxsKCBmdW5jdGlvbiB0ZXN0KCBlcnJvciwgcmVzdWx0ICl7XG5cdFx0XHRcdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJ5ZWFoXCIsIFwic2hvdWxkIGJlIGVxdWFsIHRvICd5ZWFoJ1wiICk7XG5cdFx0XHRcdFx0fSwgdHJ1ZSwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0cHJvY2VkdXJlKCBudWxsLCBcInllYWhcIiApO1xuXHRcdFx0XHRcdHByb2NlZHVyZSggbnVsbCwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBtcmtkKCBTeW1ib2woIFwiY2FsbGVkLW9uY2VcIiApLCBwcm9jZWR1cmUgKSAmJlxuXHRcdFx0XHRcdFx0bXJrZCggU3ltYm9sKCBcImxpc3RcIiApLCBwcm9jZWR1cmUgKSAmJlxuXHRcdFx0XHRcdFx0bXJrZCggU3ltYm9sKCBcInJlc3VsdFwiICksIHByb2NlZHVyZSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
