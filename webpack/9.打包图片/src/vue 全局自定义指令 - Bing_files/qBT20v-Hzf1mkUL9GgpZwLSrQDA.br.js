var RewardsCreditRefresh;(function(n){function r(t,i,r,u,f,e,o,s,h,c,l,a,v,y){sj_cook.set(t,i,r.toString(),!1,"/");sj_cook.set(t,u,f.toString(),!1,"/");sj_cook.set(t,e,o.toString(),!1,"/");sj_cook.set(t,s,h.toString(),!1,"/");sj_cook.set(t,c,l.toString(),!1,"/");sj_cook.set(t,a,v.toString(),!1,"/");sj_evt.fire("RewardsCookieUpdated");sj_evt.bind("identityHeaderShown",function(){return n.RewardsHeaderAnim(o,r,f,y)},1)}function u(n,r,u,f){var l;u=u||r;var o=_ge("id_rh"),e=_ge("rh_animcrcl"),s=_ge("id_rc");if(o&&s&&(e||_ge("rh_meter_leaf"))&&!(r<0)&&!(r<n)&&!(u<=0)){var a=800,v=r-n,h=Math.min(100,100*(r/u)),c=e&&h>=100&&n<u,y=v>0,p=Date.now();h>=100&&o.classList&&Lib.CssClass.add(o,"rh_reedm");e&&Lib.CssClass.add(e,"anim");l=function(){var b=Date.now(),u=b-p,w=Math.min(u/a,1),k=c?t*w:t*h/100,d=y?Math.min(Math.floor((n+w*v)/f)*f,r):r;e&&e.setAttribute("stroke-dasharray",k.toString()+","+t.toString());s.innerHTML=d.toString();(c||y)&&(u<a?i(l):(s.innerHTML=r.toString(),c&&(Lib.CssClass.add(o,"rh_scale"),Log.Log("CI.Info","RewardsReportActivity","ScaleAnim")),sj_evt.fire("RewardsAnimComplete")))};l()}}function f(){var n=_ge("id_rc");return n?parseInt(n.innerHTML):0}function e(n){var t=_ge("id_rc");t&&(t.innerHTML=n.toString())}var t=88,i=function(){return _w.requestAnimationFrame||_w.webkitRequestAnimationFrame||_w.mozRequestAnimationFrame||function(n){sb_st(n,1e3/60)}}();n.RewardsRefresh=r;n.RewardsHeaderAnim=u;n.GetRewardsHeaderBalance=f;n.SetRewardsHeaderBalance=e})(RewardsCreditRefresh||(RewardsCreditRefresh={}))