(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[317],{1119:function(e,n){!function(e){for(var n=/(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g,(function(){return"\"(?:\\\\.|[^\\\\\"\r\n])*\"|'(?:\\\\.|[^\\\\'\r\n])*'"})).replace(/<comment>/g,(function(){return"\\/\\/.*|\\/\\*(?:(?!\\*\\/)[\\s\\S])*\\*\\/"})),r=0;r<2;r++)n=n.replace(/<expr>/g,(function(){return n}));n=n.replace(/<expr>/g,"[^\\s\\S]"),e.languages.qml={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},"javascript-function":{pattern:RegExp("((?:^|;)[ \t]*)function\\s+[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*\\s*\\(<js>*\\)\\s*\\{<js>*\\}".replace(/<js>/g,(function(){return n})),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:e.languages.javascript},"class-name":{pattern:/((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,lookbehind:!0},property:[{pattern:/((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0},{pattern:/((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0,inside:{keyword:/^property/,property:/\w+(?:\.\w+)*/}}],"javascript-expression":{pattern:RegExp("(:[ \t]*)(?![\\s;}[])(?:(?!$|[;}])<js>)+".replace(/<js>/g,(function(){return n})),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:e.languages.javascript},string:/"(?:\\.|[^\\"\r\n])*"/,keyword:/\b(?:as|import|on)\b/,punctuation:/[{}[\]:;,]/}}(Prism)}}]);