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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50aWxsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYnVybmUiLCJyZXF1aXJlIiwiY29uZGV2IiwiZmFsenkiLCJoYXJkZW4iLCJrbG9hayIsIm1ya2QiLCJzaGZ0IiwidHJ1bHkiLCJ6ZWxmIiwiQ0FMTEVEIiwiQ0FMTEVEX09OQ0UiLCJSRVNVTFQiLCJMSVNUIiwibnRpbGwiLCJtZXRob2QiLCJjb25kaXRpb24iLCJldmFsdWF0ZSIsInNlbGYiLCJjYWxsYmFjayIsImVycm9yIiwicmVzdWx0IiwicGFyYW1ldGVyIiwiRXJyb3IiLCJwdXNoIiwidmFsdWUiLCJzbGljZSIsImxlbmd0aCIsInBvcCIsImRhdGEiLCJhcHBseSIsImNvbmNhdCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVEsT0FBT1IsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTVMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxjQUFjLHNCQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLE9BQU8sc0JBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLFFBQVEsU0FBU0Es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QUFXZ0IsU0FBWDtBQUNBOztBQUVEN0IsU0FBUVEsTUFBUixFQUFnQmlCLElBQWhCLEVBQXNCVixRQUF0Qjs7QUFFQSxTQUFPVSxJQUFQO0FBQ0EsRUE1RkQ7O0FBOEZBeEIsT0FBT1UsTUFBUCxFQUFlSSxRQUFmLEVBQXlCUixXQUF6Qjs7QUFFQVAsUUFBUVMsSUFBUixFQUFjLEVBQWQsRUFBbUJNLFFBQW5COztBQUVBLFFBQU9BLFFBQVA7QUFDQSxDQTVIRDs7QUE4SEFlLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQiIsImZpbGUiOiJudGlsbC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm50aWxsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJudGlsbC9udGlsbCAuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm50aWxsLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm50aWxsIFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnRpbGwgLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibnRpbGwtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQcmV2ZW50IGNhbGxzIHRvIGNhbGxiYWNrIHVudGlsIGNvbmRpdGlvbiBpcyBtZXQuXG5cblx0XHRUYWtlIG5vdGUgdGhhdCB0aGUgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIHRoZSBjb25kaXRpb24gaXMgbWV0LFxuXHRcdFx0ZnVydGhlciB0ZXN0IHRvIHRoZSBjb25kaXRpb24gd2lsbCBub3QgaW52b2tlIHRoZSBjYWxsYmFjay5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxuXHRcdFx0XCJjb25kZXZcIjogXCJjb25kZXZcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwia2xvYWtcIjogXCJrbG9ha1wiLFxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYnVybmUgPSByZXF1aXJlKCBcImJ1cm5lXCIgKTtcbmNvbnN0IGNvbmRldiA9IHJlcXVpcmUoIFwiY29uZGV2XCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBrbG9hayA9IHJlcXVpcmUoIFwia2xvYWtcIiApO1xuY29uc3QgbXJrZCA9IHJlcXVpcmUoIFwibXJrZFwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgQ0FMTEVEID0gU3ltYm9sKCBcImNhbGxlZFwiICk7XG5jb25zdCBDQUxMRURfT05DRSA9IFN5bWJvbCggXCJjYWxsZWQtb25jZVwiICk7XG5jb25zdCBSRVNVTFQgPSBTeW1ib2woIFwicmVzdWx0XCIgKTtcbmNvbnN0IExJU1QgPSBTeW1ib2woIFwibGlzdFwiICk7XG5cbmNvbnN0IG50aWxsID0gZnVuY3Rpb24gbnRpbGwoIG1ldGhvZCwgY29uZGl0aW9uLCBldmFsdWF0ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiKlwiLFxuXHRcdFx0XHRcImV2YWx1YXRlXCI6IFwiYm9vbGVhblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRpZiggZmFsenkoIG1ldGhvZCApIHx8IHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0bWV0aG9kID0gZnVuY3Rpb24gbWV0aG9kKCApeyByZXR1cm4gc2VsZjsgfTtcblx0fVxuXG5cdGlmKCBtcmtkKCBDQUxMRURfT05DRSwgbWV0aG9kLCB0cnVlICkgKXtcblx0XHRyZXR1cm4gbWV0aG9kO1xuXHR9XG5cblx0aWYoIHR5cGVvZiBjb25kaXRpb24gPT0gXCJudW1iZXJcIiAmJiAhZXZhbHVhdGUgKXtcblx0XHRjb25kaXRpb24tLTtcblx0fVxuXG5cdGxldCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHRpZiggbXJrZCggQ0FMTEVELCBjYWxsYmFjaywgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2tbIFJFU1VMVCBdO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggZXJyb3IgKSAmJiAhKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVycm9yXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZXZhbHVhdGUgPT09IHRydWUgKXtcblx0XHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH1cblxuXHRcdFx0aWYoICFjb25kZXYoIHJlc3VsdCwgY29uZGl0aW9uICkgKXtcblx0XHRcdFx0aWYoIHRydWx5KCByZXN1bHQgKSApe1xuXHRcdFx0XHRcdGNhbGxiYWNrWyBMSVNUIF0ucHVzaCggcmVzdWx0ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0fWVsc2UgaWYoIHR5cGVvZiBjb25kaXRpb24gPT0gXCJudW1iZXJcIiApe1xuXHRcdFx0aWYoIGNvbmRpdGlvbiA+IDAgKXtcblx0XHRcdFx0Y29uZGl0aW9uLS07XG5cblx0XHRcdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdHJ1bHkoIHJlc3VsdCApICl7XG5cdFx0XHRcdFx0Y2FsbGJhY2tbIExJU1QgXS5wdXNoKCByZXN1bHQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRcdH1lbHNlIGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmKCB0cnVseSggcmVzdWx0ICkgKXtcblx0XHRcdFx0XHRjYWxsYmFja1sgTElTVCBdLnB1c2goIHJlc3VsdCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbmRpdGlvbiBldmFsdWF0aW9uIHByb2NlZHVyZVwiICk7XG5cdFx0fVxuXG5cdFx0YnVybmUoIENBTExFRCwgY2FsbGJhY2sgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHRoZSBsaXN0IGNvbnRhaW5zIG9uZSB2YWx1ZSB0aGUgcG9wIHRoYXQgdmFsdWUuXG5cblx0XHRcdFx0VGhlIG1vZHVsZSB3aWxsIGFkYXB0IHRvIHRoZSBpbnRlbmRlZCByZXR1cm4gdmFsdWUgb2YgdGhpcyBtZXRob2QuXG5cblx0XHRcdFx0VGhlIGNhbGxiYWNrIHdpbGwgb25seSByZWNlaXZlIGEgY29weSBvZiB0aGUgbGlzdCBub3QgdGhlIGFjdHVhbFxuXHRcdFx0XHRcdHJlZmVyZW5jZSB0byB0aGUgbGlzdC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0bGV0IHZhbHVlID0gY2FsbGJhY2tbIExJU1QgXS5zbGljZSggKTtcblx0XHRpZiggdmFsdWUubGVuZ3RoID09IDEgKXtcblx0XHRcdHZhbHVlID0gdmFsdWUucG9wKCApO1xuXHRcdH1cblxuXHRcdGxldCBkYXRhID0gc2VsZjtcblx0XHR0cnl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0RG8gbm90IG1vZGlmeSB0aGlzIGFwcGx5IGNhbGwgaGVyZSwgd2UgY2Fubm90IHVzZSBiaW5kIHNpbmNlIGl0IHdpbGxcblx0XHRcdFx0XHRcdHRyeSB0byBoYXJkIG92ZXJyaWRlIHRoZSBjb250ZXh0LlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRkYXRhID0gbWV0aG9kLmFwcGx5KCBzZWxmLCBbIGVycm9yLCB2YWx1ZSBdLmNvbmNhdCggc2hmdCggYXJndW1lbnRzLCAyICkgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0ZGF0YSA9IGVycm9yO1xuXG5cdFx0fWZpbmFsbHl7XG5cdFx0XHRtZXRob2QgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHNlbGYgPSB1bmRlZmluZWQ7XG5cblx0XHRcdGNvbmRpdGlvbiA9IHVuZGVmaW5lZDtcblxuXHRcdFx0ZXZhbHVhdGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aGFyZGVuKCBSRVNVTFQsIGRhdGEsIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fTtcblxuXHRrbG9hayggbWV0aG9kLCBjYWxsYmFjaywgQ0FMTEVEX09OQ0UgKTtcblxuXHRoYXJkZW4oIExJU1QsIFsgXSwgY2FsbGJhY2sgKTtcblxuXHRyZXR1cm4gY2FsbGJhY2s7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG50aWxsO1xuIl19
//# sourceMappingURL=ntill.support.js.map
