"use strict";function getTuzki(e){var t=$(e).siblings(".b-tuzki");if(tuzkiNumber){t.show();for(var a=["Kiss","Love","Yeah","啊！","背扭","顶","抖胸","88","汗","瞌睡","鲁拉","拍砖","揉脸","生日快乐","摊手","睡觉","瘫坐","无聊","星星闪","旋转","也不行","郁闷","正Music","抓墙","撞墙至死","歪头","戳眼","飘过","互相拍砖","砍死你","扔桌子","少林寺","什么？","转头","我爱牛奶","我踢","摇晃","晕厥","在笼子里","震荡"],i="",l=1;l<41;l++){var s=formatNum(l,4);i+='<img src="http://'+window.location.host+"/Public/emote/tuzki/t_"+s+'.gif" title="'+a[l-1]+'" alt="LXJ健康快乐">'}t.html(i),tuzkiNumber=0}else t.hide(),tuzkiNumber=1}function formatNum(e,t){for(var a="",i=1;i<=t-e.toString().length;i++)a+="0";return a+e}function insertHtmlAtCaret(e){var t,a;if(window.getSelection){if(t=window.getSelection(),t.getRangeAt&&t.rangeCount){a=t.getRangeAt(0),a.deleteContents();var i=document.createElement("div");i.innerHTML=e;for(var l,s,n=document.createDocumentFragment();l=i.firstChild;)s=n.appendChild(l);a.insertNode(n),s&&(a=a.cloneRange(),a.setStartAfter(s),a.collapse(!0),t.removeAllRanges(),t.addRange(a))}}else document.selection&&"Control"!=document.selection.type&&document.selection.createRange().pasteHTML(e)}function comment(e){$.post(check_login,function(t){if(1==t){var a=$(e).parents(".b-box-textarea").eq(0).find(".b-box-content").html();if(""!=a&&"请先登录后发表评论"!=a){var i=$(e).attr("aid"),l=$(e).attr("pid"),s=$(e).parents(".b-box-textarea").eq(0).find("input[name='email']").val(),n={aid:i,pid:l,content:a,email:s};layer.load(1),$.post(ajaxCommentUrl,n,function(t){var s=t,n=$(e).attr("username"),o=new Date,c=o.getFullYear()+"-"+(o.getMonth()+1<10?"0":"")+(o.getMonth()+1)+"-"+(o.getDate()<10?"0":"")+o.getDate()+"&emsp;"+(o.getHours()<10?"0":"")+o.getHours()+":"+(o.getMinutes()<10?"0":"")+o.getMinutes()+":"+(o.getSeconds()<10?"0":"")+o.getSeconds(),r=$("#b-login-word .b-head_img").attr("src"),d=$("#b-login-word .b-nickname").text();if(0==l){var m='<div class="row b-user b-parent"><div class="col-xs-2 col-sm-1 col-md-1 col-lg-1 b-pic-col"><img title="LXJ健康快乐" alt="LXJ健康快乐" src="'+r+'" class="b-user-pic"></div><div class="col-xs-10 col-sm-11 col-md-11 col-lg-11 b-content-col"><p class="b-content"><span class="b-user-name">'+d+"</span>："+a+'</p><p class="b-date">'+c+' <a onclick="reply(this)" username="'+d+'" pid="'+s+'" aid="'+i+'" href="javascript:;">回复</a></p><div class="b-clear-float"></div></div></div>';$(".b-user-comment").prepend(m)}else{var m='<div class="row b-user b-child"><div class="col-xs-2 col-sm-1 col-md-1 col-lg-1 b-pic-col"><img title="LXJ健康快乐" alt="LXJ健康快乐" src="'+r+'" class="b-user-pic"></div><ul class="col-xs-10 col-sm-11 col-md-11 col-lg-11 b-content-col"><li class="b-content"><span class="b-reply-name">'+d+'</span><span class="b-reply">回复</span><span class="b-user-name">'+n+"</span>："+a+'</li><li class="b-date">'+c+' <a onclick="reply(this)" pid="'+s+'" aid="'+i+'" username="'+n+'" href="javascript:;">回复</a></li><li class="b-clear-float"></li></ul></div>';$(e).parents(".b-content-col").eq(0).append(m),$(e).parents(".b-box-textarea").eq(0).remove()}$(e).parents(".b-box-textarea").eq(0).find(".b-box-content").html(""),layer.closeAll()})}}else $("#b-modal-login").modal("show")})}function reply(e){var t=$(".b-user-comment").find(".b-box-textarea");1==t.length&&t.remove();var a=$(e).attr("aid"),i=$(e).attr("pid"),l=$(e).attr("username"),s='<div class="b-box-textarea"><div class="b-box-content" contenteditable="true" onfocus="delete_hint(this)">请先登录后回复评论</div><ul class="b-emote-submit"><li class="b-emote"><i class="fa fa-smile-o" onclick="getTuzki(this)"></i><input class="form-control b-email" type="text" name="email" placeholder="接收回复的email地址" value="'+userEmail+'"><div class="b-tuzki"></div></li><li class="b-submit-button"><input type="button" value="评 论" aid="'+a+'" pid="'+i+'" username="'+l+'" onclick="comment(this)"></li><li class="b-clear-float"></li></ul></div>';$(e).parents(".b-cc-first").eq(0).append(s)}function delete_hint(e){var t=$(e).text();"请先登录后发表评论"!=t&&"请先登录后回复评论"!=t||($(e).text(""),$(e).css("color","#333"))}$("html").on("click",".b-tuzki img",function(e){var t=$(this).prop("outerHTML");$(this).parents(".b-box-textarea").eq(0).find(".b-box-content").focus(),insertHtmlAtCaret(t),$(this).parents(".b-tuzki").hide(),tuzkiNumber=1});