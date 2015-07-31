/*
<!--
 // === J.O. ===============================================================================================================================
 // === MODULE - _index.html - (VPP VISA MultiCurrency Journey v2.1b)
 // ===
 // === AUTHOR - Julius Olatokunbo
 // ===
 // === REASON - Improve VISA's VPP MultiCurrency journey, Visa's Banking App will, transform financial transactions into interesting
 // ===          social experiences. LANDING SCREEN
 // ===
 // === HISTORY- ===========================================================================================================================
 // === J.O. 20-NOV-2014 - v1.0 - Initial Skinning Inception.
 // === J.O. 20-NOV-2014 - v1.0 - Configure Screen Transitions.
 // === J.O. 28-NOV-2014 - v2.0 - Ensure mathematically correct exchange rate used
 // === J.O. 02-DEC-2014 - International Clicked only changes radio button
 // === J.O. 02-DEC-2014 - Ensure Amount clicked initiates ExchangeQuotation if (Int ON)
 // === J.O. ===============================================================================================================================
 -->
 */

 // === J.O. 02-DEC-2014 - Ensure Amount clicked initiates ExchangeQuotation if (Int ON)
const _GLOBAL_INT_ON = "ON";
const _GLOBAL_INT_OFF = "OFF";
//const _GLOBAL_INT_ = true;
const _GLOBAL_QUOTE_EXCHANGE = "_quotes.html";
 // === J.O. 02-DEC-2014 - Ensure Amount clicked initiates ExchangeQuotation if (Int ON)

var _GLOBAL_INT_ = "^";

// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

function _VPPmultiCurQuote(){
	
};




/* === J.O. 28-NOV-2014 ========================================================= */
/* === J.O. 28-NOV-2014 - v2.0 - Ensure mathematically correct exchange rate used */
/* === J.O. 28-NOV-2014 ========================================================= */
function getMyRates(jData) {
if (jData == null) {
alert("There was a problem parsing search results.");
return;
}
var myval = jData.ResultSet;
var mydiv = jData.xxMyDiv;
document.getElementById(mydiv).innerHTML = myval;
}
/* === J.O. 28-NOV-2014 ========================================================= */

/* === J.O. 28-NOV-2014 ========================================================= */
/* === J.O. 28-NOV-2014 - v2.0 - Ensure mathematically correct exchange rate used */
/* === J.O. 28-NOV-2014 ========================================================= */
function _VPPexchangeRate( _num ) {
	this._nameStr = "_VPPEXCHANGERATEL()";

var xxv1 = document.getElementById('xxvalue_1').value;
var xxv2 = document.getElementById('xxvalue_2').value;
 var xxf = document.getElementById('xxfrom').value.toUpperCase();
var xxt = document.getElementById('xxto').value.toUpperCase();


var tot_cost = 0;

	
	console.log(this._nameStr + "BEGIN");
	console.log(this._nameStr + "Value=<"+ xxv1 + "> Value=<"+xxv2+"> From=<" + xxf + "> To=<" + xxt + ">");

switch (_num)
{ 
   case 1 :
   if(xxv1 > 0){
getExchangeRatesDiv('xxrate_1',xxv1,xxf,xxt,'true');
tot_cost = Math.abs(Number(xxv1 * 0.05) + Number(xxv1)).toFixed(2);
$("#q_tot_cost").html(""+tot_cost+"");
$("#q_tot_cost_cur").html(""+xxf+"");
$("#q_our_fee").html(""+Number(xxv1 * 0.05).toFixed(2)+"");


	console.log(this._nameStr + "#q_tot_cost=<"+''+tot_cost+''+">");
	console.log(this._nameStr + "#q_tot_cost_cur=<"+''+xxf+''+">");
   };
   break;
   case 2 :
   if(xxv2 > 0){
getExchangeRatesDiv('xxrate_2',xxv2,xxt,xxf,'true');
   };
   break;

};



 
	console.log(this._nameStr + "Value=<"+ xxv1 + "> Value=<"+xxv2+"> From=<" + xxf + "> To=<" + xxt + ">");
	console.log(this._nameStr + "END");
 

};
/* === J.O. 28-NOV-2014 =================================================== */



