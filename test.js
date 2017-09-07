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

const assert = require( "should/as-function" );

//: @server:
const ntill = require( "./ntill.js" );
const mrkd = require( "mrkd" );
//: @end-server






//: @server:
describe( "ntill", ( ) => {

	describe( "`ntill with method and condition parameter`", ( ) => {
		it( "should prevent calls to callback until condition is met", ( ) => {
			let callback = ntill( function test( error, result ){
				assert.deepEqual( result, [ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );
			}, 3 );

			callback( null, 1 );
			callback( null, 2 );
			callback( null, 3 );
		} );
	} );

	describe( "`ntill with method, condition and evaluate parameter`", ( ) => {

		it( "should prevent calls to callback until condition is met", ( ) => {
			let method = ntill( function test( error, result ){
				assert.deepEqual( result, [ "yeah", "right" ], "should be equal to [ 'yeah', 'right' ]" );
			}, false, true );

			method( null, "yeah" );
			method( null, "right" );
			method( null, false );
		} );

		it( "should prevent calls to callback until condition is met", ( ) => {
			let procedure = ntill( function test( error, result ){
				assert.equal( result, "yeah", "should be equal to 'yeah'" );
			}, true, true );

			procedure( null, "yeah" );
			procedure( null, true );
		} );

	} );

} );
//: @end-server






