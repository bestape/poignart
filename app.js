#! /usr/bin/env node
function asObject( $0 ) {
	function modulo( $0, $1 ) {
		return ( ( $0 % $1 ) + $1 ) % $1
		;
	}
	const _1 = new AsObject( $0 )
	; _1.object = _1.svg.children[ 2 ].children
	;
	while ( _1.count < _1.object.length ) {
		if ( _1.count % 2 == 1 ) {
			_1.object[ _1.count ]
				.children = _0.stripLeft(
					_1.object[ _1.count ].children
					, _0.phrase[
						_1.modulo(
							_1.count -1
							, _0.phrase.length
						)
					]
				)
			;
		} else {
			_1.object[ _1.count ]
				.children = _0.stripRight(
					_1.object[ _1.count ].children
					, _0.phrase[
						_1.modulo(
							_1.count -1
							, _0.phrase.length
						)
					]
				)
			;
		}
		; _1.count ++
		;
	}
	_1.svg.children[ 2 ].children = _1.object
	; _1.string = _0.svgson.stringify( _1.svg )
	; _1.writeFile( _0.newFile, _1.string, $0 => {
		if ( $0 ) {
			console.warn( $0 )
			; return
			;
		}
		console.log( 'saved to ' + _0.newFile )
		;
	} )
	;
	function AsObject( $0 ) {
		this.count = 1
		; this.modulo = modulo
		; this.object = null
		; this.string = null
		; this.svg = $0
		; this.writeFile = require( 'fs' )
			.writeFile
		;
	}
}
function stripLeft( $0, $1 ) {
	const _1 = new StripLeft( $0, $1 )
	;
	while( _1.count < _1.object.length -3 ) {
		_1.tile1 = _1.object[ _1.count ]
			.children[ 0 ].attributes.style
		; _1.tile2 = _1.object[ _1.count ]
			.children[ 1 ].attributes.style
		if ( _1.character[ _1.count ] == 0 ) {
			_1.tile1 = _1.tile1.replace(
				/ffd500/g, '005bbb'
			)
			; _1.tile2 = _1.tile2.replace(
				/ffd500/g, '005bbb'
			)
			;
		} else {
			_1.tile1 = _1.tile1.replace(
				/005bbb/g, 'ffd500'
			)
			; _1.tile2 = _1.tile2.replace(
				/005bbb/g, 'ffd500'
			)
			;
		}
		_1.object[ _1.count ].children[ 0 ]
			.attributes.style = _1.tile1
		; _1.object[ _1.count ].children[ 1 ]
			.attributes.style = _1.tile2
		;
		if ( _1.count == 0 ) {
			_1.tile = _1.object[ 7 ].attributes
				.style
			;
			if ( _1.character[ _1.count ] == 0 ) {
				_1.tile = _1.tile.replace(
					/ffd500/g, '005bbb'
				)
				;
			} else {
				_1.tile = _1.tile.replace(
					/005bbb/g, 'ffd500'
				)
				;
			}
			_1.object[ 7 ].attributes
				.style = _1.tile
			;
		}
		_1.count ++
		;
	}
	return _1.object
	;
	function StripLeft( $0, $1 ) {
		this.character = _0.ascii[ $1 ]
		; this.count = 0
		; this.object = $0
		; this.tile1 = null
		; this.tile2 = null
		;
	}
}
function stripRight( $0, $1 ) {
	const _1 = new StripRight( $0, $1 )
	;
	while( _1.count > -1 ) {
		_1.tile1 = _1.object[ _1.countUp ]
			.children[ 0 ].attributes.style
		; _1.tile2 = _1.object[ _1.countUp ]
			.children[ 1 ].attributes.style
		if ( _1.character[ _1.count ] == 0 ) {
			_1.tile1 = _1.tile1.replace(
				/ffd500/g, '005bbb'
			)
			; _1.tile2 = _1.tile2.replace(
				/ffd500/g, '005bbb'
			)
			;
		} else {
			_1.tile1 = _1.tile1.replace(
				/005bbb/g, 'ffd500'
			)
			; _1.tile2 = _1.tile2.replace(
				/005bbb/g, 'ffd500'
			)
			;
		}
		_1.object[ _1.countUp ].children[ 0 ]
			.attributes.style = _1.tile1
		; _1.object[ _1.countUp ].children[ 1 ]
			.attributes.style = _1.tile2
		;
		if ( _1.count == 6 ) {
			_1.tile = _1.object[ 7 ].attributes
				.style
			;
			if ( _1.character[ _1.count ] == 0 ) {
				_1.tile = _1.tile.replace(
					/ffd500/g, '005bbb'
				)
				;
			} else {
				_1.tile = _1.tile.replace(
					/005bbb/g, 'ffd500'
				)
				;
			}
			_1.object[ 7 ].attributes
				.style = _1.tile
			;
		}
		_1.count --
		; _1.countUp ++
		;
	}
	return _1.object
	;
	function StripRight( $0, $1 ) {
		this.character = _0.ascii[ $1 ]
		; this.count = $0.length -4
		; this.countUp = 0
		; this.object = $0
		; this.tile = null
		; this.tile1 = null
		; this.tile2 = null
		;
	}
}
const _0 = new App
; _0.readFile( _0.file, ( $0, $1 ) => {
	if ( $0 ) {
		console.warn( $0 )
		;
	}
	_0.string += $1
	; _0.svgson.parse( _0.string ).then(
		_0.asObject
	)
	;
} )
;
function App() {
	this.ascii = {
		" ": "0100000"
		, "!": "0100001"
		, '"': "0100010"
		, "#": "0100011"
		, "$": "0100100"
		, "%": "0100101"
		, "&": "0100110"
		, "'": "0100111"
		, "(": "0101000"
		, ")": "0101001"
		, "*": "0101010"
		, "+": "0101011"
		, ",": "0101100"
		, "-": "0101101"
		, ".": "0101110"
		, "/": "0101111"
		, "\\": "1011100"
		, ":": "0111010"
		, ";": "0111011"
		, "[": "1011011"
		, "]": "1011101"
		, "{": "1111011"
		, "}": "1111101"
		, "<": "0111100"
		, ">": "0111110"
		, "|": "1111100"
		, "=": "0111101"
		, "^": "1011110"
		, "~": "1111110"
		, "?": "0111111"
		, "_": "1011111"
		, "0": "0110000"
		, "1": "0110001"
		, "2": "0110010"
		, "3": "0110011"
		, "4": "0110100"
		, "5": "0110101"
		, "6": "0110110"
		, "7": "0110111"
		, "8": "0111000"
		, "9": "0111001"
		, "A": "1000001"
		, "a": "1100001"
		, "B": "1000010"
		, "b": "1100010"
		, "C": "1000011"
		, "c": "1100011"
		, "D": "1000100"
		, "d": "1100100"
		, "E": "1000101"
		, "e": "1100101"
		, "F": "1000110"
		, "f": "1100110"
		, "G": "1000111"
		, "g": "1100111"
		, "H": "1001000"
		, "h": "1101000"
		, "I": "1001001"
		, "i": "1101001"
		, "J": "1001010"
		, "j": "1101010"
		, "K": "1001011"
		, "k": "1101011"
		, "L": "1001100"
		, "l": "1101100"
		, "M": "1001101"
		, "m": "1101101"
		, "N": "1001110"
		, "n": "1101110"
		, "O": "1001111"
		, "o": "1101111"
		, "P": "1010000"
		, "p": "1110000"
		, "Q": "1010001"
		, "q": "1110001"
		, "R": "1010010"
		, "r": "1110010"
		, "S": "1010011"
		, "s": "1110011"
		, "T": "1010100"
		, "t": "1110100"
		, "U": "1010101"
		, "u": "1110101"
		, "V": "1010110"
		, "v": "1110110"
		, "W": "1010111"
		, "w": "1110111"
		, "X": "1011000"
		, "x": "1111000"
		, "Y": "1011001"
		, "y": "1111001"
		, "Z": "1011010"
		, "z": "1111010"
	}
	; this.asObject = asObject
	; this.file = 'ukraineStairs.svg'
	; this.newFile = process.argv[ 3 ]
	; this.phrase = process.argv[ 2 ]
	; this.readFile = require( 'fs' ).readFile
	; this.string = ''
	; this.stripLeft = stripLeft
	; this.stripRight = stripRight
	; this.svgson = require( 'svgson' )
	;
}
