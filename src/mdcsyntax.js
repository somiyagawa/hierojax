/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var mdcsyntax = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[6,10,12,13,14,15,16,17,18,19,36,38,48,49,50,51,52,53,54,55,56,58,61,84,85,86,87,88,89],$V1=[2,42],$V2=[1,3],$V3=[2,4],$V4=[6,10,12,13,14,15,16,17,18,19,24,26,28,30,32,36,37,38,39,40,41,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$V5=[48,49,50,51,52,53,54,55,56],$V6=[2,55],$V7=[1,8],$V8=[1,9],$V9=[1,10],$Va=[1,11],$Vb=[1,12],$Vc=[1,13],$Vd=[1,14],$Ve=[1,15],$Vf=[1,25],$Vg=[1,28],$Vh=[1,30],$Vi=[6,12,13,14,15,16,17,18,19,36,37,48,49,50,51,52,53,54,55,56,58,61,62],$Vj=[1,32],$Vk=[1,40],$Vl=[1,34],$Vm=[1,35],$Vn=[1,36],$Vo=[1,37],$Vp=[1,38],$Vq=[1,39],$Vr=[6,10,12,13,14,15,16,17,18,19,36,37,38,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$Vs=[6,10,12,13,14,15,16,17,18,19,24,26,36,37,38,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$Vt=[1,46],$Vu=[6,10,12,13,14,15,16,17,18,19,24,26,28,36,37,38,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$Vv=[2,29],$Vw=[1,49],$Vx=[1,50],$Vy=[1,51],$Vz=[1,52],$VA=[6,10,12,13,14,15,16,17,18,19,24,26,28,30,36,37,38,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$VB=[6,10,12,13,14,15,16,17,18,19,24,26,28,30,32,36,37,38,39,40,41,47,48,49,50,51,52,53,54,55,56,57,58,61,62,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89],$VC=[2,60],$VD=[10,12,13,14,15,16,17,18,19,36,38,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$VE=[6,10,12,13,14,15,16,17,18,19,24,26,28,30,32,36,37,38,39,40,41,47,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$VF=[2,53],$VG=[1,84],$VH=[1,85],$VI=[1,86],$VJ=[1,87],$VK=[1,88],$VL=[1,89],$VM=[1,90],$VN=[1,91],$VO=[1,92],$VP=[1,93],$VQ=[1,94],$VR=[1,95],$VS=[1,96],$VT=[1,97],$VU=[1,98],$VV=[1,99],$VW=[1,100],$VX=[1,101],$VY=[1,102],$VZ=[1,103],$V_=[1,104],$V$=[6,10,12,13,14,15,16,17,18,19,24,26,28,30,36,37,38,40,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$V01=[6,10,12,13,14,15,16,17,18,19,24,26,28,30,36,37,38,41,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"mdc":3,"space":4,"top_items":5,"EOF":6,"seps":7,"top_item":8,"sep":9,"SEP":10,"toggle":11,"BREAK":12,"TEXT":13,"LINE-NUMBER":14,"ARROW":15,"TAB":16,"LACUNA":17,"OMIT":18,"ZONE":19,"quadrat":20,"vertical_group":21,"group_shading":22,"quadrat_shade":23,"QUADRAT-SHADE":24,"horizontal_group":25,"COLON":26,"horizontal_element":27,"ASTERISK":28,"inner_group":29,"ZONE-PRE":30,"hieroglyph":31,"ZONE-POST":32,"overlay":33,"ligature":34,"absolute":35,"OPEN":36,"CLOSE":37,"OVERLAY-SINGLE":38,"OVERLAY-DOUBLE":39,"LIGATURE":40,"ABSOLUTE-CONTINUATION":41,"grammar":42,"sign":43,"modifiers":44,"placement":45,"enclosure":46,"SPACE":47,"SIGN":48,"FULL-BLANK":49,"HALF-BLANK":50,"LOST":51,"HALF-LOST":52,"TALL-LOST":53,"WIDE-LOST":54,"BRACKET-OPEN":55,"BRACKET-CLOSE":56,"ABSOLUTE":57,"EQUALS":58,"begin_enclosure":59,"end_enclosure":60,"BEGIN-ENCLOSURE":61,"END-ENCLOSURE":62,"modifier":63,"MIRROR":64,"ROTATE-90":65,"ROTATE-180":66,"ROTATE-270":67,"ROTATE-360":68,"ROTATE-90-MIRROR":69,"ROTATE-180-MIRROR":70,"ROTATE-270-MIRROR":71,"ROTATE-360-MIRROR":72,"ROTATE-DEGREES":73,"SCALE-PERCENTAGE":74,"RED-GLYPH":75,"GRAY-GLYPH":76,"ELONGATE-GLYPH":77,"GLYPH-SHADE":78,"SHADE-FULL":79,"SHADE-HALF":80,"SHADE-WIDE":81,"SHADE-TALL":82,"IGNORED-MODIFIER":83,"COLOR-TOGGLE":84,"RED":85,"BLACK":86,"SHADE-TOGGLE":87,"SHADE-ON":88,"SHADE-OFF":89,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",10:"SEP",12:"BREAK",13:"TEXT",14:"LINE-NUMBER",15:"ARROW",16:"TAB",17:"LACUNA",18:"OMIT",19:"ZONE",24:"QUADRAT-SHADE",26:"COLON",28:"ASTERISK",30:"ZONE-PRE",32:"ZONE-POST",36:"OPEN",37:"CLOSE",38:"OVERLAY-SINGLE",39:"OVERLAY-DOUBLE",40:"LIGATURE",41:"ABSOLUTE-CONTINUATION",47:"SPACE",48:"SIGN",49:"FULL-BLANK",50:"HALF-BLANK",51:"LOST",52:"HALF-LOST",53:"TALL-LOST",54:"WIDE-LOST",55:"BRACKET-OPEN",56:"BRACKET-CLOSE",57:"ABSOLUTE",58:"EQUALS",61:"BEGIN-ENCLOSURE",62:"END-ENCLOSURE",64:"MIRROR",65:"ROTATE-90",66:"ROTATE-180",67:"ROTATE-270",68:"ROTATE-360",69:"ROTATE-90-MIRROR",70:"ROTATE-180-MIRROR",71:"ROTATE-270-MIRROR",72:"ROTATE-360-MIRROR",73:"ROTATE-DEGREES",74:"SCALE-PERCENTAGE",75:"RED-GLYPH",76:"GRAY-GLYPH",77:"ELONGATE-GLYPH",78:"GLYPH-SHADE",79:"SHADE-FULL",80:"SHADE-HALF",81:"SHADE-WIDE",82:"SHADE-TALL",83:"IGNORED-MODIFIER",84:"COLOR-TOGGLE",85:"RED",86:"BLACK",87:"SHADE-TOGGLE",88:"SHADE-ON",89:"SHADE-OFF"},
productions_: [0,[3,3],[5,1],[5,3],[7,0],[7,2],[9,1],[9,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[20,2],[22,0],[22,2],[23,1],[21,1],[21,3],[25,1],[25,3],[27,5],[27,3],[27,3],[27,1],[29,1],[29,1],[29,1],[29,1],[29,4],[33,3],[33,3],[34,3],[34,3],[35,3],[35,3],[31,5],[31,4],[4,0],[4,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[45,0],[45,1],[42,0],[42,1],[46,3],[59,1],[60,1],[44,0],[44,2],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return new MdcLine($$[$0-1]);
break;
case 2:
this.$ = [$$[$0]];
break;
case 3:
this.$ = $$[$0-2].concat($$[$0-1], $$[$0]);
break;
case 4:
this.$ = new MdcToggle();
break;
case 5: case 61:
this.$ = $$[$0-1].extend($$[$0]);
break;
case 6: case 66: case 72: case 74: case 75: case 81:
this.$ = { };
break;
case 7: case 16: case 28: case 29: case 30: case 31: case 32:
this.$ = $$[$0];
break;
case 8:
this.$ = new MdcBreak(yytext);
break;
case 9:
this.$ = new MdcText(yytext);
break;
case 10:
this.$ = new MdcLineNumber(yytext);
break;
case 11: case 12: case 13: case 14: case 15:
this.$ = [];
break;
case 17:
this.$ = new MdcQuadrat($$[$0-1], $$[$0]);
break;
case 18:
this.$ = '';
break;
case 19:
this.$ = $$[$0-1];
break;
case 20:
this.$ = yytext;
break;
case 21:
this.$ = new MdcVertical([$$[$0]]);
break;
case 22: case 24: case 37: case 39:
this.$ = $$[$0-2].add($$[$0]);
break;
case 23:
this.$ = new MdcHorizontal([$$[$0]]);
break;
case 25:
this.$ = new MdcComplex($$[$0-4], $$[$0-2], $$[$0]);
break;
case 26:
this.$ = new MdcComplex($$[$0-2], $$[$0], null);
break;
case 27:
this.$ = new MdcComplex(null, $$[$0-2], $$[$0]);
break;
case 33:
this.$ = new MdcVertical($$[$0-2]);
break;
case 34: case 35:
this.$ = new MdcOverlay($$[$0-2], $$[$0]);
break;
case 36:
this.$ = new MdcLigature($$[$0-2], $$[$0]);
break;
case 38:
this.$ = new MdcAbsolute($$[$0-2], $$[$0]);
break;
case 40: case 41:
this.$ = $$[$0-3].addModifiers($$[$0-2]).addPlacement($$[$0-1]);
break;
case 44:
this.$ = new MdcSign(yytext);
break;
case 45:
this.$ = new MdcBlank(1);
break;
case 46:
this.$ = new MdcBlank(0.5);
break;
case 47:
this.$ = new MdcLost(1, 1);
break;
case 48:
this.$ = new MdcLost(0.5, 0.5);
break;
case 49:
this.$ = new MdcLost(0.5, 1);
break;
case 50:
this.$ = new MdcLost(1, 0.5);
break;
case 51:
this.$ = new MdcBracketOpen(yytext);
break;
case 52:
this.$ = new MdcBracketClose(yytext);
break;
case 53:
this.$ = null;
break;
case 54:
this.$ = MdcParse.absolute(yytext);
break;
case 57:
this.$ = new MdcEnclosure($$[$0-2], $$[$0-1], $$[$0]);
break;
case 58: case 59:
this.$ = yytext.substring(1, yytext.length-1);
break;
case 60:
this.$ = new MdcModifier();
break;
case 62: case 70:
this.$ = { mirror: true };
break;
case 63:
this.$ = { rotate: 90 };
break;
case 64:
this.$ = { rotate: 180 };
break;
case 65:
this.$ = { rotate: 270 };
break;
case 67:
this.$ = { rotate: 90, mirror: true };
break;
case 68:
this.$ = { rotate: 180, mirror: true };
break;
case 69:
this.$ = { rotate: 270, mirror: true };
break;
case 71:
this.$ = { rotate: parseInt(yytext.substring(2)) };
break;
case 73: case 83:
this.$ = { color: 'red' };
break;
case 76:
this.$ = { shade: MdcParse.corners(yytext) };
break;
case 77:
this.$ = { shade: MdcParse.corners('1234') };
break;
case 78:
this.$ = { shade: MdcParse.corners('1') };
break;
case 79:
this.$ = { shade: MdcParse.corners('12') };
break;
case 80:
this.$ = { shade: MdcParse.corners('13') };
break;
case 82:
this.$ = { color: 'toggle' };
break;
case 84:
this.$ = { color: 'black' };
break;
case 85: case 88:
this.$ = { shade: 'toggle' };
break;
case 86:
this.$ = { shade: 'on' };
break;
case 87:
this.$ = { shade: 'off' };
break;
}
},
table: [o($V0,$V1,{3:1,4:2,47:$V2}),{1:[3]},o($V0,$V3,{5:4,7:5}),o($V4,[2,43]),o($V5,$V6,{8:7,20:16,21:17,25:18,27:19,29:20,31:21,33:22,34:23,35:24,42:26,46:27,59:29,6:[1,6],12:$V7,13:$V8,14:$V9,15:$Va,16:$Vb,17:$Vc,18:$Vd,19:$Ve,36:$Vf,58:$Vg,61:$Vh}),o($Vi,[2,2],{9:31,11:33,10:$Vj,38:$Vk,84:$Vl,85:$Vm,86:$Vn,87:$Vo,88:$Vp,89:$Vq}),{1:[2,1]},o($Vr,$V3,{7:41}),o($Vr,[2,8]),o($Vr,[2,9]),o($Vr,[2,10]),o($Vr,[2,11]),o($Vr,[2,12]),o($Vr,[2,13]),o($Vr,[2,14]),o($Vr,[2,15]),o($Vr,[2,16]),o($Vr,[2,18],{22:42,23:44,24:[1,45],26:[1,43]}),o($Vs,[2,21],{28:$Vt}),o($Vu,[2,23]),o($Vu,[2,28],{30:[1,47]}),o([6,10,12,13,14,15,16,17,18,19,24,26,28,30,36,37,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$Vv,{32:[1,48],38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VA,[2,30]),o($VA,[2,31],{40:[1,53]}),o($VA,[2,32],{41:[1,54]}),o([10,12,13,14,15,16,17,18,19,36,37,38,48,49,50,51,52,53,54,55,56,58,61,84,85,86,87,88,89],$V3,{7:5,5:55}),{43:56,48:[1,57],49:[1,58],50:[1,59],51:[1,60],52:[1,61],53:[1,62],54:[1,63],55:[1,64],56:[1,65]},o($VB,$VC,{44:66}),o($V5,[2,56]),o($VD,$V3,{7:5,5:67}),o($VD,[2,58]),o($Vr,[2,5]),o($Vr,[2,6]),o($Vr,[2,7]),o($Vr,[2,82]),o($Vr,[2,83]),o($Vr,[2,84]),o($Vr,[2,85]),o($Vr,[2,86]),o($Vr,[2,87]),o($Vr,[2,88]),o($Vi,[2,3],{9:31,11:33,10:$Vj,38:$Vk,84:$Vl,85:$Vm,86:$Vn,87:$Vo,88:$Vp,89:$Vq}),o($Vr,[2,17]),o($V5,$V6,{27:19,29:20,31:21,33:22,34:23,35:24,42:26,46:27,59:29,25:68,36:$Vf,58:$Vg,61:$Vh}),o($Vr,$V1,{4:69,47:$V2}),o([6,10,12,13,14,15,16,17,18,19,36,37,38,47,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],[2,20]),o($V5,$V6,{29:20,31:21,33:22,34:23,35:24,42:26,46:27,59:29,27:70,36:$Vf,58:$Vg,61:$Vh}),o($V5,$V6,{42:26,46:27,59:29,31:71,58:$Vg,61:$Vh}),o($V5,$V6,{33:22,34:23,35:24,42:26,46:27,59:29,29:72,31:73,36:$Vf,58:$Vg,61:$Vh}),o($V5,$V6,{42:26,46:27,59:29,31:74,58:$Vg,61:$Vh}),o($V5,$V6,{42:26,46:27,59:29,31:75,58:$Vg,61:$Vh}),o($V5,$V6,{42:26,46:27,59:29,31:76,58:$Vg,61:$Vh}),o($V5,$V6,{42:26,46:27,59:29,31:77,58:$Vg,61:$Vh}),o($V5,$V6,{42:26,46:27,59:29,31:78,58:$Vg,61:$Vh}),o($V5,$V6,{42:26,46:27,59:29,31:79,58:$Vg,61:$Vh}),o($V5,$V6,{8:7,20:16,21:17,25:18,27:19,29:20,31:21,33:22,34:23,35:24,42:26,46:27,59:29,12:$V7,13:$V8,14:$V9,15:$Va,16:$Vb,17:$Vc,18:$Vd,19:$Ve,36:$Vf,37:[1,80],58:$Vg,61:$Vh}),o($VB,$VC,{44:81}),o($VB,[2,44]),o($VB,[2,45]),o($VB,[2,46]),o($VB,[2,47]),o($VB,[2,48]),o($VB,[2,49]),o($VB,[2,50]),o($VB,[2,51]),o($VB,[2,52]),o($VE,$VF,{45:82,63:83,57:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,68:$VL,69:$VM,70:$VN,71:$VO,72:$VP,73:$VQ,74:$VR,75:$VS,76:$VT,77:$VU,78:$VV,79:$VW,80:$VX,81:$VY,82:$VZ,83:$V_}),o($V5,$V6,{8:7,20:16,21:17,25:18,27:19,29:20,31:21,33:22,34:23,35:24,42:26,46:27,59:29,60:105,12:$V7,13:$V8,14:$V9,15:$Va,16:$Vb,17:$Vc,18:$Vd,19:$Ve,36:$Vf,58:$Vg,61:$Vh,62:[1,106]}),o($Vs,[2,22],{28:$Vt}),o($Vr,[2,19]),o($Vu,[2,24]),o($Vu,[2,26],{32:[1,107]}),o($Vu,[2,27]),o([6,10,12,13,14,15,16,17,18,19,24,26,28,36,37,48,49,50,51,52,53,54,55,56,58,61,62,84,85,86,87,88,89],$Vv,{38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VA,[2,34]),o($VA,[2,35]),o($V$,[2,36]),o($V01,[2,38]),o($V$,[2,37]),o($V01,[2,39]),o($VA,$V1,{4:108,47:$V2}),o($VE,$VF,{63:83,45:109,57:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,68:$VL,69:$VM,70:$VN,71:$VO,72:$VP,73:$VQ,74:$VR,75:$VS,76:$VT,77:$VU,78:$VV,79:$VW,80:$VX,81:$VY,82:$VZ,83:$V_}),o($V4,$V1,{4:110,47:$V2}),o($VB,[2,61]),o($VE,[2,54]),o($VB,[2,62]),o($VB,[2,63]),o($VB,[2,64]),o($VB,[2,65]),o($VB,[2,66]),o($VB,[2,67]),o($VB,[2,68]),o($VB,[2,69]),o($VB,[2,70]),o($VB,[2,71]),o($VB,[2,72]),o($VB,[2,73]),o($VB,[2,74]),o($VB,[2,75]),o($VB,[2,76]),o($VB,[2,77]),o($VB,[2,78]),o($VB,[2,79]),o($VB,[2,80]),o($VB,[2,81]),o($VB,[2,57]),o($VB,[2,59]),o($V5,$V6,{33:22,34:23,35:24,42:26,46:27,59:29,31:73,29:111,36:$Vf,58:$Vg,61:$Vh}),o($VA,[2,33]),o($V4,$V1,{4:112,47:$V2}),o($V4,[2,41]),o($Vu,[2,25]),o($V4,[2,40])],
defaultActions: {6:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


class MdcParse {
	static absolute(s) {
		const matched = s.match(/^{{([0-9]+),([0-9]+),([0-9]+)}}$/);
		if (matched)
			return { x: parseInt(matched[1]), y: parseInt(matched[2]), s: parseInt(matched[3]) };
		else
			return null;
	}
	static corners(s) {
		return { 
			ts: s.indexOf('1') >= 0,
			te: s.indexOf('2') >= 0,
			bs: s.indexOf('3') >= 0,
			be: s.indexOf('4') >= 0,
		};
	}
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 55;
break;
case 1:return 56;
break;
case 2:return 55;
break;
case 3:return 56;
break;
case 4:return 55;
break;
case 5:return 56;
break;
case 6:return 55;
break;
case 7:return 56;
break;
case 8:return 55;
break;
case 9:return 56;
break;
case 10:return 55;
break;
case 11:return 56;
break;
case 12:return 55;
break;
case 13:return 56;
break;
case 14:return 55;
break;
case 15:return 56;
break;
case 16:return 12;
break;
case 17:return 12;
break;
case 18:return 12;
break;
case 19:return 13;
break;
case 20:return 13;
break;
case 21:return 14;
break;
case 22:return 12;
break;
case 23:return 16;
break;
case 24:return 16;
break;
case 25:return 16;
break;
case 26:return 19;
break;
case 27:return 54;
break;
case 28:return 53;
break;
case 29:return 15;
break;
case 30:return 48;
break;
case 31:return 58;
break;
case 32:return 30;
break;
case 33:return 30;
break;
case 34:return 32;
break;
case 35:return 32;
break;
case 36:return 57;
break;
case 37:return 41;
break;
case 38:return 18;
break;
case 39:return 65;
break;
case 40:return 66;
break;
case 41:return 67;
break;
case 42:return 68;
break;
case 43:return 69;
break;
case 44:return 70;
break;
case 45:return 71;
break;
case 46:return 72;
break;
case 47:return 69;
break;
case 48:return 73;
break;
case 49:return 74;
break;
case 50:return 75;
break;
case 51:return 76;
break;
case 52:return 77;
break;
case 53:return 78;
break;
case 54:return 64;
break;
case 55:return 70;
break;
case 56:return 83;
break;
case 57:return 64;
break;
case 58:return 49;
break;
case 59:return 50;
break;
case 60:return 51;
break;
case 61:return 52;
break;
case 62:return 24;
break;
case 63:return 88;
break;
case 64:return 89;
break;
case 65:return 79;
break;
case 66:return 80;
break;
case 67:return 81;
break;
case 68:return 82;
break;
case 69:return 39;
break;
case 70:return 38;
break;
case 71:return 85;
break;
case 72:return 86;
break;
case 73:return 84;
break;
case 74:return 87;
break;
case 75:return 61;
break;
case 76:return 62;
break;
case 77:return 10;
break;
case 78:return 47;
break;
case 79:return 17;
break;
case 80:return 17;
break;
case 81:return 40;
break;
case 82:return 26;
break;
case 83:return 28;
break;
case 84:return 36;
break;
case 85:return 37;
break;
case 86:return 6;
break;
}
},
rules: [/^(?:\[&)/,/^(?:&\])/,/^(?:\[\{)/,/^(?:\}\])/,/^(?:\[\[)/,/^(?:\]\])/,/^(?:\[\\)/,/^(?:\\\])/,/^(?:\[")/,/^(?:"\])/,/^(?:\[')/,/^(?:'\])/,/^(?:\[\()/,/^(?:\)\])/,/^(?:\[\?)/,/^(?:\?\])/,/^(?:!![ \t\n\r\f_]*)/,/^(?:(\+s-)?!(=([0-9]+)%)?[ \t\n\r\f_]*)/,/^(?:\+s[ \t\n\r\f_]*)/,/^(?:\+[a-rt-z+S](\\\+|[^+])*)/,/^(?:@.*[\n\r\f])/,/^(?:\|[^|-]*)/,/^(?:\{[lL]([0-9]+),([0-9]+)\})/,/^(?:\?([0-9]+) *)/,/^(?:%clear\b)/,/^(?:%\{[^}]*\})/,/^(?:zone\{[^}]*\})/,/^(?:h\/)/,/^(?:v\/)/,/^(?:PF[0-9]-)/,/^(?:([A-Z]|Aa|Ff|NL|NU)[0-9]+[A-Za-z]*|[a-zA-Z]+|US[0-9A-Z]*|[0-9]+|"[^\"]+"|`)/,/^(?:=)/,/^(?:\^\^\^)/,/^(?:\^\^)/,/^(?:&&&)/,/^(?:&&)/,/^(?:\{\{[0-9]+,[0-9]+,[0-9]+\}\})/,/^(?:\*\*)/,/^(?:\^)/,/^(?:\\r1\b)/,/^(?:\\r2\b)/,/^(?:\\r3\b)/,/^(?:\\r4\b)/,/^(?:\\t1\b)/,/^(?:\\t2\b)/,/^(?:\\t3\b)/,/^(?:\\t4\b)/,/^(?:\\t)/,/^(?:\\R([0-9]+))/,/^(?:\\([0-9]+))/,/^(?:\\red\b)/,/^(?:\\i\b)/,/^(?:\\l\b)/,/^(?:\\shading[1234]+)/,/^(?:\\h\b)/,/^(?:\\v)/,/^(?:\\[a-zA-Z]+[0-9]*)/,/^(?:\\)/,/^(?:\.\.)/,/^(?:\.)/,/^(?:\/\/)/,/^(?:\/)/,/^(?:#[1234]+)/,/^(?:-?#b\b)/,/^(?:-?#e\b)/,/^(?:#\/\/)/,/^(?:#\/)/,/^(?:#h\/)/,/^(?:#v\/)/,/^(?:##)/,/^(?:#)/,/^(?:\$r\b)/,/^(?:\$b\b)/,/^(?:\$)/,/^(?:(- ?)?#)/,/^(?:<[SFHsfh]?[bme]?[0123]?- ?)/,/^(?:-[SFHsfh]?[0123]?>)/,/^(?:-[ \t\n\r\f_]*)/,/^(?:[ \t\n\r\f_]+)/,/^(?:\?\?)/,/^(?:\?)/,/^(?:&)/,/^(?::)/,/^(?:\*)/,/^(?:\()/,/^(?:\))/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = mdcsyntax;
exports.Parser = mdcsyntax.Parser;
exports.parse = function () { return mdcsyntax.parse.apply(mdcsyntax, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}