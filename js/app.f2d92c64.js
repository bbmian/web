(function(t){function e(e){for(var a,i,o=e[0],p=e[1],r=e[2],l=0,y=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&y.push(s[i][0]),s[i]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(t[a]=p[a]);c&&c(e);while(y.length)y.shift()();return u.push.apply(u,r||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(u.splice(e--,1),t=p(p.s=n[0]))}return t}var a={},i={app:0},s={app:0},u=[];function o(t){return p.p+"js/"+({}[t]||t)+"."+{"chunk-64a2bf0d":"00b19461","chunk-2fba94ea":"2c7fe73a","chunk-3f599536":"7a5d2eb5","chunk-5de0e1d2":"fcf2f51d","chunk-fa1a5044":"ff3e49bd","chunk-61f863b2":"bec8f2c7","chunk-9b543ca2":"bf3a93c7"}[t]+".js"}function p(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,p),n.l=!0,n.exports}p.e=function(t){var e=[],n={"chunk-3f599536":1,"chunk-5de0e1d2":1,"chunk-fa1a5044":1,"chunk-61f863b2":1,"chunk-9b543ca2":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-64a2bf0d":"31d6cfe0","chunk-2fba94ea":"31d6cfe0","chunk-3f599536":"8905a9b3","chunk-5de0e1d2":"3ebca6a4","chunk-fa1a5044":"973ddb25","chunk-61f863b2":"83e653b2","chunk-9b543ca2":"62b24a55"}[t]+".css",s=p.p+a,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var r=u[o],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===a||l===s))return e()}var y=document.getElementsByTagName("style");for(o=0;o<y.length;o++){r=y[o],l=r.getAttribute("data-href");if(l===a||l===s)return e()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=e,c.onerror=function(e){var a=e&&e.target&&e.target.src||s,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete i[t],c.parentNode.removeChild(c),n(u)},c.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(c)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=u);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,p.nc&&l.setAttribute("nonce",p.nc),l.src=o(t);var y=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;y.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",y.name="ChunkLoadError",y.type=a,y.request=i,n[1](y)}s[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},p.m=t,p.c=a,p.d=function(t,e,n){p.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},p.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)p.d(n,a,function(e){return t[e]}.bind(null,a));return n},p.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return p.d(e,"a",e),e},p.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p.p="/web/",p.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var y=0;y<r.length;y++)e(r[y]);var c=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},21:function(t,e){},22:function(t,e){},3:function(t,e){},3922:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"address payable","name":"_weth","type":"address"},{"internalType":"address","name":"_cToken0","type":"address"},{"internalType":"address","name":"_cToken1","type":"address"},{"internalType":"address","name":"_cEth","type":"address"},{"internalType":"uint256","name":"_protocolFeeRate","type":"uint256"},{"internalType":"uint256","name":"_maxTotalSupply","type":"uint256"},{"internalType":"int24","name":"_maxTwapDeviation","type":"int24"},{"internalType":"uint32","name":"_twapDuration","type":"uint32"},{"internalType":"uint8","name":"_uniPortionRate","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"feesToVault0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feesToVault1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feesToProtocol0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feesToProtocol1","type":"uint256"}],"name":"CollectFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"ErrorLogging","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"subject","type":"string"},{"indexed":false,"internalType":"address","name":"value","type":"address"}],"name":"GeneralA","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"subject","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"GeneralB","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"subject","type":"string"},{"indexed":false,"internalType":"string","name":"value","type":"string"}],"name":"GeneralS","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"MyLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"MyLog2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint128","name":"liquidity","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"newBalance0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance1","type":"uint256"}],"name":"RebalanceLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int24","name":"tick","type":"int24"},{"indexed":false,"internalType":"uint256","name":"totalAmount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalAmount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"Snapshot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolamount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolamount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lendingamount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lendingamount1","type":"uint256"}],"name":"Withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"AccumulateUniswapFees0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AccumulateUniswapFees1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"Amount","type":"uint256"}],"name":"_unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_wrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acceptGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"accounts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accruedProtocolFees0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accruedProtocolFees1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cHigh","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cLow","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"collectProtocol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToken0","type":"uint256"},{"internalType":"uint256","name":"amountToken1","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCAmounts","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getCapital","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getETHBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getPositionAmounts","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getSSLiquidity","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTwap","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUniswapPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastRebalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTick","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTwapDeviation","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFeeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_cErc20Contract","type":"address"}],"name":"redeemCErc20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_cEtherContract","type":"address"}],"name":"redeemCEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"setMaxTotalSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"_maxTwapDeviation","type":"int24"}],"name":"setMaxTwapDeviation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_team","type":"address"}],"name":"setTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_twapDuration","type":"uint32"}],"name":"setTwapDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"ratio","type":"uint8"}],"name":"setUniPortionRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"newLow","type":"int24"},{"internalType":"int24","name":"newHigh","type":"int24"},{"internalType":"int256","name":"swapAmount","type":"int256"},{"internalType":"bool","name":"zeroForOne","type":"bool"}],"name":"strategy0","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"newLow","type":"int24"},{"internalType":"int24","name":"newHigh","type":"int24"}],"name":"strategy1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20Contract","type":"address"},{"internalType":"address","name":"_cErc20Contract","type":"address"},{"internalType":"uint256","name":"_numTokensToSupply","type":"uint256"}],"name":"supplyErc20ToCompound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_cEtherContract","type":"address"},{"internalType":"address","name":"_ctoken","type":"address"}],"name":"supplyEthToCompound","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"int256","name":"swapAmount","type":"int256"},{"internalType":"bool","name":"zeroForOne","type":"bool"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"swap","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"team","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twapDuration","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniPortionRate","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"uniswapV3MintCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},4:function(t,e){},5:function(t,e){},"5e46":function(t,e,n){},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},a34a:function(t,e,n){"use strict";n("5e46")},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("5c96"),s=n.n(i),u=(n("0fae"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"super_container"},[n("router-view"),t._m(0)],1)}),o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"footer_content d-flex flex-md-row flex-column align-items-center align-items-start justify-content-start"},[n("div",{staticClass:"copyright"})])])])])])}],p=(n("7f7f"),n("99e5")),r=n.n(p),l=n("3922"),y=n("bc3a"),c=n.n(y);"undefined"!==typeof web3?(web3=new r.a(web3.currentProvider),console.log("web3 provider:web3.currentProvider")):(web3=new r.a(new r.a.providers.HttpProvider("https://goerli.infura.io/v3/68070d464ba04080a428aeef1b9803c6")),console.log("web3 provider:goerli"));var d={name:"App",data:function(){return{vaultAddress:"0x58b008535DC1d06dbAe22201D3F10b79c80f9dd4",keeperContract:null}},created:function(){this.keeperContract=new web3.eth.Contract(l,this.vaultAddress),this.getTokensRateOfUSD()},methods:{getName:function(){console.log("name="+this.$store.state.name)},getTokensRateOfUSD:function(){var t=this;c.a.get("https://api.coinlore.net/api/tickers/").then((function(e){var n=e.data.data;if(null!==n&&void 0!==n){t.$store.state.allTokensList=e.data.data,console.log("allTokensList count:",n.length);for(var a=0;a<n.length;a++)if("ETH"===n[a].symbol?(t.$store.state.token0RateOfUSD=n[a].price_usd,console.log("Get token0RateOfUSD is ",t.$store.state.token0RateOfUSD)):"USDC"===n[a].symbol&&(t.$store.state.token1RateOfUSD=n[a].price_usd,console.log("Get token1RateOfUSD is ",t.$store.state.token1RateOfUSD)),t.$store.state.token0RateOfUSD>0&&t.$store.state.token1RateOfUSD>0){t.$store.state.tokenExchangeRateLoaded=!0;break}}}))}}},m=d,f=n("2877"),b=Object(f["a"])(m,u,o,!1,null,null,null),T=b.exports,v=n("2f62");a["default"].use(v["a"]);var h=new v["a"].Store({state:{name:"SwapStream.",isConnected:!1,StatusButtonText:"",chainId:0,allTokensList:null,token0RateOfUSD:0,token1RateOfUSD:0,tokenExchangeRateLoaded:!1},mutations:{},actions:{setApproveStatus:function(t,e){var n=e.token+"_ApproveStatus",a=e.status;localStorage.setItem(n,a),console.log("setItem,key="+n+";value="+a),console.log("setItem after:val="+localStorage.getItem(n))},getApproveStatus:function(t,e){var n,a=e.token+"_ApproveStatus";return null!=localStorage.getItem(a)&&void 0!==localStorage.getItem(a)&&(n=localStorage.getItem(a),console.log("getItem,key="+a+";value="+n),n)}}}),g=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"\n              header_content\n              d-flex\n              flex-row\n              align-items-center\n              justify-content-start\n            "},[t._m(0),t._m(1),n("div",{staticClass:"\n    header_extra\n    d-flex\n    flex-row\n    align-items-center\n    justify-content-start\n    ml-auto\n  "},[n("div",{staticClass:"book_button trans_200"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.centerDialogVisible=!0}}},[t._v("Launch App")])]),n("el-dialog",{attrs:{title:"Automated Uniswap V3 Vault",visible:t.centerDialogVisible,"append-to-body":!0,width:"650px",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[n("div",{staticClass:"dialog_intro"},[t._v("Earn higher yield by automating concentrated liquidity while"),n("br"),t._v(" avoiding permanent loss. Using a unique combination of"),n("br"),t._v(" DeFi lending Pools and Uniswap V3.")]),n("br"),n("div",{staticClass:"block"},[n("span",{staticClass:"intro_icon"},[n("img",{attrs:{src:"images/token_icon.png",width:"30"}})]),n("span",{staticClass:"intro_cnt"},[t._v("Keep your tokens earning interest in both lending pools & V3")])]),n("div",{staticClass:"block"},[n("span",{staticClass:"intro_icon"},[t._v("$")]),n("span",{staticClass:"intro_cnt"},[t._v("Automatically rebalance with no swap fees")])]),n("div",{staticClass:"block"},[n("span",{staticClass:"intro_icon"},[t._v("50/50")]),n("span",{staticClass:"intro_cnt"},[t._v('Maintain a "50-50 v2 style" position in v3 while avoiding permanent loss')])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.lanuchApp}},[t._v("Lanuch App")]),n("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("Learn More")]),n("router-view")],1)])],1),t._m(2)])])])])]),t._m(3),t._m(4)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"#"}},[n("div",{staticStyle:{"vertical-align":"middle"}},[n("img",{attrs:{src:"images/logo.png",width:"30",height:"33"}}),t._v("  Vialend\n                ")]),n("div")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"main_nav"},[n("ul",{staticClass:"d-flex flex-row align-items-center justify-content-start"},[n("li",[n("a",{attrs:{href:"blog.html"}},[t._v("Docs")])]),n("li",[n("a",{attrs:{href:"contact.html"}},[t._v("Vote")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hamburger ml-auto"},[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("div",{staticClass:"background_image"}),n("div",{staticClass:"\n        menu_content\n        d-flex\n        flex-column\n        align-items-center\n        justify-content-center\n      "},[n("ul",{staticClass:"menu_nav_list text-center"},[n("li",[n("a",{attrs:{href:"index.html"}},[t._v("Docs")])]),n("li",[n("a",{attrs:{href:"about.html"}},[t._v("Vote")])])]),n("div",{staticClass:"menu_review"},[n("a",{attrs:{href:"#"}},[t._v("Launch App")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"parallax_background parallax-window",attrs:{"data-parallax":"scroll","data-speed":"0.8"}}),n("div",{staticClass:"home_container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"home_content text-center"},[n("div",{staticClass:"home_title"},[n("h1",[t._v("Welcome to Vialend")])]),n("div",{staticClass:"home_text"},[t._v("It's your best choice")])])])])])])])}],k=(n("60a3"),{data:function(){return{centerDialogVisible:!1}},methods:{lanuchApp:function(){this.centerDialogVisible=!1,this.$router.push({path:"/dashboard"})}}}),x=k,M=(n("a34a"),Object(f["a"])(x,w,_,!1,null,"5f1f0428",null)),C=M.exports;a["default"].use(g["a"]);var S=new g["a"]({mode:"history",base:"/web/",routes:[{path:"/",name:"home",component:C},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-64a2bf0d"),n.e("chunk-9b543ca2")]).then(n.bind(null,"7277"))}},{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-64a2bf0d"),n.e("chunk-2fba94ea"),n.e("chunk-fa1a5044")]).then(n.bind(null,"78c1"))}},{path:"/uniswap",name:"uniswap",component:function(){return Promise.all([n.e("chunk-64a2bf0d"),n.e("chunk-2fba94ea"),n.e("chunk-3f599536")]).then(n.bind(null,"e33a"))}},{path:"/vialendinfo",name:"vialendinfo",component:function(){return Promise.all([n.e("chunk-64a2bf0d"),n.e("chunk-2fba94ea"),n.e("chunk-5de0e1d2")]).then(n.bind(null,"901f"))}},{path:"/admin",name:"admin",component:function(){return Promise.all([n.e("chunk-64a2bf0d"),n.e("chunk-61f863b2")]).then(n.bind(null,"3530"))}}]}),A=n("130e");a["default"].config.productionTip=!1,a["default"].use(s.a,A["a"],c.a),a["default"].prototype.Web3=r.a,new a["default"]({router:S,store:h,render:function(t){return t(T)}}).$mount("#app")}});
//# sourceMappingURL=app.f2d92c64.js.map