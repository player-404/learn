(window.webpackJsonp=window.webpackJsonp||[]).push([["settings-dialog-edgenext-wc"],{"4N55":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var o,a=i("D57K"),n=i("P4Ao"),s=i("oePG"),r=i("QBS5"),l=i("vhqU"),d=i("EeEq"),c=i("uXNP"),g=i("6fxl");!function(e){e.listbox="listbox"}(o||(o={}));class u extends n.a{constructor(){super(...arguments),this.selectedIndex=-1,this.typeaheadBuffer="",this.typeaheadTimeout=-1,this.typeAheadExpired=!0,this.role=o.listbox,this._options=[],this.selectedOptions=[],this.shouldSkipFocus=!1,this.handleTypeAhead=e=>{this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeAheadExpired=!0,u.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeAheadExpired?"":this.typeaheadBuffer}${e}`)}}selectedIndexChanged(e,t){this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp("^"+e,"gi"),i=this.options.filter(e=>e.text.trim().match(t));if(i.length){const e=this.options.indexOf(i[0]);e>-1&&(this.selectedIndex=e)}this.typeAheadExpired=!1}}slottedOptionsChanged(e,t){this.$fastController.isConnected&&(this.options=t.reduce((e,t)=>(Object(d.b)(t)&&e.push(t),e),[]),this.options.forEach(e=>{e.id=e.id||Object(l.a)("option-")}),this.setSelectedOptions(),this.setDefaultSelectedOption())}get options(){return s.b.track(this,"options"),this._options}set options(e){this._options=e,s.b.notify(this,"options")}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this.options.forEach(e=>{e.selected=t.includes(e)})}get firstSelectedOption(){return this.selectedOptions[0]}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&this.firstSelectedOption&&(this.firstSelectedOption.focus(),requestAnimationFrame(()=>{this.firstSelectedOption.scrollIntoView({block:"nearest"})}))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}setDefaultSelectedOption(){if(this.options&&this.$fastController.isConnected){const e=this.options.findIndex(e=>null!==e.getAttribute("selected"));if(-1!==e)return void(this.selectedIndex=e);this.selectedIndex=0}}setSelectedOptions(){if(this.$fastController.isConnected&&this.options){const e=this.options[this.selectedIndex]||null;this.selectedOptions=this.options.filter(t=>t.isSameNode(e)),this.ariaActiveDescendant=this.firstSelectedOption?this.firstSelectedOption.id:"",this.focusAndScrollOptionIntoView()}}selectFirstOption(){this.disabled||(this.selectedIndex=0)}selectLastOption(){this.disabled||(this.selectedIndex=this.options.length-1)}selectNextOption(){!this.disabled&&this.options&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}get length(){return this.options?this.options.length:0}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case"Home":e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case"ArrowDown":e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case"ArrowUp":e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case"End":e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case"Enter":case"Escape":return!0;case" ":if(this.typeAheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(""+t),!0}}}u.TYPE_AHEAD_TIMEOUT_MS=1e3,u.slottedOptionFilter=e=>Object(d.b)(e)&&!e.disabled&&!e.hidden,Object(a.e)([s.d],u.prototype,"selectedIndex",void 0),Object(a.e)([s.d],u.prototype,"typeaheadBuffer",void 0),Object(a.e)([r.b],u.prototype,"role",void 0),Object(a.e)([Object(r.b)({mode:"boolean"})],u.prototype,"disabled",void 0),Object(a.e)([s.d],u.prototype,"slottedOptions",void 0),Object(a.e)([s.d],u.prototype,"selectedOptions",void 0);class h{constructor(){this.ariaActiveDescendant=""}}Object(a.e)([s.d],h.prototype,"ariaActiveDescendant",void 0),Object(a.e)([s.d],h.prototype,"ariaDisabled",void 0),Object(a.e)([s.d],h.prototype,"ariaExpanded",void 0),Object(g.a)(h,c.a),Object(g.a)(u,h)},EeEq:function(e,t,i){"use strict";i.d(t,"b",(function(){return c})),i.d(t,"a",(function(){return g}));var o=i("D57K"),a=i("P4Ao"),n=i("oePG"),s=i("QBS5"),r=i("FGLN"),l=i("C5kU"),d=i("6fxl");function c(e){return Object(r.e)(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class g extends a.a{constructor(e,t,i,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,this.initialValue=this.initialValue||"",e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),o&&(this.selected=o),this.proxy=new Option(""+this.textContent,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.$fastController.isConnected&&(this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected))}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value?this.value:this.textContent?this.textContent:""}get text(){return this.textContent}set value(e){this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=e),n.b.notify(this,"value")}get value(){return n.b.track(this,"value"),this._value?this._value:this.text}get form(){return this.proxy?this.proxy.form:null}}Object(o.e)([n.d],g.prototype,"defaultSelected",void 0),Object(o.e)([Object(s.b)({mode:"boolean"})],g.prototype,"disabled",void 0),Object(o.e)([Object(s.b)({attribute:"selected",mode:"boolean"})],g.prototype,"selectedAttribute",void 0),Object(o.e)([n.d],g.prototype,"selected",void 0),Object(o.e)([Object(s.b)({attribute:"value",mode:"fromView"})],g.prototype,"initialValue",void 0),Object(d.a)(g,l.a)},OLVR:function(e,t,i){"use strict";i.r(t),i.d(t,"ToolingInfo",(function(){return Ge})),i.d(t,"SettingsDialogEdgeNextWC",(function(){return U})),i.d(t,"SettingsDialogEdgeNextGear",(function(){return Ee})),i.d(t,"SettingsDialogEdgeNextWCTemplate",(function(){return Pe})),i.d(t,"SettingsDialogEdgeNextWCStyles",(function(){return Ue}));var o=i("A03o"),a=i("C49W"),n=i("sydv"),s=i("akWC"),r=i("Zn5T");const l=Object(o.a)(r.a.settingsDialogEdgeNextWC,"A sample Peregrine Web Component experience",Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Object(a.c)("linkEnabled","Link should be rendered")),Object(a.c)("enableAboutAdsLink","Enable About Ads Link in Footer","Defines whether the about our ads link in the footer should be shown")),Object(a.c)("enableAdvancedLayout","Enable Advanced Layout","Defines whether the advanced settings should be shown")),Object(a.c)("enableCustomLayout","Enable Custom Layout","Defines whether the custom settings should be a dropdown or L2")),Object(a.c)("enableCustomBackgroundImageFeature","Enable Custom Background Image Feature","Defines whether the custom background image feature should be enabled")),Object(a.c)("enablePrivacySettingsLink","Enable Privacy Settings Link in Footer","Defines whether the privacy settings link in the settings footer should be shown")),Object(a.c)("enableRecommendedSearch","Enable Recommended Search Below Search Box Feature","Defines whether the recommended search below search box should be enabled")),Object(a.c)("enableSearchHistory","Enable Search History Feature","Defines whether the search history should be enabled")),Object(a.c)("enableLeftRail","Enable Left Rail Toggle","Defines if the left rail toggle should be enabled")),Object(a.c)("enableSearchHistoryNoBGSelectiveMode","Enable Search History Feature","Defines whether the search history with no background should be enabled")),Object(a.c)("allowEnterpriseOverride","Enable Enterprise section with feed override options","The flag to indicate is override enterprise to consumer allowed.")),Object(a.b)("markets","markets","An array of available markets",Object(a.e)("Market instance","an instance of a market",{id:Object(n.b)("Market id","the market unique id e.g. en-us"),value:Object(n.b)("Market value","the market value e.g. en-us"),displayString:Object(n.b)("Display String","String to be displayed so the user knows which market it is"),direction:Object(n.b)("Direction","Direction of the view",["rtl","ltr"])},["id","value","displayString","direction"]))),Object(s.a)({aboutAds:"String for the about our ads link",advancedSettings:"String for the advanced settings section",affiliateDisclaimer:"String for the affiliate disclaimer text",background:"String for the custom background settings section",bingImageOption:"String for image of the day option. Custom image.",chooseYourOwnImageOption:"String for custom image option. Custom image",contentVisible:"String for on content visible content type",customSettings:"String for the custom settings section on L2",customTheme:"String for custom theme image option. Custom image",enterpriseSettings:"String for the enterprise settings section",feeds:"String for feeds toggle/select",focusedMode:"String for focused layout mode button",greeting:"String for greeting toggle",headingsOnly:"String for on headings only content type",imageOfTheDay:"String for image of the day toggle",informationalMode:"String for informational layout mode button",inspirationalMode:"String for inspirational layout mode button",legal:"String for the link to the Microsoft terms of use statement",mainSettings:"String for the page main settings section",manageThemeButton:"String for custom theme manage button",msnews:"String for Microsoft News",myFeed:" String for My Feed option in audience mode switcher",ntpTips:"String for ntp tips toggle",ntpTipsDescription:"String for the description of the ntp tips toggle",off:"String for content off content type",offOption:"String for off option. Custom image",office:"String for Office 365",onScroll:"String for on on-scroll content type",peekContent:"String for peek content type",privacy:"String for the link to the Microsoft privacy statement",privacySettings:"String for the link to bring up the OneTrust banner",quickLinks:"String for quick links toggle",quickLinksDropDown:"String for quick links drop down button",removeBackgroundImageButton:"String for the remove custom background image button",toggleOff:"String for off",toggleOn:"String for on",uploadBackgroundImageButton:"String for the upload custom background image button",workFeed:"String for Work Feed option in audience mode switcher",changeMarketText:"Language & content:",accessibility:{adminHoverMessage:"Alt text for enterprise icon from admin",advancedSettings:"Aria label for advanced settings menu button",backButton:"Aria label for custom section back button",closeButton:"Aria label for close button",customSettings:"Aria label for custom settings layout button",dialogButton:"Aria label for dialog button",feedsToolTip:"Tooltip for feed setting",imageRemoved:"Aria live text for removing a custom background image",imageUploaded:"Aria live text for uploading a custom background image",manageThemeButton:"Aria live text for managing a custom theme",ntpTipsToggle:"Aria label for advanced settings ntp tips toggle",removeImageButton:"Aria label for remove a custom image",replaceImageButton:"Aria label for replace a custom image",uploadANewImageButton:"Aria label for upload a new image button"},feedback:" String for entry point of feedback"})),["aboutAdsLink","enablePrivacySettingsLink","feedSettingsOptions","legalLink","markets","privacyLink","privacySettingLink"]);var d,c,g,u=i("D57K"),h=i("4wjP"),p=i("s9+9"),b=i("4k19"),m=i("eoyk");!function(e){e.backgroundImageType="backgroundImageType",e.quickLinks="quickLinks",e.quickLinksSelect="quickLinksSelect",e.imageOfTheDay="imageOfTheDay",e.feeds="feeds",e.greeting="Greeting",e.ntpTips="ntpTips",e.recommendedSearch="recommendedSearch",e.searchHistory="searchHistory",e.leftRail="leftRail"}(d||(d={})),function(e){e.customBackground="customBackground",e.ReplaceCustomImage="ReplaceCustomImage",e.BackgroundImageOff="BackgroundImageOff",e.BackgroundImageBing="BackgroundImageBing",e.RemoveCustomImage="RemoveCustomImage",e.UploadNewImage="UploadNewImage"}(c||(c={})),function(e){e.rtl="rtl",e.ltr="ltr"}(g||(g={}));var f=i("jE1l"),y=i("Ac7j"),v=i("5ZAu"),k=i("oePG"),x=i("QBS5"),$=i("iCAe"),O=i("dTwT"),w=i("y+Kz"),C=i("rvYQ"),S=i("I6Lx"),T=i("Qf6H"),I=i("HxRh"),L=i("XLvf"),B=i("Ybri"),j=i("keKk");const M=e=>!Object(B.a)(e);class D{static register(e,t){if(M(e)||Object(L.isNullOrUndefined)(t))return;const i=D.registry[e];D.registry[e]=t,Object(L.isNullOrUndefined)(i)||"object"!=typeof i||Object(L.isNullOrUndefined)(i.resolve)||"function"!=typeof i.resolve||i.resolve()}static isRegistered(e){return!M(e)&&!Object(L.isNullOrUndefined)(D.registry[e])&&"function"==typeof D.registry[e]}static getRegisteredCallback(e,t){return Object(u.b)(this,void 0,void 0,(function*(){if(!D.isRegistered(e)){if(!Object(L.isNullOrUndefined)(t)&&"number"==typeof t&&t<=0)return null;let i;if(Object(L.isNullOrUndefined)(D.registry[e])||Object(L.isNullOrUndefined)(D.registry[e].waiting)?(i=Object(j.c)(),D.registry[e]=i):i=D.registry[e],Object(L.isNullOrUndefined)(t))yield i.waiting;else{let e=!1;if(yield Promise.race([i.waiting,new Promise(i=>{setTimeout(()=>{e=!0,i()},t)})]),e)return null}}return D.registry[e]}))}}D.registry={};var E=i("0PLU"),P=i("u5KZ"),F=i("Am8i"),A=i("L1Sn"),H=i("IqCT"),R=i("QHbP"),q=i("wZHk"),V=i("D/6c"),z=i("+Ht2"),N=i("SSDD");class U extends H.a{constructor(){super(...arguments),this.displayEnterpriseFeedSwitcher=!1,this.marketSelectorProps={},this.focusRedirectEnabled=!1,this.isCustomThemeEnabled=!1,this.isGreetingModuleEnabled=!1,this.isTopsiteDropDownModule=!1,this.oneTrustBannerEnabled=!1,this.isCustomImageUploadPending=!1,this.isSetPrefToCustomAwaitingCallback=!1,this.storedTelemetryObject=null,this.mapTelemetryObject=new Map,this.isSettingsDialogVisible=!1,this.advancedSectionEnabled=!1,this.telemetryContext={},this.onGearClick=e=>{e.preventDefault();let t=this.isSettingsDialogVisible;t=!t,this.toggleSettingsDialog(t)},this.toggleSettingsDialog=e=>{this.isSettingsDialogVisible=e,e?(Object($.c)($.a.settings,e),this.displayedSection="main",document.addEventListener("click",this.onOutsideClick),document.addEventListener("keydown",this.onKeydown)):(document.removeEventListener("click",this.onOutsideClick),document.removeEventListener("keydown",this.onKeydown))},this.onKeydown=e=>{if("Escape"==e.key&&(this.toggleSettingsDialog(!1),this.settingGearButton&&v.a.queueUpdate(()=>this.settingGearButton.focus())),"Tab"==e.key){const e=this.shadowRoot.activeElement&&this.shadowRoot.activeElement.id;"2"!=e&&"feeds"!=e||v.a.queueUpdate(()=>this.closeButton.focus()),(this.displayNtpTips&&"ntpTips"==e||"marketSelector"==e)&&v.a.queueUpdate(()=>this.closeButton.focus())}switch(e.key){case"ArrowUp":this.focusPreviousLayoutButton(),e.preventDefault();break;case"ArrowDown":this.focusNextLayoutButton(),e.preventDefault();break;case"ArrowLeft":this.focusPreviousLayoutButton(),e.preventDefault();break;case"ArrowRight":this.focusNextLayoutButton(),e.preventDefault()}},this.onOutsideClick=e=>{const t=Object(R.a)("marketSelector"),i=e.composedPath();i.includes(this)||i.includes(t)||this.toggleSettingsDialog(!1)},this.getThemeTextColor=()=>this.chromiumPageSettingsDataConnector&&this.chromiumPageSettingsDataConnector.getThemeTextColor()?this.chromiumPageSettingsDataConnector.getThemeTextColor():null,this.toggleQuicklinksActionCallback=()=>Object(u.b)(this,void 0,void 0,(function*(){return this.onCustomToggleChange(d.quickLinks,!this.quickLinksEnabled),{actionCompleted:!0}})),this.isRecommendedSearchEnabled=()=>Object(O.a)().getObject(w.z,!0),this.isNoSearchHistoryExpected=()=>Object(O.a)().getObject(w.t,!0),this.isSearchHistoryEnabled=()=>Object(O.a)().getObject(w.B,!0),this.isNtpTipsEnabled=()=>Object(O.a)().getObject(w.u,!0),this.isAllowEnterpriseOverride=e=>{const t=e&&e.enabledFeatures&&e.enabledFeatures.includes("msNtpExp8");return!(!this.config.allowEnterpriseOverride&&!t)&&(!(!C.a.CurrentRequestTargetScope||C.a.CurrentRequestTargetScope.audienceMode!==h.a.Enterprise)||O.a&&Object(O.a)().getObject(w.b,!1))}}experienceConnected(){var e,t;this.ntpApi=window&&window.chrome&&window.chrome.ntpSettingsPrivate,this.embeddedSearchApi=window&&window.chrome&&window.chrome.embeddedSearch,this.chromiumPageSettingsDataConnector=Object(z.c)(p.a.ChromiumPageSettings),this.telemetryContext=this.getTelemetryContext();const i=matchMedia("(prefers-color-scheme:dark)");this.darkMode=!!(null==i?void 0:i.matches),this.darkMode&&(this.backgroundColor="#4A4A4A"),i.addEventListener("change",e=>{this.backgroundColor=e.matches?"#4A4A4A":"#FFFFFF",this.darkMode=!!(null==e?void 0:e.matches)}),this.initializeSettingsState(),this.initializeSettingProps(),this.embeddedSearchApi||P.a.sendAppErrorEvent(Object.assign(Object.assign({},I.Ch.ChromiumClientEmbededsearchAPIError),{message:"EmbeddedSearch API from chrome is not available"})),window.addEventListener("leftRailToggle",this.onLeftRailToggle.bind(this));const o=S.b.ClientSettings,a=(null===(e=null==o?void 0:o.detection)||void 0===e?void 0:e.isMsft)||(null===(t=null==o?void 0:o.detection)||void 0===t?void 0:t.isCorpNet);this.enableFeedback=this.config.internal?a&&this.config.enableFeedback:this.config.enableFeedback}getExperienceType(){return r.a.settingsDialogEdgeNextWC}focusNextLayoutButton(){const e=this.shadowRoot.getElementById(this.backgroundImageOff.value),t=this.shadowRoot.getElementById(this.backgroundImageTheme.value),i=this.shadowRoot.getElementById(this.backgroundImageBing.value);let o=this.shadowRoot.activeElement;if(o||(o=this.shadowRoot.getElementById(this.selectedLayoutMode)),o==e||t||i)return;const a=o.nextElementSibling;if(a&&a.id&&o!==this.lastLayoutButton)"custom"!==a.id&&a.click(),setTimeout(()=>{v.a.queueUpdate(()=>this.shadowRoot.getElementById(a.id).focus()),v.a.queueUpdate(()=>this.shadowRoot.getElementById(a.id).tabIndex=0)},50);else{const e=this.focusedLayoutButton;e.id!==b.i.custom&&e.click(),setTimeout(()=>{v.a.queueUpdate(()=>this.shadowRoot.getElementById("focused").focus()),v.a.queueUpdate(()=>this.shadowRoot.getElementById("focused").tabIndex=0)},50)}}focusPreviousLayoutButton(){let e=this.shadowRoot.activeElement;e||(e=this.shadowRoot.getElementById(this.selectedLayoutMode));const t=e.previousElementSibling;if(t&&t.id&&e!==this.focusedLayoutButton)"custom"!==t.id&&t.click(),setTimeout(()=>{v.a.queueUpdate(()=>this.shadowRoot.getElementById(t.id).focus()),v.a.queueUpdate(()=>this.shadowRoot.getElementById(t.id).tabIndex=0)},50);else{const e=this.lastLayoutButton;e.id!==b.i.custom&&e.click(),v.a.queueUpdate(()=>e.focus())}}isSettingsDialogEnabled(){var e;return Object(u.b)(this,void 0,void 0,(function*(){let t=!0;if(this.chromiumPageSettingsDataConnector){const i=yield this.chromiumPageSettingsDataConnector.getConfigDataAsync();(null===(e=null==i?void 0:i.enabledFeatures)||void 0===e?void 0:e.includes("msKidsModeThemePickerEnabled"))&&!this.config.enableSettingDialog&&(t=!1)}return t}))}initializeSettingsState(){return Object(u.b)(this,void 0,void 0,(function*(){this.registerObserverCallbacks(),D.register(E.c,this.toggleQuicklinksActionCallback);const e=yield this.isSettingsDialogEnabled(),t=yield this.chromiumPageSettingsDataConnector.getConfigDataAsync();this.allowEnterpriseFeedOverride=this.isAllowEnterpriseOverride(t),this.displayEnterpriseFeedSwitcher=!!t.showFeedSwitcher,this.focusRedirectEnabled=t.inPageSearchBoxType===f.b.redirect,yield this.instantiateMarketSelectorExperience();const i=(yield this.chromiumPageSettingsDataConnector.getPrimaryAccountInfoAsync()).accountType;this.isGreetingModuleEnabled=t.isNewTabGreetingEnabled&&i===f.d.MSA,this.displayNtpTips=i===f.d.MSA;const o=yield this.chromiumPageSettingsDataConnector.getPageSettingsStateAsync(),{backgroundImageTypePolicy:a,contentGroupPolicySettings:n,contentSource:s,currentBackgroundImageType:r,currentLayout:l,customBackgroundImageInfo:d,greetingEnabled:c,imageOfTheDayEnabled:g,isContentFeedManagedByPolicy:u,isQuickLinksManagedByPolicy:h,openSettingsDialogFlyout:p,quickLinksEnabled:m,selectedFeedDisplaySetting:y,selectedQuickLinksDisplaySetting:v}=o;this.isCustomThemeEnabled=void 0!==t.enabledFeatures&&t.enabledFeatures.indexOf("msAllowThemeInstallationFromChromeStore")>=0,void 0!==t.enabledFeatures&&(t.enabledFeatures.includes("msQuickLinksDefaultOneRow")||t.enabledFeatures.includes("msQuickLinksDefaultTwoRow"))&&(this.isTopsiteDropDownModule=!0);const k={enabled:e,backgroundImageTypePolicy:a,contentGroupPolicySettings:n,contentSource:s,currentBackgroundImageType:r,currentLayout:l,customBackgroundImageInfo:d,customThemeEnabled:this.isCustomThemeEnabled,customThemeDarkBackground:o.isNtpThemeBackgroundDark,displayedSection:this.displayedSection,displayDialog:p,displayEnterpriseFeedSwitcher:this.displayEnterpriseFeedSwitcher,allowEnterpriseFeedOverride:this.allowEnterpriseFeedOverride,imageOfTheDayEnabled:g,isContentFeedManagedByPolicy:u,isQuickLinksManagedByPolicy:h,displayCustomBackgroundImageModule:o.prefDerivedBrowserFeatures&&(o.prefDerivedBrowserFeatures.isCustomBackgroundImageFeatureFlightOn||this.isCustomThemeEnabled),displayGreetingModule:!!this.isGreetingModuleEnabled&&this.isGreetingModuleEnabled,displayTopSiteDropDownModule:!!this.isTopsiteDropDownModule&&this.isTopsiteDropDownModule,quickLinksEnabled:m,selectedQuickLinksDisplaySetting:v,selectedFeedDisplaySetting:y,greetingEnabled:c,ntpTipsEnabled:this.isNtpTipsEnabled(),recommendedSearchEnabled:this.isRecommendedSearchEnabled(),searchHistoryEnabled:this.isSearchHistoryEnabled(),leftRailEnabled:this.chromiumPageSettingsDataConnector.officeLeftRailEnabled()};p&&this.ntpApi.setPref(b.j.showSettings,!1),this.telemetryObject&&this.telemetryObject.contract&&(this.telemetryObject.contract.behavior=F.c.Customize),this.initState(k)}))}registerObserverCallbacks(){m.a.updateLayout.registerObserver(e=>{const t=e&&e.params;if(!t||t.length<1)return;const i=t[0],{configData:o,currentBackgroundImageType:a,contentSource:n,currentLayout:s,customBackgroundImageInfo:r,quickLinksEnabled:l,selectedQuickLinksDisplaySetting:d,imageOfTheDayEnabled:c,isContentFeedManagedByPolicy:g,isQuickLinksManagedByPolicy:h,selectedFeedDisplaySetting:p,greetingEnabled:b,backgroundImageTypePolicy:m,openSettingsDialogFlyout:f}=i,y=(Object(u.g)(i,["configData","currentBackgroundImageType","contentSource","currentLayout","customBackgroundImageInfo","quickLinksEnabled","selectedQuickLinksDisplaySetting","imageOfTheDayEnabled","isContentFeedManagedByPolicy","isQuickLinksManagedByPolicy","selectedFeedDisplaySetting","greetingEnabled","backgroundImageTypePolicy","openSettingsDialogFlyout"]),{enabled:!0,backgroundImageTypePolicy:m,contentSource:n,currentBackgroundImageType:a,currentLayout:s,customBackgroundImageInfo:r,customThemeEnabled:this.isCustomThemeEnabled,displayedSection:this.displayedSection,displayDialog:!1,allowEnterpriseFeedOverride:this.allowEnterpriseFeedOverride,displayEnterpriseFeedSwitcher:this.displayEnterpriseFeedSwitcher,greetingEnabled:b,imageOfTheDayEnabled:c,isContentFeedManagedByPolicy:g,isQuickLinksManagedByPolicy:h,ntpTipsEnabled:this.ntpTipsEnabled,recommendedSearchEnabled:this.recommendedSearchEnabled,searchHistoryEnabled:this.searchHistoryEnabled,leftRailEnabled:this.leftRailEnabled,quickLinksEnabled:l,selectedQuickLinksDisplaySetting:d,selectedFeedDisplaySetting:p,customThemeDarkBackground:i.isNtpThemeBackgroundDark,displayCustomBackgroundImageModule:i.prefDerivedBrowserFeatures&&(i.prefDerivedBrowserFeatures.isCustomBackgroundImageFeatureFlightOn||this.isCustomThemeEnabled),displayGreetingModule:!!this.isGreetingModuleEnabled&&this.isGreetingModuleEnabled,displayTopSiteDropDownModule:!!this.isTopsiteDropDownModule&&this.isTopsiteDropDownModule});this.initState(y)})}initState(e){if(this.settingDialogEnabled=e.enabled,this.settingDialogEnabled){let e;v.a.queueUpdate(()=>{e=this.shadowRoot.getElementById("SettingsDialog"),Object(R.b)(q.a.settingsButton,e)})}this.currentSetting=e.selectedFeedDisplaySetting,this.quickLinksDropDownValue=e.selectedQuickLinksDisplaySetting,this.allowEnterpriseFeedOverride=e.allowEnterpriseFeedOverride,this.recommendedSearchEnabled=e.recommendedSearchEnabled,this.searchHistoryEnabled=e.searchHistoryEnabled,this.leftRailEnabled=e.leftRailEnabled,this.greetingEnabled=e.greetingEnabled,this.quickLinksEnabled=e.quickLinksEnabled,this.ntpTipsEnabled=e.ntpTipsEnabled,this.allowEnterpriseFeedOverride&&(C.a.CurrentRequestTargetScope&&C.a.CurrentRequestTargetScope.audienceMode===h.a.Enterprise?this.enterpriseFeedOverrideMode=b.c.Office365:this.enterpriseFeedOverrideMode=b.c.MicrosoftNews),this.displayRecommendedSearch=!this.focusRedirectEnabled&&this.config.enableRecommendedSearch&&e.imageOfTheDayEnabled&&"always"!==e.selectedFeedDisplaySetting,this.displaySearchHistory=!this.focusRedirectEnabled&&this.config.enableSearchHistory&&!this.isNoSearchHistoryExpected(),this.displayLeftRail=this.config.enableLeftRail,this.displaySearchHistory&&this.config.enableSearchHistoryNoBGSelectiveMode&&(this.displaySearchHistory="always"!==e.selectedFeedDisplaySetting),this.displayGreeting=e.displayGreetingModule,this.displayQuickLinks=!e.displayTopSiteDropDownModule,this.displayQuickLinksDropdown=e.displayTopSiteDropDownModule,this.isCustomBackgroundImageDisabledByPolicy=e.backgroundImageTypePolicy&&(e.backgroundImageTypePolicy===b.b.disableAll||e.backgroundImageTypePolicy===b.b.disableCustomImage),void 0!==this.isCustomBackgroundImageDisabledByPolicy&&0!==this.isCustomBackgroundImageDisabledByPolicy||(this.isCustomBackgroundImageDisabledByPolicy=!1),this.isImageOfTheDayDisabledByPolicy=e.backgroundImageTypePolicy&&(e.backgroundImageTypePolicy===b.b.disableAll||e.backgroundImageTypePolicy===b.b.disableImageOfTheDay),void 0!==this.isImageOfTheDayDisabledByPolicy&&0!==this.isImageOfTheDayDisabledByPolicy||(this.isImageOfTheDayDisabledByPolicy=!1),(this.isCustomBackgroundImageDisabledByPolicy||this.isImageOfTheDayDisabledByPolicy)&&(this.isBackgroundTypeManagedByPolicy=this.isCustomBackgroundImageDisabledByPolicy||this.isImageOfTheDayDisabledByPolicy),this.isContentFeedDisabledByPolicy=e.isContentFeedManagedByPolicy,this.isQuickLinksDisabledByPolicy=e.isQuickLinksManagedByPolicy,this.isLayoutModeDisabledByPolicy=e.isContentFeedManagedByPolicy||e.isQuickLinksManagedByPolicy||this.isBackgroundTypeManagedByPolicy;const t=e.currentBackgroundImageType;this.backgroundMode=t,this.backgroundModeFlag=t,this.backgroundMode!==b.a.off?this.imageEnabledClass="setting-button-image-enable":this.darkMode?this.imageEnabledClass="dark-mode":this.imageEnabledClass="";const i=e.customBackgroundImageInfo;this.customBackgroundImage=i,this.hasLocalBackground=i&&i.hasImage,this.isCustomImageUploadPending&&t!==b.a.custom&&e.customBackgroundImageInfo&&e.customBackgroundImageInfo.hasImage&&(this.isCustomImageUploadPending=!1,this.isSetPrefToCustomAwaitingCallback=!0),this.isSetPrefToCustomAwaitingCallback&&t===b.a.custom&&(this.isSetPrefToCustomAwaitingCallback=!1),this.selectedLayoutMode=e.currentLayout}initializeSettingProps(){if(this.backgroundImageOff={value:b.a.off,text:this.strings.offOption},this.backgroundImageBing={value:b.a.bing,text:this.strings.bingImageOption},this.backgroundImageCustom={value:b.a.custom,text:this.strings.chooseYourOwnImageOption},this.backgroundImageTheme={value:b.a.theme,text:this.strings.customTheme},this.feedMenuItemsMap={headingsonly:{id:"headingsonly",title:this.strings.headingsOnly},peek:{id:"peek",title:this.strings.peekContent},always:{id:"always",title:this.strings.contentVisible},onscroll:{id:"onscroll",title:this.strings.onScroll},off:{id:"off",title:this.strings.off}},this.quickLinksMenuItemsMap={off:{id:b.l.off,title:this.strings.offOption},onerow:{id:b.l.onerow,title:this.strings.quickLinks1Row},tworows:{id:b.l.tworows,title:this.strings.quickLinks2Rows}},this.quickLinksMenuItems=[this.quickLinksMenuItemsMap[b.l.off],this.quickLinksMenuItemsMap[b.l.onerow],this.quickLinksMenuItemsMap[b.l.tworows]],this.feedMenuItems=[],this.config.feedSettingsOptions&&this.config.feedSettingsOptions.forEach(e=>{this.feedMenuItems.push(this.feedMenuItemsMap[e.id])}),this.enterpriseFeedOverride=[{value:b.c.Office365,text:this.strings.workFeed},{value:b.c.MicrosoftNews,text:this.strings.myFeed}],this.enterpriseFeedSwitcher=[{value:b.c.Office365,text:this.strings.office},{value:b.c.MicrosoftNews,text:this.strings.msnews}],this.advancedSectionEnabled=this.config.enableAdvancedLayout,this.settingLinks=[{url:this.config.privacyLink?this.config.privacyLink:null,title:this.strings.privacy,name:this.telemetryContext.privacy,id:0,separator:!0},{url:this.config.legalLink?this.config.legalLink:null,title:this.strings.legal,name:this.telemetryContext.legalMetaTag,id:1,separator:!1!==this.config.enableAboutAdsLink||!!this.config.enablePrivacySettingsLink}],!1!==this.config.enableAboutAdsLink){const e={url:this.config.aboutAdsLink?this.config.aboutAdsLink:null,title:this.strings.aboutAds,name:this.telemetryContext.aboutAdsMetaTag,id:2,separator:!!this.config.enablePrivacySettingsLink};this.settingLinks.push(e)}if(this.config.enablePrivacySettingsLink){const e={url:this.config.privacySettingLink?this.config.privacySettingLink:null,title:this.strings.privacySettings,name:this.telemetryContext.privacySettings,id:3};this.settingLinks.push(e)}}instantiateMarketSelectorExperience(){return Object(u.b)(this,void 0,void 0,(function*(){if(this.marketSelectionOptions=[...this.config.markets],this.marketSelectorProps.marketList=this.marketSelectionOptions,this.marketSelectorProps.id="marketSelector",!this.chromiumPageSettingsDataConnector)return;const e=yield this.chromiumPageSettingsDataConnector.getPageSettingsStateAsync();if(!e)return;const t=e.market;t&&""!==t&&(this.selectedMarketId=t,this.marketSelectorProps.onValueChange=e=>{e&&(y.a.marketUpdated.getActionSender(this.chromiumPageSettingsDataConnector).send(e),this.trackPageInvalidationOnReveal(N.a.MarketChange))})}))}updateFeedVisibility(e){const t=e&&e.target;if(!t&&!t.selectedIndex)return;const i=t.selectedIndex;if(isNaN(i))return;const o=this.feedMenuItems[i].id;this.onCustomToggleChange(d.feeds,o),this.fireSettingsTelemetry("click",t,o,F.c.Customize)}updateQuickLinks(e){const t=e&&e.target;if(!t&&!t.selectedIndex)return;const i=t.selectedIndex;isNaN(i)||(this.quickLinksDropDownValue=this.quickLinksMenuItems[i].id,this.onCustomToggleChange(d.quickLinksSelect,this.quickLinksDropDownValue),this.fireSettingsTelemetry("click",t,this.quickLinksDropDownValue,F.c.Customize))}onLayoutModeClick(e){this.onSelectLayout(e,this.selectedLayoutMode),e===b.i.custom&&this.toggleSection("custom")}onCustomBackgroundRadioClick(e){var t,i;if(e.preventDefault(),!(null===(t=e.target)||void 0===t?void 0:t.disabled)){if(null===(i=e.target)||void 0===i?void 0:i.value){const t=e.target.value;if(this.backgroundModeFlag==t)return;this.backgroundModeFlag=e.target.value,this.onCustomToggleChange(d.backgroundImageType,t)}this.isCustomImageUploadPending=!1,this.isSetPrefToCustomAwaitingCallback=!1,this.fireSettingsTelemetry("click",e.target,e.target.value)}}reportAppError(e,t){P.a.sendAppErrorEvent(Object.assign(Object.assign({},I.Ch[e]),{message:t}))}updateToggle(e,t){e.preventDefault();const i=e&&e.target;if(!i)return;const o=i.checked;this.onCustomToggleChange(t,o),this.fireSettingsTelemetry("click_nonnav",i,o.toString())}fireSettingsTelemetry(e,t,i,o){if(t){const a=t;A.a.addElement(a);const n=A.a.get(a);n&&n.contract&&((n.contract.content=n.contract.content||{}).headline=i.toString(),n.contract.type=F.f.ActionButton,n.contract.destinationUrl=location.href,a.setAttribute("data-customhandled","true"),A.a.setAttribute(a,n.contract),P.a.sendActionEvent(a,e,o))}}getTelemetryItem(e,t,i,o,a){return this.storedTelemetryObject=this.mapTelemetryObject.get(e)?this.mapTelemetryObject.get(e):null,this.settingTelemetryObject=this.telemetryObject&&this.telemetryObject.addOrUpdateChild({name:e,type:t,behavior:i,content:{headline:a||""},destinationUrl:o||""},this.storedTelemetryObject),this.storedTelemetryObject||this.mapTelemetryObject.set(e,this.settingTelemetryObject),this.settingTelemetryObject?this.settingTelemetryObject.getMetadataTag():null}getTelemetryContext(){if(!this.telemetryObject)return null;const e=this.getTelemetryItem(d.ntpTips,F.f.Interaction),t=this.getTelemetryItem(d.quickLinks,F.f.Interaction),i=this.getTelemetryItem(this.quickLinksDropDownValue,F.f.Interaction,F.c.Customize,"",this.quickLinksDropDownValue),o=this.getTelemetryItem(d.recommendedSearch,F.f.Interaction),a=this.getTelemetryItem("RecentBingSearches",F.f.Interaction,F.c.Customize),n=this.getTelemetryItem(d.greeting,F.f.Interaction,F.c.Customize);return{ntpToggleMetaTag:e,quickLinkToggleMetaTag:t,recommendedSearchToggleMetaTag:o,searchHistoryToggleMetaTag:a,leftRailToggleMetaTag:this.getTelemetryItem(d.leftRail,F.f.Interaction,F.c.Customize),greetingToggleMetaTag:n,quickLinkDropDownMetaTag:i,themeRadioButtonMetaTag:this.getTelemetryItem("Theme",F.f.Interaction,F.c.Undefined),customImageRadioButtonMetaTag:this.getTelemetryItem(c.customBackground,F.f.Interaction,F.c.Undefined),imageOffRadioButtonMetaTag:this.getTelemetryItem(c.BackgroundImageOff,F.f.Interaction,F.c.Undefined),bingImageRadioButtonMetaTag:this.getTelemetryItem(c.BackgroundImageBing,F.f.Interaction,F.c.Undefined),manageThemeButtonMetaTag:this.getTelemetryItem("ManageTheme",F.f.Interaction,F.c.Customize),replaceCustomImageButtonMetaTag:this.getTelemetryItem(c.ReplaceCustomImage,F.f.Interaction,F.c.Undefined),removeCustomImageButtonMetaTag:this.getTelemetryItem(c.RemoveCustomImage,F.f.Interaction,F.c.Undefined),uploadNewImageButtonMetaTag:this.getTelemetryItem(c.UploadNewImage,F.f.Interaction,F.c.Customize),feedDisplayOptionMetaTag:this.getTelemetryItem("Feeddisplayoptions",F.f.Interaction,F.c.Undefined),feedSelectorOptionMetaTag:this.getTelemetryItem("FeedSelector",F.f.Interaction,F.c.Undefined),backButtonMetaTag:this.getTelemetryItem("Back",F.f.Interaction,F.c.Undefined,"",this.strings.accessibility.backButton),settingsMetaTag:this.getTelemetryItem("Settings",F.f.ActionButton,F.c.Open,"",this.strings.accessibility.dialogButton),settingsFlyoutMetaTag:this.getTelemetryItem("Settingsflyout",F.f.Interaction),privacyMetaTag:this.getTelemetryItem("Privacy",F.f.Interaction,F.c.Navigate,this.config.privacyLink,this.strings.privacy),legalMetaTag:this.getTelemetryItem("Legal",F.f.Interaction,F.c.Navigate,this.config.legalLink,this.strings.legal),aboutAdsMetaTag:this.getTelemetryItem("AboutAds",F.f.Interaction,F.c.Navigate,this.config.aboutAdsLink,this.strings.aboutAds),privacy:this.getTelemetryItem("Privacy",F.f.Interaction,F.c.Navigate,this.config.privacyLink,this.strings.privacy),privacySettings:this.getTelemetryItem("PrivacySettings",F.f.Interaction,F.c.Navigate,"",this.strings.privacySettings),focusedButtonMetaTag:this.getTelemetryItem(b.i.focused,F.f.Interaction,this.selectedLayoutMode!==b.i.focused?F.c.Navigate:F.c.Customize,"",this.strings.focusedMode),inspirationalButtonMetaTag:this.getTelemetryItem(b.i.inspirational,F.f.Interaction,this.selectedLayoutMode!==b.i.inspirational?F.c.Navigate:F.c.Customize,"",this.strings.inspirationalMode),informationalButtonMetaTag:this.getTelemetryItem(b.i.informational,F.f.Interaction,this.selectedLayoutMode!==b.i.informational?F.c.Navigate:F.c.Customize,"",this.strings.informationalMode),customButtonMetaTag:this.getTelemetryItem(b.i.custom,F.f.Interaction,F.c.Customize,"",this.strings.customSettings),advancedButtonMetaTag:this.getTelemetryItem("AdvancedButton",F.f.Interaction,F.c.Customize,"",this.strings.advancedSettings),settingsCloseButtonMetaTag:this.getTelemetryItem("Close",F.f.Interaction,F.c.Close)}}onCustomToggleChange(e,t){switch(e){case d.quickLinks:this.chromiumPageSettingsDataConnector.updateQuickLinks(t);break;case d.quickLinksSelect:this.chromiumPageSettingsDataConnector.updateQuickLinksDisplayOption(t);break;case d.imageOfTheDay:this.chromiumPageSettingsDataConnector.updateBackgroundImageType(t?b.a.bing:b.a.off);break;case d.backgroundImageType:this.chromiumPageSettingsDataConnector.updateBackgroundImageType(t);break;case d.greeting:this.chromiumPageSettingsDataConnector.updateGreeting(t);break;case d.ntpTips:Object(O.a)().setItem(w.u,t.toString()),this.ntpTipsEnabled=t;break;case d.searchHistory:Object(O.a)().setItem(w.B,t.toString()),this.searchHistoryEnabled=t,this.$emit("searchHistoryToggle",{enabled:t});break;case d.leftRail:this.chromiumPageSettingsDataConnector.updateOfficeLeftRail(t),this.leftRailEnabled=t,this.$emit("leftRailToggle",{enabled:t});break;default:this.chromiumPageSettingsDataConnector.updateFeeds(t)}}onLeftRailToggle(e){var t;"leftrail"===(null===(t=null==e?void 0:e.detail)||void 0===t?void 0:t.src)&&(this.leftRailEnabled=null==e?void 0:e.detail.enabled)}onSelectLayout(e,t){if(e===t)return;let i;if(e!==b.i.custom){const t=b.k[e];i={currentBackgroundImageType:t.current_background_image_type,currentLayout:e,greetingEnabled:t.greeting,imageOfTheDayEnabled:t.current_background_image_type!==b.a.off,quickLinksEnabled:t.quick_links,selectedFeedDisplaySetting:t.feeds_position}}else{const t=this.chromiumPageSettingsDataConnector.getCurrentState();i=Object.assign(Object.assign({},t),{currentLayout:e})}this.chromiumPageSettingsDataConnector.updateLayout(i),this.recordUserLayoutChoice(i.currentLayout)}onDeleteLocalBackgroundImage(){this.isCustomImageUploadPending=!1,this.onCustomToggleChange(d.backgroundImageType,b.a.off),this.ntpApi.deleteLocalBackgroundImage()}onUploadLocalBackgroundImage(){this.isCustomImageUploadPending=!0,this.embeddedSearchApi.newTabPage.selectLocalBackgroundImage()}toggleSection(e){this.displayedSection=e,this.config.enableRecommendedSearch&&"custom"===e?this.recommendedSearchEnabled=this.isRecommendedSearchEnabled():this.config.enableSearchHistory&&"custom"===e&&(this.searchHistoryEnabled=this.isSearchHistoryEnabled()),"custom"===this.displayedSection?this.svgBackButton&&setTimeout(()=>{v.a.queueUpdate(()=>this.svgBackButton.focus())},50):"advanced"===this.displayedSection&&this.svgAdvancedButton&&setTimeout(()=>{v.a.queueUpdate(()=>this.svgAdvancedButton.focus())},50)}onManageTheme(){this.ntpApi.openThemeSettings&&this.ntpApi.openThemeSettings()}onContentSourceChange(e){var t;if(e.preventDefault(),null===(t=e.target)||void 0===t?void 0:t.value){if(this.enterpriseFeedSwitcherMode.toString()===e.target.value)return;this.enterpriseFeedSwitcherMode=e.target.value}this.ntpApi.setPref(b.j.showSettings,!0),this.ntpApi.setPref(b.j.feedType,this.enterpriseFeedSwitcherMode)}onEnterpriseFeedOverride(e){var t;if(e.preventDefault(),null===(t=e.target)||void 0===t?void 0:t.value){if(this.enterpriseFeedOverrideMode.toString()===e.target.value)return;this.enterpriseFeedOverrideMode=e.target.value}if(Object(O.a)().supported)return C.a.CurrentRequestTargetScope.audienceMode===h.a.Enterprise?(Object(O.a)().setObject(w.b,!0),void Object(V.b)()):void(Object(O.a)().getObject(w.b)&&(Object(O.a)().removeItem(w.b),Object(V.b)()))}recordUserLayoutChoice(e){const t={setting:"layout_mode",source:"ntp",timestamp:(new Date).getTime(),value:b.h[e]};T.a.savePreferenceSetting("layout_mode",t)}showFeedbackTool(){const e=Object(R.a)("msn-feedback-link");e&&e.onClick()}}Object(u.e)([k.d],U.prototype,"enterpriseFeedOverrideMode",void 0),Object(u.e)([k.d],U.prototype,"enterpriseFeedSwitcherMode",void 0),Object(u.e)([k.d],U.prototype,"hideMarketSelector",void 0),Object(u.e)([k.d],U.prototype,"selectedLayoutMode",void 0),Object(u.e)([k.d],U.prototype,"recommendedSearchEnabled",void 0),Object(u.e)([k.d],U.prototype,"searchHistoryEnabled",void 0),Object(u.e)([k.d],U.prototype,"greetingEnabled",void 0),Object(u.e)([k.d],U.prototype,"quickLinksEnabled",void 0),Object(u.e)([k.d],U.prototype,"leftRailEnabled",void 0),Object(u.e)([k.d],U.prototype,"quickLinksDropDownValue",void 0),Object(u.e)([k.d],U.prototype,"currentSetting",void 0),Object(u.e)([k.d],U.prototype,"hasLocalBackground",void 0),Object(u.e)([k.d],U.prototype,"customBackgroundImage",void 0),Object(u.e)([x.b],U.prototype,"backgroundMode",void 0),Object(u.e)([k.d],U.prototype,"backgroundImageBing",void 0),Object(u.e)([k.d],U.prototype,"backgroundImageCustom",void 0),Object(u.e)([k.d],U.prototype,"backgroundImageOff",void 0),Object(u.e)([k.d],U.prototype,"backgroundImageTheme",void 0),Object(u.e)([k.d],U.prototype,"isBackgroundTypeManagedByPolicy",void 0),Object(u.e)([k.d],U.prototype,"isContentFeedDisabledByPolicy",void 0),Object(u.e)([k.d],U.prototype,"isImageOfTheDayDisabledByPolicy",void 0),Object(u.e)([k.d],U.prototype,"isCustomBackgroundImageDisabledByPolicy",void 0),Object(u.e)([k.d],U.prototype,"isLayoutModeDisabledByPolicy",void 0),Object(u.e)([k.d],U.prototype,"isQuickLinksDisabledByPolicy",void 0),Object(u.e)([k.d],U.prototype,"displayNtpTips",void 0),Object(u.e)([k.d],U.prototype,"ntpTipsEnabled",void 0),Object(u.e)([k.d],U.prototype,"marketSelectorProps",void 0),Object(u.e)([k.d],U.prototype,"selectedMarketId",void 0),Object(u.e)([k.d],U.prototype,"displayedSection",void 0),Object(u.e)([k.d],U.prototype,"isSettingsDialogVisible",void 0),Object(u.e)([k.d],U.prototype,"advancedSectionEnabled",void 0),Object(u.e)([k.d],U.prototype,"settingDialogEnabled",void 0),Object(u.e)([k.d],U.prototype,"telemetryContext",void 0),Object(u.e)([k.d],U.prototype,"backgroundColor",void 0),Object(u.e)([k.d],U.prototype,"darkMode",void 0),Object(u.e)([k.d],U.prototype,"imageEnabledClass",void 0),Object(u.e)([k.d],U.prototype,"enableFeedback",void 0);var G,Q,_,Z=i("6BDD"),K=i("+53S"),X=i("6vBc"),W=i("m1Vi"),J=i("nSud"),Y=i("XiV1");!function(e){e.backgroundImageType="backgroundImageType",e.quickLinks="quickLinks",e.quickLinksSelect="quickLinksSelect",e.imageOfTheDay="imageOfTheDay",e.feeds="feeds",e.greeting="Greeting",e.ntpTips="ntpTips",e.recommendedSearch="recommendedSearch",e.searchHistory="searchHistory",e.leftRail="leftRail"}(G||(G={})),function(e){e.customBackground="customBackground",e.ReplaceCustomImage="ReplaceCustomImage",e.BackgroundImageOff="BackgroundImageOff",e.BackgroundImageBing="BackgroundImageBing",e.RemoveCustomImage="RemoveCustomImage",e.UploadNewImage="UploadNewImage"}(Q||(Q={})),function(e){e.rtl="rtl",e.ltr="ltr"}(_||(_={}));const ee=e=>Z.b`
<svg class =${e} height = "24" viewBox = "0 0 24 24" width = "24"xmlns = "http://www.w3.org/2000/svg">
    <rect width="24" height = "24" rx = "4" transform = "matrix(-1 0 0 1 24 0)" />
        <path fillRule="evenodd" clipRule = "evenodd" d = "M8.89453 11.0002C8.89453 10.448 8.44682 10.0002 7.89453 10.0002H5.00052C4.44823 10.0002 4.00052 10.448 4.00052 11.0002V12.8712C4.00052 13.4235 4.44823 13.8712 5.00052 13.8712H7.89453C8.44682 13.8712 8.89453 13.4235 8.89453 12.8712V11.0002Z" fill = "white" />
        <path fillRule="evenodd" clipRule = "evenodd" d = "M14.4475 11.0002C14.4475 10.448 13.9998 10.0002 13.4475 10.0002H10.5535C10.0012 10.0002 9.5535 10.448 9.5535 11.0002V12.8712C9.5535 13.4235 10.0012 13.8712 10.5535 13.8712H13.4475C13.9998 13.8712 14.4475 13.4235 14.4475 12.8712V11.0002Z" fill = "white" />
        <path fillRule="evenodd" clipRule = "evenodd" d = "M20.0007 11.0001C20.0007 10.4478 19.553 10.0001 19.0007 10.0001H16.1067C15.5544 10.0001 15.1067 10.4478 15.1067 11.0001V12.871C15.1067 13.4233 15.5544 13.871 16.1067 13.871H19.0007C19.553 13.871 20.0007 13.4233 20.0007 12.871V11.0001Z" fill = "white" />
</svg>
`,te=e=>Z.b`
<svg class =${e} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M24 19.9356V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V13.7421L2.01043 11.7316C3.57252 10.1695 6.10518 10.1695 7.66728 11.7316L10.8388 14.9031L12.0747 13.6672C13.6368 12.1051 16.1694 12.1051 17.7315 13.6672L24 19.9356Z" fill="white" />
        <circle cx="19.9998" cy="8" r="2" fill="white" />
</svg>
`,ie=e=>Z.b`
<svg class =${e} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" />
        <path clipRule="evenodd" fill="white" fillRule="evenodd" d="M 8.5 8.00024 C 8.5 7.44796 8.05228 7.00024 7.5 7.00024 H 4.5 C 3.94772 7.00024 3.5 7.44796 3.5 8.00024 V 10.0002 C 3.5 10.5525 3.94772 11.0002 4.5 11.0002 H 7.5 C 8.05228 11.0002 8.5 10.5525 8.5 10.0002 V 8.00024 Z" />
        <path clipRule="evenodd" fill="white" fillRule="evenodd" d="M 14.5 8.00024 C 14.5 7.44796 14.0523 7.00024 13.5 7.00024 H 10.5 C 9.94772 7.00024 9.5 7.44796 9.5 8.00024 V 10.0002 C 9.5 10.5525 9.94772 11.0002 10.5 11.0002 H 13.5 C 14.0523 11.0002 14.5 10.5525 14.5 10.0002 V 8.00024 Z" />
        <path clipRule="evenodd" fill="white" fillRule="evenodd" d="M 20.5 8 C 20.5 7.44772 20.0523 7 19.5 7 H 16.5 C 15.9477 7 15.5 7.44772 15.5 8 V 10 C 15.5 10.5523 15.9477 11 16.5 11 H 19.5 C 20.0523 11 20.5 10.5523 20.5 10 V 8 Z" />
        <path clipRule="evenodd" fill="white" fillRule="evenodd" d="M 3.5 16 C 3.5 14.8954 4.39543 14 5.5 14 H 18.5 C 19.6046 14 20.5 14.8954 20.5 16 V 24 H 3.5 V 16 Z" />
</svg>
`,oe=e=>Z.b`
<svg class =${e} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" />
        <path d="M6.60156 18L8.39062 17.5156L7.03906 16.1016L6.60156 18ZM7.75 14.5234L9.94531 16.8203L15.7656 10.7109L13.5781 8.41406L7.75 14.5234ZM16.7891 7.32031C16.638 7.15365 16.4453 7.02083 16.2109 6.92188C15.7474 6.71875 15.3151 6.78385 14.9141 7.11719L14.1172 7.89062L16.2734 10.1562L17.0156 9.30469C17.1406 9.14323 17.224 8.9401 17.2656 8.69531C17.3542 8.20573 17.1953 7.7474 16.7891 7.32031Z" fill="white" />
</svg>
`,ae='\n    <svg width="16" height="16" viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg">\n    <path d="M6.84961 6L12 11.1504L11.1504 12L6 6.84961L0.849609 12L0 11.1504L5.15039 6L0 0.849609L0.849609 0L6 5.15039L11.1504 0L12 0.849609L6.84961 6Z"></path>\n    </svg>\n';var ne=i("mnB3");J.a,ne.a;const se=Z.b`
<div class="market-selector-settings">
    <p class="background-title reduced-padding">
        ${e=>e.strings.changeMarketText||null}
    </p>
    <div class="language-dropdown">
        <msn-market-selector
            :id="${e=>e.marketSelectorProps.id}"
            :onValueChange="${e=>e.marketSelectorProps.onValueChange}"
            :defaultMarketId="${e=>e.marketSelectorProps.defaultMarketId}"
            :selectedMarketId="${e=>e.selectedMarketId}"
            :marketList="${e=>e.marketSelectorProps.marketList}"
            :label="${e=>e.marketSelectorProps.label}"
            :marketSelectorMetaTag="${e=>e.marketSelectorProps.marketSelectorMetaTag}"
            @change=${e=>e.toggleSettingsDialog(!1)}
        ></msn-market-selector>
    </div>
</div>
${Object(X.a)(e=>e.displayNtpTips,Z.b`
              <fluent-divider class="divider-margin" slot="divider"></fluent-divider>
                `)}
`;var re=i("eUhr");W.b,J.a,Y.a;const le=Z.b`
    <div class="toggle-custom">
        <fluent-switch
            checked=${e=>e.ntpTipsEnabled}
            aria-checked="${e=>e.ntpTipsEnabled}"
            id="ntpTips"
            @change=${(e,t)=>e.updateToggle(t.event,G.ntpTips)}
            class="${e=>e.ntpTipsEnabled?"toggle-fluent-switch toggle-fluent-switch-check":"toggle-fluent-switch"}"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.ntpToggleMetaTag)}
            >
            <label class="toggle-custom-title">
                ${e=>e.strings.ntpTips||null}
            </label>
            <span class="toggle-custom-label">${e=>e.ntpTipsEnabled?e.strings.toggleOn:e.strings.toggleOff}</span>
        </fluent-switch>
</div>
 <div class="affiliateDisclaimer">
        <span>${e=>e.strings.ntpTipsDescription}</span>
    </div>
`,de=Z.b`
<div class="${e=>"advanced"===e.displayedSection&&e.isSettingsDialogVisible?"settings-dialog":"hidden"}" id="settingDialogAdvanced" role="dialog">
    <fluent-button
        class="settings-close-button"
        title="${e=>e.strings.accessibility.closeButton||null}"
        aria-label="${e=>e.strings.accessibility.closeButton||null}"
        @click=${e=>e.toggleSettingsDialog(!1)}
        tabindex="0"
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.settingsCloseButtonMetaTag)}
        ${Object(K.b)("closeButton")}>
    <span class="close-button-glyph"> ${ae}</span>
    </fluent-button>
    <div class="heading-container-custom">
        <fluent-button
            class="custom-arrow-back"
            appearance="stealth"
            @click=${e=>e.toggleSection("main")}
            title="${e=>e.strings.accessibility.backButton||null}"
            aria-label="${e=>e.strings.accessibility.backButton||null}"
            tabindex="0"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.backButtonMetaTag)}
                 ${Object(K.b)("svgAdvancedButton")}>
                    <svg class="chevronIcon-floating-custom" width="12" height="12" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><g><rect width="32" height="32" rx="16" fill-opacity="0"></rect><path fill-opacity="1" d="M16 19.709L10.1465 13.8555L10.8555 13.1465L16 18.291L21.1445 13.1465L21.8535 13.8555L16 19.709Z"></path></g></svg>
        </fluent-button>
                <h1 class="custom-title">
                    ${e=>e.strings.advancedSettings||null}
                </h1>
    </div>
    <fluent-divider class="divider-margin" slot="divider"></fluent-divider>
            ${Object(X.a)(e=>!e.hideMarketSelector,se)}
            ${Object(X.a)(e=>e.displayNtpTips,le)}
