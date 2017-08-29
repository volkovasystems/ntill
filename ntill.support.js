"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                	@module-license:
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
                                                                                                                                                                                                                	@end-module-license
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@module-configuration:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"package": "ntill",
                                                                                                                                                                                                                			"path": "ntill/ntill .js",
                                                                                                                                                                                                                			"file": "ntill.js",
                                                                                                                                                                                                                			"module": "ntill ",
                                                                                                                                                                                                                			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                			"eMail": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                			"contributors": [
                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                			],
                                                                                                                                                                                                                			"repository": "https://github.com/volkovasystems/ntill .git",
                                                                                                                                                                                                                			"test": "ntill-test.js",
                                                                                                                                                                                                                			"global": true
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-module-configuration
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@module-documentation:
                                                                                                                                                                                                                		Prevent calls to callback until condition is met.
                                                                                                                                                                                                                
                                                                                                                                                                                                                		Take note that the method is called once the condition is met,
                                                                                                                                                                                                                			further test to the condition will not invoke the callback.
                                                                                                                                                                                                                	@end-module-documentation
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@include:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"burne": "burne",
                                                                                                                                                                                                                			"condev": "condev",
                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                			"harden": "harden",
                                                                                                                                                                                                                			"kloak": "kloak",
                                                                                                                                                                                                                			"mrkd": "mrkd",
                                                                                                                                                                                                                			"shft": "shft",
                                                                                                                                                                                                                			"truly": "truly",
                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                */

var burne = require("burne");
var condev = require("condev");
var falzy = require("falzy");
var harden = require("harden");
var kloak = require("kloak");
var mrkd = require("mrkd");
var shft = require("shft");
var truly = require("truly");
var zelf = require("zelf");

var CALLED = (0, _symbol2.default)("called");
var CALLED_ONCE = (0, _symbol2.default)("called-once");
var RESULT = (0, _symbol2.default)("result");
var LIST = (0, _symbol2.default)("list");

var ntill = function ntill(method, condition, evaluate) {
	/*;
                                                         	@meta-configuration:
                                                         		{
                                                         			"method:required": "function",
                                                         			"condition": "*",
                                                         			"evaluate": "boolean"
                                                         		}
                                                         	@end-meta-configuration
                                                         */

	var self = zelf(this);

	if (falzy(method) || typeof method != "function") {
		method = function method() {return self;};
	}

	if (mrkd(CALLED_ONCE, method, true)) {
		return method;
	}

	if (typeof condition == "number" && !evaluate) {
		condition--;
	}

	var callback = function callback(error, result, parameter) {
		if (mrkd(CALLED, callback, true)) {
			return callback[RESULT];
		}

		if (truly(error) && !(error instanceof Error)) {
			throw new Error("invalid error");
		}

		if (evaluate === true) {
			if (error instanceof Error) {
				return error;
			}

			if (!condev(result, condition)) {
				if (truly(result)) {
					callback[LIST].push(result);
				}

				return result;
			}

		} else if (typeof condition == "number") {
			if (condition > 0) {
				condition--;

				if (error instanceof Error) {
					return error;
				}

				if (truly(result)) {
					callback[LIST].push(result);
				}

				return result;

			} else if (error instanceof Error) {
				return error;

			} else {
				if (truly(result)) {
					callback[LIST].push(result);
				}
			}

		} else {
			throw new Error("invalid condition evaluation procedure");
		}

		burne(CALLED, callback);

		/*;
                           	@note:
                           		If the list contains one value the pop that value.
                           				The module will adapt to the intended return value of this method.
                           				The callback will only receive a copy of the list not the actual
                           			reference to the list.
                           	@end-note
                           */


		var value = callback[LIST].slice();
		if (value.length == 1) {
			value = value.pop();
		}

		var data = self;
		try {
			/*;
       	@note:
       		Do not modify this apply call here, we cannot use bind since it will
       			try to hard override the context.
       	@end-note
       */
			data = method.apply(self, [error, value].concat(shft(arguments, 2)));

		} catch (error) {
			data = error;

		} finally {
			method = undefined;

			self = undefined;

			condition = undefined;

			evaluate = undefined;
		}

		harden(RESULT, data, callback);

		return data;
	};

	kloak(method, callback, CALLED_ONCE);

	harden(LIST, [], callback);

	return callback;
};

