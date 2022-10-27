var OneTrustStub=function(e){"use strict";var t,o,n,a,i,r,s,l,c,p,u,d,m,h,g,f,b,A,y,C,v,I,S,w,T,L,R,B,D,_,G,E,P,U,k,O,F,V,x,N,H,M,j,K,z,q,J,W,Y,Q,X,Z,$,ee=new function(){this.optanonCookieName="OptanonConsent",this.optanonHtmlGroupData=[],this.optanonHostData=[],this.genVendorsData=[],this.IABCookieValue="",this.oneTrustIABCookieName="eupubconsent",this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal",this.isStubReady=!0,this.geolocationCookiesParam="geolocation",this.EUCOUNTRIES=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],this.stubFileName="otSDKStub",this.DATAFILEATTRIBUTE="data-domain-script",this.bannerScriptName="otBannerSdk.js",this.mobileOnlineURL=[],this.isMigratedURL=!1,this.migratedCCTID="[[OldCCTID]]",this.migratedDomainId="[[NewDomainId]]",this.userLocation={country:"",state:""}};(o=t=t||{})[o.Unknown=0]="Unknown",o[o.BannerCloseButton=1]="BannerCloseButton",o[o.ConfirmChoiceButton=2]="ConfirmChoiceButton",o[o.AcceptAll=3]="AcceptAll",o[o.RejectAll=4]="RejectAll",o[o.BannerSaveSettings=5]="BannerSaveSettings",(a=n=n||{})[a.Purpose=1]="Purpose",a[a.SpecialFeature=2]="SpecialFeature",(r=i=i||{}).Legal="legal",r.UserFriendly="user_friendly",(l=s=s||{}).Top="top",l.Bottom="bottom",(p=c=c||{})[p.Banner=0]="Banner",p[p.PrefCenterHome=1]="PrefCenterHome",p[p.VendorList=2]="VendorList",p[p.CookieList=3]="CookieList",(d=u=u||{})[d.RightArrow=39]="RightArrow",d[d.LeftArrow=37]="LeftArrow",(h=m=m||{}).AfterTitle="AfterTitle",h.AfterDescription="AfterDescription",h.AfterDPD="AfterDPD",(f=g=g||{}).PlusMinus="Plusminus",f.Caret="Caret",f.NoAccordion="NoAccordion",(A=b=b||{}).Consent="Consent",A.LI="LI",A.AddtlConsent="AddtlConsent",(C=y=y||{}).Iab1Pub="eupubconsent",C.Iab2Pub="eupubconsent-v2",C.Iab1Eu="euconsent",C.Iab2Eu="euconsent-v2",(I=v=v||{})[I.Disabled=0]="Disabled",I[I.Consent=1]="Consent",I[I.LegInt=2]="LegInt",(w=S=S||{})[w["Banner - Allow All"]=1]="Banner - Allow All",w[w["Banner - Reject All"]=2]="Banner - Reject All",w[w["Banner - Close"]=3]="Banner - Close",w[w["Preference Center - Allow All"]=4]="Preference Center - Allow All",w[w["Preference Center - Reject All"]=5]="Preference Center - Reject All",w[w["Preference Center - Confirm"]=6]="Preference Center - Confirm",(L=T=T||{}).Active="1",L.InActive="0",(B=R=R||{}).Host="Host",B.GenVendor="GenVen",(_=D=D||{})[_.Host=1]="Host",_[_.GenVen=2]="GenVen",_[_.HostAndGenVen=3]="HostAndGenVen",(E=G=G||{})[E.minDays=1]="minDays",E[E.maxDays=30]="maxDays",E[E.maxYear=31536e3]="maxYear",E[E.maxSecToDays=86400]="maxSecToDays",(U=P=P||{})[U.RTL=0]="RTL",U[U.LTR=1]="LTR",(O=k=k||{})[O.GoogleVendor=1]="GoogleVendor",O[O.GeneralVendor=2]="GeneralVendor",(V=F=F||{})[V.Days=1]="Days",V[V.Weeks=7]="Weeks",V[V.Months=30]="Months",V[V.Years=365]="Years",(N=x=x||{}).Checkbox="Checkbox",N.Toggle="Toggle",(M=H=H||{}).SlideIn="Slide_In",M.FadeIn="Fade_In",M.RemoveAnimation="Remove_Animation",(K=j=j||{}).Link="Link",K.Icon="Icon",(q=z=z||{}).consent="consent",q.set="set",(W=J=J||{}).update="update",W.default="default",W.ads_data_redaction="ads_data_redaction",(Q=Y=Y||{}).analytics_storage="analytics_storage",Q.ad_storage="ad_storage",Q.region="region",Q.wait_for_update="wait_for_update",(Z=X=X||{}).granted="granted",Z.denied="denied";var te="geo",oe="otpreview",ne=(($={})[F.Days]="PCenterVendorListLifespanDay",$[F.Weeks]="LfSpnWk",$[F.Months]="PCenterVendorListLifespanMonth",$[F.Years]="LfSpnYr",ae.prototype.initConsentSDK=function(){this.initCustomEventPolyfill(),this.ensureHtmlGroupDataInitialised(),this.updateGtmMacros(),this.getParam(),this.fetchBannerSDKDependency()},ae.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL(),this.otFetch(ee.bannerDataParentURL,this.getLocation.bind(this))},ae.prototype.getLocation=function(e){if(!e.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(e);var t=window;if(t.OneTrust&&t.OneTrust.geolocationResponse){var o=t.OneTrust.geolocationResponse;this.setGeoLocation(o.countryCode,o.stateCode),this.addBannerSDKScript(e)}else{var n=this.readCookieParam(ee.optanonCookieName,ee.geolocationCookiesParam);if(n||e.SkipGeolocation){var a=n.split(";")[0],i=n.split(";")[1];this.setGeoLocation(a,i),this.addBannerSDKScript(e)}else this.getGeoLocation(e)}},ae.prototype.getGeolocationURL=function(e){var t=e.TenantFeatures,o=""+ee.stubScriptElement.getAttribute("src").split(ee.stubFileName)[0]+e.Version;if(new RegExp("^file://","i").test(o)&&e.MobileSDK){var n="/"+e.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js";return t&&t.CookieV2GeolocationJsonApi?ee.storageBaseURL+n:"."+n}return e.GeolocationUrl},ae.prototype.geoLocationJsonCallback=function(e,t){t&&this.setGeoLocation(t.country,t.state),this.addBannerSDKScript(e)},ae.prototype.getGeoLocation=function(e){var t=this,o=e.TenantFeatures,n=this.getGeolocationURL(e);o&&o.CookieV2GeolocationJsonApi?this.otFetch(n,this.geoLocationJsonCallback.bind(this,e),!0):(window.jsonFeed=function(e){t.setGeoLocation(e.country,e.state)},this.jsonp(n,this.addBannerSDKScript.bind(this,e)))},ae.prototype.setGeoLocation=function(e,t){void 0===t&&(t=""),ee.userLocation={country:e,state:t}},ae.prototype.otFetch=function(e,t,o){if(void 0===o&&(o=!1),new RegExp("^file://","i").test(e))this.otFetchOfflineFile(e,t);else{ee.mobileOnlineURL.push(e);var n=new XMLHttpRequest;n.onload=function(){t(JSON.parse(this.responseText))},n.onerror=function(){t()},n.open("GET",e),o&&n.setRequestHeader("accept","application/json"),n.send()}},ae.prototype.otFetchOfflineFile=function(e,t){var o=(e=e.replace(".json",".js")).split("/"),n=o[o.length-1].split(".js")[0];this.jsonp(e,function(){t(window[n])})},ae.prototype.jsonp=function(e,t){var o=document.createElement("script");o.setAttribute("src",e),o.async=!0,o.type="text/javascript",this.crossOrigin&&o.setAttribute("crossorigin",this.crossOrigin),document.getElementsByTagName("head")[0].appendChild(o),new RegExp("^file://","i").test(e)||ee.mobileOnlineURL.push(e),t&&(o.onload=o.onerror=function(){t()})},ae.prototype.getRegionSet=function(e){var t,o,n,a=ee.userLocation,i=e.RuleSet.filter(function(e){return!0===e.Default});if(!a.country&&!a.state)return i&&0<i.length?i[0]:null;for(var r=a.state.toLowerCase(),s=a.country.toLowerCase(),l=0;l<e.RuleSet.length;l++)if(!0===e.RuleSet[l].Global)n=e.RuleSet[l];else{var c=e.RuleSet[l].States;if(c[s]&&0<=c[s].indexOf(r)){o=e.RuleSet[l];break}0<=e.RuleSet[l].Countries.indexOf(s)&&(t=e.RuleSet[l])}return o||t||n},ae.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData(),this.initializeGroupData(),this.initializeHostData(),this.initializeGenVenData()},ae.prototype.initializeGroupData=function(){var e=this.readCookieParam(ee.optanonCookieName,"groups");e&&(ee.optanonHtmlGroupData=this.deserialiseStringToArray(e))},ae.prototype.initializeHostData=function(){var e=this.readCookieParam(ee.optanonCookieName,"hosts");e&&(ee.optanonHostData=this.deserialiseStringToArray(e))},ae.prototype.initializeGenVenData=function(){var e=this.readCookieParam(ee.optanonCookieName,"genVendors");e&&(ee.genVendorsData=this.deserialiseStringToArray(e))},ae.prototype.initializeIABData=function(){this.validateIABGDPRApplied(),this.validateIABGlobalScope()},ae.prototype.validateIABGlobalScope=function(){var e=this.readCookieParam(ee.optanonCookieName,ee.oneTrustIsIABCrossConsentEnableParam);e?"true"===e?(ee.hasIABGlobalScope=!0,ee.isStubReady=!1):(ee.hasIABGlobalScope=!1,ee.IABCookieValue=this.getCookie(ee.oneTrustIABCookieName)):ee.isStubReady=!1},ae.prototype.validateIABGDPRApplied=function(){var e=this.readCookieParam(ee.optanonCookieName,ee.geolocationCookiesParam).split(";")[0];e?this.isBoolean(e)?ee.oneTrustIABgdprAppliesGlobally="true"===e:ee.oneTrustIABgdprAppliesGlobally=0<=ee.EUCOUNTRIES.indexOf(e):ee.isStubReady=!1},ae.prototype.isBoolean=function(e){return"true"===e||"false"===e},ae.prototype.readCookieParam=function(e,t){var o,n,a,i,r=this.getCookie(e);if(r){for(n={},a=r.split("&"),o=0;o<a.length;o+=1)i=a[o].split("="),n[decodeURIComponent(i[0])]=decodeURIComponent(i[1]).replace(/\+/g," ");return t&&n[t]?n[t]:t&&!n[t]?"":n}return""},ae.prototype.getCookie=function(e){if(this.isAmp){var t=JSON.parse(window.localStorage.getItem(this.domainId))||{};if(t)return t[e]||null}var o,n,a=e+"=",i=document.cookie.split(";");for(o=0;o<i.length;o+=1){for(n=i[o];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(a))return n.substring(a.length,n.length)}return null},ae.prototype.updateGtmMacros=function(){var e,t=[];for(e=0;e<ee.optanonHtmlGroupData.length;e++)this.endsWith(ee.optanonHtmlGroupData[e],":1")&&t.push(ee.optanonHtmlGroupData[e].replace(":1",""));for(e=0;e<ee.optanonHostData.length;e++)this.endsWith(ee.optanonHostData[e],":1")&&t.push(ee.optanonHostData[e].replace(":1",""));for(e=0;e<ee.genVendorsData.length;e++)this.endsWith(ee.genVendorsData[e],":1")&&t.push(ee.genVendorsData[e].replace(":1",""));var o=","+this.serialiseArrayToString(t)+",";window.OnetrustActiveGroups=o,window.OptanonActiveGroups=o,void 0!==window.dataLayer?window.dataLayer.constructor===Array&&(window.dataLayer.push({OnetrustActiveGroups:o}),window.dataLayer.push({OptanonActiveGroups:o})):window.dataLayer=[{event:"OneTrustLoaded",OnetrustActiveGroups:o},{event:"OptanonLoaded",OptanonActiveGroups:o}];var n,a=new CustomEvent("consent.onetrust",{detail:t});t.length&&(window.dataLayer.constructor===Array&&window.dataLayer.push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:o}),n=new CustomEvent("OneTrustGroupsUpdated",{detail:t})),setTimeout(function(){window.dispatchEvent(a),n&&window.dispatchEvent(n)})},ae.prototype.deserialiseStringToArray=function(e){return e?e.split(","):[]},ae.prototype.endsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},ae.prototype.serialiseArrayToString=function(e){return e.toString()},ae.prototype.setStubScriptElement=function(){ee.stubScriptElement=document.querySelector("script[src*='"+ee.stubFileName+"']"),ee.stubScriptElement&&ee.stubScriptElement.hasAttribute(ee.DATAFILEATTRIBUTE)?this.domainId=ee.stubScriptElement.getAttribute(ee.DATAFILEATTRIBUTE).trim():ee.stubScriptElement||(ee.stubScriptElement=document.querySelector("script[src*='"+ee.migratedCCTID+"']"),ee.stubScriptElement&&(ee.isMigratedURL=!0,this.domainId=ee.migratedDomainId.trim()))},ae.prototype.setDomainDataFileURL=function(){this.setStubScriptElement();var e=ee.stubScriptElement.getAttribute("src"),t=-1<e.indexOf("/consent");e&&(ee.isMigratedURL?ee.storageBaseURL=e.split("/consent/"+ee.migratedCCTID)[0]:ee.storageBaseURL=t?e.split("/consent")[0]:e.split("/scripttemplates/"+ee.stubFileName)[0]),this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId=this.domainId+"-test":this.isPreview=!1,ee.bannerBaseDataURL=ee.storageBaseURL&&ee.storageBaseURL+"/consent/"+this.domainId,ee.bannerDataParentURL=ee.bannerBaseDataURL+"/"+this.domainId+".json"},ae.prototype.initCustomEventPolyfill=function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e},ae.prototype.removeTcf=function(){delete window.__tcfapi;var e=document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];e&&e.parentElement.removeChild(e)},ae.prototype.getParamForIE=function(){return{get:function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?null:decodeURI(t[1])||""}}},ae.prototype.getParam=function(){window.document.documentMode?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var e="true"===this.urlParams.get("otreset"),t="true"===this.urlParams.get("otpreview");this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase();var o=this.readCookieParam(oe,"expiry"),n=this.readCookieParam(oe,te);this.isReset=e||o&&new Date(o)<new Date,this.isPreview=!this.isReset&&(t||o&&new Date(o)>new Date),this.setGeoParam(this.geoFromUrl||n)},ae.prototype.setGeoParam=function(e){if(e){var t=window;t.OneTrust||(t.OneTrust={});var o=e.split(",");t.OneTrust.geolocationResponse={countryCode:o[0],stateCode:o[1]}}},ae);function ae(){var c=this;this.iabType=null,this.iabTypeAdded=!0,this.crossOrigin=null,this.isAmp=!1,this.domainId="",this.isReset=!1,this.isPreview=!1,this.geoFromUrl="",this.addBannerSDKScript=function(e){var t=null;c.iabTypeAdded&&("IAB"!==(t=c.getRegionSet(e)).Type&&"IAB2"!==t.Type||(c.iabType=t.Type,c.intializeIabStub()),"IAB2"!==t.Type&&c.removeTcf());var o=ee.stubScriptElement.cloneNode(!0),n="";n=e.UseSDKRefactor?(ee.isMigratedURL&&(o.src=ee.storageBaseURL+"/scripttemplates/new/scripttemplates/"+ee.stubFileName+".js"),ee.storageBaseURL+"/scripttemplates/new/scripttemplates/"+e.Version+"/"+ee.bannerScriptName):"5.11.0"===e.Version?(ee.isMigratedURL&&(o.src=ee.storageBaseURL+"/scripttemplates/old/scripttemplates/"+ee.stubFileName+".js"),ee.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+ee.bannerScriptName):(ee.isMigratedURL&&(o.src=ee.storageBaseURL+"/scripttemplates/"+ee.stubFileName+".js"),ee.storageBaseURL+"/scripttemplates/"+e.Version+"/"+ee.bannerScriptName);["charset","data-language","data-document-language","data-domain-script","crossorigin"].forEach(function(e){ee.stubScriptElement.getAttribute(e)&&o.setAttribute(e,ee.stubScriptElement.getAttribute(e))}),c.crossOrigin=ee.stubScriptElement.getAttribute("crossorigin")||null,c.isAmp=!!ee.stubScriptElement.getAttribute("amp"),window.otStubData={domainData:e,stubElement:o,bannerBaseDataURL:ee.bannerBaseDataURL,mobileOnlineURL:ee.mobileOnlineURL,userLocation:ee.userLocation,regionRule:t,crossOrigin:c.crossOrigin,isAmp:c.isAmp,isPreview:c.isPreview,isReset:c.isReset,geoFromUrl:c.geoFromUrl,domainId:c.domainId,urlParams:c.urlParams},c.jsonp(n,null)},this.intializeIabStub=function(){var e=window;c.iabTypeAdded?("IAB"===c.iabType?void 0===e.__cmp&&(window.__cmp=c.executeCmpApi):void 0===e.__tcfapi&&(window.__tcfapi=c.executeTcfApi),c.addIabFrame()):c.addBackwardIabFrame(),e.receiveOTMessage=c.receiveIabMessage,(e.attachEvent||window.addEventListener)("message",e.receiveOTMessage,!1)},this.addIabFrame=function(){var e=window,t="IAB"===c.iabType?"__cmpLocator":"__tcfapiLocator";!e.frames[t]&&(e.document.body?c.addLocator(t,"CMP"):setTimeout(c.addIabFrame,5))},this.addBackwardIabFrame=function(){var e=window,t="__cmpLocator";!e.frames[t]&&(e.document.body?c.addLocator(t,"CMP"):setTimeout(c.addIabFrame,5));var o="__tcfapiLocator";!e.frames[o]&&(e.document.body?c.addLocator(o,"TCF"):setTimeout(c.addIabFrame,5))},this.addLocator=function(e,t){var o=window,n=o.document.createElement("iframe");n.style.cssText="display:none",n.name=e,n.setAttribute("title",t+" Locator"),o.document.body.appendChild(n)},this.receiveIabMessage=function(n){var a="string"==typeof n.data,e={};try{e=a?JSON.parse(n.data):n.data}catch(e){}if(e.__cmpCall&&"IAB"===c.iabType){var i=e.__cmpCall.callId,r=e.__cmpCall.command,t=e.__cmpCall.parameter;c.executeCmpApi(r,t,function(e,t){var o={__cmpReturn:{returnValue:e,success:t,callId:i,command:r}};n.source.postMessage(a?JSON.stringify(o):o,n.origin)})}else e.__cmpCall&&"IAB2"===c.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(e.__tcfapiCall&&"IAB2"===c.iabType){var s=e.__tcfapiCall.callId,l=e.__tcfapiCall.command,o=(t=e.__tcfapiCall.parameter,e.__tcfapiCall.version);c.executeTcfApi(l,t,function(e,t){var o={__tcfapiReturn:{returnValue:e,success:t,callId:s,command:l}};n&&n.source&&n.source.postMessage&&n.source.postMessage(a?JSON.stringify(o):o,"*")},o)}else e.__tcfapiCall&&"IAB"===c.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")},this.executeCmpApi=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];c.iabType="IAB";var o=e[0],n=e[1],a=e[2];if("function"==typeof a&&o)if(ee.isStubReady&&ee.IABCookieValue)switch(o){case"ping":c.getPingRequest(a,!0);break;case"getConsentData":c.getConsentDataRequest(a);break;default:c.addToQueue(o,n,a)}else c.addToQueue(o,n,a)},this.executeTcfApi=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(c.iabType="IAB2",!e.length)return window.__tcfapi.a||[];var o=e[0],n=e[1],a=e[2],i=e[3];"function"==typeof a&&o&&("ping"===o?c.getPingRequest(a):c.addToQueue(o,n,a,i))},this.addToQueue=function(e,t,o,n){var a=window,i="IAB"===c.iabType?"__cmp":"__tcfapi";a[i].a=a[i].a||[],a[i].a.push([e,t,o,n])},this.getPingRequest=function(e,t){if(void 0===t&&(t=!1),e){var o={},n=!1;"IAB"===c.iabType?(o={gdprAppliesGlobally:ee.oneTrustIABgdprAppliesGlobally,cmpLoaded:t},n=!0):"IAB2"===c.iabType&&(o={gdprApplies:ee.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},n=!0),e(o,n)}},this.getConsentDataRequest=function(e){e&&ee.IABCookieValue&&e({gdprApplies:ee.oneTrustIABgdprAppliesGlobally,hasGlobalScope:ee.hasIABGlobalScope,consentData:ee.IABCookieValue},!0)},this.initConsentSDK()}var ie=new ne;return e.OtSDKStub=ne,e.otSdkStub=ie,e}({});

/*globals console */
var SfdcWwwBase = SfdcWwwBase || {};

var oneTrustComponent = (function () {
  'use strict';

  // oneTrustContainer gets set in waitForOneTrustContainer()
  var oneTrustContainer,
  count = 0;
  var Keyboard = {
    TAB: 9,
    ESCAPE: 27,
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  };

  function changeButtons() {
    
    var categoryItems = ((oneTrustContainer && oneTrustContainer.querySelectorAll('.category-menu-switch-handler')) ? oneTrustContainer.querySelectorAll('.category-menu-switch-handler') : false);
    var saveCookiesButton = ((oneTrustContainer && oneTrustContainer.querySelector('.save-preference-btn-handler')) ? oneTrustContainer.querySelector('.save-preference-btn-handler') : false);
    var acceptCookiesButton = ((oneTrustContainer && oneTrustContainer.querySelector('#accept-recommended-btn-handler')) ? oneTrustContainer.querySelector('#accept-recommended-btn-handler') : false);
    var generalContentArea = ((oneTrustContainer && oneTrustContainer.querySelector('#ot-tab-desc')) ? oneTrustContainer.querySelector('#ot-tab-desc') : false);
    
    // Update backbutton in cookie list to move span inside of button
    var listSection = ((oneTrustContainer && oneTrustContainer.querySelector('#ot-pc-lst')) ? oneTrustContainer.querySelector('#ot-pc-lst') : false);
    var headingSection = ((listSection && listSection.querySelector('#ot-lst-title')) ? listSection.querySelector('#ot-lst-title') : false);
    var backButton = ((headingSection && headingSection.querySelector('.back-btn-handler')) ? headingSection.querySelector('.back-btn-handler') : false);
    var headingSecSpan = ((headingSection && headingSection.getElementsByTagName('span')) ? headingSection.getElementsByTagName('span') : false);

    // Move span inside of button so all can be selected or clicked, not just tiny arrow
    if (backButton && headingSecSpan) backButton.appendChild(headingSecSpan[0]);

    // Setup button toggles to show/hide save all button
    function toggleButtons(categoryItem) {
      if (saveCookiesButton && acceptCookiesButton) {
        if (typeof categoryItem.parentElement.dataset.optanongroupid === 'undefined') {
          if (saveCookiesButton.classList.contains('visible')) saveCookiesButton.classList.remove('visible');
          if (acceptCookiesButton.classList.contains('optanon-ghost-button')) acceptCookiesButton.classList.remove('optanon-ghost-button');
        } else {
          saveCookiesButton.classList.add('visible');
          acceptCookiesButton.classList.add('optanon-ghost-button');
        }
      } 
    }

    // Loop over links to add click and keydown events to call toggleButtons()
    for (let i = 0; i < categoryItems.length; i++) {
      // Click events
      categoryItems[i].addEventListener('click', function (e) {
        toggleButtons(e.currentTarget);
      });
      
      // Add keyboard navigation event to toggle buttons
      categoryItems[i].addEventListener('keydown', function(e) {
        // Arrow keys - left and right
        if (e.keyCode === Keyboard.LEFT || e.keyCode === Keyboard.RIGHT) toggleArrowKeyDirection();
      });
    }

    // OneTrust tool not fully accessible. Needs a little help with tab key and shift + tab keys
    if (generalContentArea && saveCookiesButton && acceptCookiesButton && categoryItems.length) {
      for (let i = 0; i < categoryItems.length; i++) {
        if (i === 0) {
          // Add listener to first item in list only. 
          categoryItems[0].addEventListener('keydown', function(e) {
            if (e.shiftKey === true && e.keyCode === Keyboard.TAB) {
              // Look for shift + tab key
              // Time out needed to prevent collision with OneTrust listener on tab key
              setTimeout(function(){ 
                acceptCookiesButton.focus(); 
              }, 100);
            } 
            if (e.shiftKey === false && e.keyCode === Keyboard.TAB) {
              // Look for tab key
              // Time out needed to prevent collision with OneTrust listener on tab key
              setTimeout(function(){ 
                generalContentArea.focus(); 
              }, 100);
            }
          });
        } else {
          // Captures focus to only OneTrust tool. Prevents shift tab from going into page level elements
          categoryItems[i].addEventListener('keydown', function(e) {
            if (e.shiftKey === true && e.keyCode === Keyboard.TAB) {
              // Look for shift + tab key
              // Time out needed to prevent collision with OneTrust listener on tab key
              setTimeout(function(){ 
                acceptCookiesButton.focus(); 
              }, 100);
            }
          });
        }
      }
    }
    
    // OneTrust activates menu items with left and right arrow keys. 
    // We just need to look for the active item and pass it into toggleButtons()
    function toggleArrowKeyDirection() {
      // Check for active menu then pass it into toggle button function
      for (let i = 0; i < categoryItems.length; i++) {
        if (categoryItems[i].classList.contains('ot-active-menu')) {
          toggleButtons(categoryItems[i]);
        }
      }
    }
  }

  function waitForOneTrustContainer() {
    // Container may not be on the page at the time of page load, wait for it
    var oneTrustStatusInterval = setInterval(function () {
      // Try to set one trust container
      oneTrustContainer = document.querySelector('#onetrust-pc-sdk');
      // Check that we have a container
      if (oneTrustContainer !== undefined && oneTrustContainer !== null && oneTrustContainer) {
        // If we have a container, proceed with change button wireup. Then clear interval.
        changeButtons();
        clearInterval(oneTrustStatusInterval);
      }
  
      if (count++ > 10) {
        // timeout if this takes more than 5 sec
        clearInterval(oneTrustStatusInterval);
      }
    }, 500);
  }
  
  function init() {
    waitForOneTrustContainer();
  }

  return {
    init: init,
    oneTrustComponent: oneTrustComponent
  }
  
}());

function runOneTrustComponent() {
  oneTrustComponent.init();
}

// In case the document is already rendered
if (document.readyState!='loading') runOneTrustComponent();
// Modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', runOneTrustComponent);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') runOneTrustComponent();
});