</div>
`;var ce=i("i56n"),ge=i("e8No");J.a;const ue=Z.b`
<div style={{ fontSize: 0, lineHeight: 0 }} aria-live="polite" aria-relevant="all" aria-atomic="true">
    <div class="customImageContainer">
        <fluent-button
            class="backgroundImageButton"
            appearance="outline"
            @click=${e=>e.onManageTheme()}
            title="${e=>e.strings.manageThemeButton||null}"
            aria-label="${e=>e.strings.accessibility.manageThemeButton||null}"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.manageThemeButtonMetaTag)}
            >
            ${e=>e.strings.manageThemeButton}
        </fluent-button>
    </div>
</div>
`,he=Z.b`
<div class="customImageContainer">
    <fluent-button
        class="customImagePreviewOverlayButton"
        appearance="stealth"
        title="Replace"
        aria-label="${e=>e.strings.accessibility.replaceImageButton||null}"
        style="background-image: url(${e=>e.customBackgroundImage.resourceUrl});"
        @click="${e=>e.onUploadLocalBackgroundImage&&e.onUploadLocalBackgroundImage()}"
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.replaceCustomImageButtonMetaTag)}>
    </fluent-button>

    <fluent-button
    class="customImageRemoveButton"
        appearance="outline"
        @click=${e=>e.onDeleteLocalBackgroundImage()}
        title="${e=>e.strings.removeBackgroundImageButton||null}"
        aria-label="${e=>e.strings.accessibility.removeImageButton||null}"
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.removeCustomImageButtonMetaTag)}>
        ${e=>e.strings.removeBackgroundImageButton}
    </fluent-button>
