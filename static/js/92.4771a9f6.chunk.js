(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[92],{894:function(e,n){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(a){var i=n[a],s=[];/^\w+$/.test(a)||s.push(/\w+/.exec(a)[0]),"diff"===a&&s.push("bold"),e.languages.diff[a]={pattern:RegExp("^(?:["+i+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:s}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(Prism)}}]);