module.exports = ntill;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50aWxsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYnVybmUiLCJyZXF1aXJlIiwiY29uZGV2IiwiZmFsenkiLCJoYXJkZW4iLCJrbG9hayIsIm1ya2QiLCJzaGZ0IiwidHJ1bHkiLCJ6ZWxmIiwiQ0FMTEVEIiwiQ0FMTEVEX09OQ0UiLCJSRVNVTFQiLCJMSVNUIiwibnRpbGwiLCJtZXRob2QiLCJjb25kaXRpb24iLCJldmFsdWF0ZSIsInNlbGYiLCJjYWxsYmFjayIsImVycm9yIiwicmVzdWx0IiwicGFyYW1ldGVyIiwiRXJyb3IiLCJwdXNoIiwidmFsdWUiLCJzbGljZSIsImxlbmd0aCIsInBvcCIsImRhdGEiLCJhcHBseSIsImNvbmNhdCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVEsT0FBT1IsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTVMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxjQUFjLHNCQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLE9BQU8sc0JBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLFFBQVEsU0FBU0Es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QUFXZ0IsU0FBWDtBQUNBOztBQUVEN0IsU0FBUVEsTUFBUixFQUFnQmlCLElBQWhCLEVBQXNCVixRQUF0Qjs7QUFFQSxTQUFPVSxJQUFQO0FBQ0EsRUE1RkQ7O0FBOEZBeEIsT0FBT1UsTUFBUCxFQUFlSSxRQUFmLEVBQXlCUixXQUF6Qjs7QUFFQVAsUUFBUVMsSUFBUixFQUFjLEVBQWQsRUFBbUJNLFFBQW5COztBQUVBLFFBQU9BLFFBQVA7QUFDQSxDQTVIRDs7QUE4SEFlLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQiIsImZpbGUiOiJudGlsbC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJudGlsbFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJudGlsbC9udGlsbCAuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibnRpbGwuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJudGlsbCBcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnRpbGwgLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJudGlsbC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFByZXZlbnQgY2FsbHMgdG8gY2FsbGJhY2sgdW50aWwgY29uZGl0aW9uIGlzIG1ldC5cclxuXHJcblx0XHRUYWtlIG5vdGUgdGhhdCB0aGUgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIHRoZSBjb25kaXRpb24gaXMgbWV0LFxyXG5cdFx0XHRmdXJ0aGVyIHRlc3QgdG8gdGhlIGNvbmRpdGlvbiB3aWxsIG5vdCBpbnZva2UgdGhlIGNhbGxiYWNrLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxyXG5cdFx0XHRcImNvbmRldlwiOiBcImNvbmRldlwiLFxyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcclxuXHRcdFx0XCJrbG9ha1wiOiBcImtsb2FrXCIsXHJcblx0XHRcdFwibXJrZFwiOiBcIm1ya2RcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcclxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBidXJuZSA9IHJlcXVpcmUoIFwiYnVybmVcIiApO1xyXG5jb25zdCBjb25kZXYgPSByZXF1aXJlKCBcImNvbmRldlwiICk7XHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcclxuY29uc3Qga2xvYWsgPSByZXF1aXJlKCBcImtsb2FrXCIgKTtcclxuY29uc3QgbXJrZCA9IHJlcXVpcmUoIFwibXJrZFwiICk7XHJcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xyXG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xyXG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcclxuXHJcbmNvbnN0IENBTExFRCA9IFN5bWJvbCggXCJjYWxsZWRcIiApO1xyXG5jb25zdCBDQUxMRURfT05DRSA9IFN5bWJvbCggXCJjYWxsZWQtb25jZVwiICk7XHJcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xyXG5jb25zdCBMSVNUID0gU3ltYm9sKCBcImxpc3RcIiApO1xyXG5cclxuY29uc3QgbnRpbGwgPSBmdW5jdGlvbiBudGlsbCggbWV0aG9kLCBjb25kaXRpb24sIGV2YWx1YXRlICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJtZXRob2Q6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiKlwiLFxyXG5cdFx0XHRcdFwiZXZhbHVhdGVcIjogXCJib29sZWFuXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcclxuXHJcblx0aWYoIGZhbHp5KCBtZXRob2QgKSB8fCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0bWV0aG9kID0gZnVuY3Rpb24gbWV0aG9kKCApeyByZXR1cm4gc2VsZjsgfTtcclxuXHR9XHJcblxyXG5cdGlmKCBtcmtkKCBDQUxMRURfT05DRSwgbWV0aG9kLCB0cnVlICkgKXtcclxuXHRcdHJldHVybiBtZXRob2Q7XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIGNvbmRpdGlvbiA9PSBcIm51bWJlclwiICYmICFldmFsdWF0ZSApe1xyXG5cdFx0Y29uZGl0aW9uLS07XHJcblx0fVxyXG5cclxuXHRsZXQgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayggZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XHJcblx0XHRpZiggbXJrZCggQ0FMTEVELCBjYWxsYmFjaywgdHJ1ZSApICl7XHJcblx0XHRcdHJldHVybiBjYWxsYmFja1sgUkVTVUxUIF07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIHRydWx5KCBlcnJvciApICYmICEoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKSApe1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlcnJvclwiICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIGV2YWx1YXRlID09PSB0cnVlICl7XHJcblx0XHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggIWNvbmRldiggcmVzdWx0LCBjb25kaXRpb24gKSApe1xyXG5cdFx0XHRcdGlmKCB0cnVseSggcmVzdWx0ICkgKXtcclxuXHRcdFx0XHRcdGNhbGxiYWNrWyBMSVNUIF0ucHVzaCggcmVzdWx0ICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fWVsc2UgaWYoIHR5cGVvZiBjb25kaXRpb24gPT0gXCJudW1iZXJcIiApe1xyXG5cdFx0XHRpZiggY29uZGl0aW9uID4gMCApe1xyXG5cdFx0XHRcdGNvbmRpdGlvbi0tO1xyXG5cclxuXHRcdFx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIHRydWx5KCByZXN1bHQgKSApe1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2tbIExJU1QgXS5wdXNoKCByZXN1bHQgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdFx0XHR9ZWxzZSBpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGlmKCB0cnVseSggcmVzdWx0ICkgKXtcclxuXHRcdFx0XHRcdGNhbGxiYWNrWyBMSVNUIF0ucHVzaCggcmVzdWx0ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbmRpdGlvbiBldmFsdWF0aW9uIHByb2NlZHVyZVwiICk7XHJcblx0XHR9XHJcblxyXG5cdFx0YnVybmUoIENBTExFRCwgY2FsbGJhY2sgKTtcclxuXHJcblx0XHQvKjtcclxuXHRcdFx0QG5vdGU6XHJcblx0XHRcdFx0SWYgdGhlIGxpc3QgY29udGFpbnMgb25lIHZhbHVlIHRoZSBwb3AgdGhhdCB2YWx1ZS5cclxuXHJcblx0XHRcdFx0VGhlIG1vZHVsZSB3aWxsIGFkYXB0IHRvIHRoZSBpbnRlbmRlZCByZXR1cm4gdmFsdWUgb2YgdGhpcyBtZXRob2QuXHJcblxyXG5cdFx0XHRcdFRoZSBjYWxsYmFjayB3aWxsIG9ubHkgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpc3Qgbm90IHRoZSBhY3R1YWxcclxuXHRcdFx0XHRcdHJlZmVyZW5jZSB0byB0aGUgbGlzdC5cclxuXHRcdFx0QGVuZC1ub3RlXHJcblx0XHQqL1xyXG5cdFx0bGV0IHZhbHVlID0gY2FsbGJhY2tbIExJU1QgXS5zbGljZSggKTtcclxuXHRcdGlmKCB2YWx1ZS5sZW5ndGggPT0gMSApe1xyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnBvcCggKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZGF0YSA9IHNlbGY7XHJcblx0XHR0cnl7XHJcblx0XHRcdC8qO1xyXG5cdFx0XHRcdEBub3RlOlxyXG5cdFx0XHRcdFx0RG8gbm90IG1vZGlmeSB0aGlzIGFwcGx5IGNhbGwgaGVyZSwgd2UgY2Fubm90IHVzZSBiaW5kIHNpbmNlIGl0IHdpbGxcclxuXHRcdFx0XHRcdFx0dHJ5IHRvIGhhcmQgb3ZlcnJpZGUgdGhlIGNvbnRleHQuXHJcblx0XHRcdFx0QGVuZC1ub3RlXHJcblx0XHRcdCovXHJcblx0XHRcdGRhdGEgPSBtZXRob2QuYXBwbHkoIHNlbGYsIFsgZXJyb3IsIHZhbHVlIF0uY29uY2F0KCBzaGZ0KCBhcmd1bWVudHMsIDIgKSApICk7XHJcblxyXG5cdFx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0XHRkYXRhID0gZXJyb3I7XHJcblxyXG5cdFx0fWZpbmFsbHl7XHJcblx0XHRcdG1ldGhvZCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdHNlbGYgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRjb25kaXRpb24gPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRldmFsdWF0ZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRoYXJkZW4oIFJFU1VMVCwgZGF0YSwgY2FsbGJhY2sgKTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9O1xyXG5cclxuXHRrbG9hayggbWV0aG9kLCBjYWxsYmFjaywgQ0FMTEVEX09OQ0UgKTtcclxuXHJcblx0aGFyZGVuKCBMSVNULCBbIF0sIGNhbGxiYWNrICk7XHJcblxyXG5cdHJldHVybiBjYWxsYmFjaztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbnRpbGw7XHJcbiJdfQ==
//# sourceMappingURL=ntill.support.js.map
