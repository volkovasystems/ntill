
const assert = require( "assert" );
const ntill = require( "./ntill.js" );

let callback = ntill( function test( error, result ){
	assert.deepEqual( result, [ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );

	console.log( "ok" );
}, 3 );

callback( null, 1 );
callback( null, 2 );
callback( null, 3 );

let method = ntill( function test( error, result ){
	assert.deepEqual( result, [ "yeah", "right" ], "should be equal to [ 'yeah', 'right' ]" );

	console.log( "ok" );
}, false, true );

method( null, "yeah" );
method( null, "right" );
method( null, false );

let procedure = ntill( function test( error, result ){
	assert.equal( result, "yeah", "should be equal to 'yeah'" );

	console.log( "ok" );
}, true, true );

procedure( null, "yeah" );
procedure( null, true );
