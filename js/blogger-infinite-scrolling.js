var $jscomp = {
    scope: {},
    findInternal: function(a, d, b) {
        a instanceof String && (a = String(a));
        for (var e = a.length, c = 0; c < e; c++) {
            var f = a[c];
            if (d.call(b, f, c, a)) return {
                i: c,
                v: f
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, d, b) {
    if (b.get || b.set) throw new TypeError("ES3 does not support getters and setters.");
    a != Array.prototype && a != Object.prototype && (a[d] = b.value)
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, d, b, e) {
    if (d) {
        b = $jscomp.global;
        a = a.split(".");
        for (e = 0; e < a.length - 1; e++) {
            var c = a[e];
            c in b || (b[c] = {});
            b = b[c]
        }
        a = a[a.length - 1];
        e = b[a];
        d = d(e);
        d != e && null != d && $jscomp.defineProperty(b, a, {
            configurable: !0,
            writable: !0,
            value: d
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, b) {
        return $jscomp.findInternal(this, a, b).v
    }
}, "es6-impl", "es3");
(function(a) {
    function d() {
        f || (f = !0, e ? (c.find("a").hide(), c.find("img").show(), a.ajax(e, {
            dataType: "html"
        }).done(function(b) {
            var d = a("<div></div>").append(b.replace(h, ""));
            b = d.find("a.blog-pager-older-link");
            d = d.find("div.blog-posts").children();
            a("div.blog-posts").append(d);
            window._gaq && window._gaq.push(["_trackPageview", e]);
            window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go();
            window.disqus_shortname && a.getScript("http://" + window.disqus_shortname + ".disqus.com/blogger_index.js");
            window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse();
            window.twttr && window.twttr.widgets && window.twttr.widgets.load && window.twttr.widgets.load();
            b ? e = b.attr("href") : (e = "", c.hide());
            c.find("img").hide();
            c.find("a").show();
            f = !1
        })) : c.hide())
    }

    function b() {
        var a = Math.max(g.height(), k.height(), document.documentElement.clientHeight),
            b = g.scrollTop() + g.height();
        150 > a - b && d()
    }
    var e = "",
        c = null,
        f = !1,
        g = a(window),
        k = a(document),
        h = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    a(document).ready(function() {
        if ("item" !=
            _WidgetManager._GetAllData().blog.pageType && (e = a("a.blog-pager-older-link").attr("href"))) {
            var f = a('<a href="javascript:;">Load more posts</a>');
            f.click(d);
            var h = a('<img src="https://1.bp.blogspot.com/-Be3iXNwLy7U/W67AapH7uxI/AAAAAAAAAZg/-2dfsG80v7w5PIS-qq_TZ0DJmcVp9oVtACKgBGAs/s1600/ajax-loader.gif" style="display: none;">');
            g.scroll(b);
            c = a('<div style="text-align: center; font-size: 150%;"></div>');
            c.append(f);
            c.append(h);
            c.insertBefore(a("#blog-pager"));
            a("#blog-pager").hide()
        }
    })
})(jQuery);