/* === J.O. 02-DEC-2014 ============================================================== */
// === J.O. 02-DEC-2014 - International Clicked only changes radio button
// === J.O. 02-DEC-2014 - Ensure Amount clicked initiates ExchangeQuotation if (Int ON)
/* === J.O. 02-DEC-2014 ============================================================== */
function _VPPdisplayInt( _Int )
{
this._nameStr = "_VPPDISPLAYINT()";
var _ReturnVal = false;

	console.log(this._nameStr + " - BEGIN");


	switch( _Int )
	{
		case _GLOBAL_INT_ON :
			//$("#int_lnk_off").attr(style,"width: 100%; visibility: hidden; display: none;");
			//$("#int_lnk_on").attr(style,"width: 100%;");
			$("#vpp_int").html('<img id="int_lnk_off" src="assets/int_lnk_off.png" style="width: 100%; visibility: hidden; display: none;" onclick="_VPPdisplayInt(_GLOBAL_INT_ON);" /><img id="int_lnk_on" src="assets/int_lnk_on.png"  style="width: 100%;" onclick="_VPPdisplayInt(_GLOBAL_INT_OFF);"/>');
			_GLOBAL_INT_ = true;
		break;

		case _GLOBAL_INT_OFF :
			//$("#int_lnk_on").attr(style,"width: 100%; visibility: hidden; display: none;");
			//$("#int_lnk_off").attr(style,"width: 100%;");
			$("#vpp_int").html('<img id="int_lnk_off" src="assets/int_lnk_off.png" style="width: 100%;" onclick="_VPPdisplayInt(_GLOBAL_INT_ON);" /><img id="int_lnk_on" src="assets/int_lnk_on.png"  style="width: 100%; visibility: hidden; display: none;" onclick="_VPPdisplayInt(_GLOBAL_INT_OFF);"/>');
			_GLOBAL_INT_ = false;
		break;
	};
  
  _VPPgotoUrl( "./findmynearest/index.html" )

	console.log(this._nameStr + " - END");
};

/* === J.O. 02-DEC-2014 ============================================================== */



// === J.O. 02-DEC-2014 - ===============================================================
// === J.O. 02-DEC-2014 - Ensure when AMNT clicked & INT we obtain VPP Exchange Quotation
// === J.O. 02-DEC-2014 - ================================================================

function _VPPgotoUrl( _url )
{
	this._nameStr = "_VPPGOTOURL()";
	var _ReturnVal = false;
	
if(window.console) 
 	console.log(this._nameStr + " - URL=<"+ _url +"> RETURNVAL=<" + _ReturnVal + ">");
 	//alert(this._nameStr + " - URL=<"+ _url +"> RETURNVAL=<" + _ReturnVal + ">");


	return (_ReturnVal = (this.location.href = _url));
};


function _VPPquoteExchange()
{
	this._nameStr = "_VPPQUOTEEXCHANGE()";
	var _ReturnVal = false;
	
	console.log(this._nameStr + " = BEGIN");
	
	if(_GLOBAL_INT_)
	{
		_VPPgotoUrl( _GLOBAL_QUOTE_EXCHANGE );
	}
	else
	{
		alert(this._nameStr + " - Only Available for International Currencies");
	};
	
	console.log(this._nameStr + " - END");
};
// === J.O. 02-DEC-2014 - ===============================================================
// === J.O. 02-DEC-2014 - Ensure when AMNT clicked & INT we obtain VPP Exchange Quotation
// === J.O. 02-DEC-2014 - ================================================================





function getMyRate(jData) {
if (jData == null) {
alert("There was a problem parsing search results.");
return;
}
var myval = jData.ResultSet;
var mydiv = jData.xxMyDiv;
document.getElementById(mydiv).innerHTML = myval;
};

function _VPPmultiCur() {
	alert("_VPPmultiCur - BEGIN");
	
	var _from_val = document.getElementById('cur_from_inp').value;
	var _from_lbl = document.getElementById('cur_from_lbl').value; 
	var _to_lbl = document.getElementById('cur_to_lbl').value;
	
	var _ReturnVal = "~";
	
	
	alert("Currency Convert " + _from_val + "FROM - " + _from_lbl + " TO " + _to_lbl);
	
	//getExchangeRates('20.89','GBP','EUR','true');
	_ReturnVal = getExchangeRates(_from_val, _from_lbl, _to_lbl, 'true');
	alert("_VPPmultiCur - Conversion=<"+_ReturnVal+">");
	
	alert("_VPPmultiCur - END");
};
