(function(){function i(n){var t=n.getAttribute("href");return t.indexOf(".bing.com/aclick?ld=")>=0||t.indexOf(".bing.com/ac?ld=")>=0||t.indexOf(".bing.com/ck?ld=")>=0||t.indexOf(".bing.com/ack?ld=")>=0||t.indexOf(".bing.com/clk?ld=")>=0||t.indexOf(".bing.com/aclk?ld=")>=0||t.indexOf(".staging-bing-int.com/aclick?ld=")>=0||t.indexOf(".staging-bing-int.com/ac?ld=")>=0||t.indexOf(".staging-bing-int.com/ck?ld=")>=0||t.indexOf(".staging-bing-int.com/ack?ld=")>=0||t.indexOf(".staging-bing-int.com/clk?ld=")>=0||t.indexOf(".staging-bing-int.com/aclk?ld=")>=0||t.indexOf(".staging-bing-int.com/click?ld=")>=0||t.indexOf(".binginternal.com/aclick?ld=")>=0||t.indexOf(".binginternal.com/ac?ld=")>=0||t.indexOf(".binginternal.com/ck?ld=")>=0||t.indexOf(".binginternal.com/ack?ld=")>=0||t.indexOf(".binginternal.com/clk?ld=")>=0||t.indexOf(".binginternal.com/aclk?ld=")>=0||t.indexOf(".binginternal.com/click?ld=")>=0?(n.setAttribute("href",t+"&ntb=1"),!0):!1}function r(n){try{return decodeURIComponent(n)!=n}catch(t){return!0}}for(var t=_d.getElementsByTagName("a"),n=0;n<t.length;n++)typeof t[n]=="undefined"||!t[n].hasAttribute("target")||t[n].getAttribute("target")!="_blank"||!t[n].hasAttribute("href")||typeof t[n].getAttribute("href")=="undefined"||typeof t[n].getAttribute("href").startsWith=="undefined"||t[n].getAttribute("href").indexOf("javascript")>=0||t[n].getAttribute("href").indexOf("/rebates/welcome")>=0||i(t[n])||t[n].hasAttribute("class")&&t[n].getAttribute("class").indexOf("b_ignbt")>=0||t[n].hasAttribute("onclick")&&t[n].getAttribute("onclick").indexOf("return false;")>=0||(t[n].setAttribute("onclick",t[n].getAttribute("onclick")+";return false;"),sj_be(t[n],"click",function(n){var t,u,i,f;for(n.preventDefault(),t=sj_et(n);t!=null;){if(t.tagName.toLowerCase()=="a"){i=t.getAttribute("href");f=!1;!/[^\x00-\xff]/.test(i)&&r(i)&&(i=btoa(i),f=!0);u="/newtabredir?url="+encodeURIComponent(i);f&&(u=u+"&be=1");_w.open(u,"_blank");break}t=t.parentNode}}))})()