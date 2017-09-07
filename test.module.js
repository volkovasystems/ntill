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

//: @client:
const ntill = require( "./ntill.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


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


//: @client:
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
//: @end-client


//: @bridge:
describe( "ntill", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`ntill with method and condition parameter`", ( ) => {
		it( "should prevent calls to callback until condition is met", ( ) => {
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
			assert.equal( result, true );
		} );
	} );

	describe( "`ntill with method, condition and evaluate parameter`", ( ) => {

		it( "should prevent calls to callback until condition is met", ( ) => {
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
			assert.equal( result, true );
		} );

		it( "should prevent calls to callback until condition is met", ( ) => {
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
			assert.equal( result, true );

		} );

	} );

} );
//: @end-bridge