</div>
`,pe=Z.b`
<div class="customImageContainer">
    <fluent-button
        class="backgroundImageButton"
        appearance="outline"
        @click=${e=>e.onUploadLocalBackgroundImage()}
        title="${e=>e.strings.uploadBackgroundImageButton||null}"
        aria-label="${e=>e.strings.accessibility.uploadANewImageButton||null}"
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.uploadNewImageButtonMetaTag)}>
        ${e=>e.strings.uploadBackgroundImageButton}
    </fluent-button>
</div>
`,be=Z.b`
<div style={{ fontSize: 0, lineHeight: 0 }} aria-live="polite" aria-relevant="all" aria-atomic="true">
    ${Object(X.a)(e=>e.hasLocalBackground,he)}
    ${Object(X.a)(e=>!e.hasLocalBackground,pe)}
</div>
`,me=Z.b`
<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>
        ${e=>e.strings.accessibility.adminHoverMessage}
    </title>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1V2H1.5C0.671573 2 0 2.67157 0 3.5V11.5C0 12.3284 0.671573 13 1.5 13H14.5C15.3284 13 16 12.3284 16 11.5V3.5C16 2.67157 15.3284 2 14.5 2H11V1C11 0.44772 10.5523 0 10 0H6C5.44772 0 5 0.44772 5 1ZM10 1H6V2H10V1ZM14.5 3C14.7761 3 15 3.22386 15 3.5V5.5C15 6.32843 14.3284 7 13.5 7H9V6.5C9 6.22386 8.77614 6 8.5 6H7.5C7.22386 6 7 6.22386 7 6.5V7H2.5C1.67157 7 1 6.32843 1 5.5V3.5C1 3.22386 1.22386 3 1.5 3H14.5ZM7 8H2.5C1.9372 8 1.41783 7.81403 1 7.50018V11.5C1 11.7761 1.22386 12 1.5 12H14.5C14.7761 12 15 11.7761 15 11.5V7.50018C14.5822 7.81403 14.0628 8 13.5 8H9V8.5C9 8.77614 8.77614 9 8.5 9H7.5C7.22386 9 7 8.77614 7 8.5V8Z" fill="black"/>
