;(function($,win){
    function putTracker(){
        var url = EQX.HOST.TRACK + 'c.gif?';
        var w = window,
            s = w.screen,
            res = s.availWidth + 'x' + s.availHeight,
            e = encodeURIComponent,
            d = document;
            n = w.navigator;
        var data = {
            lag: n.userLanguage || n.language
        };
        if (typeof scene !== scene) {
            data.event_description = scene.description;
            data.event_id = scene.id;
            data.scene_type = scene.type;
            data.creator_id = scene.userId;
            data.creator_type = scene.userType;
        }
        var args = 'action_name=' + e(d.title) + '&idsite=2&url=' + e(d.location) + '&urlref=' + e(d.referrer) + '&res=' + res + '&data=' + e(JSON.stringify(data));
        args += '&cookie=' + n.cookieEnabled ? 1:0;
        args += '&ct=' + new Date().getTime();
        url += args;
        var img = d.createElement('img');
        img.setAttribute('src', url);
        img.setAttribute('height', '0');
        img.setAttribute('width', '0');
        d.body.appendChild(img);
    }

    $.getScript(EQX.HOST.TRACK + 'd.js?pid=2&v=1', function() {
        if(window.scene){
            putTracker();
        }else{
            function interval(){
                if(window.scene){
                    putTracker();
                }else{
                   tt = setTimeout(interval);
                }
            }
            var tt = setTimeout(interval,100);
        }
    });

    $.getScript(EQX.HOST.TRACK + 'r.js?pid=3&v=1');
})(jQuery,window);