!function(e){var a={type:"html",content:"",url:"",ajax:{},ajax_request:null,closeOnEsc:!0,closeOnOverlayClick:!0,clone:!1,overlay:{block:void 0,tpl:'<div class="arcticmodal-overlay"></div>',css:{backgroundColor:"#000",opacity:.6}},container:{block:void 0,tpl:'<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'},wrap:void 0,body:void 0,errors:{tpl:'<div class="arcticmodal-error arcticmodal-close"></div>',autoclose_delay:2e3,ajax_unsuccessful_load:"Error"},openEffect:{type:"fade",speed:400},closeEffect:{type:"fade",speed:400},beforeOpen:e.noop,afterOpen:e.noop,beforeClose:e.noop,afterClose:e.noop,afterLoading:e.noop,afterLoadingOnShow:e.noop,errorLoading:e.noop},o=0,r=e([]),t=function(a,o){var r=!0;return e(a).each(function(){e(o.target).get(0)==e(this).get(0)&&(r=!1),0==e(o.target).closest("HTML",e(this).get(0)).length&&(r=!1)}),r},c={getParentEl:function(a){var o=e(a);return o.data("arcticmodal")?o:(o=e(a).closest(".arcticmodal-container").data("arcticmodalParentEl"))||!1},transition:function(a,o,r,t){switch(t=null==t?e.noop:t,r.type){case"fade":"show"==o?a.fadeIn(r.speed,t):a.fadeOut(r.speed,t);break;case"none":"show"==o?a.show():a.hide(),t()}},prepare_body:function(a,o){e(".arcticmodal-close",a.body).unbind("click.arcticmodal").bind("click.arcticmodal",function(){return o.arcticmodal("close"),!1})},init_el:function(a,l){var i=a.data("arcticmodal");if(!i){if(o++,(i=l).modalID=o,i.overlay.block=e(i.overlay.tpl),i.overlay.block.css(i.overlay.css),i.container.block=e(i.container.tpl),i.body=e(".arcticmodal-container_i2",i.container.block),l.clone?i.body.html(a.clone(!0)):(a.before('<div id="arcticmodalReserve'+i.modalID+'" style="display: none" />'),i.body.html(a)),c.prepare_body(i,a),i.closeOnOverlayClick&&i.overlay.block.add(i.container.block).click(function(o){t(e(">*",i.body),o)&&a.arcticmodal("close")}),i.container.block.data("arcticmodalParentEl",a),a.data("arcticmodal",i),r=e.merge(r,a),e.proxy(n.show,a)(),"html"==i.type)return a;if(null!=i.ajax.beforeSend){var d=i.ajax.beforeSend;delete i.ajax.beforeSend}if(null!=i.ajax.success){var s=i.ajax.success;delete i.ajax.success}if(null!=i.ajax.error){var f=i.ajax.error;delete i.ajax.error}var u=e.extend(!0,{url:i.url,beforeSend:function(){null==d?i.body.html('<div class="arcticmodal-loading" />'):d(i,a)},success:function(e){a.trigger("afterLoading"),i.afterLoading(i,a,e),null==s?i.body.html(e):s(i,a,e),c.prepare_body(i,a),a.trigger("afterLoadingOnShow"),i.afterLoadingOnShow(i,a,e)},error:function(){a.trigger("errorLoading"),i.errorLoading(i,a),null==f?(i.body.html(i.errors.tpl),e(".arcticmodal-error",i.body).html(i.errors.ajax_unsuccessful_load),e(".arcticmodal-close",i.body).click(function(){return a.arcticmodal("close"),!1}),i.errors.autoclose_delay&&setTimeout(function(){a.arcticmodal("close")},i.errors.autoclose_delay)):f(i,a)}},i.ajax);i.ajax_request=e.ajax(u),a.data("arcticmodal",i)}},init:function(o){if(o=e.extend(!0,{},a,o),!e.isFunction(this))return this.each(function(){c.init_el(e(this),e.extend(!0,{},o))});if(null!=o)if(""!=o.type)switch(o.type){case"html":if(""==o.content)return void e.error('jquery.arcticmodal: Don\'t set parameter "content"');var r=o.content;return o.content="",c.init_el(e(r),o);case"ajax":return""==o.url?void e.error('jquery.arcticmodal: Don\'t set parameter "url"'):c.init_el(e("<div />"),o)}else e.error('jquery.arcticmodal: Don\'t set parameter "type"');else e.error("jquery.arcticmodal: Uncorrect parameters")}},n={show:function(){var a=c.getParentEl(this);if(!1!==a){var o=a.data("arcticmodal");if(o.overlay.block.hide(),o.container.block.hide(),e("BODY").append(o.overlay.block),e("BODY").append(o.container.block),o.beforeOpen(o,a),a.trigger("beforeOpen"),"hidden"!=o.wrap.css("overflow")){o.wrap.data("arcticmodalOverflow",o.wrap.css("overflow"));var t=o.wrap.outerWidth(!0);o.wrap.css("overflow","hidden");var n=o.wrap.outerWidth(!0);n!=t&&o.wrap.css("marginRight",n-t+"px")}return r.not(a).each(function(){e(this).data("arcticmodal").overlay.block.hide()}),c.transition(o.overlay.block,"show",r.length>1?{type:"none"}:o.openEffect),c.transition(o.container.block,"show",r.length>1?{type:"none"}:o.openEffect,function(){o.afterOpen(o,a),a.trigger("afterOpen")}),a}e.error("jquery.arcticmodal: Uncorrect call")},close:function(){if(!e.isFunction(this))return this.each(function(){var a=c.getParentEl(this);if(!1!==a){var o=a.data("arcticmodal");!1!==o.beforeClose(o,a)&&(a.trigger("beforeClose"),r.not(a).last().each(function(){e(this).data("arcticmodal").overlay.block.show()}),c.transition(o.overlay.block,"hide",r.length>1?{type:"none"}:o.closeEffect),c.transition(o.container.block,"hide",r.length>1?{type:"none"}:o.closeEffect,function(){o.afterClose(o,a),a.trigger("afterClose"),o.clone||e("#arcticmodalReserve"+o.modalID).replaceWith(o.body.find(">*")),o.overlay.block.remove(),o.container.block.remove(),a.data("arcticmodal",null),e(".arcticmodal-container").length||(o.wrap.data("arcticmodalOverflow")&&o.wrap.css("overflow",o.wrap.data("arcticmodalOverflow")),o.wrap.css("marginRight",0))}),"ajax"==o.type&&o.ajax_request.abort(),r=r.not(a))}else e.error("jquery.arcticmodal: Uncorrect call")});r.each(function(){e(this).arcticmodal("close")})},setDefault:function(o){e.extend(!0,a,o)}};e(function(){a.wrap=e(document.all&&!document.querySelector?"html":"body")}),e(document).bind("keyup.arcticmodal",function(e){var a=r.last();a.length&&(a.data("arcticmodal").closeOnEsc&&27===e.keyCode&&a.arcticmodal("close"))}),e.arcticmodal=e.fn.arcticmodal=function(a){return n[a]?n[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void e.error("jquery.arcticmodal: Method "+a+" does not exist"):c.init.apply(this,arguments)}}(jQuery);