</svg>
`,fe=Z.b`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="background-settings">
        <p class="background-title" id="background-settings__background-title">
            ${e=>e.strings.background||null}
            ${Object(X.a)(e=>e.isBackgroundTypeManagedByPolicy,me)}
        </p>
        <fluent-radio-group
                class="radio-settings"
                value="${e=>e.backgroundMode}"
                @click="${(e,t)=>e.onCustomBackgroundRadioClick(t.event)}"
                @change="${(e,t)=>e.onCustomBackgroundRadioClick(t.event)}"
                required = "true"
                orientation="vertical">
            <fluent-radio
                value=${e=>e.backgroundImageOff.value}
                id=${e=>e.backgroundImageOff.value}
                aria-label=${e=>e.backgroundImageOff.text}
                aria-labelledby="background-settings__background-title"
                title=${e=>e.backgroundImageOff.text}
                class="radio-button"
                ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.imageOffRadioButtonMetaTag)}>
                ${e=>e.backgroundImageOff.text}
                </fluent-radio>
            <fluent-radio
                        value=${e=>e.backgroundImageBing.value}
                        id=${e=>e.backgroundImageBing.value}
                        aria-label=${e=>e.backgroundImageBing.text}
                        aria-labelledby="background-settings__background-title"
                        title=${e=>e.backgroundImageBing.text}
                        disabled=${e=>e.isImageOfTheDayDisabledByPolicy}
                        class="radio-button"
                        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.bingImageRadioButtonMetaTag)}>
                        ${e=>e.backgroundImageBing.text}
                    </fluent-radio>
            <fluent-radio
                        value=${e=>e.backgroundImageCustom.value}
                        id=${e=>e.backgroundImageCustom.value}
                        aria-label=${e=>e.backgroundImageCustom.text}
                        aria-labelledby="background-settings__background-title"
                        title=${e=>e.backgroundImageCustom.text}
                        disabled=${e=>e.isCustomBackgroundImageDisabledByPolicy}
                        class="radio-button"
                        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.customImageRadioButtonMetaTag)}>
                        ${e=>e.backgroundImageCustom.text}
                    </fluent-radio>
                        ${Object(X.a)(e=>e.backgroundMode==b.a.custom,be)}
            <fluent-radio
                        value=${e=>e.backgroundImageTheme.value}
                        id=${e=>e.backgroundImageTheme.value}
                        aria-label=${e=>e.backgroundImageTheme.text}
                        aria-labelledby="background-settings__background-title"
                        title=${e=>e.backgroundImageTheme.text}
                        disabled=${e=>e.isCustomBackgroundImageDisabledByPolicy}
                        class="radio-button"
                        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.themeRadioButtonMetaTag)}>
                        ${e=>e.backgroundImageTheme.text}
                    </fluent-radio>
            ${Object(X.a)(e=>e.backgroundMode==b.a.theme,ue)}
            </fluent-radio-group>
    </div>
