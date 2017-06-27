/*;
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
			"protype": "protype",
			"shft": "shft",
			"truly": "truly",
			"zelf": "zelf"
		}
	@end-include
*/

const burne = require( "burne" );
const condev = require( "condev" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const kloak = require( "kloak" );
const mrkd = require( "mrkd" );
const protype = require( "protype" );
const shft = require( "shft" );
const truly = require( "truly" );
const zelf = require( "zelf" );

const CALLED = Symbol( "called" );
const CALLED_ONCE = Symbol( "called-once" );
const RESULT = Symbol( "result" );
const LIST = Symbol( "list" );

const ntill = function ntill( method, condition, evaluate ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"condition": "*",
				"evaluate": "boolean"
			}
		@end-meta-configuration
	*/

	let self = zelf( this );

	if( falzy( method ) || !protype( method, FUNCTION ) ){
		method = function method( ){ return self; };
	}

	if( mrkd( CALLED_ONCE, method, true ) ){
		return method;
	}

	if( protype( condition, NUMBER ) && !evaluate ){
		condition--;
	}

	let callback = function callback( error, result, parameter ){
		if( mrkd( CALLED, callback, true ) ){
			return callback[ RESULT ];
		}

		if( truly( error ) && !( error instanceof Error ) ){
			throw new Error( "invalid error" );
		}

		if( evaluate === true ){
			if( error instanceof Error ){
				return error;
			}

			if( !condev( result, condition ) ){
				if( truly( result ) ){
					callback[ LIST ].push( result );
				}

				return result;
			}

		}else if( protype( condition, NUMBER ) ){
			if( condition > 0 ){
				condition--;

				if( error instanceof Error ){
					return error;
				}

				if( truly( result ) ){
					callback[ LIST ].push( result );
				}

				return result;

			}else if( error instanceof Error ){
				return error;

			}else{
				if( truly( result ) ){
					callback[ LIST ].push( result );
				}
			}

		}else{
			throw new Error( "invalid condition evaluation procedure" );
		}

		burne( CALLED, callback );

		/*;
			@note:
				If the list contains one value the pop that value.

				The module will adapt to the intended return value of this method.

				The callback will only receive a copy of the list not the actual
					reference to the list.
			@end-note
		*/
		let value = callback[ LIST ].slice( );
		if( value.length == 1 ){
			value = value.pop( );
		}

		let data = self;
		try{
			/*;
				@note:
					Do not modify this apply call here, we cannot use bind since it will
						try to hard override the context.
				@end-note
			*/
			data = method.apply( self, [ error, value ].concat( shft( arguments, 2 ) ) );

		}catch( error ){
			data = error;

		}finally{
			method = undefined;

			self = undefined;

			condition = undefined;

			evaluate = undefined;
		}

		harden( RESULT, data, callback );

		return data;
	};

	kloak( method, callback, CALLED_ONCE );

	harden( LIST, [ ], callback );

	return callback;
};

module.exports = ntill;
