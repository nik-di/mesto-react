(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/icon-close.a3e3d9bd.svg"},,,function(e,t,a){e.exports=a.p+"static/media/logo.9d0e3a93.svg"},,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),i=(a(14),a(2)),l=a(1),u=(a(15),a(16),a(6)),s=a.n(u);var p=function(){return o.a.createElement("header",{className:"header root__section"},o.a.createElement("img",{src:s.a,alt:"Mesto \u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"logo"}))};a(17);var m=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__text"},"Mesto Russia by NDI \xa92020"))},d=(a(18),a(19),a(3)),f=a.n(d);var _=function(e){var t=e.handleClosePopup,a=e.selectedImage;return o.a.createElement("div",{onClick:function(e){var a=e.target;e.keyCode,!a.classList.contains("popup-image__image")&&t()},className:"popup popup_type_image popup_is-opened"},o.a.createElement("div",{className:"popup-image__content"},o.a.createElement("img",{src:f.a,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",className:"popup-close"}),o.a.createElement("img",{src:a,className:"popup-image__image",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"})))};a(20);var h=function(e){var t=e.handleClosePopup,a=e.title,n=e.popupName,r=e.children,c=function(e){var a=e.target,n=e.currentTarget,o=e.keyCode;(a.classList.contains("popup-close")||a===n)&&t();27===o&&t()};return o.a.createElement("div",{onClick:c,onKeyUp:c,className:"popup popup_type_".concat(n," popup_is-opened")},o.a.createElement("div",{className:"popup__content"},o.a.createElement("img",{src:f.a,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",className:"popup-close"}),o.a.createElement("h3",{className:"popup__title"},a),r&&r))},b=Object(n.createContext)(),E=(a(21),Object(n.memo)((function(e){var t=e.cardData,a=t.name,r=t.likes,c=t.link,i=t._id,l=t.owner,u=e.imageCardClickHandler,s=e.deleteHandler,p=e.likeHandler,m=Object(n.useContext)(b),d=m._id===l._id,f=r.some((function(e){return e._id===m._id}));return o.a.createElement("div",{id:i,className:"place-card"},o.a.createElement("button",{onClick:function(){d&&s(i)},disabled:!d,className:"place-card__delete-icon"}),o.a.createElement("div",{className:"place-card__image",style:{backgroundImage:"url(".concat(c,")")},onClick:function(e){var t=e.target.style.backgroundImage.slice(5,-2);u(t)}}),o.a.createElement("div",{className:"place-card__description"},o.a.createElement("h3",{className:"place-card__name"},a),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){p(i,f)},className:"place-card__like-icon"+"".concat(f?" place-card__like-icon_liked":"")}),o.a.createElement("div",{className:"place-card__like-counter"},r.length))))}))),v=Object(n.memo)((function(e){var t=e.isEditProfileOpen,a=e.onEditProfilePopupToggle,r=e.onSubmitProfile,c=Object(n.useContext)(b),i=c.name,u=c.about,s=Object(n.useState)(""),p=Object(l.a)(s,2),m=p[0],d=p[1],f=Object(n.useState)(""),_=Object(l.a)(f,2),E=_[0],v=_[1];Object(n.useEffect)((function(){d(i),v(u)}),[i,u]);return t&&o.a.createElement(h,{handleClosePopup:a,popupName:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r({name:m,about:E})},className:"popup__form",name:"edit"},o.a.createElement("div",null,o.a.createElement("input",{required:!0,type:"text",name:"name-profile",className:"popup__input popup-edit__input_type_name",placeholder:"\u0418\u043c\u044f",maxLength:"30",value:m,onChange:function(e){var t=e.target;d(t.value)}}),o.a.createElement("span",{className:"error-name-profile error-message"+"".concat(m.length<2?" error-message_active":"")},"\u0414\u043b\u0438\u043d\u0430 \u0438\u043c\u0435\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2-\u0445 \u0431\u0443\u043a\u0432")),o.a.createElement("div",null,o.a.createElement("input",{required:!0,type:"text",name:"about-profile",className:"popup__input popup-edit__input_type_about",placeholder:"\u041e \u0441\u0435\u0431\u0435",maxLength:"30",value:E,onChange:function(e){var t=e.target;v(t.value)}}),o.a.createElement("span",{className:"error-about-profile error-message"+"".concat(E.length<1?" error-message_active":"")},"\u0414\u043b\u0438\u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 1-\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430")),o.a.createElement("button",{type:"submit",className:"button popup__button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))})})),g=a(7),k=a(8),N=new(function(){function e(t,a){Object(g.a)(this,e),this.url=t,this.token=a}return Object(k.a)(e,[{key:"_getPromiseRes",value:function(e){return e.ok?e.json():Promise.reject(e.status,e.text)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:{authorization:this.token}}).then(this._getPromiseRes).catch((function(e){return console.error(e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:{authorization:this.token}}).then(this._getPromiseRes).catch((function(e){return console.error(e)}))}},{key:"updateUserInfo",value:function(e,t){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._getPromiseRes).catch((function(e){console.error(e)}))}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._getPromiseRes).catch((function(e){console.error(e)}))}},{key:"postCard",value:function(e,t){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._getPromiseRes).catch((function(e){console.error(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token}}).then(this._getPromiseRes).catch((function(e){console.error(e)}))}},{key:"updateLike",value:function(e,t){return fetch("".concat(this.url,"/cards/like/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this.token}}).then(this._getPromiseRes).catch((function(e){console.error(e)}))}}]),e}())("https://nomoreparties.co/cohort4","87f8a436-5ee7-4266-9bfc-523daea2f9ff"),P=Object(n.memo)((function(e){var t=e.isEditAvatarPopupOpen,a=e.onEditAvatarPopupToggle,r=e.onSubmitAvatar,c=Object(n.useRef)(),i=Object(n.useRef)();return t&&o.a.createElement(h,{handleClosePopup:a,popupName:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r({avatar:c.current.value})},className:"popup__form",name:"avatar"},o.a.createElement("div",null,o.a.createElement("input",{ref:c,required:!0,type:"url",name:"link",className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",onChange:function(){c.current.validity.valid?i.current.removeAttribute("disabled"):i.current.setAttribute("disabled","")}}),o.a.createElement("span",{className:"error-name error-message"})),o.a.createElement("button",{ref:i,type:"submit",className:"button popup__button",disabled:!0},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"))})})),O=Object(n.memo)((function(e){var t=e.isAddPlacePopupOpen,a=e.isEditAvatarPopupOpen,r=e.isEditProfileOpen,c=e.onAddPlacePopupToggle,i=e.onEditAvatarPopupToggle,u=e.onEditProfilePopupToggle,s=e.onCardClick,p=e.selectedImage,m=e.submitProfile,d=e.onSubmitAvatar,f=Object(n.useState)([]),g=Object(l.a)(f,2),k=g[0],O=g[1],y=Object(n.useContext)(b),j=y.name,C=y.about,A=y.avatar;Object(n.useEffect)((function(){N.getInitialCards().then((function(e){O(e)})).catch((function(e){return console.error(e)}))}),[]);var S=function(e){N.deleteCard(e).then((function(){O((function(t){return t.filter((function(t){return t._id!==e}))}))}))},T=function(e,t){N.updateLike(e,t).then((function(t){var a=k.map((function(a){return a._id===e?t:a}));O(a)}))};return o.a.createElement("main",{className:"main"},o.a.createElement("section",{className:"profile root__section"},o.a.createElement("div",{className:"user-info"},o.a.createElement("div",{style:{backgroundImage:"url(".concat(A,")")},onClick:i,className:"user-info__photo"}),o.a.createElement("div",{className:"user-info__data"},o.a.createElement("h1",{className:"user-info__name"},j),o.a.createElement("p",{className:"user-info__job"},C),o.a.createElement("button",{onClick:u,className:"button user-info__edit-button"},"Edit")),o.a.createElement("button",{onClick:c,className:"button user-info__button"},"+"))),o.a.createElement("section",{className:"places-list root__section"},k.length&&k.map((function(e){return o.a.createElement(E,{key:e._id,cardData:e,imageCardClickHandler:s,likeHandler:T,deleteHandler:S})}))),o.a.createElement("section",{className:"popup-container"},p&&o.a.createElement(_,{handleClosePopup:s,selectedImage:p}),o.a.createElement(v,{isEditProfileOpen:r,onEditProfilePopupToggle:u,onSubmitProfile:m}),t&&o.a.createElement(h,{handleClosePopup:c,popupName:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:o.a.createElement("form",{noValidate:!0,className:"popup__form",name:"new"},o.a.createElement("div",null,o.a.createElement("input",{required:!0,type:"text",name:"name",className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30"}),o.a.createElement("span",{className:"error-name error-message"})),o.a.createElement("div",null,o.a.createElement("input",{required:!0,type:"url",name:"link",className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),o.a.createElement("span",{className:"error-link error-message"})),o.a.createElement("button",{type:"submit",className:"button popup__button",disabled:!0},"+"))}),o.a.createElement(P,{isEditAvatarPopupOpen:a,onEditAvatarPopupToggle:i,onSubmitAvatar:d})))}));var y=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(l.a)(c,2),s=u[0],d=u[1],f=Object(n.useState)(!1),_=Object(l.a)(f,2),h=_[0],E=_[1],v=Object(n.useState)(null),g=Object(l.a)(v,2),k=g[0],P=g[1],y=Object(n.useState)({}),j=Object(l.a)(y,2),C=j[0],A=j[1];Object(n.useEffect)((function(){N.getUserInfo().then((function(e){var t=e.avatar,a=e.name,n=e.about,o=e._id;A((function(e){return Object(i.a)(Object(i.a)({},e),{},{name:a,about:n,avatar:t,_id:o})}))})).catch((function(e){return console.error(e)}))}),[]);var S=function(){E(!h)},T=function(){r(!a)};return o.a.createElement(b.Provider,{value:C},o.a.createElement(p,null),o.a.createElement(O,{isEditProfileOpen:a,isAddPlacePopupOpen:s,isEditAvatarPopupOpen:h,onEditAvatarPopupToggle:S,onEditProfilePopupToggle:T,onAddPlacePopupToggle:function(){d(!s)},selectedImage:k,onCardClick:function(e){P(k?null:e)},submitProfile:function(e){var t=e.name,a=e.about;N.updateUserInfo(t,a).then((function(e){A(e),T()}))},onSubmitAvatar:function(e){var t=e.avatar;N.updateUserAvatar(t).then((function(e){A((function(t){return Object(i.a)(Object(i.a)({},t),{},{avatar:e.avatar})})),S()}))}}),o.a.createElement(m,null))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.querySelector(".root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.50879695.chunk.js.map