`;var ye=i("UNqU");W.b,J.a,ce.a,ge.a,Y.a;const ve=Z.b`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="toggle-custom">
        <fluent-switch
            checked=${e=>e.greetingEnabled}
            aria-checked="${e=>e.greetingEnabled}"
            @change=${(e,t)=>e.updateToggle(t.event,G.greeting)}
             class="${e=>e.greetingEnabled?"toggle-fluent-switch toggle-fluent-switch-check":"toggle-fluent-switch"}"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.greetingToggleMetaTag)}
            >
            <label class="toggle-custom-title">
            ${e=>e.strings.greeting||null}
            </label>
            <span class="toggle-custom-label">${e=>e.greetingEnabled?e.strings.toggleOn:e.strings.toggleOff}</span>
            </fluent-switch>
    </div>
`,ke=Z.b`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="toggle-custom">
        <fluent-switch
            checked=${e=>e.quickLinksEnabled}
            disabled=${e=>e.isQuickLinksDisabledByPolicy}
            aria-checked="${e=>e.quickLinksEnabled}"
            @change=${(e,t)=>e.updateToggle(t.event,G.quickLinks)}
            class="${e=>e.quickLinksEnabled?"toggle-fluent-switch toggle-fluent-switch-check":"toggle-fluent-switch"}"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.quickLinkToggleMetaTag)}
            >
            <label class="toggle-custom-title">
                ${e=>e.strings.quickLinks||null}
                ${Object(X.a)(e=>e.isQuickLinksDisabledByPolicy,me)}
            </label>
            <span class="toggle-custom-label">${e=>e.quickLinksEnabled?e.strings.toggleOn:e.strings.toggleOff}</span>      
        </fluent-switch>
</div>
`,xe=Z.b`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="toggle-custom">
        <fluent-switch
            checked=${e=>e.searchHistoryEnabled}
            aria-checked="${e=>e.searchHistoryEnabled}"
            @change=${(e,t)=>e.updateToggle(t.event,G.searchHistory)}
            class="${e=>e.searchHistoryEnabled?"toggle-fluent-switch toggle-fluent-switch-check":"toggle-fluent-switch"}"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.searchHistoryToggleMetaTag)}
        >
        <label class="toggle-custom-title">
            ${e=>e.strings.searchHistory||null}
        </label>
        <span class="toggle-custom-label">${e=>e.searchHistoryEnabled?e.strings.toggleOn:e.strings.toggleOff}</span>
        </fluent-switch>
    </div>
`,$e=Z.b`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="toggle-custom">
        <fluent-switch
            checked=${e=>e.leftRailEnabled}
            aria-checked="${e=>e.leftRailEnabled}"
            @change=${(e,t)=>e.updateToggle(t.event,G.leftRail)}
            class="${e=>e.leftRailEnabled?"toggle-fluent-switch toggle-fluent-switch-check":"toggle-fluent-switch"}"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.leftRailToggleMetaTag)}
        >
        <label class="toggle-custom-title">
            ${e=>e.strings.leftRail||null}
        </label>
        <span class="toggle-custom-label">${e=>e.leftRailEnabled?e.strings.toggleOn:e.strings.toggleOff}</span>
        </fluent-switch>
    </div>
`,Oe=Z.b`
<fluent-option 
    value="${e=>e.title}"
    id="${e=>e.id}"
    class=${(e,t)=>t.parent.currentSetting===e.id?"selected":"unselected"}
    ?selected=${(e,t)=>t.parent.currentSetting===e.id}>
        ${e=>e.title}
</fluent-option>
`,we=Z.b`
<fluent-option 
    value="${e=>e.title}"
    id="${e=>e.id}"
    class=${(e,t)=>t.parent.quickLinksDropDownValue===e.id?"selected":"unselected"}
    ?selected=${(e,t)=>t.parent.quickLinksDropDownValue===e.id}>
        ${e=>e.title}
</fluent-option>
`,Ce=Z.b`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="background-settings">
        <p class="background-title">
            ${e=>e.strings.feeds||null}
            ${Object(X.a)(e=>e.isContentFeedDisabledByPolicy,me)}
        </p>
        <div class="feed-selector">
            <fluent-select 
                appearance="filled" 
                class="select"
                disabled=${e=>e.isContentFeedDisabledByPolicy}
                id="feeds"
                ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.feedDisplayOptionMetaTag)}
                ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.feedSelectorOptionMetaTag)}
                @change=${(e,t)=>e.updateFeedVisibility(t.event)}>
                <span slot="selected-value">${e=>e.currentSetting&&e.feedMenuItemsMap[e.currentSetting]&&e.feedMenuItemsMap[e.currentSetting].title}</span>
                ${Object(ye.c)(e=>e.feedMenuItems,Oe)}
            </fluent-select>
        </div>
    </div>
`,Se=Z.b`
<fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div  class="toggle-settings">
        <label class="toggle-title">
            ${e=>e.strings.quickLinksDropDown||null}
            ${Object(X.a)(e=>e.isQuickLinksDisabledByPolicy,me)}
        </label>
        <fluent-select 
            class="quick-links-options" 
            disabled=${e=>e.isQuickLinksDisabledByPolicy}
            appearance="filled" 
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.quickLinkDropDownMetaTag)}
            @change=${(e,t)=>e.updateQuickLinks(t.event)}>
            <span slot="selected-value">${e=>e.quickLinksDropDownValue&&e.quickLinksMenuItemsMap[e.quickLinksDropDownValue]&&e.quickLinksMenuItemsMap[e.quickLinksDropDownValue].title}</span>
                ${Object(ye.c)(e=>e.quickLinksMenuItems,we)}
        </fluent-select>
    </div>
`,Te=Z.b`
<div class="${e=>"custom"===e.displayedSection&&e.isSettingsDialogVisible?"settings-dialog":"hidden"}" id="settingDialogCustom" role="dialog">
    <fluent-button
        class="settings-close-button"
        title="${e=>e.strings.accessibility.closeButton||null}"
        aria-label="${e=>e.strings.accessibility.closeButton||null}"
        @click=${e=>e.toggleSettingsDialog(!1)}
        tabindex="0"
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.settingsCloseButtonMetaTag)}
        ${Object(K.b)("closeButton")}>
            <span class="close-button-glyph"> ${ae}</span>
    </fluent-button>
    <div class="heading-container-custom">
        <fluent-button
            class="custom-arrow-back"
            appearance="stealth"
            @click=${e=>e.toggleSection("main")}
            title="${e=>e.strings.accessibility.backButton||null}"
            aria-label="${e=>e.strings.accessibility.backButton||null}"
            tabindex="0"
            ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.backButtonMetaTag)}
            ${Object(K.b)("svgBackButton")}>
                <svg class="chevronIcon-floating-custom" width="12" height="12" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><g><rect width="32" height="32" rx="16" fill-opacity="0"></rect><path fill-opacity="1" d="M16 19.709L10.1465 13.8555L10.8555 13.1465L16 18.291L21.1445 13.1465L21.8535 13.8555L16 19.709Z"></path></g></svg>
        </fluent-button>
        <h1 class="custom-title">
            ${e=>e.strings.customSettings||null}
        </h1>
    </div>
        ${Object(X.a)(e=>e.displayQuickLinksDropdown,Se)}
        ${Object(X.a)(e=>e.displayQuickLinks,ke)}
        ${Object(X.a)(e=>e.displaySearchHistory,xe)}
        ${Object(X.a)(e=>e.displayGreeting,ve)}
        ${Object(X.a)(e=>e.displayLeftRail,$e)}

        ${Object(X.a)(e=>e.settingDialogEnabled,fe)}
        ${Object(X.a)(e=>e.settingDialogEnabled,Ce)}
</div>
`;W.b,J.a;const Ie=Z.b`
<div class="layout-settings-buttons-container" role="tablist">
    <fluent-button
        class="layout-mode-button ${e=>e.selectedLayoutMode===b.i.focused?"layout-mode-button-selected":null}"
        appearance="neutral"
        @click=${e=>e.onLayoutModeClick(b.i.focused)}
        disabled=${e=>e.isLayoutModeDisabledByPolicy}
        title="${e=>e.strings.focusedMode||null}"
         id=${b.i.focused}
        role="tab"
        tabIndex= ${e=>e.selectedLayoutMode===b.i.focused?0:-1}
        aria-label="${e=>e.strings.focusedMode||null}"
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.focusedButtonMetaTag)}
         ${Object(K.b)("focusedLayoutButton")}>
            ${e=>e.selectedLayoutMode!==b.i.focused?ee("layout-button-icon-inactive"):ee("layout-button-icon-active")}
            ${e=>e.strings.focusedMode}
        </fluent-button>
    <fluent-button
        class="layout-mode-button ${e=>e.selectedLayoutMode===b.i.inspirational?"layout-mode-button-selected":null}"
        appearance="neutral"
        @click=${e=>e.onLayoutModeClick(b.i.inspirational)}
        disabled=${e=>e.isLayoutModeDisabledByPolicy}
        title="${e=>e.strings.inspirationalMode||null}"
        aria-label="${e=>e.strings.inspirationalMode||null}"
         id=${b.i.inspirational}
        role="tab"
        tabIndex= ${e=>e.selectedLayoutMode===b.i.inspirational?0:-1}
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.inspirationalButtonMetaTag)}>
            ${e=>e.selectedLayoutMode!==b.i.inspirational?te("layout-button-icon-inactive"):te("layout-button-icon-active")}
            ${e=>e.strings.inspirationalMode}
        </fluent-button>
    <fluent-button
        class="layout-mode-button ${e=>e.selectedLayoutMode===b.i.informational?"layout-mode-button-selected":null}"
        @click=${e=>e.onLayoutModeClick(b.i.informational)}
          appearance="neutral"
        disabled=${e=>e.isLayoutModeDisabledByPolicy}
        title="${e=>e.strings.informationalMode||null}"
        aria-label="${e=>e.strings.informationalMode||null}"
         id=${b.i.informational}
       role="tab"
       tabIndex= ${e=>e.selectedLayoutMode===b.i.informational?0:-1}
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.informationalButtonMetaTag)}>
            ${e=>e.selectedLayoutMode!==b.i.informational?ie("layout-button-icon-inactive"):ie("layout-button-icon-active")}
            ${e=>e.strings.informationalMode}
        </fluent-button>
    <fluent-button
        class="layout-mode-button reduce-padding ${e=>e.selectedLayoutMode===b.i.custom?"layout-mode-button-selected":null}"
        @click=${e=>e.onLayoutModeClick(b.i.custom)}
        appearance="neutral"
        id=${b.i.custom}
        title="${e=>e.strings.customSettings||null}"
        aria-label="${e=>e.strings.customSettings||null}"
        role="tab"
        aria-expanded="false"
        tabIndex="0"
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.customButtonMetaTag)}
        ${Object(K.b)("lastLayoutButton")}>
            ${e=>e.selectedLayoutMode!==b.i.custom?oe("layout-button-icon-inactive"):oe("layout-button-icon-active")}
            ${e=>e.strings.customSettings}
            <svg class="chevronIcon-floating" height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.02344 15.2734L11.2891 8L4.02344 0.726562L4.72656 0.0234375L12.7109 8L4.72656 15.9766L4.02344 15.2734Z"></path></svg>
        </fluent-button>
</div>
`,Le=Z.b`
<div class="settings-enterprise-header">
    <h1 class="settings-dialog-enterprise-title">
        ${e=>e.strings.enterpriseSettings||null}
    </h1>      
    <div class="page-content-radio">
        <fluent-radio-group
            @change="${(e,t)=>e.onEnterpriseFeedOverride(t.event)}"
            value="${e=>e.enterpriseFeedOverrideMode}"
            class="reduced-margin"
            orientation="vertical">
                ${Object(ye.c)(e=>e.enterpriseFeedOverride,Z.b`
                    <fluent-radio
                        value=${e=>e.value}
                        id=${e=>e.value}
                        aria-label=${e=>e.text}
                        title=${e=>e.text}
                        tabindex=${0}
                        class="radio-enterprise-button"
                    >
                        ${e=>e.text}
                        </fluent-radio>
                `)}
            </fluent-radio-group>
    </div>
</div>
`,Be=Z.b`
<div class="settings-enterprise-header">
    <h1 class="settings-dialog-enterprise-title">
        ${e=>e.strings.enterpriseSettings||null}
    </h1>      
    <div class="page-content-radio">
        <fluent-radio-group
            @change="${(e,t)=>e.onContentSourceChange(t.event)}"
            value="${e=>e.enterpriseFeedSwitcherMode}"
            class="reduced-margin"
            orientation="vertical">
                ${Object(ye.c)(e=>e.enterpriseFeedSwitcher,Z.b`
                    <fluent-radio
                        value=${e=>e.value}
                        id=${e=>e.value}
                        aria-label=${e=>e.text}
                        title=${e=>e.text}
                        tabindex=${0}
                        class="radio-enterprise-button"
                    >
                        ${e=>e.text}
                    </fluent-radio>
                `)}
            </fluent-radio-group>
    </div>
</div>
`,je=Z.b`
    <fluent-divider class="divider-margin" slot="divider"></fluent-divider>
    <div class="linksContainer">
        ${Object(ye.c)(e=>e.settingLinks,Z.b`
            <a class="appLink  ${(e,t)=>t.parent.darkMode?"footer-dark":"footer-light-link"}" id=${e=>e.id} href=${e=>e.url} role="link"
                ${Object(re.b)(e=>e.name)}
            ><span>${e=>e.title}</span></a>
            ${Object(X.a)(e=>e.separator,Z.b`
            <label class="footer">${"·"}</label>
            `)}
        `)}
        ${Object(X.a)(e=>e.enableFeedback,Z.b`
            <label class="footer">${"·"}</label>
            <a class="appLink  ${(e,t)=>e.darkMode?"footer-dark":"footer-light"}" @click=${e=>e.showFeedbackTool()} id="feedback" href="#">
            <span>${e=>e.strings.feedback}</span></a>`)}
    </div>
    <div class="${e=>e.darkMode?"affiliateDisclaimer footer-dark":"affiliateDisclaimer footer-light"}">
        <span>${e=>e.strings.affiliateDisclaimer}</span>
    </div>
