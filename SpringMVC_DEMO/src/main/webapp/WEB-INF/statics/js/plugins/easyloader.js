/**
 * jQuery EasyUI 1.4.4
 *
 * Copyright (c) 2009-2015 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/licenselinkreeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 * һЩע�������ܽ᣺
 *      1.loadJs��runJs�Ĳ�ͬ���ڣ�loadJs�ǽ�js���ؽ��������õĴ��ڡ���runJs�ǽ��ű����ؽ�����ִ���꣬Ȼ��ͽ���js�Ƴ���
 *      2.���������easyloader.js���Ͳ�������jquery.easyui.min.js�ˡ�
 *      3.window.using = easyloader.load�ļ��ط�ʽ��:(1).�����ⲿ��css��js��2��.�����ڲ������modules�е�����
 */
(function () {
    //�����ģ��

    //cssģ��
    var cssModules = {
        "fontAwesome":{path:"cssPlugin",css:"font-awesome.min.css",description:"Icons plugin:the complete set of 361 icons in Font Awesome 3.2.1"},
        "animate":{path:"cssPlugin",css:"animate.min.css",description:"css3 animate,effect��http://www.jq22.com/jquery-info819"}
    };

    var coreModules = {
        jqueryUI:{path:"core",js:"jquery-ui.js",css:"jquery-ui.css",description:"jqueryUI"},
        bootstrap:{path:"core",js:"js/bootstrap.min.js",css:["bootstrap.min.css"],version:"v3.0.2"},
        flaty:{path:"core",js:"flaty.js",css:["flaty.css","flaty-responsive.css"]}
    };

    //�Լ�������һЩModules
    var selfMakeModules = {
        objectUtil:{path:"otherProvidePackage",js:"objectUtils.js",description:"���󴴽�����"}
    };

    //������վ�ṩ�ĳ����
    var otherWebSiteProvideModules = {
        mustache:{path:"otherProvidePackage",js:"jquery.mustache.js",description:"ģ�������"},
        fullpage:{path:"otherProvidePackage",js:"jquery.fullpage.js",css:"jquery.fullpage.css",description:"��ҳ�������"},
        moment:{path:"otherProvidePackage",js:"moment.js",description:"JavaScript ���ڴ������",website:"http://momentjs.cn/"},
        fullCalendar:{path:"otherProvidePackage",js:["fullcalendar.js","lang/zh-cn.js"],css:["fullcalendar.css"],dependencies:["moment"],description:"fullcalendar�������",website:"http://fullcalendar.io/"},
        jqueryValidation:{path:"otherProvidePackage",js:["jquery.validationEngine-zh_CN.js","jquery.validationEngine.js"],css:"validationEngine.jquery.css",description:"jquery��֤���"},
        bootstrapValidator:{path:"otherProvidePackage",js:"bootstrapValidator.js",css:["bootstrapValidator.css"],dependencies:["bootstrap"],description:"bootstrapValidator��֤���"},
        jquerySlimScroll:{path:"otherProvidePackage",js:"jquery.slimscroll.min.js",description:"һ��Ư���Ĺ��������"},
        jquerySparkline:{path:"otherProvidePackage",js:"jquery.sparkline.min.js",description:"jQuery��״ͼ���Sparkline"},
        jqueryFlot:{path:"otherProvidePackage",js:["jquery.flot.js","jquery.flot.resize.js","jquery.flot.stack.js","jquery.flot.crosshair.js","jquery.flot.pie.js","jquery.flot.tooltip.min.js"],description:"һ��ͼ����"},
        jqueryCookie:{path:"otherProvidePackage",js:"jquery.cookie.js",description:"һ��Cookie�����Ĳ��"},
        qunit:{path:"otherProvidePackage",js:"qunit-1.23.1.js",css:"qunit-1.23.1.css", description:"һ�����Կ��"}
    };

    //easyui�Դ���Modules
    var easyUIModulues = {
        draggable: {path:"easyUI",js: "jquery.draggable.js",description:"��Ԫ�ؾ��п��϶���"},
        droppable: {path:"easyUI",js: "jquery.droppable.js"},
        resizable: {path:"easyUI",js: "jquery.resizable.js"},
        linkbutton: {path:"easyUI",js: "jquery.linkbutton.js", css: "linkbutton.css"},
        progressbar: {path:"easyUI",js: "jquery.progressbar.js", css: "progressbar.css"},
        tooltip: {path:"easyUI",js: "jquery.tooltip.js", css: "tooltip.css"},
        //js������js�ļ���css������css�ļ���dependencies����������ϵ  ˵����ǰ��������������·��
        pagination: {path:"easyUI",js: "jquery.pagination.js", css: "pagination.css", dependencies: ["linkbutton"]},
        datagrid: {path:"easyUI",js: "jquery.datagrid.js",css: "datagrid.css", dependencies: ["panel", "resizable", "linkbutton", "pagination"]},
        treegrid: {path:"easyUI",js: "jquery.treegrid.js", css: "tree.css", dependencies: ["datagrid"]},
        propertygrid: {path:"easyUI",js: "jquery.propertygrid.js", css: "propertygrid.css", dependencies: ["datagrid"]},
        datalist: {path:"easyUI",js: "jquery.datalist.js", css: "datalist.css", dependencies: ["datagrid"]},
        panel: {path:"easyUI",js: "jquery.panel.js", css: "panel.css"},
        window: {path:"easyUI",js: "jquery.window.js", css: "window.css", dependencies: ["resizable", "draggable", "panel"]},
        dialog: {path:"easyUI",js: "jquery.dialog.js", css: "dialog.css", dependencies: ["linkbutton", "window"]},
        messager: {path:"easyUI",js: "jquery.messager.js",css: "messager.css",dependencies: ["linkbutton", "dialog", "progressbar"]},
        layout: {path:"easyUI",js: "jquery.layout.js", css: "layout.css", dependencies: ["resizable", "panel"]},
        form: {path:"easyUI",js: "jquery.form.js"},
        menu: {path:"easyUI",js: "jquery.menu.js", css: "menu.css"},
        tabs: {path:"easyUI",js: "jquery.tabs.js", css: "tabs.css", dependencies: ["panel", "linkbutton"]},
        menubutton: {path:"easyUI",js: "jquery.menubutton.js", css: "menubutton.css", dependencies: ["linkbutton", "menu"]},
        splitbutton: {path:"easyUI",js: "jquery.splitbutton.js", css: "splitbutton.css", dependencies: ["menubutton"]},
        switchbutton: {path:"easyUI",js: "jquery.switchbutton.js", css: "switchbutton.css"},
        accordion: {path:"easyUI",js: "jquery.accordion.js", css: "accordion.css", dependencies: ["panel"]},
        calendar: {path:"easyUI",js: "jquery.calendar.js", css: "calendar.css"},
        textbox: {path:"easyUI",js: "jquery.textbox.js", css: "textbox.css", dependencies: ["validateboxExt", "linkbutton"]},
        filebox: {path:"easyUI",js: "jquery.filebox.js", css: "filebox.css", dependencies: ["textbox"]},
        combo: {path:"easyUI",js: "jquery.combo.js", css: "combo.css", dependencies: ["panel", "textbox"]},
        combobox: {path:"easyUI",js: "jquery.combobox.js", css: "combobox.css", dependencies: ["combo"]},
        combotree: {path:"easyUI",js: "jquery.combotree.js", dependencies: ["combo", "tree"]},
        combogrid: {path:"easyUI",js: "jquery.combogrid.js", dependencies: ["combo", "datagrid"]},
        //easyUI��֤��� �ο��ĵ���http://www.tuicool.com/articles/a22Iney
        validatebox: {path:"easyUI",js: "jquery.validatebox.js", css: "validatebox.css", dependencies: ["tooltip"]},
        //validatebox��չ
        validateboxExt: {path:"easyUI",js: "jquery.validateboxExt.js", dependencies: ["validatebox"]},
        numberbox: {path:"easyUI",js: "jquery.numberbox.js", dependencies: ["textbox"]},
        searchbox: {path:"easyUI",js: "jquery.searchbox.js", css: "searchbox.css", dependencies: ["menubutton", "textbox"]},
        spinner: {path:"easyUI",js: "jquery.spinner.js", css: "spinner.css", dependencies: ["textbox"]},
        numberspinner: {path:"easyUI",js: "jquery.numberspinner.js", dependencies: ["spinner", "numberbox"]},
        timespinner: {path:"easyUI",js: "jquery.timespinner.js", dependencies: ["spinner"]},
        tree: {path:"easyUI",js: "jquery.tree.js", css: "tree.css", dependencies: ["draggable", "droppable"]},
        datebox: {path:"easyUI",js: "jquery.datebox.js", css: "datebox.css", dependencies: ["calendar", "combo"]},
        datetimebox: {path:"easyUI",js: "jquery.datetimebox.js", dependencies: ["datebox", "timespinner"]},
        slider: {path:"easyUI",js: "jquery.slider.js", dependencies: ["draggable"]},
        parser: {path:"easyUI",js: "jquery.parser.js"},
        mobile: {path:"easyUI",js: "jquery.mobile.js"},
        "easyUI-fullCalendar": {path:"easyUI",js: "jquery.fullcalendar.js",css:"easyuiFullCalendar.css",dependencies:["calendar"],description:"������Ѱ�ҵ�һ�������ں���ũ����������յĲ����֮���Լ�Ҳ��Ķ�����"}
    };

    var modules = $.extend({},cssModules, coreModules, easyUIModulues, selfMakeModules, otherWebSiteProvideModules);
    //���ػ����԰�(����һ���ò�����ô�࣬ɾ��һЩ��Ȼ��locale�ļ�������Ķ�Ӧ�ļ���ɾ����)
    var locales = {
        "en": "easyui-lang-en.js", //Ӣ��
        "zh_CN": "easyui-lang-zh_CN.js"
    };
    //���ص�module���ñ���������ż����˵Ķ��У�ÿ��module��name��Ϊkey������״̬��Ϊvalue��
    var queues = {};

    //����js
    function loadJs(url, callback) {//url����js��·��     callback������ɺ�ص�
        var done = false;//�Ƿ�������
        //���ַ�ʽ����������JSONP(����������Ŀ������ݷ��ʵ�����)
        var script = document.createElement("script");//����һ��script��ǩ
        script.type = "text/javascript";//ָ��scirpt��ǩ������
        script.language = "javascript";//ָ��script��ǩ������
        script.src = url;//ָ��script��ǩҪ���صĽű��ļ�·��
        script.onload = script.onreadystatechange = function () {//���ؼ���
            //���  ����û�����  ��readyState  ����״̬Ϊloaded   ����  ����״̬Ϊcomplete
            if (!done && (!script.readyState || script.readyState == "loaded" || script.readyState == "complete")) {
                done = true;//�������
                script.onload = script.onreadystatechange = null;//������ɺ�script��ǩ�ļ���������ȥ��
                if (callback) {//�ж��Ƿ��лص�����
                    callback.call(script);//����лص���������ִ�иûص����������ҽ����������script��ǩ������
                }
            }
        };
        //�����������������ӽ���head��script���С�
        document.getElementsByTagName("head")[0].appendChild(script);
    };
    //����js
    function runJs(url, callback) {
        loadJs(url, function () {
            //����ִ����󣬾ͽ�script�����ǩ�Ƴ���
            document.getElementsByTagName("head")[0].removeChild(this);//�����thisָ����callback.call(script)�е�script
            if (callback) {//�ж��Ƿ��лص�����
                callback();//����лص�������ִ�иûص�����
            }
        });
    };
    //����css
    function loadCss(url, callback) {
        var done = false;//�Ƿ�������
        var link = document.createElement("link");//����һ��
        link.rel = "stylesheet";//ָ��linkΪ��ʽ��
        link.type = "text/css";//ָ��link������
        //media ���Թ涨�������ĵ�����ʾ��ʲô�豸�ϡ�media ��������Ϊ��ͬ��ý�����͹涨��ͬ����ʽ��
        //�����������֧��ֵΪ "screen"��"print" �Լ� "all" �� media ���ԡ�
        //��ʾ����ȫ��ģʽ�У�Opera Ҳ֧�� "projection" ����ֵ��
        //֧�ֵľ�����������http://www.w3school.com.cn/tags/att_link_media.asp
        link.media = "screen";//֧��Ϊ��Ļ����
        link.href = url;//֧�ֲ����ʽ���·��
        //����������ɵ��¼�
        link.onload = link.onreadystatechange = function (){
            //���  ����û�����  ��readyState  ����״̬Ϊloaded   ����  ����״̬Ϊcomplete
            if (!done && (!link.readyState || link.readyState == "loaded" || link.readyState == "complete")) {
                done = true;//�������
                link.onload = link.onreadystatechange = null;//������ɺ�script��ǩ�ļ���������ȥ��
                if (callback) {//����лص�����
                    callback.call(link);//ִ�иûص�����
                }
            }
        }
        document.getElementsByTagName("head")[0].appendChild(link);//����dom��ӵ�head��ǩ����ȥ
    };
    //���ص����ļ�
    function loadSingle(name, callback) {
        queues[name] = "loading";//�������е�����ļ�����Ϊ����״̬
        var module = modules[name];//��ȡ��Ҫ���ص�module
        var jsStatus = module["js"] ? "loading" : "loaded";//js�ļ���״̬(��)
        //���easyloader�����˼���css������ģ���cssҲ�����ˣ���ô����״̬Ϊloading,���߲��ü���css��״̬Ϊ���سɹ���
        var cssStatus = (easyloader.css && module["css"]) ? "loading" : "loaded";//css�ļ���״̬
        if (easyloader.css && module["css"]) {//���Ҫ����css������������css
            if(!(module["css"] instanceof Array)) module["css"] = [module["css"]];
            for(var i in module["css"]){
                //���css����������http��ͷ�ľ���Ӧ��·����
                //�����������������һЩ��������һ��ָ��վ������λ�á�
                if (/^http/i.test(module["css"][i])) {
                    var url = module["css"][i];
                } else {
                    if(/^easyUI/i.test(module["path"])){//�����easyui�����һ�㲻һ��������easyui�����˲�ͬ������
                        //easyloader��baseĿ¼����themesĿ¼�¶�Ӧ��ģ�������css��
                        var url = easyloader.base + module["path"]  + "/themes/" + easyloader.theme + "/" + module["css"][i];
                    } else {
                        //�������ﲻ����easyUI�е�����
                        var url = easyloader.base + module["path"] +"/" + name + "/themes/" + module["css"][i];
                    }
                }
                //����css
                loadCss(url, function () {
                    cssStatus = "loaded";//�������ص���������css����״̬��Ϊ�������
                    if (jsStatus == "loaded" && cssStatus == "loaded") {//���js��css����������˵Ļ�����ִ��finish����
                        finish();
                    }
                });
            }
        }
        if(module["js"]){//�����⵽��js�ͼ���js
            if(!(module["js"] instanceof Array)) module["js"] = [module["js"]];
            for(var i in module["js"]){
                //����js�������ڲ����õĻ����ⲿ��վ��js�ļ�
                if (/^http/i.test(module["js"][i])) {
                    //������ⲿ��js����ôjs��·���������õ�·��
                    var url = module["js"][i];
                } else {
                    //������ڲ���js����ôjs��·��Ҫ������װ
                    if(/^easyUI/i.test(module["path"])) {//easyui�Ĳ��ȫ����plugins����
                        var url = easyloader.base + module["path"] + "/plugins/" + module["js"][i];
                    } else {
                        var url = easyloader.base + module["path"] +"/" + name +"/" + module["js"][i];
                    }
                }
                //����js�ļ�
                loadJs(url, function () {
                    jsStatus = "loaded";//���سɹ��ص���������js�ļ���״̬��Ϊ�������״̬
                    if (jsStatus == "loaded" && cssStatus == "loaded") {//���js��css����������˵Ļ�����ִ��finish����
                        finish();
                    }
                });
            }
        }
        //������ɵ���module��js��cssҪִ�еĺ���
        function finish() {
            queues[name] = "loaded";//�����ص����ģ����Ϊ������ɣ���ʾ��ģ���css��js�����������
            easyloader.onProgress(name);//���غ���easyloader�����Զ����onProgress����
            if (callback) {//��������˼��ص����ļ��Ļص�����
                callback();//ִ�лص�����
            }
        };
    };
    //����ģ��
    function loadModule(name, callback) {
        var mm = [];//���ض���
        var doLoad = false;
        //�������name��һ��string���͵ģ�˵���ò�������һ��module
        if (typeof name == "string") {
            add(name);
        } else { //���￴������һ������name���Զ����һ��������ؽ������module
            for (var i = 0; i < name.length; i++) {//������module����
                add(name[i]);
            }
        }
        function add(name) {
            //���һ����Ŀǰ�����modules���Ƿ�����name���module��
            if (!modules[name]) {
                console.warn("��easyloader��û���ҵ�" + name + "���module.");
                return;
            }
            //��ȡ��ģ�鶨������е�����
            var dependencyModule = modules[name]["dependencies"];
            if (dependencyModule) {     //�������������module
                for (var i = 0; i < dependencyModule.length; i++) {
                    //������Ҳ��������صĶ���(�����õú�����),�п�������������������������ݹ�ܰ�����
                    add(dependencyModule[i]);
                }
            }
            //�����е������������֮������Լ���������صĶ����С�
            mm.push(name);
        };
        //������ɺ�Ҫ���õ�ִ�к�����
        function finish() {
            if (callback) {//��������˻ص�����
                callback();//ִ�лص�����
            }
            easyloader.onLoad(name);//���ü�����ɺ�Ҫִ�еĻص�����
        };

        //�ñ�������ͳ��ģ����س�ʱ��ʱ��ġ�
        var time = 0;

        //����module���ض����е�module
        function loadMm() {
            if (mm.length) {//������ض����л���ֵ
                var m = mm[0];//��ȡ��һ��Ҫ�����ص�module
                if (!queues[m])//����Ѽ���������û�и�ģ��
                {
                    doLoad = true;//����״̬��Ϊtrue
                    //���ص���module
                    loadSingle(m, function () {//������ɵ���module��Ļص�����
                        mm.shift();//�Ƴ���һ��i
                        loadMm();//����ģ��,����������������˵ݹ�(���û�м�����ģ��ͼ�������)
                    });
                } else {//�����Ѽ��������л�ȡ����ģ��
                    //������ָ�module�Ѿ����أ������Ѿ���������ˣ��Ͳ��ü����ˣ�ֱ���Ƴ�������ֹ�ظ����أ�
                    if (queues[m] == "loaded") {
                        mm.shift();//����ģ��Ӵ����ض������Ƴ���
                        loadMm();//����������������˵ݹ�
                    } else {
                        if (time < easyloader.timeout) {//���û�г�ʱ���ͼ�������
                            time += 10;//�Ѿ����ص�ʱ��
                            //arguments.callee ��������
                            setTimeout(arguments.callee, 10);//��10�����ٴ�ִ�иú���
                        }
                        //���������ʱ�ˣ���ô�Ͳ����ظ�module�ˡ�
                    }
                }
            } else {//������ض����е�ֵ�Ѿ���������
                //�����������ص����ݣ������������ı��ػ������ļ���
                //��������˱��ػ����� �����Ѿ��������  ���һ�ȡ��easyloader�����ж����local��
                if (easyloader.locale && doLoad == true && locales[easyloader.locale]) {
                    //��ȡ���ػ������ļ���·��
                    var url = easyloader.base + "easyUI/locale/" + locales[easyloader.locale];
                    //ִ�и�js�ġ������￴�������ػ������ļ��ڼ�����ɺ�ͻὫ���ļ�ɾ������
                    runJs(url, function () {
                        finish();//�������
                    });
                } else {
                    finish();//�������
                }
            }
        };
        //�������ü��ض�����ģ��
        loadMm();
    };
    easyloader = {
        modules: modules,  //�������ж����modulesģ��
        locales: locales,  //����˵�ж����locales���ػ����԰�
        base: ".",         //��ʼλ��,
        theme: "metro", //��������ƣ�������Ի�����
        css: true,         //�Ƿ����css�ļ�
        locale: "zh_CN",      //
        timeout: 2000,     // ���س�ʱ����
        load: function (name, callback) {
            //�ж�������ص���css
            if (/\.css$/i.test(name)) {
                if (/^http/i.test(name)) {//������ⲿ��css
                    loadCss(name, callback);//����css
                } else {//�������ڲ���css
                    //!!!!!�����ڲ���css��ע������url�Ĺ��죬����ʹ�õ�ʱ��ע��дʲô��
                    loadCss(easyloader.base + name, callback);
                }
            } else if (/\.js$/i.test(name)) {//����Ǽ��ص�js
                if (/^http/i.test(name)) {//������ⲿ��js
                    loadJs(name, callback);//����js
                } else {//�������ڲ���js
                    //!!!!!�����ڲ���js��ע������url�Ĺ��죬����ʹ�õ�ʱ��ע��дʲô��
                    loadJs(easyloader.base + name, callback);//��
                }
            } else {//�����Ǽ��ص�ģ�������
                loadModule(name, callback);
            }
        },
        //���������һ��module�ͻ�ִ��һ�θú�����
        onProgress: function (moduleName) {//����Ϊÿһ�μ�����ɵ�ģ������
        },
        //
        onLoad: function (arg2) {
        }
    };

    //��ȡ������script��ǩ
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {//�������е�script��ǩ��
        var src = scripts[i].src;//��ȡ��script��srcָ���·��
        if (!src) {//���script��ǩ�������õ��ⲿ��js�ļ�����ô���Ƕ���������ڲ���script���ų�������ѭ��
            continue;
        }
        var matchResult = src.match(/easyloader\.js(\W|$)/i);//����������·��ƥ�䵽easyloader.js����ļ�
        if (matchResult) {//���ƥ�䵽   matchResult.indexƥ�䵽��λ��
            easyloader.base = src.substring(0, matchResult.index);  //Ĭ�Ͼͽ�easyloader.js�ļ�������λ����Ϊbase��·��
        }
    }

    //Ϊ����ʹ�ã����÷����󶨵�window�����ϣ��´ξͿ���ִ����usingȥִ�и÷���
    window.using = easyloader.load;
    //�ж��Ƿ��Ѿ�����jQuery
    if (window.jQuery) {
        jQuery(function () {//��������ɾͿ�ʼִ�и������ص�����
            //���ؽ�����
            easyloader.load("parser", function () {//using("parser", function () {
                //ȫ�ֽ����������ص�ʱ������ж�����һ��(�⿼��һ���ǲ�����Ҫ�Ķ�һ��)
                jQuery.parser.parse();//��ʼִ�н���
            });
        });
    }
})();

