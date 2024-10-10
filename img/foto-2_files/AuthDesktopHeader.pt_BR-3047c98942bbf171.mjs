"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[82952],{215886:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(340523),s=n(554786);let r=e=>{let{checkExperiment:t}=(0,i.F)(),n=(0,s.ZP)();if("phone"===n||"tablet"===n){let n=t("mweb_metrics_dau_ping").group;return n===e||n.startsWith("employee")}let r=t("web_metrics_dau_ping").group;return r===e||r.startsWith("employee")}},568803:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return"object"==typeof e&&null!==e&&"url"in e&&"media"in e}},433058:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(667294),s=n(214877),r=n(525364);let o=e=>{let t=(0,i.useRef)(!1),{logContextEvent:n}=(0,s.v)(),{viewType:o,viewParameter:l}=(0,r.SU)();(0,i.useEffect)(()=>{Object.entries(e).length>0&&!t.current&&o&&(n({event_type:13,view_type:o,view_parameter:l,...e}),t.current=!0)})}},220488:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(667294),s=n(883119),r=n(510989),o=n(401429),l=n(862249),a=n(983983),c=n(785893);let d=a.fe,h=new s.Ry(d-1);function u(e){let{button:t,onClick:n}=e;return t.url?(0,c.jsx)(s.ZP,{color:"white",fullWidth:!0,href:t.url,onClick:n,rel:(0,l.Z)({url:t.url})?"nofollow":"none",text:t.text}):(0,c.jsx)(s.zx,{color:"white",fullWidth:!0,onClick:n,text:t.text})}let m=e=>{let t;let{anchors:n,experience:r,dismiss:o,complete:l,scrollToDismiss:a,onAnchorTouch:d,idealDirection:m}=e,p=!0,{message:x,anchor:_,complete_button:f}=(r||{}).display_data,g=n[_],b=()=>{t&&clearTimeout(t),o()},y=()=>{t||p||(t=setTimeout(()=>b(),1500)),p=!1};return(0,i.useEffect)(()=>(g&&(a&&(window.addEventListener("scroll",y),window.addEventListener("touchmove",y)),d&&g&&g.addEventListener("click","complete"===d?l:b)),()=>{a&&(window.removeEventListener("scroll",y),window.removeEventListener("touchmove",y),t&&clearTimeout(t)),d&&g&&g.removeEventListener("click","complete"===d?l:b)}),[g]),(0,c.jsx)(s.Li,{anchor:g,idealDirection:m,onDismiss:b,zIndex:h,children:(0,c.jsx)(s.xu,{padding:4,tabIndex:0,children:(0,c.jsxs)(s.kC,{direction:"column",gap:3,children:[(0,c.jsx)(s.xv,{color:"light",children:x}),f&&(0,c.jsx)(u,{button:f,onClick:l})]})})})},p=e=>{let{placementId:t,anchors:n}=e,[s,l]=(0,i.useState)(!0),a=()=>l(!1);return(0,c.jsx)(r.Z,{name:"ExperiencePopoverEducational",children:s&&(0,c.jsx)(o.Z,{placementId:t,predicate:e=>{if(e?.type!==29)return!1;let{anchor:t}=(e||{}).display_data;return!!t&&!!n[t]},children:({complete:t,dismiss:n,experience:i})=>(0,c.jsx)(m,{...e,complete:()=>{a(),t()},dismiss:()=>{a(),n()},experience:i})})})}},201700:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(88682),s=n(598228);function r({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:r,advertiserId:o}){let l=e||t||n?`${s.C0}`:"",a=`${l}${r}`;return o?(0,i.Z)(a,{advertiserId:o}):a}},98769:(e,t,n)=>{n.r(t),n.d(t,{Header:()=>X,default:()=>Q});var i=n(667294),s=n(616550),r=n(883119),o=n(334589),l=n(406718),a=n(3808),c=n(620527),d=n(215886),h=n(324358),u=n(568803),m=n(920434),p=n(422317),x=n(140017),_=n(741983),f=n(729817),g=n(340523),b=n(5859),y=n(37156),j=n(623409),T=n(624797),v=n(794109),P=n(906906),A=n(214877),w=n(97630),S=n(785893);let C=({isSelected:e,onClick:t})=>{let n=(0,x.ZP)(),{logContextEvent:a}=(0,A.v)(),c=(0,l.Z)(!0),d=(0,i.useRef)(null),[h,u]=(0,i.useState)(!1),m=(0,s.k6)(),p=e=>{a({event_type:101,component:13988,element:e}),u(!1)};return(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(r.xu,{ref:d,"data-test-id":"create-tab",children:(0,S.jsx)(w.Z,{contextData:{event:101,component:8,element:12969},iconEnd:c?void 0:"arrow-down",isSelected:e,onClick:e=>{t?.(),c?(a({event_type:101,component:13988,element:10949}),e.preventDefault(),m.push({pathname:(0,o.Z)(c),state:{entry_type:"navbar_plus_button"}})):u(e=>!e)},role:c?"link":"button",text:n.bt("Criar", "Create", "header.section.createTab", undefined, true)})}),h&&(0,S.jsxs)(r.Lt,{anchor:d.current,id:"header-create-dropdown",idealDirection:"down",onDismiss:()=>{u(!1)},zIndex:new r.Ry(1e3),children:[(0,S.jsx)(r.Lt.Link,{dataTestId:"create-idea-pin",href:"/idea-pin-builder/",onClick:()=>p(10949),option:{value:"ideaPin",label:n.bt("Criar Idea Pin", "Create Idea Pin", "header.headerCreateMenu.ideaPinBtn", undefined, true)}}),(0,S.jsx)(r.Lt.Link,{dataTestId:"create-static-pin",href:"/pin-builder/",onClick:()=>p(10643),option:{value:"pin",label:n.bt("Criar Pin", "Create Pin", "header.headerCreateMenu.pinBtn", undefined, true)}})]})]})};var E=n(796796),I=n(391322),k=n(677801),Z=n(32810),B=n(477458),R=n(983983),L=n(953565);function O({tabs:e}){let t=(0,x.ZP)(),[n,s]=(0,i.useState)(!1),{hovered:o,onMouseEnter:l,onMouseLeave:a}=(0,B.Z)(),c=(0,i.useRef)(),d=e.find(e=>e.isSelected);d||(d=e.find(e=>"home"===e.key));let h=()=>s(!1);return(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(r.xu,{ref:c,color:n?"dark":o?"secondary":void 0,"data-test-id":"HeaderCollapsedTabs",display:"inlineBlock",flex:"none",height:48,marginStart:2,minWidth:60,onMouseEnter:l,onMouseLeave:a,rounding:6,children:(0,S.jsx)(r.iP,{fullHeight:!0,onTap:()=>{s(!n),d?.incrementKey&&(0,L.nP)(d.incrementKey)},rounding:6,children:(0,S.jsxs)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{padding:"14px 14px",whiteSpace:"nowrap"}},display:"flex",flex:"none",justifyContent:"center",children:[(0,S.jsx)(r.xv,{align:"center",color:n?"inverse":"default",overflow:"normal",weight:"bold",children:d?.text}),(0,S.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{marginTop:"1px"}},marginStart:2,children:(0,S.jsx)(r.JO,{accessibilityLabel:t.bt("Abrir menu de abas", "Open tab menu", "header.tabMenu.downArrow", undefined, true),color:n?"inverse":"default",icon:"arrow-down",size:12})})]})})}),n&&(0,S.jsx)(r.xu,{"data-test-id":"HeaderCollapsedTabsMenu",children:(0,S.jsx)(r.Lt,{anchor:c.current,disableMobileUI:!0,id:"HeaderCollapsedTabsMenu",onDismiss:h,zIndex:new r.H3([new r.Ry(R.fe)]),children:e.map(({isSelected:e,key:n,text:i,url:s})=>(0,S.jsx)(r.Lt.Link,{href:s,onClick:h,option:{value:n,label:i},children:(0,S.jsxs)(r.kC,{alignItems:"center",width:"100%",children:[(0,S.jsx)(r.kC.Item,{flex:"grow",children:(0,S.jsx)(r.xv,{weight:"bold",children:i})}),(0,S.jsx)(r.JO,{accessibilityLabel:t.bt("Opção selecionada", "Selected option", "flyoutMenu.selectedOptionCheckmark", undefined, true),color:"default",icon:e?"check":void 0,inline:!0})]})},n))})})]})}var z=n(4058),D=n(276235),N=n(757640);function H({children:e,isSelected:t}){let{isLoaded:n,data:i}=(0,N.Z)({name:"ApiResource",options:{url:"/v3/feeds/homefeed/badge/"},noCache:!0});return e(!!(n&&i)&&!t)}function U({anchor:e}){let t=(0,x.ZP)();return(0,S.jsx)(r.Li,{anchor:e,idealDirection:"down",message:t.bt("Seu feed inicial mostrará ideias dos seus novos interesses", "Your home feed will show ideas for your new interests", "Flyout message on Pinterest logo on Header", undefined, true),onDismiss:()=>{}})}var M=n(249222),F=n(509474),W=n(433058),$=n(454051);function G({isSelected:e,onClick:t}){let n=(0,x.ZP)();(0,W.Z)({component:8,element:11674});let i=n.bt("Explorar", "Explore", "header.section.exploreTab", undefined, true);return(0,S.jsx)(w.Z,{contextData:{event:101,component:8,element:11674},dataTestId:"today-tab",isSelected:e,onClick:t,showNotifBadge:!0,text:i,url:(0,$.tG)()})}var Y=n(961550),K=n(19549),q=n(909846);function V(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class X extends i.Component{constructor(e){super(e),V(this,"mounted",!1),V(this,"iconRoutes",(0,E.Z)({username:this.props.viewer.username,isIdeaPinRenamingEnabled:this.props.isIdeaPinRenamingEnabled})),V(this,"logoButtonRef",(0,i.createRef)()),V(this,"profileRef",(0,i.createRef)()),V(this,"incrementTags",()=>({tags:{experimentGroup:this.props.verticalNavExperimentGroup}})),V(this,"getCollapsedTabList",()=>[{key:"home",text:this.props.i18n.bt("Página inicial", "Home", "header.homeButton.section", undefined, true),url:"/",incrementKey:R.sp.HOME_BUTTON_COLLAPSED_TAB},...this.props.isTodayTabEligible?[{key:"explore",text:this.props.i18n.bt("Explorar", "Explore", "header.section.exploreTab", undefined, true),url:(0,$.tG)(),incrementKey:R.sp.TODAY_TAB_COLLAPSED_TAB}]:[],{key:"create",text:this.props.i18n.bt("Criar", "Create", "header.section.createTab", undefined, true),url:(0,o.Z)(this.props.isIdeaPinRenamingEnabled),incrementKey:R.sp.CREATE_TAB_COLLAPSED_TAB}]),V(this,"handleResize",(0,m.Z)(()=>{if(this.mounted){let e=document.getElementById("searchBoxContainer")?.offsetWidth||0;this.setState({searchIconOnly:e<=300}),window.innerWidth<850&&this.props.requestContext?this.setState({shrinkSearchbox:!0}):this.state.shrinkSearchbox&&this.setState({searchIconOnly:!1,shrinkSearchbox:!1})}},100)),V(this,"fetchUserAccounts",()=>{let{userAccountsRetrieved:e,viewer:t}=this.props;t.isAuth&&(0,f.dD)(t).then(t=>{e(t)})}),this.state={searchIconOnly:!1,selected:(0,I.Z)({pathname:e.location.pathname,iconRoutes:this.iconRoutes}),showLeftTabs:!0,shrinkSearchbox:!1}}componentDidMount(){let{headerButtonContext:e,isMetricDAUExperimentEnabled:t}=this.props;this.mounted=!0,this.fetchUserAccounts(),this.handleResize(),window.addEventListener("resize",this.handleResize),(0,i.startTransition)(()=>{e.setLogoButtonRef(this.logoButtonRef.current)}),t&&(0,h.Z)()}componentDidUpdate(e){let{location:t}=this.props;if(e.location.pathname!==t.pathname){let e=(0,I.Z)({pathname:t.pathname,iconRoutes:this.iconRoutes});this.setState({selected:e})}}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),this.mounted=!1}renderSearchBox(){let{history:e}=this.props,{searchIconOnly:t,shrinkSearchbox:n}=this.state;return e?.push?(0,S.jsx)(P.Z,{handleIconOnlyChange:e=>this.setState({showLeftTabs:t&&e}),iconOnly:t,widthType:n?"shrink":void 0}):null}renderButtons(){let{currentSite:e,headerButtonContext:t,isPersistentArrUpsellEnabled:n,isVerticalNavEnabled:s,startPrefetchTimer:o,cancelPrefetchTimer:l,onNavigateToHomefeed:a,onMouseDownHomefeedPrefetch:c,onNavigateToHomefeedMousedownPrefetch:d}=this.props,{selected:h,showLeftTabs:u,shrinkSearchbox:m}=this.state;return s?(0,S.jsxs)(r.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[this.renderSearchBox(),(0,S.jsx)(r.kC.Item,{children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(k.Z,{idealTooltipDirection:"down",isSelected:"profile"===h,onClick:()=>(0,L.nP)(Y.Un.AVATAR,this.incrementTags()),tooltipZIndex:Y.BO})})})]}):(0,S.jsxs)(r.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsxs)(r.xu,{children:[(0,S.jsx)(r.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{cancelPrefetchTimer:l,onClick:()=>{(0,L.nP)(R.sp.PINTEREST_LOGO,this.incrementTags()),a(),d?.()},onMouseDown:c,startPrefetchTimer:o},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,S.jsx)(U,{anchor:this.logoButtonRef.current})]}),!m&&u&&(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(H,{isSelected:"home"===h,children:e=>(0,S.jsx)(w.Z,{dataTestId:"home-tab",isSelected:"home"===h,onClick:()=>(0,L.nP)(R.sp.HOME_TAB,this.incrementTags()),showNotifBadge:e,text:this.props.i18n.bt("Página inicial", "Home", "header.homeButton.section", undefined, true),url:"/"})}),this.props.isTodayTabEligible&&(0,S.jsx)(G,{isSelected:"today"===h,onClick:()=>(0,L.nP)(R.sp.TODAY_TAB,this.incrementTags())}),(0,S.jsx)(C,{isSelected:"create"===h,onClick:()=>(0,L.nP)(R.sp.CREATE_TAB,this.incrementTags())})]}),m&&u&&(0,S.jsx)(O,{tabs:this.getCollapsedTabList().map(e=>({isSelected:h===e.key,...e}))}),this.renderSearchBox(),(0,S.jsxs)(r.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:[(0,S.jsx)(F.F,{value:{currentSite:e},children:(0,S.jsx)(K.Z,{onConversationsClick:()=>(0,L.nP)(R.sp.CONVERSATIONS,this.incrementTags()),onNewsClick:()=>(0,L.nP)(R.sp.NEWS,this.incrementTags())})}),(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(r.xu,{ref:this.profileRef,children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(k.Z,{isSelected:"profile"===h,onClick:()=>(0,L.nP)(R.sp.AVATAR,this.incrementTags())})})}),(0,S.jsx)(p.Z,{currentSite:e,isPersistentArrUpsellEnabled:n,onClick:()=>(0,L.nP)(R.sp.ACCOUNT_OPTIONS,this.incrementTags())})]})]})]})}renderHomeButtonAndAccountSwitcher(){let{currentSite:e,headerButtonContext:t,isPersistentArrUpsellEnabled:n}=this.props,{selected:s}=this.state;return(0,S.jsxs)(r.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsxs)(r.xu,{children:[(0,S.jsx)(r.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>(0,L.nP)(R.sp.EXTERNAL_BUTTON_QUERY_PINTEREST_LOGO,this.incrementTags())},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,S.jsx)(U,{anchor:this.logoButtonRef.current})]}),(0,S.jsx)(r.xu,{flex:"grow"}),(0,S.jsx)(r.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(r.xu,{ref:this.profileRef,children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(k.Z,{isSelected:"profile"===s,onClick:()=>(0,L.nP)(R.sp.EXTERNAL_BUTTON_QUERY_AVATAR,this.incrementTags())})})}),(0,S.jsx)(p.Z,{currentSite:e,isPersistentArrUpsellEnabled:n,onClick:()=>(0,L.nP)(R.sp.EXTERNAL_BUTTON_QUERY_ACCOUNT_OPTIONS,this.incrementTags())})]})})]})}renderBusinessSsoPageHeader(){let{i18n:e}=this.props;return(0,S.jsxs)(r.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsx)(r.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>(0,L.nP)(R.sp.SSO_PAGE_PINTEREST_LOGO,this.incrementTags())},"HomeButton")}),(0,S.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{letterSpacing:"-1px"}},children:(0,S.jsx)(r.X6,{accessibilityLevel:2,color:"default",overflow:"normal",size:"400",children:e.bt("Business", "Business", "authHeader.logoText.business", undefined, true)})})]})}renderUnsubscribePageHeader(){let{history:e,i18n:t,trackInteraction:n}=this.props;return(0,S.jsxs)(r.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsx)(r.xu,{children:(0,S.jsx)(D.Z,{onClick:()=>(0,L.nP)(R.sp.UNSUBSCRIBE_PAGE_PINTEREST_LOGO,this.incrementTags())},"HomeButton")}),(0,S.jsx)(r.xu,{flex:"grow"}),(0,S.jsx)(r.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,S.jsx)(r.iP,{onTap:()=>{e.push("/"),n({action:"click",item:"back-to-pinterest",within:"unsubscribe-page"})},rounding:2,tapStyle:"compress",children:(0,S.jsxs)(r.kC,{alignItems:"center",justifyContent:"start",children:[(0,S.jsx)(r.xv,{inline:!0,size:"300",weight:"bold",children:t.bt("Voltar ao Pinterest", "Back to Pinterest", "header.backToPinterest.section", undefined, true)}),(0,S.jsx)(k.Z,{isSelected:!1,noNavigation:!0,onClick:()=>(0,L.nP)(R.sp.UNSUBSCRIBE_PAGE_AVATAR,this.incrementTags())})]})})})]})}renderHeaderContent(){let{location:e,viewer:t}=this.props;if((0,_.RU)(e)){let t=(0,T.mB)(e.search);if((0,u.Z)(t))return this.renderHomeButtonAndAccountSwitcher()}else if((0,_.OK)(e)&&t.isLimitedLogin)return this.renderUnsubscribePageHeader();else if((0,_.nU)(e))return this.renderBusinessSsoPageHeader();return this.renderButtons()}render(){let{headerShadowContext:{isScrolled:e,subheaderShadow:t},nags:n}=this.props;return(0,S.jsxs)(r.xu,{color:"default",column:12,"data-test-id":"header-background",children:[n,(0,S.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{...null===t&&e?R.Rz:{}}},children:(0,S.jsx)(r.kC,{direction:"column",height:R.cI,justifyContent:"start",width:"100%",children:(0,S.jsx)(r.xu,{alignItems:"center",column:12,display:"flex",flex:"grow",paddingX:4,paddingY:1,children:this.renderHeaderContent()})})})]})}}function Q(e){let t=(0,x.ZP)(),n=(0,b.B)(),{checkExperiment:i}=(0,g.F)(),{userAccountsRetrieved:r}=(0,v.N)(),o=(0,j.Z)(),{isFbAuthOnlyUser:h}=(0,q.t)(),{startPrefetchTimer:u,cancelPrefetchTimer:m,onNavigateToHomefeed:p}=(0,c.$)(),{onMouseDown:_,onNavigateToHomefeed:f}=(0,c.C)(),{enabled:T,group:P}=(0,a.Z)();i("social_growth_holdout_2023_h2"),i("social_experience_holdout_2024_h1"),i("social_experience_holdout_2024_h2");let A=(0,l.Z)(!0),w=(0,y.Z)(),C=(0,d.Z)("header");return(0,S.jsx)(X,{...e,cancelPrefetchTimer:m,headerButtonContext:(0,Z.p)(),headerShadowContext:(0,z.WQ)(),history:(0,s.k6)(),i18n:t,isIdeaPinRenamingEnabled:A,isMetricDAUExperimentEnabled:C,isPersistentArrUpsellEnabled:h,isTodayTabEligible:w,isVerticalNavEnabled:T,location:(0,s.TH)(),onMouseDownHomefeedPrefetch:_,onNavigateToHomefeed:p,onNavigateToHomefeedMousedownPrefetch:f,requestContext:n,showPersonalBoutique:e.viewer.show_personal_boutique??!1,startPrefetchTimer:u,trackInteraction:o,userAccountsRetrieved:r,verticalNavExperimentGroup:P})}},677801:(e,t,n)=>{n.d(t,{Z:()=>j});var i=n(667294),s=n(883119),r=n(3808),o=n(220488),l=n(205841),a=n(140017),c=n(495442),d=n(340370),h=n(5859),u=n(201700),m=n(477458),p=n(149722),x=n(514810),_=n(983983),f=n(961550),g=n(785893);let b="circle";function y({children:e,show:t,text:n,idealDirection:i,zIndex:r}){return t?(0,g.jsx)(s.u,{accessibilityLabel:"",idealDirection:i,text:n,zIndex:r||new s.H3([new s.Ry(_.fe)]),children:e}):e}function j({isAdsSite:e=!1,isAnalyticsSite:t=!1,isTrendsSite:n=!1,isSelected:_,noNavigation:j=!1,idealTooltipDirection:T,tooltipZIndex:v,onClick:P}){let A=(0,p.Z)(),w=(0,h.B)(),S=(0,a.ZP)(),{active:C,hovered:E,onBlur:I,onFocus:k,onMouseDown:Z,onMouseUp:B,onMouseEnter:R,onMouseLeave:L}=(0,m.Z)(),{fullName:O,username:z,imageMediumUrl:D}=A.isAuth?A:{fullName:"",username:"",imageMediumUrl:""},{isInBiznuxFullscreen:N}=(0,x.Z)(),H=(0,i.useRef)(null),U=(0,u.Z)({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:`/${z}/`,requestContext:w}),M=(0,d.Z)({href:U,onHistoryChange:c.Z}),{enabled:F}=(0,r.Z)();return N||j?(0,g.jsx)(s.xu,{"data-test-id":"header-profile",height:48,rounding:"circle",width:48,children:(0,g.jsx)(s.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,g.jsx)(s.xu,{alignItems:"center",display:"flex",height:30,justifyContent:"center",rounding:"circle",width:30,children:(0,g.jsx)(l.qE,{name:O,size:"xs",src:D})})})}):(0,g.jsxs)(s.xu,{"data-test-id":"header-profile",children:[(0,g.jsx)(o.Z,{anchors:{3014:H.current},idealDirection:T,onAnchorTouch:"complete",placementId:1000109,scrollToDismiss:!0}),(0,g.jsx)(y,{idealDirection:T,show:![e,t,n].some(Boolean),text:S.bt("Seu perfil", "Your profile", "navbar.avatarButton.tooltip", undefined, true),zIndex:v,children:(0,g.jsx)(s.Tg,{href:U,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{P?.(),t(),M({event:e})},rounding:F?f.uW:b,children:(0,g.jsx)(s.xu,{ref:H,color:E&&!F?"secondary":void 0,dangerouslySetInlineStyle:F?{__style:{backgroundColor:E?f.bT:void 0}}:void 0,height:48,onBlur:I,onFocus:k,onMouseDown:Z,onMouseEnter:R,onMouseLeave:L,onMouseUp:B,rounding:F?f.uW:b,width:48,children:(0,g.jsx)(s.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,g.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{...C||_?{border:"2px solid #111111"}:{}}},display:"flex",height:F?38:30,justifyContent:"center",rounding:"circle",width:F?38:30,children:(0,g.jsx)(l.qE,{name:O,size:F?"sm":"xs",src:D})})})})})})]})}},249222:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(667294),s=n(883119),r=n(406893),o=n(514810),l=n(19447),a=n(785893);function c(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let d="SavePin",h={__style:{left:"50%",marginLeft:-125}},u={__style:{animationName:`${d}_AnimateIn, ${d}_CircleAnimateOut`,animationDuration:"0.3s, 0.25s",animationDelay:"0.5s, 1.3s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",backgroundColor:"rgba(255, 255, 255, 0.6)"}},m={__style:{animationName:`${d}_AnimateIn, ${d}_AnimateOut`,animationDuration:"0.3s, 0.35s",animationDelay:"0.5s, 1.55s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",border:"4px solid white"}},p={__style:{animationName:`${d}_NavButtonAnimation`,animationDuration:"0.8s",animationDelay:"1.65s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out"}},x=()=>`
@keyframes ${d}_AnimateIn {
  from {
    transform: scale(0.0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
}
@keyframes ${d}_CircleAnimateOut {
  from {
    transform: scale(1.0);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}
@keyframes ${d}_AnimateOut {
  from {
    transform: translateY(0) scale(1.0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px) scale(0.0);
    opacity: 0;
  }
}
@keyframes ${d}_NavButtonAnimation {
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.0);
  }
}
`;class _ extends i.Component{constructor(...e){super(...e),c(this,"state",{imageLoaded:!1}),c(this,"handleAnimationCompletion",()=>{let{animationEnded:e}=this.props;this.setState({imageLoaded:!1},()=>{e()})}),c(this,"handleImageLoad",()=>{this.setState({imageLoaded:!0})}),c(this,"loadImage",()=>{let e=new Image;e.onload=this.handleImageLoad,e.src=this.imageSrc()}),c(this,"imageSrc",()=>{let{images:e={}}=this.props.lastRepin||{};return e["236x"]?.url??""}),c(this,"shouldRenderAnimation",()=>{let{lastRepin:e,startAnimation:t}=this.props,{imageLoaded:n}=this.state;return!!(e&&n&&t)})}componentDidUpdate(e,t){let{lastRepin:n={}}=e,{imageLoaded:i}=t,{lastRepin:s,startAnimation:r}=this.props,{imageLoaded:o}=this.state;s&&s.id!==n?.id&&this.loadImage(),r&&o&&o!==i&&(this.dismissTimeout=setTimeout(this.handleAnimationCompletion,2500))}componentWillUnmount(){this.dismissTimeout&&clearTimeout(this.dismissTimeout)}render(){let{children:e}=this.props;return this.shouldRenderAnimation()?(0,a.jsxs)(s.kC,{alignItems:"stretch",flex:"grow",justifyContent:"center",children:[(0,a.jsx)(r.Z,{unsafeCSS:x()}),(0,a.jsxs)(s.xu,{position:"relative",children:[(0,a.jsxs)(s.xu,{dangerouslySetInlineStyle:h,height:250,position:"absolute",top:!0,width:250,children:[(0,a.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:u,display:"flex",height:"100%",justifyContent:"center",opacity:0,rounding:"circle",width:"100%"}),(0,a.jsx)(s.xu,{bottom:!0,dangerouslySetInlineStyle:m,height:100,left:!0,margin:"auto",opacity:0,position:"absolute",right:!0,rounding:3,top:!0,width:100,children:(0,a.jsx)(s.zd,{height:"100%",rounding:2,wash:!0,width:"100%",children:(0,a.jsx)(s.Ee,{alt:"pin-image",fit:"cover",naturalHeight:1,naturalWidth:1,src:this.imageSrc()})})})]}),(0,a.jsx)(s.xu,{dangerouslySetInlineStyle:p,children:e})]})]}):e}}function f(e){let{repinPinId:t,repinStartAnimation:n,updateHeaderState:i}=(0,o.Z)(),s=(0,l.S6)(),r=t?s(t):null;return(0,a.jsx)(_,{...e,animationEnded:()=>i({type:"hideRepinAnimation"}),lastRepin:r,startAnimation:n})}},19549:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(667294),s=n(149722),r=n(474373),o=n(901551),l=n(785893);function a({onNewsClick:e,onConversationsClick:t}){let{should_show_messaging:n}=(0,s.Z)();return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(r.Z,{onClick:e}),n&&(0,l.jsx)(o.Z,{onClick:t})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/AuthDesktopHeader.pt_BR-3047c98942bbf171.mjs.map