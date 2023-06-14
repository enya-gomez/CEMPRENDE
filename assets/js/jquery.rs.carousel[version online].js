!function(t,e){"use strict";var i=t.Widget.prototype;t.widget("rs.carousel",{version:"1.0.0",options:{mask:"div.carrusel",runner:"> div.correaCarrusel",items:"> div.item",itemsPerTransition:"auto",orientation:"horizontal",loop:!1,whitespace:!1,nextPrevActions:!0,insertPrevAction:function(){return t('<a href="#" class="rs-carousel-action rs-carousel-action-prev">Prev</a>').appendTo(this)},insertNextAction:function(){return t('<a href="#" class="rs-carousel-action rs-carousel-action-next">Next</a>').appendTo(this)},pagination:!0,insertPagination:function(e){return t(e).insertAfter(t(this).find(".rs-carousel-mask"))},speed:"normal",easing:"swing",fx:"slide",translate3d:!1,create:null,before:null,after:null},_create:function(){this.widgetFullName=this.widgetFullName||this.widgetBaseClass,this.eventNamespace=this.eventNamespace||"."+this.widgetName,this.index=0,this._elements(),this._setIsHorizontal(),this._addMask(),this._addNextPrevActions(),this.refresh(!1)},_elements:function(){var t=this.elements={},e=this.widgetFullName;this.element.addClass(e),t.mask=this.element.find(this.options.mask).addClass(e+"-mask"),t.runner=(t.mask.length?t.mask:this.element).find(this.options.runner).addClass(e+"-runner"),t.items=t.runner.find(this.options.items).addClass(e+"-item")},_setIsHorizontal:function(){var t=this.elements,e=this.widgetFullName;this.element.removeClass(e+"-horizontal").removeClass(e+"-vertical"),"horizontal"===this.options.orientation?(this.isHorizontal=!0,this.element.addClass(e+"-horizontal"),t.runner.css("top","")):(this.isHorizontal=!1,this.element.addClass(e+"-vertical"),t.runner.css("left",""))},_addMask:function(){var t=this.elements;t.mask.length||(t.mask=t.runner.wrap('<div class="'+this.widgetFullName+'-mask" />').parent(),this.maskAdded=!0)},_addNextPrevActions:function(){if(this.options.nextPrevActions){var t=this,e=this.elements,i=this.options,s=this.eventNamespace;this._removeNextPrevActions(),e.prevAction=i.insertPrevAction.apply(this.element[0]).bind("click"+s,function(e){e.preventDefault(),t.prev()}),e.nextAction=i.insertNextAction.apply(this.element[0]).bind("click"+s,function(e){e.preventDefault(),t.next()})}},_removeNextPrevActions:function(){var t=this.elements;t.nextAction&&(t.nextAction.remove(),t.nextAction=void 0),t.prevAction&&(t.prevAction.remove(),t.prevAction=void 0)},refresh:function(t){!1!==t&&this._recacheItems(),this._setPages(),this._addPagination(),this._setRunnerWidth(),this.index=this._makeValid(this.index),this.goToPage(this.index,!1,void 0,!0),this._checkDisabled()},_recacheItems:function(){this.elements.items=this.elements.runner.find(this.options.items).addClass(this.widgetFullName+"-item")},_setPages:function(){var t,e=0,i=isNaN(this.options.itemsPerTransition)?void 0:this._getLastItemIndex();for(this.pages=[];e<this.getNoOfItems();)if(isNaN(this.options.itemsPerTransition))this.pages.push(this._getVisibleItems(e)),e+=this.pages[this.pages.length-1].length;else{if(e>=i){this.pages.push(this.elements.items.slice(e));break}t=e,e+=parseInt(this.options.itemsPerTransition,10),this.pages.push(this.elements.items.slice(t,e))}},_getLastItemIndex:function(){if(!this.options.whitespace)return this.elements.items.index(this._getVisibleItems(0,!0).last())},_getVisibleItems:function(e,i){var s=this,n=[],a=i?[].reverse.apply(t(this.elements.items)).slice(e):this.elements.items.slice(e),o=this._getMaskDim(),r=0;return a.each(function(){if((r+=s.isHorizontal?t(this).outerWidth(!0):t(this).outerHeight(!0))>o)return 0===n.length&&n.push(this),!1;n.push(this)}),t(n)},_getMaskDim:function(){return this.elements.mask[this.isHorizontal?"width":"height"]()},getNoOfItems:function(){return this.elements.items.length},_addPagination:function(){if(this.options.pagination){var e,i=this,s=this.widgetFullName,n=t('<ol class="'+s+'-pagination" />'),a=[],o=this.getNoOfPages();for(this._removePagination(),e=0;e<o;e++)a[e]='<li class="'+s+'-pagination-link"><a href="#page-'+e+'">'+(e+1)+"</a></li>";n.append(a.join("")).delegate("a","click"+this.eventNamespace,function(t){t.preventDefault(),i.goToPage(parseInt(this.hash.split("-")[1],10))}),this.elements.pagination=this.options.insertPagination.call(this.element[0],n)}},_removePagination:function(){this.elements.pagination&&(this.elements.pagination.remove(),this.elements.pagination=void 0)},getNoOfPages:function(){return this.pages.length},_checkDisabled:function(){this.getNoOfPages()<=1?(this.disable(),this._disabled=!0):this._disabled&&(this.enable(),this._disabled=!1)},_setRunnerWidth:function(){var e=this.elements,i=0;e.runner.width(""),this.isHorizontal&&e.runner.width(function(){return e.items.each(function(){i+=t(this).outerWidth(!0)}),i})},next:function(t){var e=this.index+1;this.options.loop&&e>=this.getNoOfPages()&&(e=0),this.goToPage(e,t,"carousel:next")},prev:function(t){var e=this.index-1;this.options.loop&&e<0&&(e=this.getNoOfPages()-1),this.goToPage(e,t,"carousel:prev")},goToPage:function(e,i,s,n){i=!1!==i,!this.options.disabled&&this._isValid(e)&&(this.prevIndex=this.index,this.index=e,this["_"+this.options.fx](t.Event(s||"carousel:gotopage",{animate:i,speed:i?this.options.speed:0}),n)),this._updateUi()},goToItem:function(e,i){var s,n,a,o;isNaN(e)||(e=this.elements.items.eq(e)),e.jquery&&(e=e[0]);t:for(s=0,n=this.getNoOfPages();s<n;s++)for(a=0,o=this.getPage(s).length;a<o;a++)if(this.getPage(s)[a]===e)break t;return this.goToPage(s,i),t(e)},_isValid:function(t){return t<this.getNoOfPages()&&t>=0},_makeValid:function(t){return t<0?t=0:t>=this.getNoOfPages()&&(t=this.getNoOfPages()-1),t},_slide:function(t,e){var i,s=this,n={},a=this._getAbsoluteLastPos(),o=this.getPage().first().position()[this.isHorizontal?"left":"top"],r=this.eventNamespace,h=this.widgetFullName;e||this._trigger("before",t,this._getEventData())?(o>a&&(o=a),this.options.translate3d?(i=["transitionend"+r,"webkitTransitionEnd"+r,"oTransitionEnd"+r],t.animate&&this.element.addClass(h+"-transition"),this.elements.runner.unbind(i.join(" ")).on(i.join(" "),function(t){s.element.removeClass(h+"-transition"),e||s._trigger("after",t,s._getEventData())}).css("transform","translate3d("+(this.isHorizontal?-o+"px, 0, 0":"0, "+-o+"px, 0")+")"),t.animate||(s.element.removeClass(h+"-transition"),e||s._trigger("after",t,s._getEventData()))):(n[this.isHorizontal?"left":"top"]=-o,this.elements.runner.stop().animate(n,t.speed,this.options.easing,function(){e||s._trigger("after",t,s._getEventData())}))):this.index=this.prevIndex},_getAbsoluteLastPos:function(){if(!this.options.whitespace){var t,e=this.elements.items.eq(this.getNoOfItems()-1);return(t=e.position()[this.isHorizontal?"left":"top"]+e[this.isHorizontal?"outerWidth":"outerHeight"](!0)-this._getMaskDim())<0?void 0:t}},getPage:function(e){return this.pages[void 0!==e?e:this.index]||t([])},getPages:function(){return this.pages},_getEventData:function(){return{page:this.getPage(),prevPage:this.getPage(this.prevIndex),elements:this.elements}},_getCreateEventData:function(){return this._getEventData()},_updateUi:function(){this._updateActiveItems(),this.options.pagination&&this._updatePagination(),this.options.nextPrevActions&&this._updateNextPrevActions()},_updateActiveItems:function(){var t=this.widgetFullName+"-item-active";this.elements.items.removeClass(t),this.getPage().addClass(t)},_updatePagination:function(){var t=this.widgetFullName,e=t+"-pagination-link-active",i=t+"-pagination-disabled",s=this.elements.pagination.removeClass(i);this.options.disabled&&s.addClass(i),s.children("."+t+"-pagination-link").removeClass(e).eq(this.index).addClass(e)},_updateNextPrevActions:function(){var t=this.elements,e=t.nextAction.add(t.prevAction),i=this.index,s=this.widgetFullName,n=s+"-action-active",a=s+"-action-disabled";e.addClass(n).removeClass(a),this.options.disabled&&e.addClass(a),this.options.loop||(i===this.getNoOfPages()-1&&t.nextAction.removeClass(n),0===i&&t.prevAction.removeClass(n))},_setOption:function(t,e){switch(i._setOption.apply(this,arguments),t){case"orientation":this._setIsHorizontal(),this.refresh();break;case"pagination":e?(this._addPagination(),this._updateUi()):this._removePagination();break;case"nextPrevActions":e?(this._addNextPrevActions(),this._updateUi()):this._removeNextPrevActions();break;case"loop":case"disabled":this._updateUi();break;case"itemsPerTransition":case"whitespace":this.refresh()}},add:function(t){this.elements.runner.append(t),this.refresh()},remove:function(t){this.getNoOfItems()>0&&(this.elements.items.filter(t).remove(),this.refresh())},getIndex:function(){return this.index},getPrevIndex:function(){return this.prevIndex},destroy:function(){var t=this.elements,e=this.widgetFullName,s={};this.element.removeClass(e).removeClass(e+"-horizontal").removeClass(e+"-vertical"),t.mask.removeClass(e+"-mask"),t.runner.removeClass(e+"-runner"),t.items.removeClass(e+"-item"),this.maskAdded&&t.runner.unwrap(),s[this.isHorizontal?"left":"top"]="",s[this.isHorizontal?"width":"height"]="",s.transform="",t.runner.css(s),this._removePagination(),this._removeNextPrevActions(),t.runner.unbind(this.eventNamespace),i.destroy.apply(this,arguments)}})}(jQuery);