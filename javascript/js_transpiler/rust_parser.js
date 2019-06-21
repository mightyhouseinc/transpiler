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
var rust_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,12],$V2=[1,5],$V3=[1,7],$V4=[1,8],$V5=[1,9],$V6=[1,10],$V7=[1,11],$V8=[1,13],$V9=[1,14],$Va=[1,17],$Vb=[5,14,36],$Vc=[1,36],$Vd=[1,37],$Ve=[1,34],$Vf=[1,27],$Vg=[1,29],$Vh=[1,38],$Vi=[1,39],$Vj=[2,70],$Vk=[12,16,20,76],$Vl=[5,11,12,14,17,24,27,29,30,32,36,38,39,74],$Vm=[1,69],$Vn=[1,71],$Vo=[1,65],$Vp=[1,66],$Vq=[1,67],$Vr=[1,68],$Vs=[1,70],$Vt=[1,72],$Vu=[1,73],$Vv=[1,74],$Vw=[1,75],$Vx=[1,76],$Vy=[1,77],$Vz=[1,78],$VA=[13,14,15,16,20,23,35,51,52,53,54,55,56,57,58,59,60,61,62,69,76],$VB=[13,14,15,16,18,20,23,35,51,52,53,54,55,56,57,58,59,60,61,62,67,69,76],$VC=[1,84],$VD=[1,88],$VE=[20,23],$VF=[1,99],$VG=[2,84],$VH=[1,103],$VI=[1,109],$VJ=[2,74],$VK=[1,112],$VL=[14,20],$VM=[14,20,76],$VN=[1,154],$VO=[13,14,15,16,20,23,35,51,52,53,54,55,56,57,69,76],$VP=[13,14,15,16,20,23,35,51,52,53,54,55,56,57,58,59,69,76],$VQ=[1,163],$VR=[1,175];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"access_modifier":8,"public":9,"private":10,"struct":11,"IDENTIFIER":12,"{":13,"}":14,"<":15,">":16,"fn":17,"(":18,"parameters":19,")":20,"types":21,"statement_with_semicolon":22,";":23,"while":24,"e":25,"bracket_statements":26,"switch":27,"case_statements":28,"for":29,"if":30,"elif":31,"loop":32,"case_statement":33,"case":34,":":35,"break":36,"exprs":37,"return":38,"let":39,"mut":40,"=":41,"type":42,"access_array":43,"identifiers":44,"++":45,"--":46,"+=":47,"-=":48,"*=":49,"/=":50,"?":51,"||":52,"&&":53,"<=":54,">=":55,"==":56,"!=":57,"+":58,"-":59,"%":60,"*":61,"/":62,"not_expr":63,"!":64,"dot_expr":65,"parentheses_expr":66,".":67,"[":68,"]":69,"function_call":70,"parentheses_expr_":71,"NUMBER":72,"STRING_LITERAL":73,"void":74,"parameter":75,",":76,"expr":77,"&":78,"else":79,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"public",10:"private",11:"struct",12:"IDENTIFIER",13:"{",14:"}",15:"<",16:">",17:"fn",18:"(",20:")",23:";",24:"while",27:"switch",29:"for",30:"if",32:"loop",34:"case",35:":",36:"break",38:"return",39:"let",40:"mut",41:"=",45:"++",46:"--",47:"+=",48:"-=",49:"*=",50:"/=",51:"?",52:"||",53:"&&",54:"<=",55:">=",56:"==",57:"!=",58:"+",59:"-",60:"%",61:"*",62:"/",64:"!",67:".",68:"[",69:"]",72:"NUMBER",73:"STRING_LITERAL",74:"void",76:",",78:"&",79:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[8,1],[8,1],[6,5],[6,8],[6,8],[6,11],[6,2],[6,5],[6,7],[6,9],[6,6],[6,5],[6,5],[33,6],[28,2],[28,1],[22,3],[22,4],[22,2],[22,5],[22,4],[22,2],[22,2],[22,3],[22,3],[22,2],[22,2],[22,3],[22,3],[22,3],[22,3],[25,5],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,2],[25,1],[63,2],[63,1],[65,3],[65,1],[43,4],[66,1],[66,1],[66,3],[66,1],[71,2],[71,3],[71,1],[71,1],[71,1],[70,3],[70,4],[42,3],[42,1],[42,1],[75,3],[19,3],[19,1],[19,0],[37,3],[37,1],[77,2],[77,1],[21,3],[21,1],[31,7],[31,4],[44,3],[44,1],[26,3],[26,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 19:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 20: case 55: case 73:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 7:
this.$ = ["struct",$$[$0-3],$$[$0-1]]
break;
case 8:
this.$ = ["generic_struct",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 9:
this.$ = ["function","public","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 10:
this.$ = ["generic_function","public","Object",$$[$0-9],$$[$0-4],$$[$0-1],$$[$0-7]];
break;
case 11: case 86:
this.$ = ["semicolon",$$[$0-1]];
break;
case 12:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 13:
this.$ = ["switch",$$[$0-4],$$[$0-1]];
break;
case 14:
this.$ = ["for",$$[$0-6],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 15:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
case 17:
this.$ = ["infinite_loop",$$[$0-2]];
break;
case 18:
this.$ = ["case",$$[$0-4],$$[$0-2]]
break;
case 21: case 66:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 22: case 67:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 23:
this.$ = ["return",$$[$0]];
break;
case 24:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 25:
this.$ = ["initialize_constant","Object",$$[$0-2],$$[$0]];
break;
case 26:
this.$ = ["set_array_size",$$[$0-1],$$[$0][1],$$[$0][2]];
break;
case 27:
this.$ = ["initialize_empty_vars",$$[$0-1],$$[$0]];
break;
case 28: case 29:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 30: case 31:
this.$ = [$$[$0],$$[$0-1]];
break;
case 32: case 33: case 34: case 35: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 36:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 50:
this.$ = ["-",$$[$0]];
break;
case 52:
this.$ = ["!", [".",$$[$0]]];
break;
case 53:
this.$ = [".", $$[$0]];
break;
case 54: case 72: case 75: case 79: case 83:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 56:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 59:
this.$ = ["parentheses",$$[$0-1]];
break;
case 61:
this.$ = ["initializer_list","Object",[]];
break;
case 62:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 63: case 64: case 65:
this.$ = yytext;
break;
case 68:
this.$ = [$$[$0-2],"[]"];
break;
case 71:
this.$ = [$$[$0],$$[$0-2]];
break;
case 74:
this.$ = [];
break;
case 76: case 78: case 80: case 84:
this.$ = [$$[$0]];
break;
case 77:
this.$ = ["function_call_ref",$$[$0]];
break;
case 81:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 82:
this.$ = ["else",$$[$0-1]];
break;
case 85:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{1:[3]},{5:[1,18]},o($Vb,[2,3],{6:3,22:6,42:15,43:16,4:19,11:$V0,12:$V1,17:$V2,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,74:$Va}),{12:[1,20]},{12:[1,21]},{23:[1,22]},{18:[1,23]},{18:[1,24]},{18:[1,25]},{12:$Vc,13:$Vd,18:$Ve,25:26,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{13:[1,40]},{12:$Vj,18:[1,41],41:[1,42],45:[1,43],46:[1,44],47:[1,45],48:[1,46],49:[1,47],50:[1,48],68:[1,49]},{12:$Vc,13:$Vd,18:$Ve,25:50,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:[1,52],40:[1,51]},{12:[1,55],43:53,44:54},{41:[1,56]},o($Vk,[2,69]),{1:[2,1]},o($Vb,[2,2]),{13:[1,57],15:[1,58]},{15:[1,60],18:[1,59]},o($Vl,[2,11]),{12:$Vc,13:$Vd,18:$Ve,25:61,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:62,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$V1,22:63,38:$V8,39:$V9,42:15,43:16,74:$Va},{13:[1,64],15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},{12:$Vc,13:$Vd,18:$Ve,25:79,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VA,[2,51]),{12:$Vc,13:$Vd,18:$Ve,43:32,65:80,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VA,[2,53]),o($VA,[2,55],{18:[1,82],67:[1,81]}),o($VB,[2,57]),o($VB,[2,58]),{12:$Vc,13:$Vd,18:$Ve,25:83,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VB,[2,60]),o($VB,[2,64],{68:$VC}),{12:$Vc,13:$Vd,14:[1,85],18:$Ve,25:89,37:86,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi,77:87,78:$VD},o($VB,[2,63]),o($VB,[2,65]),{4:91,6:3,7:90,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{12:$Vc,13:$Vd,18:$Ve,20:[1,92],25:89,37:93,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi,77:87,78:$VD},{12:$Vc,13:$Vd,18:$Ve,25:94,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VE,[2,30]),o($VE,[2,31]),{12:$Vc,13:$Vd,18:$Ve,25:95,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:96,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:97,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:98,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:100,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,69:$VF,70:33,71:35,72:$Vh,73:$Vi},o($VE,[2,23],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),{12:[1,101]},{41:[1,102]},o($VE,[2,26]),o($VE,[2,27]),o($VE,$VG,{68:$VC,76:$VH}),{12:$Vc,13:$Vd,18:$Ve,25:104,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{4:91,6:3,7:105,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{12:[1,106]},{12:$VI,19:107,20:$VJ,75:108},{12:$VK,21:110,42:111,74:$Va},{15:$Vm,16:$Vn,20:[1,113],51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},{15:$Vm,16:$Vn,20:[1,114],51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},{23:[1,115]},{4:91,6:3,7:116,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{12:$Vc,13:$Vd,18:$Ve,25:117,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:118,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:119,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:120,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:121,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:122,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:123,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:124,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:125,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:126,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:127,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:128,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:129,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,25:130,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VA,[2,50]),o($VA,[2,52]),{12:$Vc,13:$Vd,18:$Ve,43:32,65:131,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$Vc,13:$Vd,18:$Ve,20:[1,132],25:89,37:133,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi,77:87,78:$VD},{15:$Vm,16:$Vn,20:[1,134],51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},{12:$Vc,13:$Vd,18:$Ve,25:100,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VB,[2,61]),{14:[1,135]},o($VL,[2,76],{76:[1,136]}),{12:$Vc,13:$Vd,18:$Ve,25:137,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VM,[2,78],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),{14:[1,138]},o([14,36],[2,4]),o($VE,[2,21]),{20:[1,139]},o($VE,[2,29],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VE,[2,32],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VE,[2,33],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VE,[2,34],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VE,[2,35],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($Vk,[2,68]),{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,69:[1,140]},{41:[1,141]},{12:$Vc,13:$Vd,18:$Ve,25:142,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:[1,144],44:143},o($VE,[2,28],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),{14:[1,145]},{16:[1,146]},{20:[1,147]},{20:[2,73],76:[1,148]},{35:[1,149]},{16:[1,150]},{16:[2,80],76:[1,151]},o([16,20,76],$Vj,{68:[1,152]}),{12:$V1,13:$VN,22:155,26:153,38:$V8,39:$V9,42:15,43:16,74:$Va},{13:[1,156]},{12:$Vc,13:$Vd,18:$Ve,25:157,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{14:[1,158]},{15:$Vm,16:$Vn,35:[1,159],51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},o([13,14,20,23,35,51,52,69,76],[2,37],{15:$Vm,16:$Vn,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o([13,14,20,23,35,51,52,53,69,76],[2,38],{15:$Vm,16:$Vn,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VO,[2,39],{58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VO,[2,40],{58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VO,[2,41],{58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VO,[2,42],{58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VO,[2,43],{58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VO,[2,44],{58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VP,[2,45],{60:$Vx,61:$Vy,62:$Vz}),o($VP,[2,46],{60:$Vx,61:$Vy,62:$Vz}),o($VA,[2,47]),o($VA,[2,48]),o($VA,[2,49]),o($VA,[2,54]),o($VB,[2,66]),{20:[1,160]},o($VB,[2,59]),o($VB,[2,62]),{12:$Vc,13:$Vd,18:$Ve,25:89,37:161,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi,77:87,78:$VD},o($VM,[2,77],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),{31:162,79:$VQ},o($VE,[2,22]),o([13,14,15,16,18,20,23,35,41,51,52,53,54,55,56,57,58,59,60,61,62,67,69,76],[2,56]),{12:$Vc,13:$Vd,18:$Ve,25:164,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VE,[2,25],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),o($VE,[2,83]),o($VE,$VG,{76:$VH}),o($Vl,[2,7]),{13:[1,165]},{13:[1,166]},{12:$VI,19:167,20:$VJ,75:108},{12:$VK,42:168,74:$Va},{18:[1,169]},{12:$VK,21:170,42:111,74:$Va},{69:$VF},o($Vl,[2,12]),{4:91,6:3,7:171,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{23:[1,172]},{28:173,33:174,34:$VR},{15:$Vm,16:$Vn,23:[1,176],51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},o($Vl,[2,16],{31:177,79:$VQ}),{12:$Vc,13:$Vd,18:$Ve,25:178,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},o($VB,[2,67]),o($VL,[2,75]),o($Vl,[2,17]),{13:[1,180],30:[1,179]},o($VE,[2,24],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),{4:91,6:3,7:181,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{4:91,6:3,7:182,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{20:[2,72]},o([20,76],[2,71]),{12:$VI,19:183,20:$VJ,75:108},{16:[2,79]},{14:[1,184]},o($Vl,[2,86]),{14:[1,185]},{14:[2,20],28:186,33:174,34:$VR},{12:$Vc,13:$Vd,18:$Ve,25:187,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{12:$V1,22:188,38:$V8,39:$V9,42:15,43:16,74:$Va},o($Vl,[2,15]),o([13,14,20,23,35,69,76],[2,36],{15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz}),{12:$Vc,13:$Vd,18:$Ve,25:189,43:32,59:$Vf,63:28,64:$Vg,65:30,66:31,70:33,71:35,72:$Vh,73:$Vi},{4:91,6:3,7:190,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{14:[1,191]},{14:[1,192]},{20:[1,193]},o($Vl,[2,85]),o($Vl,[2,13]),{14:[2,19]},{15:$Vm,16:$Vn,35:[1,194],51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},{20:[1,195]},{13:[1,196],15:$Vm,16:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz},{14:[1,197]},o($Vl,[2,8]),o($Vl,[2,9]),{13:[1,198]},{4:91,6:3,7:199,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{12:$V1,13:$VN,22:155,26:200,38:$V8,39:$V9,42:15,43:16,74:$Va},{4:91,6:3,7:201,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},o($Vl,[2,82]),{4:91,6:3,7:202,11:$V0,12:$V1,17:$V2,22:6,24:$V3,27:$V4,29:$V5,30:$V6,32:$V7,38:$V8,39:$V9,42:15,43:16,74:$Va},{36:[1,203]},o($Vl,[2,14]),{14:[1,204]},{14:[1,205]},{23:[1,206]},{31:207,79:$VQ},o($Vl,[2,10]),o([14,34],[2,18]),o($Vl,[2,81])],
defaultActions: {18:[2,1],167:[2,72],170:[2,79],186:[2,19]},
parseError: function parseError(str, hash) {
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
test_match:function (match, indexed_rule) {
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
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
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
case 0:/* skip whitespace and line comments */
break;
case 1:return 72
break;
case 2:return 73
break;
case 3:return 17
break;
case 4:return 39
break;
case 5:return 40
break;
case 6:return "if"
break;
case 7:return "else"
break;
case 8:return "loop"
break;
case 9:return "return"
break;
case 10:return "void"
break;
case 11:return "case"
break;
case 12:return "printf"
break;
case 13:return "while"
break;
case 14:return "const"
break;
case 15:return "struct"
break;
case 16:return "switch"
break;
case 17:return "for"
break;
case 18:return 76
break;
case 19:return 23
break;
case 20:return 67
break;
case 21:return 35
break;
case 22:return 53
break;
case 23:return 78
break;
case 24:return 52
break;
case 25:return 57
break;
case 26:return 64
break;
case 27:return 55
break;
case 28:return '>>'
break;
case 29:return 16
break;
case 30:return 54
break;
case 31:return '<<'
break;
case 32:return 15
break;
case 33:return 56
break;
case 34:return 41
break;
case 35:return 49
break;
case 36:return 61
break;
case 37:return 60
break;
case 38:return 50
break;
case 39:return 62
break;
case 40:return 48
break;
case 41:return 46
break;
case 42:return 59
break;
case 43:return 45
break;
case 44:return 47
break;
case 45:return 58
break;
case 46:return '^'
break;
case 47:return 51
break;
case 48:return 13
break;
case 49:return 14
break;
case 50:return 68
break;
case 51:return 69
break;
case 52:return 18
break;
case 53:return 20
break;
case 54:return 12
break;
case 55:return 5
break;
case 56:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|\/\/+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:fn\b)/,/^(?:let\b)/,/^(?:mut\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:loop\b)/,/^(?:return\b)/,/^(?:void\b)/,/^(?:case\b)/,/^(?:printf\b)/,/^(?:while\b)/,/^(?:const\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:for\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:&)/,/^(?:\|\|)/,/^(?:!=)/,/^(?:!)/,/^(?:>=)/,/^(?:>>)/,/^(?:>)/,/^(?:<=)/,/^(?:<<)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:%)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56],"inclusive":true}}
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
exports.parser = rust_parser;
exports.Parser = rust_parser.Parser;
exports.parse = function () { return rust_parser.parse.apply(rust_parser, arguments); };
exports.main = function commonjsMain(args) {
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