`,Me=Z.b`
    <fluent-button
        class="settings-close-button"
        title="${e=>e.strings.accessibility.closeButton||null}"
        aria-label="${e=>e.strings.accessibility.closeButton||null}"
        @click=${e=>e.toggleSettingsDialog(!1)}
        ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.settingsCloseButtonMetaTag)}
        ${Object(K.b)("closeButton")}>
        <span class="close-button-glyph"> ${ae}</span>
    </fluent-button>
`,De=Z.b`
<div class="${e=>e.isSettingsDialogVisible?"settings-dialog":"hidden"}" id="settingDialogMain" role="dialog" >
    ${Object(X.a)(e=>e.allowEnterpriseFeedOverride||e.displayEnterpriseFeedSwitcher,Me)}
    ${Object(X.a)(e=>e.allowEnterpriseFeedOverride,Le)}
    ${Object(X.a)(e=>e.displayEnterpriseFeedSwitcher,Be)}
        <div class="${e=>e.allowEnterpriseFeedOverride||e.displayEnterpriseFeedSwitcher?"settings-dialog-main-header-no-padding":"settings-dialog-main-header"}">
            ${Object(X.a)(e=>!e.allowEnterpriseFeedOverride&&!e.displayEnterpriseFeedSwitcher,Me)}
            <div class="main-header-container">
                <h1 class="settings-dialog-main-title">
                    ${e=>e.strings.mainSettings||null}
                </h1>
                ${Object(X.a)(e=>e.isLayoutModeDisabledByPolicy,me)}
            </div>
            ${Object(X.a)(e=>e.settingDialogEnabled,Ie)}
            <hr class="divider-margin" slot="divider"></hr>
                <fluent-button
                    class="layout-mode-button add-padding"
                    @click=${e=>e.toggleSection("advanced")}
                    title="${e=>e.strings.advancedSettings||null}"
                    aria-label="${e=>e.strings.accessibility.advancedSettings||null}"
                    appearance="stealth"
                    id="advanced"
                    tabindex="0"
                    aria-expanded="false"
                    ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.advancedButtonMetaTag)}>
                    ${e=>e.strings.advancedSettings}
                   <svg class="chevronIcon-floating" height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.02344 15.2734L11.2891 8L4.02344 0.726562L4.72656 0.0234375L12.7109 8L4.72656 15.9766L4.02344 15.2734Z"></path></svg>
                </fluent-button>
        </div>
    ${Object(X.a)(e=>e.settingDialogEnabled,je)}
</div>
`,Ee=Z.b`
<fluent-button
    class="settings-button ${e=>e.imageEnabledClass}"
    appearance="stealth"
    id="SettingsDialog"
    @click=${(e,t)=>e.onGearClick(t.event)}
    title="${e=>e.strings.accessibility&&e.strings.accessibility.dialogButton||null}"
    aria-label="${e=>e.strings.accessibility&&e.strings.accessibility.dialogButton||null}"
    ${Object(re.b)(e=>e.telemetryContext&&e.telemetryContext.settingsMetaTag)}
    aria-expanded="${e=>e.isSettingsDialogVisible?"true":"false"}"
    ${Object(K.b)("settingGearButton")}>
      <span class="${e=>"off"===e.backgroundMode?"settings-gear-icon":"settings-gear-icon-image"}">  ${'\n    <svg\n            fill="inherit"\n            height="24"\n            implicit-consent-source="true"\n            viewBox="0 0 24 24"\n            width="24"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n        <path d="M12.0124778,2.25004981 C12.7464561,2.25850931 13.4775625,2.34331189 14.1939893,2.50308791 C14.5067308,2.57283489 14.7406198,2.83356075 14.7761194,3.15201278 L14.9463241,4.67885731 C15.0233647,5.37990957 15.6152692,5.91089096 16.3209275,5.91163079 C16.5105994,5.91192723 16.6982236,5.8724274 16.8734931,5.79488275 L18.2741165,5.17960888 C18.5654231,5.05164206 18.9057701,5.12140804 19.1232362,5.35366556 C20.1354163,6.43469153 20.8892426,7.73119861 21.327994,9.14563241 C21.4226025,9.45062817 21.3137138,9.78208282 21.0566646,9.9715529 L19.8151844,10.8866429 C19.4610446,11.1468395 19.2518879,11.5600547 19.2518879,11.9995059 C19.2518879,12.438957 19.4610446,12.8521723 19.8159631,13.1129417 L21.0585161,14.0283492 C21.3156542,14.2177866 21.424614,14.5492871 21.3300078,14.8543382 C20.8914192,16.2685371 20.1380215,17.5649441 19.1264267,18.6461445 C18.9091604,18.8783604 18.5690663,18.9483128 18.2777879,18.8206973 L16.8714553,18.2045515 C16.4691374,18.0284918 16.0070651,18.0542838 15.62684,18.2740235 C15.2466148,18.4937632 14.9935731,18.8812498 14.9452542,19.3177822 L14.776179,20.8444618 C14.7413156,21.1592635 14.5124557,21.4182309 14.2043301,21.4915398 C12.7558808,21.8361534 11.2467854,21.8361534 9.79833608,21.4915398 C9.49021045,21.4182309 9.26135058,21.1592635 9.22648722,20.8444618 L9.0576652,19.3200377 C9.00807734,18.8843357 8.75464533,18.4980265 8.37472926,18.2790311 C7.99481318,18.0600358 7.53350779,18.0343481 7.13250482,18.2094252 L5.7258787,18.8256995 C5.43452472,18.9533482 5.0943393,18.8833238 4.87708632,18.6509825 C3.86492915,17.5685306 3.11149836,16.270585 2.67350518,14.8548427 C2.57916657,14.5499084 2.688166,14.2186739 2.94515048,14.0293496 L4.18848222,13.1133693 C4.54262206,12.8531727 4.75177873,12.4399574 4.75177873,12.0005063 C4.75177873,11.5610552 4.54262206,11.1478399 4.18801888,10.8873026 L2.94546579,9.97289561 C2.68810018,9.78349773 2.57900047,9.45183111 2.67367169,9.14663286 C3.11242314,7.73219906 3.8662494,6.43569197 4.87842956,5.35466601 C5.09589562,5.12240848 5.43624261,5.0526425 5.72754921,5.18060933 L7.12792442,5.79577421 C7.53086629,5.97260708 7.9941044,5.94589569 8.37607497,5.7227409 C8.75639478,5.50213708 9.00959105,5.1142722 9.05847199,4.67769189 L9.2285477,3.15201278 C9.26406522,2.83339973 9.49816738,2.57259043 9.81110802,2.5029921 C10.528382,2.34346958 11.2602557,2.25870353 12.0124778,2.25004981 Z M12.0126647,3.74994801 C11.5586248,3.75529426 11.1058626,3.79447802 10.6581282,3.86706495 L10.5491978,4.84423461 C10.4473682,5.75372759 9.92033793,6.56107177 9.1307238,7.01908176 C8.33627573,7.48322292 7.36766706,7.53907517 6.52488669,7.16921711 L5.62659688,6.77461123 C5.05466409,7.4687762 4.59944511,8.25140361 4.27882526,9.09173245 L5.07662396,9.67884052 C5.815434,10.2216652 6.25177873,11.083719 6.25177873,12.0005063 C6.25177873,12.9172936 5.815434,13.7793474 5.07740261,14.3215992 L4.27834975,14.9102735 C4.59869009,15.7520832 5.05398125,16.5361738 5.62630503,17.2316774 L6.53143729,16.8351192 C7.36953,16.4692082 8.33154713,16.5227779 9.12383307,16.979476 C9.91611902,17.4361742 10.4446321,18.2417923 10.548297,19.1526711 L10.6572578,20.1365419 C11.546902,20.2878194 12.4557641,20.2878194 13.3454083,20.1365419 L13.4543643,19.1527147 C13.5551575,18.2421074 14.0830557,17.433729 14.8762852,16.9753059 C15.6695147,16.5168827 16.6334944,16.4630752 17.4731076,16.8305011 L18.3775251,17.2267466 C18.94933,16.5323272 19.4044378,15.7495077 19.724985,14.9090277 L18.9270427,14.3211717 C18.1882326,13.778347 17.7518879,12.9162932 17.7518879,11.9995059 C17.7518879,11.0827186 18.1882326,10.2206648 18.9261146,9.67852303 L19.7229974,9.09114331 C19.402369,8.25065824 18.9470946,7.46788844 18.3750682,6.77361003 L17.4785957,7.16741578 C17.1132613,7.329057 16.7180786,7.41225335 16.3189691,7.41162946 C14.8492845,7.41008883 13.6158417,6.30360096 13.4554292,4.84387563 L13.3465034,3.86674729 C12.9009715,3.79424709 12.45294,3.75516877 12.0126647,3.74994801 Z M12,8.25 C14.0710678,8.25 15.75,9.92893219 15.75,12 C15.75,14.0710678 14.0710678,15.75 12,15.75 C9.92893219,15.75 8.25,14.0710678 8.25,12 C8.25,9.92893219 9.92893219,8.25 12,8.25 Z M12,9.75 C10.7573593,9.75 9.75,10.7573593 9.75,12 C9.75,13.2426407 10.7573593,14.25 12,14.25 C13.2426407,14.25 14.25,13.2426407 14.25,12 C14.25,10.7573593 13.2426407,9.75 12,9.75 Z"/>\n    </svg>\n'} </span>
    </fluent-button>
     <fluent-design-system-provider
            use-defaults
            tabindex="0"
            background-color=${e=>e.backgroundColor}
        >
${Object(X.a)(e=>"main"===e.displayedSection,De)}
${Object(X.a)(e=>"custom"===e.displayedSection,Te)}
${Object(X.a)(e=>"advanced"===e.displayedSection,de)}
</fluent-design-system-provider>

`,Pe=Z.b`
${Object(X.a)(e=>e.settingDialogEnabled,Ee)}
`;var Fe=i("4X57"),Ae=i("QkLF"),He=i("kL0l"),Re=i("cQsl"),qe=i("CzTk");const Ve=""+i("0fst").a.Dialog,ze=Fe.a`
    .settings-dialog {
        transform: translateX(-90%)
    }

    :host .settings-close-button {
        min-width: 24px;
        left: auto;
        right: 4px;
    }

    .background-settings {
        padding-left: 16px;
        padding-right: unset;
    }

    .backgroundImageButton {
        margin-left: 48px;
    }

    .chevronIcon-floating {
        left: auto;
        right: 14px;
    }

    .chevronIcon-floating-custom{
        right: auto;
        transform: rotate(90deg);
    }

    .customImagePreviewOverlayButton {
     margin-left: 48px;
     margin-right: auto;
    }

    .customImageRemoveButton {
          margin-left: 88px;
          margin-right: auto;
    }

    .custom-title {
        margin-left:40px;
    }

    .feed-selector {
        padding-right: 16px;
    }
`,Ne=Fe.a`
    .settings-dialog {
        transform: translateX(90%)
    }

    .backgroundImageButton {
        margin-right: 48px;
    }

    .customImageRemoveButton {
          margin-right: 88px;
          margin-left: auto;
    }

    .customImagePreviewOverlayButton {
     margin-right: 48px;
     margin-left: auto;
    }

    :host .settings-close-button {
        min-width: auto;
        left: 4px;
        right: auto;
    }

    .chevronIcon-floating {
        left: 14px;
        right: auto;
        transform: rotate(180deg);
    }

    .chevronIcon-floating-custom {
        left: auto;
        transform: rotate(270deg);
    }

    .custom-title { 
        margin-right:40px;
    }

    .background-settings {
        padding-left: unset;
        padding-right: 16px;
    }

    .feed-selector {
        padding-left: 16px;
    }
