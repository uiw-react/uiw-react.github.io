(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{490:function(e,a){var n,r,i,s,t,c,p,o;n=Prism,r={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},s=/\\[wsd]|\.|\\p{[^{}]+}/i,t="(?:[^\\\\-]|"+(i=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/).source+")",c=RegExp(t+"-"+t),o=[/\\(?![123][0-7]{2})[1-9]/,{pattern:/\\k<[^<>']+>/,inside:{"group-name":p={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"}}}],n.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0},"charset-punctuation":/^\[|\]$/,range:{pattern:c,inside:{escape:i,"range-punctuation":/-/}},"special-escape":r,charclass:s,backreference:o,escape:i}},"special-escape":r,charclass:s,backreference:o,anchor:/[$^]|\\[ABbGZz]/,escape:i,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,inside:{"group-name":p}},/\)/],quantifier:/[+*?]|\{(?:\d+,?\d*)\}/,alternation:/\|/},["actionscript","coffescript","flow","javascript","typescript","vala"].forEach(function(e){var a=n.languages[e];a&&(a.regex.inside={"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/,"language-regex":{pattern:/[\s\S]+/,inside:n.languages.regex}})})}}]);