`,Ue=Fe.a`
    .hidden {
        display: none;
    }

    .settings-button {
        align-items: center;
        display: flex;
        height: calc(${Ae.a} * 1px);
        justify-content: center;
        width: calc(${Ae.a} * 1px);
    }

    :host .settings-button{
     background-color: transparent;
    }

    .settings-button:hover{
        background-color: ${He.s.var};
    }
    .settings-button.dark-mode:hover{
        background-color: ${He.P.var};
    }
    .settings-button.setting-button-image-enable:hover{
        background-color: rgba(17,17,17,0.8);
    }

    .settings-button::part(control) {
        height: calc(${Ae.a} * 1px);
        width: calc(${Ae.a} * 1px);
    }

    .settings-close-button {
        height: 32px;
        width: 32px;
        top: 4px;
        background: transparent;
    }

    .settings-close-button:hover {
        background-color: ${He.o.var};
    }
    .settings-close-button:active {
        background-color: ${He.l.var};
    }

    .customImageRemoveButton {
        position: absolute;
    }

    .customImageContainer {
        height: 32px;
        padding-top: 11px;
        padding-bottom: 7px;
    }

    .customImagePreviewOverlayButton {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 2px;
        box-shadow: none;
        height: 32px;
        padding: 0px;
        position: absolute;
        overflow: hidden;
        width: 32px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .backgroundImageButton {
        position: absolute;
        text-overflow: "ellipsis";
    }

    .chevronIcon-floating svg {
        height:12;
        width:12;
    }

    :host .settings-close-button {
        position: absolute;
    }

    .layout-mode-button-selected {
        font-weight: 600;
    }

    .layout-mode-button-selected:focus {
        outline: 2px solid;
    }

    #custom:focus {
        outline: 2px solid;
    }

    #advanced:focus {
        outline: 2px solid;
    }

    #advanced::part(control) {
        border: none;
        box-shadow: none;
    }

    :host .quick-links-options {
        min-width: 180px;
    }

    .divider-margin {
        margin:0px;
        height:0;
        box-sizing:content-box;
        border: none;
        transition: all 0.2s ease-in-out;
        border-top: 2px solid;
        border-top-color: ${He.k.var};
    }

    .close-button-glyph svg {
        height: 10px;
        width: 10px;
        fill: inherit;
    }

    .layout-button-icon-inactive {
        fill:#999999;
        padding: 0 12px;
        pointer-events: none;
        vertical-align: middle;
    }

    .layout-button-icon-active {
        fill: ${He.c.var};
        padding: 0 12px;
        pointer-events: none;
        vertical-align: middle;
    }

    .action-button svg {
        height: 32px;
        width: 32px;
        fill: ${He.w.var};
    }

    .collapsed-svg {
        transform: rotate(90deg);
    }

    .expanded-svg {
        transform: rotate(270deg);
    }

    .chevronIcon-floating {
        position: absolute;
        top: 14px;
        height: 12px !important;
        width: 12px !important;
    }

    .toggle-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        grid-column:2;
        padding: 0;
        color: ${He.G.var};
    }
    .toggle-switch {
        grid-column:4;
    }
    .toggle-custom-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        color: ${He.G.var};
        cursor: pointer !important;
    }

    .toggle-fluent-switch {
        width: 100%;
        display: grid;
        grid-template-columns: 0px auto max-content max-content 16px;
    }

    .toggle-custom{
        padding-top: 6px;
        padding-bottom: 6px;
    }
    fluent-switch::part(label) {
        grid-column-start: 2;
        grid-column-end: 3;
    }

    fluent-switch::part(switch) {
       grid-column : 4;
    }

  .toggle-fluent-switch-check::part(switch){
       border: none;
    }

    .toggle-custom-label{
    font-size: 14px;
    line-height: 20px;
    user-select: none;
    margin-top: 0px;
    float: right;
    }

    .toggle-label {
        grid-column: 3;
        grid-row: 1;
        padding: 0 8px 0 8px;
            font-size: 14px;
        line-height: 20px;
        float: left;
        user-select: none;
    margin-top: 0;
    }

    .toggle-settings {
        align-items: center;
        background-color: inherit;
        cursor: default;
        display: grid;
        outline: none;
        user-select: none;
        height: 44px;
        grid-template-columns: 16px auto max-content max-content 16px;;
        grid-template-rows: auto;
    }

    .chevronIcon-floating-custom{
        position: relative;
    }

    .settings-dialog {
        --elevation: 11;
        width: 320px;
        background-color: ${He.J.var};
        border: calc(var(--outline-width) * 1px) solid transparent;
        border-radius: var(--elevated-corner-radius);
        display: flex;
        border-radius: 4px;
        flex-direction: column;
        z-index: ${Ve};
        position: absolute;
        ${Re.a};
    }

    @media screen and (max-height: 560px) {

      #settingDialogMain, #settingDialogCustom {
        max-height: calc(100vh - 80px);
        overflow: auto;
      }

      #settingDialogCustom .feed-selector fluent-select.select::part(listbox) {
        border-bottom: 0px;
        border-top: unset;
        bottom: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
        top: unset;
      }

      #settingDialogAdvanced msn-market-selector::part(listbox) {
        --max-height: min(336px, calc(100vh - 174px));
      }
    }

    .select::part(listbox) {
   background-color: ${He.J.var};
    }

     msn-market-selector.select fluent-select::part(listbox) {
        background-color: ${He.J.var};
     }

    fluent-select {
        background-color: ${He.J.var};
        width: 100%;
          font-size: var(--type-ramp-base-font-size);
    }
    fluent-radio::part(control) {
        background-color: ${He.J.var};
    }

     fluent-radio::part(control):focus {
        outline: dotted;
    }
    
    fluent-divider {
        box-sizing: content-box;
        margin: 0px;
        transition: all 0.2s ease-in-out 0s;
        display: block;
        unicode-bidi: isolate;
        margin-inline: auto;
        overflow: hidden;
        border-top: 1px solid ${He.O.var};
        border-right: none;
        border-bottom: none;
        border-left: none;
        border-image: initial;
    }

    .without-market-selector {
        height: 106px;
    }

    .settings-dialog-main-header {
        display: block;
        border-radius: 4px;
        padding: 12px 0 0 0;
        position: relative;
    }

    .settings-dialog-main-header-no-padding {
        display: block;
        border-radius: 4px;
        position: relative;
    }

    .settings-dialog-title {
        margin: 12px auto 8px;
        margin-inline-start: 16px;
        font-size: var(--type-ramp-plus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
        font-weight: 600;
        user-select: none;
    }
    .layout-settings-buttons-container {
        padding: 8px 4px 4px 4px;
    }
    .settings-dialog-enterprise-title {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-inline-start: 16px;
        font-size: var(--type-ramp-plus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
        font-weight: 600;
    }
    .main-header-container {
        align-items: baseline;
        display: grid;
        grid-template-columns: max-content max-content;
    }

    .settings-dialog-main-title {
        margin-top: 0;
        margin-bottom: 0;
        transition: all 0.2s ease-in-out;
        font-size: var(--type-ramp-plus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
        font-weight: 600;
        grid-column: 1;
        padding: 0 16px 0 16px;
        position: relative;
         user-select: none;
    }

    .language-dropdown {
        margin: 0px 8px 16px 0px;
        margin-top:0px;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        width:100%;
    }

    msn-market-selector::part(select) {
        margin-top: 12px;
        margin-bottom: 0;
        background: ${He.J.var};
    }

    .background-settings {
        padding-bottom: 10px;
        position: relative
    }

    .feed-settings{
        padding-bottom: 13px;
        padding-top: 11px;
        padding-left: 16px;
        padding-right: unset;
    }

    .appLink:hover{
        text-decoration: underline;
    }
    .add-padding {
        margin: 4px !important;
        width: 97.5% !important;
        padding: 6px 6px 6px 12px !important;
        font-size: var(--type-ramp-plus-1-font-size) !important;
    }

    .reduced-height {
        height:inherit;
        padding: 10px 0px;
    }

    .market-selector-settings {
        bottom: 5px;
    display: block;
    height: 70px;
    padding: 12px 16px 8px 16px;
    right: 0;
    user-select: none;
    width: 90%;
    }

    .affiliateDisclaimer {
        font-size: var(--type-ramp-minus-1-font-size);
        padding: 0 16px 10px;
        margin: 0px;
        user-select: none;
    }

    .appLink {
        display: inline;
        vertical-align: super;
        text-decoration: underline;
    }

    .footer-dark {    
        color: rgba(255, 255, 255, 0.8);
    }
    .footer-light {
        color: rgba(0, 0, 0, 0.6);
    }
    .footer-light-link {
        color: rgba(0, 0, 0, 0.8);
    }

    .linksContainer {
        padding: 7px 16px 6px 16px;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-2-line-height);
        margin: 0px;
    }

    label {
        color: ${He.D.var};
        line-height: "inherit";
        padding: 0 4px 0 4px;
    }

    .background-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        padding-bottom: 13px;
        padding-top: 11px;
    }

    .custom-title {
        font-size: var(--type-ramp-plus-1-font-size);
        line-height: var(--type-ramp-plus-1-line-height);
        margin-top: 0;
        margin-bottom: 0;
        transition: all 0.2s ease-in-out;
        display: inline-block;
        user-select: none;
    }

    .heading-container-custom {
        align-items: center;
        border-radius: 2px;
        cursor: auto;
        display: block;
        height: 24px;
        top: 0px;
        width: 80%;
        left: 0px;
        padding: 13px 10px 11px 0;
        right: 40px;
    }

    .feed-selector {
        padding-bottom: 6px;
    }

    .radio-settings {
        margin:0px;
    }

    .radio-button {
        height: 32px;
        margin:0px;
    }

    .reduced-margin {
        margin:0px;
    }

     .reduced-padding {
        padding:0px;
    }

    .radio-enterprise-button {
        align-items: center;
        display: grid;
        grid-template-columns: auto max-content;
        height: 32px;
        margin:0px;
    }
    .page-content-radio {
        padding: 10px 16px;
    }

    .settings-enterprise-header {
        display: block;
        border-radius: 4px 4px 0 0;
        padding-top: 12px;
        background: ${He.w.var}
    }

    .layout-mode-button {
        height: 40px;
        justify-content: start;
        padding: 6px 0px 6px 0px;
        position: relative;
        width: 100%;
        line-height: 1;
        cursor: pointer;
        font-family: inherit;
        box-sizing: border-box;
        max-width: 374px;
        display: inline-flex;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        white-space: nowrap;
        transition: all 0.1s ease-in-out;
        font-size: var(--type-ramp-base-font-size);
        border-radius: 2px;
        min-width: 32px;
        margin-bottom: 4px;
    }

    :host .layout-mode-button {
        background-color: ${He.J.var};
    }

    .layout-mode-button:hover{
        background-color: ${He.o.var} !important;
    }

    .layout-mode-button-selected{
        background-color: ${He.s.var} !important;
    }
    
    .layout-mode-button:active{
    background-color: ${He.l.var} !important;
    }

    .custom-arrow-back {
        height: 24px;
        width: 24px;
        min-width: 24px;
        position: absolute;
        margin-left:10px;
    }

    .personalize-settings-button {
        border: 1px solid ${He.P.var};
        border-radius: 2px;
        padding: 0;
        margin: 0 0 0 15px;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        box-sizing: border-box; 
        cursor: pointer;
        color: ${He.G.var};
        fill: ${He.G.var};
        height: fit-content;
    }

    .layout-mode-button::part(control) {
       justify-content: start;
    }

    .layout-mode-button svg {
       height: 24px;
       width: 24px;
    }

    .reduce-padding::part(control) {
        padding: 0px;
    }

    .heading-container-custom svg {
        height: 24px;
       width: 24px;
    }

    .settings-gear-icon svg{
        height: 24px;
        width: 24px;
        fill: ${He.G.var};
    }

    .settings-gear-icon-image svg{
        height: 24px;
        width: 24px;
        fill: #FFFFFF;
    }

    .footer {
        line-height: inherit;
        font-size: 25px;
        padding-right: 0px;
    }

    .personalize-settings-button::part(control) {
        width: 100%;
        white-space: normal;
        padding: 6px 12px;
    }
`.withBehaviors(He.t,He.v,He.l,He.o,He.D,new qe.a(ze,Ne)),Ge={experienceConfigSchema:l}},XiV1:function(e,t,i){"use strict";i.d(t,"a",(function(){return C}));var o=i("D57K"),a=i("P4Ao"),n=i("QBS5"),s=i("oePG"),r=i("Gy7L"),l=i("o87Z");class d extends a.a{}class c extends(Object(l.a)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class g extends c{constructor(){super(),this.initialValue="on",this.dirtyChecked=!1,this.formResetCallback=()=>{this.checked=this.checkedAttribute,this.dirtyChecked=!1},this.keypressHandler=e=>{switch(e.keyCode){case r.q:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.defaultChecked=!!this.checkedAttribute,this.checked=this.defaultChecked}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(){this.dirtyChecked||(this.dirtyChecked=!0),this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),this.$emit("change"),this.checked?this.classList.add("checked"):this.classList.remove("checked"),this.validate()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","checkbox"),this.updateForm()}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}}Object(o.e)([Object(n.b)({attribute:"readonly",mode:"boolean"})],g.prototype,"readOnly",void 0),Object(o.e)([Object(n.b)({attribute:"checked",mode:"boolean"})],g.prototype,"checkedAttribute",void 0),Object(o.e)([s.d],g.prototype,"defaultSlottedNodes",void 0),Object(o.e)([s.d],g.prototype,"defaultChecked",void 0),Object(o.e)([s.d],g.prototype,"checked",void 0);var u=i("6BDD"),h=i("UauI");const p=u.b`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Object(h.b)("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <span class="checked-indicator" part="checked-indicator"></span>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`;var b=i("4X57"),m=i("j9Xn"),f=i("xY0q"),y=i("2i1/"),v=i("wHpb"),k=i("CzTk"),x=i("oqLQ"),$=i("QkLF"),O=i("kL0l");const w=b.a`
    :host([hidden]) {
        display: none;
    }

    ${Object(f.a)("inline-flex")} :host {
        align-items: center;
        outline: none;
        font-family: var(--body-font);
        margin: calc(var(--design-unit) * 1px) 0;
        ${""} user-select: none;
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .switch,
    :host(.disabled) .switch {
        cursor: ${y.a};
    }

    .switch {
        position: relative;
        outline: none;
        box-sizing: border-box;
        width: calc(((${$.a} / 2) + var(--design-unit)) * 2px);
        height: calc(((${$.a} / 2) + var(--design-unit)) * 1px);
        background: ${O.r.var};
        border-radius: calc(${$.a} * 1px);
        border: calc(var(--outline-width) * 1px) solid ${O.P.var};
    }

    :host(:enabled) .switch:hover {
        background: ${O.q.var};
        border-color: ${O.O.var};
        cursor: pointer;
    }

    :host(:enabled) .switch:active {
        background: ${O.p.var};
        border-color: ${O.M.var};
    }

    :host(:${v.a}) .switch {
        box-shadow: 0 0 0 2px var(--background-color), 0 0 0 4px ${O.z.var};
        border-color: ${O.z.var};
    }

    .checked-indicator {
        position: absolute;
        height: calc((${$.a} - (var(--design-unit) * 5.5)) * 1px);
        width: calc((${$.a} - (var(--design-unit) * 5.5)) * 1px);
        top: calc(var(--design-unit) * 1px);
        background: ${O.G.var};
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
    }

    .status-message {
        color: ${O.G.var};
        cursor: pointer;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        color: ${O.G.var};
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        margin-inline-end: calc(var(--design-unit) * 2px + 2px);
        cursor: pointer;
    }

    ::slotted(*) {
        ${""} margin-inline-start: calc(var(--design-unit) * 2px + 2px);
    }

    :host([aria-checked="true"]) .checked-indicator {
        background: ${O.f.var};
    }

    :host([aria-checked="true"]) .switch {
        background: ${O.c.var};
    }

    :host([aria-checked="true"]:enabled) .switch:hover {
        background: ${O.b.var};
    }

    :host([aria-checked="true"]:enabled) .switch:active {
        background: ${O.a.var};
    }

    :host([aria-checked="true"]:${v.a}:enabled) .switch {
        box-shadow: 0 0 0 2px var(--background-color), 0 0 0 4px ${O.z.var};
        border-color: transparent;
    }

    .unchecked-message {
        display: block;
    }

    .checked-message {
        display: none;
    }

    :host([aria-checked="true"]) .unchecked-message {
        display: none;
    }

    :host([aria-checked="true"]) .checked-message {
        display: block;
    }
`.withBehaviors(O.a,O.b,O.c,O.f,O.p,O.q,O.r,O.z,O.G,O.M,O.O,O.P,new k.a(b.a`
      .checked-indicator {
        left: calc(var(--design-unit) * 1px);
      }

      :host([aria-checked='true']) .checked-indicator {
        left: calc((((${$.a} / 2) + var(--design-unit)) + var(--design-unit)) * 1px);
      }
    `,b.a`
      .checked-indicator {
        right: calc(var(--design-unit) * 1px);
      }

      :host([aria-checked='true']) .checked-indicator {
        right: calc((((${$.a} / 2) + var(--design-unit)) + var(--design-unit)) * 1px);
      }
    `),Object(x.c)(b.a`
            .checked-indicator,
            :host(:enabled) .switch:active .checked-indicator {
                forced-color-adjust: none;
                background: ${m.a.FieldText};
            }
            .switch {
                forced-color-adjust: none;
                background: ${m.a.Field};
                border-color: ${m.a.FieldText};
            }
            :host(:enabled) .switch:hover {
                background: ${m.a.HighlightText};
                border-color: ${m.a.Highlight};
            }
            :host(.checked) .switch {
                background: ${m.a.Highlight};
                border-color: ${m.a.Highlight};
            }
            :host(.checked:enabled) .switch:hover,
            :host(:enabled) .switch:active {
                background: ${m.a.HighlightText};
                border-color: ${m.a.Highlight};
            }
            :host(.checked) .checked-indicator {
                background: ${m.a.HighlightText};
            }
            :host(.checked:enabled) .switch:hover .checked-indicator {
                background: ${m.a.Highlight};
            }
            :host(:${v.a}) .switch {
                border-color: ${m.a.Highlight};
                box-shadow: 0 0 0 2px ${m.a.Field}, 0 0 0 4px ${m.a.FieldText};
            }
            :host(.checked:${v.a}:enabled) .switch {
                box-shadow: 0 0 0 2px ${m.a.Field}, 0 0 0 4px ${m.a.FieldText};
            }
            :host(.disabled) {
                opacity: 1;
            }
            :host(.disabled) .checked-indicator {
                background: ${m.a.GrayText};
            }
            :host(.disabled) .switch {
                background: ${m.a.Field};
                border-color: ${m.a.GrayText};
            }
            .status-message,
            .label {
              color: ${m.a.FieldText};
          }
        `));let C=class extends g{};C=Object(o.e)([Object(a.b)({name:"fluent-switch",template:p,styles:w,shadowOptions:{mode:"closed"}})],C)},e8No:function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var o=i("D57K"),a=i("P4Ao"),n=i("EeEq"),s=i("6BDD"),r=i("C5kU");const l=s.b`
    <template
        aria-selected="${e=>e.selected}"
        class="${e=>e.selected?"selected":""} ${e=>e.disabled?"disabled":""}"
        role="option"
    >
        ${r.c}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${r.b}
    </template>
`;var d=i("4X57"),c=i("xY0q"),g=i("wHpb"),u=i("2i1/"),h=i("oqLQ"),p=i("j9Xn"),b=i("kL0l"),m=i("QkLF");const f=d.a`
    ${Object(c.a)("inline-flex")} :host {
        font-family: var(--body-font);
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--focus-outline-width) * 1px) solid transparent;
        box-sizing: border-box;
        color: ${b.G.var};
        cursor: pointer;
        fill: currentcolor;
        font-size: var(--type-ramp-base-font-size);
        height: calc(${m.a} * 1px);
        line-height: var(--type-ramp-base-line-height);
        margin: 0 calc(var(--design-unit) * 1px);
        outline: none;
        overflow: hidden;
        align-items: center;
        padding: 0 calc(var(--design-unit) * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${g.a}) {
        box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${b.A.var};
        border-color: ${b.z.var};
        background: ${b.b.var};
        color: ${b.f.var};
    }

    :host([aria-selected="true"]) {
        background: ${b.b.var};
        color: ${b.f.var};
    }

    :host(:active) {
        background: ${b.a.var};
        color: ${b.f.var};
    }

    :host(:not([aria-selected="true"]):hover) {
        background: ${b.o.var};
        color: ${b.F.var};
    }

    :host(:not([aria-selected="true"]):active) {
        background: ${b.o.var};
        color: ${b.F.var};
    }

    :host([disabled]) {
        cursor: ${u.a};
        opacity: var(--disabled-opacity);
    }

    :host([disabled]:hover) {
        background-color: inherit;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
        display: flex;
    }

    ::slotted(svg) {
        ${""}
        height: calc(var(--design-unit) * 4px);
        width: calc(var(--design-unit) * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }

`.withBehaviors(b.a,b.b,b.d,b.f,Object(h.c)(d.a`
      :host {
        border-color: transparent;
        color: ${p.a.ButtonText};
        forced-color-adjust: none;
      }

      :host(:not([aria-selected='true']):hover),
      :host([aria-selected='true']) {
        background: ${p.a.Highlight};
        color: ${p.a.HighlightText};
      }

      :host([disabled]),
      :host([disabled]:not([aria-selected='true']):hover) {
        background: ${p.a.Canvas};
        color: ${p.a.GrayText};
        fill: currentcolor;
        opacity: 1;
      }
    `),b.o,b.v,b.w,b.x,b.z,b.A,b.F,b.G,b.K);let y=class extends n.a{};y=Object(o.e)([Object(a.b)({name:"fluent-option",template:l,styles:f})],y)},i56n:function(e,t,i){"use strict";i.d(t,"a",(function(){return M}));var o=i("D57K"),a=i("QBS5"),n=i("P4Ao"),s=i("oePG"),r=i("uXNP"),l=i("C5kU"),d=i("6fxl"),c=i("4N55"),g=i("o87Z");class u extends c.a{}class h extends(Object(g.a)(u)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}var p=i("xDi8");class b extends h{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.role=p.b.combobox,this.position=p.a.below,this.maxHeight=0,this.displayValue="",this.formResetCallback=()=>{this.setProxyOptions(),this.setDefaultSelectedOption(),this.value=this.firstSelectedOption.value}}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex)}get value(){return s.b.track(this,"value"),this._value}set value(e){const t=""+this._value;if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(t=>t.value===e),i=this.options[this.selectedIndex],o=this.options[t],a=i?i.value:null,n=o?o.value:null;-1!==t&&a===n||(e="",this.selectedIndex=t),this.firstSelectedOption&&(e=this.firstSelectedOption.value)}t!==e&&(this._value=e,super.valueChanged(t,e),s.b.notify(this,"value"))}updateValue(e){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?this.firstSelectedOption.value:"",this.displayValue=this.firstSelectedOption?this.firstSelectedOption.textContent||this.firstSelectedOption.value:this.value),e&&this.$emit("change")}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?p.a.above:p.a.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===p.a.above?~~e.top:~~t}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){if(!this.open)return!0;const t=e.relatedTarget;this.isSameNode(t)?this.focus():this.options&&this.options.includes(t)||(this.open=!1)}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.setProxyOptions(),this.updateValue()}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.appendChild(t)}))}keydownHandler(e){super.keydownHandler(e);switch(e.key||e.key.charCodeAt(0)){case" ":this.typeAheadExpired&&(e.preventDefault(),this.open=!this.open);break;case"Enter":e.preventDefault(),this.open=!this.open;break;case"Escape":this.open&&(e.preventDefault(),this.open=!1);break;case"Tab":if(!this.open)return!0;e.preventDefault(),this.open=!1}return this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute}}Object(o.e)([Object(a.b)({attribute:"open",mode:"boolean"})],b.prototype,"open",void 0),Object(o.e)([Object(a.b)({attribute:"position"})],b.prototype,"positionAttribute",void 0),Object(o.e)([s.d],b.prototype,"position",void 0),Object(o.e)([s.d],b.prototype,"maxHeight",void 0),Object(o.e)([s.d],b.prototype,"displayValue",void 0);class m{}Object(o.e)([s.d],m.prototype,"ariaExpanded",void 0),Object(o.e)([Object(a.b)({attribute:"aria-pressed",mode:"fromView"})],m.prototype,"ariaPressed",void 0),Object(d.a)(m,r.a),Object(d.a)(b,l.a,m);var f=i("6BDD"),y=i("UauI");const v=f.b`
    <template
        class="${e=>e.open?"open":""} ${e=>e.disabled?"disabled":""} ${e=>e.position}"
        role="${e=>e.role}"
        tabindex="${e=>e.disabled?null:"0"}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
        <div
            aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
            aria-controls="listbox"
            aria-expanded="${e=>e.ariaExpanded}"
            aria-haspopup="listbox"
            class="control"
            part="control"
            role="button"
            ?disabled="${e=>e.disabled}"
        >
            ${l.c}
            <slot name="button-container">
                <div class="selected-value" part="selected-value">
                    <slot name="selected-value">${e=>e.displayValue}</slot>
                </div>
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        <svg
                            class="select-indicator"
                            part="select-indicator"
                            viewBox="0 0 12 7"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
                            />
                        </svg>
                    </slot>
                </div>
            </slot>
            ${l.b}
        </div>
        <div
            aria-disabled="${e=>e.disabled}"
            class="listbox"
            id="listbox"
            part="listbox"
            role="listbox"
            style="--max-height: ${e=>e.maxHeight}px"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
        >
            <slot
                ${Object(y.b)({filter:c.a.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;var k=i("4X57"),x=i("wHpb"),$=i("xY0q"),O=i("2i1/"),w=i("oqLQ"),C=i("j9Xn"),S=i("cQsl"),T=i("kL0l"),I=i("QkLF"),L=i("57ob");const B=k.a`
  :host([appearance="filled"]) {
    background: ${T.s.var};
    border-color: transparent;
  }

  :host([appearance="filled"]:hover:not([disabled])) {
    background: ${T.o.var};
    border-color: transparent;
  }

  :host([appearance="filled"]:${x.a}) {
    border-color: ${T.z.var};
  }
`.withBehaviors(T.o,T.s,T.z),j=k.a`
    ${Object($.a)("inline-flex")} :host {
        --elevation: 14;
        background: ${T.r.var};
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--outline-width) * 1px) solid ${T.P.var};
        box-sizing: border-box;
        color: ${T.G.var};
        contain: contents;
        height: calc(${I.a} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
    }

    .listbox {
        ${S.a}
        background: ${T.J.var};
        border-radius: calc(var(--corner-radius) * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${I.a} * 1px));
        padding: calc(var(--design-unit) * 1px) 0;
        overflow-y: auto;
        position: absolute;
        width: 100%;
        z-index: 1;
        margin: 1px 0;
    }

    .listbox[hidden] {
        display: none;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: var(--type-ramp-base-font-size);
        font: inherit;
        line-height: var(--type-ramp-base-line-height);
        min-height: calc(${I.a} * 1px);
        padding: 0 calc(var(--design-unit) * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${T.q.var};
        border-color: ${T.O.var};
    }

    :host(:focus) {
        outline: none;
    }

    :host(:${x.a}) {
        border-color: ${T.z.var};
        outline: none;
        box-shadow:
            0 0 0 1px inset ${T.z.var};
    }

    :host([open]:${x.a}) {
        border-color: ${T.P.var};
        outline: none;
        box-shadow: none;
  }

    :host(:${x.a}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${T.A.var};
        border-color: ${T.z.var};
        background: ${T.b.var};
        color: ${T.f.var};
    }

    :host([disabled]) {
        cursor: ${O.a};
        opacity: var(--disabled-opacity);
    }

    :host([disabled]) .control {
        cursor: ${O.a};
    }

    :host([disabled]:hover) {
        background: ${T.w.var};
        color: ${T.G.var};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${T.p.var};
        border-color: ${T.M.var};
    }

    :host([open][position="above"]) .listbox,
    :host([open][position="below"]) .control {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([open][position="above"]) .control,
    :host([open][position="below"]) .listbox {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :host([open][position="above"]) .listbox {
        border-bottom: 0;
        bottom: calc(${I.a} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${I.a} * 1px);
    }

    .selected-value {
        font-family: var(--body-font);
        flex: 1 1 auto;
        text-align: start;
    }

    .indicator {
        flex: 0 0 auto;
        margin-inline-start: 1em;
    }

    slot[name="listbox"] {
        display: none;
        width: 100%;
    }

    :host([open]) slot[name="listbox"] {
        display: flex;
        position: absolute;
        ${S.a}
    }

    .end {
        margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
        ${""}
        fill: currentcolor;
        height: 1em;
        min-height: calc(var(--design-unit) * 4px);
        min-width: calc(var(--design-unit) * 4px);
        width: 1em;
    }

    ::slotted([role="option"]) {
        flex: 0 0 auto;
    }
`.withBehaviors(Object(L.a)("filled",B),T.b,T.f,T.M,T.O,T.P,Object(w.c)(k.a`
            :host([disabled]) {
                border-color: ${C.a.GrayText};
                background-color: ${C.a.ButtonFace};
                color: ${C.a.GrayText};
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${C.a.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${C.a.GrayText};
                border-color: ${C.a.GrayText};
            }

            :host(:not([disabled]):hover) {
              background: ${C.a.ButtonFace};
              border-color: ${C.a.Highlight};
            }

            :host(:${x.a}) {
              forced-color-adjust: none;
              background: ${C.a.ButtonFace};
              border-color: ${C.a.Highlight};
              box-shadow: 0 0 0 1px inset ${C.a.Highlight};
              color: ${C.a.ButtonText};
              fill: currentcolor;
            }

            :host([open]) .listbox {
                background: ${C.a.ButtonFace};
                border: 1px solid ${C.a.ButtonText};
            }

            :host(:${x.a}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${C.a.Highlight};
                border-color: ${C.a.ButtonText};
                box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${C.a.HighlightText};
                color: ${C.a.HighlightText};
                fill: currentcolor;
            }

            ::slotted([role="option"]:not([aria-selected="true"]):not([disabled]):hover) {
                forced-color-adjust: none;
                color: ${C.a.ButtonText};
                background: ${C.a.ButtonFace};
                border-color: ${C.a.Highlight};
                box-shadow: none;
            }
        `),T.p,T.q,T.r,T.w,T.z,T.A,T.G,T.J,T.P);let M=class extends b{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}};Object(o.e)([Object(a.b)({mode:"fromView"})],M.prototype,"appearance",void 0),M=Object(o.e)([Object(n.b)({name:"fluent-select",template:v,styles:j})],M)},mnB3:function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var o=i("D57K"),a=i("P4Ao"),n=i("oePG"),s=i("QHbP"),r=i("wZHk"),l=i("xDi8");class d extends a.a{constructor(){super(...arguments),this.marketList=[],this.disabled=!1,this.selectPosition=l.a.below,this.onChange=e=>{const t=this.select&&this.select.value;t&&this.onValueChange&&this.onValueChange(t),this.selectedMarketId=t,this.$emit("change",{market:t})},this.onClick=e=>{e.composedPath=()=>[this.select]}}connectedCallback(){super.connectedCallback(),this.select&&(this.select.focusAndScrollOptionIntoView=()=>{window.requestAnimationFrame(()=>{this.select.firstSelectedOption&&(this.select.firstSelectedOption.focus(),this.select.firstSelectedOption.scrollIntoView({block:"center"}))})});const e=this.shadowRoot.getElementById("marketSelector");e&&Object(s.b)(r.a.marketSelector,e)}defaultMarketIdChanged(e,t){e!==t&&t&&(this.selectedMarketId?this.setSelectedMarket(this.selectedMarketId):this.setSelectedMarket(t))}selectedMarketIdChanged(e,t){e!==t&&t&&this.setSelectedMarket(t)}marketListChanged(e,t){t&&t.length&&this.setSelectedMarket(this.selectedMarketId||this.defaultMarketId)}setSelectedMarket(e){if(!e)return;const t=this.marketList&&this.marketList.findIndex(t=>t.id===e);t<0||window.requestAnimationFrame(()=>{this.selectedIndex=t})}}Object(o.e)([n.d],d.prototype,"id",void 0),Object(o.e)([n.d],d.prototype,"onValueChange",void 0),Object(o.e)([n.d],d.prototype,"defaultMarketId",void 0),Object(o.e)([n.d],d.prototype,"selectedMarketId",void 0),Object(o.e)([n.d],d.prototype,"marketList",void 0),Object(o.e)([n.d],d.prototype,"disabled",void 0),Object(o.e)([n.d],d.prototype,"selectPosition",void 0),Object(o.e)([n.d],d.prototype,"label",void 0),Object(o.e)([n.d],d.prototype,"marketSelectorMetaTag",void 0),Object(o.e)([n.d],d.prototype,"selectedIndex",void 0);const c=i("4X57").a`
:host {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
}

.select {
    height: 32px;
    margin-top: 10px;
    margin-bottom: 8px;
    max-width: 374px;
}

.select::part(listbox) {
    --max-height: 336px;
    height: 336px;
}

.selector-icon {
    height: 16px;
    width: 16px;
}
`.withBehaviors();var g=i("i56n"),u=i("e8No"),h=i("6BDD"),p=i("6vBc"),b=i("+53S"),m=i("UNqU"),f=i("eUhr"),y=i("0QZK");g.a,u.a;const v=h.b`
<fluent-option
    id=${e=>e.id}
    value=${e=>e.value}
    dir=${e=>e.direction}
    ${Object(f.b)(e=>e.marketSelectorOptionMetaTag)}
>
    ${e=>e.displayString}
</fluent-option>
`,k=h.b`
${Object(p.a)(e=>e.label,h.b`<span>${e=>e.label}</span>`)}
<fluent-select
    id=${e=>e.id}
    class="select"
    part="select"
    exportparts="listbox"
    position=${e=>e.selectPosition}
    ?disabled=${e=>e.disabled}
    :selectedIndex="${e=>e.selectedIndex}"
    @change=${(e,t)=>e.onChange(t.event)}
    @click=${(e,t)=>e.onClick(t.event)}
    ${Object(b.b)("select")}
    ${Object(f.b)(e=>e.marketSelectorMetaTag)}
>
    ${Object(m.c)(e=>e.marketList,v)}
    <div class="selector-icon" slot="indicator">
        <slot name="selector-icon">
            ${y.B}
        </slot>
    </div>
</fluent-select>
`;let x=class extends d{};x=Object(o.e)([Object(a.b)({name:"msn-market-selector",template:k,styles:c})],x)},xDi8:function(e,t,i){"use strict";var o,a;i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return a})),function(e){e.above="above",e.below="below"}(o||(o={})),function(e){e.combobox="combobox"}(a||(a={}))}}]);