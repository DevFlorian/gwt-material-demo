$wnd.gwtmaterialdemo.runAsyncCallback24("function FooterPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(837, 36, $intern_65, FooterPresenter);\n_.onReveal = function onReveal_43(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Footer', 'Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once hes finished scrolling through the current page or is looking for additional information about your website.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_footer_FooterPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterPresenter', 837);\nfunction FooterView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_21(new FooterView_BinderImpl$Widgets));\n}\n\ndefineClass(1105, 60, $intern_66, FooterView);\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView', 1105);\nfunction $build_f_HTMLPanel1_21(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialFooter3, style, f_PrettyPre11, f_MaterialRow4, f_MaterialColumn5, f_MaterialTitle6, btnChat, f_MaterialColumn7, f_MaterialTitle8, btnDownloadPhonegap, f_MaterialFooterCopyright9, f_MaterialLabel10, sb;\n  f_HTMLPanel1 = new HTMLPanel($html2_1(this$static.domId0, this$static.domId1, this$static.domId2).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setText_12(f_MaterialTitle2.paragraph, 'We use flexbox to structure our html so that the footer is always on the bottom of the page.') , $getElement(f_MaterialTitle2.header).innerHTML = 'Introduction' , undefined , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialFooter3 = new MaterialFooter , $add_35(f_MaterialFooter3, (f_MaterialRow4 = new MaterialRow , $add_15(f_MaterialRow4, (f_MaterialColumn5 = new MaterialColumn , $add_15(f_MaterialColumn5, (f_MaterialTitle6 = new MaterialTitle , $setText_12(f_MaterialTitle6.paragraph, 'We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.') , $getElement(f_MaterialTitle6.header).innerHTML = 'Join The Discussion' , $setTextColor_0((!f_MaterialTitle6.colorsMixin_0 && (f_MaterialTitle6.colorsMixin_0 = new ColorsMixin(f_MaterialTitle6)) , f_MaterialTitle6.colorsMixin_0), 'white') , f_MaterialTitle6)) , $add_15(f_MaterialColumn5, (btnChat = new MaterialButton , $setWaves(btnChat, ($clinit_WavesType() , LIGHT)) , $setBackgroundColor_0((!btnChat.colorsMixin_0 && (btnChat.colorsMixin_0 = new ColorsMixin(btnChat)) , btnChat.colorsMixin_0), 'blue lighten-2') , $setText_6(btnChat.span_1, 'CHAT') , $add_15(btnChat, btnChat.span_1) , btnChat)) , $setGrid((!f_MaterialColumn5.gridMixin_0 && (f_MaterialColumn5.gridMixin_0 = new GridMixin(f_MaterialColumn5)) , f_MaterialColumn5.gridMixin_0), 's12 m6 l6') , f_MaterialColumn5)) , $add_15(f_MaterialRow4, (f_MaterialColumn7 = new MaterialColumn , $add_15(f_MaterialColumn7, (f_MaterialTitle8 = new MaterialTitle , $setText_12(f_MaterialTitle8.paragraph, 'We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.') , $getElement(f_MaterialTitle8.header).innerHTML = 'GWT Phonegap' , $setTextColor_0((!f_MaterialTitle8.colorsMixin_0 && (f_MaterialTitle8.colorsMixin_0 = new ColorsMixin(f_MaterialTitle8)) , f_MaterialTitle8.colorsMixin_0), 'white') , f_MaterialTitle8)) , $add_15(f_MaterialColumn7, (btnDownloadPhonegap = new MaterialButton , $setWaves(btnDownloadPhonegap, LIGHT) , $setBackgroundColor_0((!btnDownloadPhonegap.colorsMixin_0 && (btnDownloadPhonegap.colorsMixin_0 = new ColorsMixin(btnDownloadPhonegap)) , btnDownloadPhonegap.colorsMixin_0), 'blue lighten-2') , $setText_6(btnDownloadPhonegap.span_1, 'GWT Material APK') , $add_15(btnDownloadPhonegap, btnDownloadPhonegap.span_1) , btnDownloadPhonegap)) , $setGrid((!f_MaterialColumn7.gridMixin_0 && (f_MaterialColumn7.gridMixin_0 = new GridMixin(f_MaterialColumn7)) , f_MaterialColumn7.gridMixin_0), 's12 m6 l6') , f_MaterialColumn7)) , f_MaterialRow4)) , $add_35(f_MaterialFooter3, (f_MaterialFooterCopyright9 = new MaterialFooterCopyright , $add_36(f_MaterialFooterCopyright9, (f_MaterialLabel10 = new MaterialLabel , f_MaterialLabel10.element_0.innerHTML = '\\xA9 2015 Copyright GWT Material' , f_MaterialLabel10)) , setStyleName(f_MaterialFooterCopyright9.element_0, 'footer-copyright', true) , f_MaterialFooterCopyright9)) , $addStyleName(f_MaterialFooter3, (style = ($clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_16) , $ensureInjected_22(style) , 'B0JM1SC-s-a')) , $setBackgroundColor_0((!f_MaterialFooter3.colorsMixin_0 && (f_MaterialFooter3.colorsMixin_0 = new ColorsMixin(f_MaterialFooter3)) , f_MaterialFooter3.colorsMixin_0), 'blue') , f_MaterialFooter3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre11 = new PrettyPre , $setHTML_0(f_PrettyPre11, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialFooter backgroundColor=\"blue\"&gt;<br><br> \\u2003&lt;m:MaterialRow&gt;<br> \\u2003\\u2003&lt;m:MaterialColumn grid=\"s12 m6 l6\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle textColor=\"white\" title=\"Join The Discussion\" description=\"We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnChat\" text=\"CHAT\" backgroundColor=\"blue lighten-2\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialColumn&gt;<br> \\u2003\\u2003&lt;m:MaterialColumn grid=\"s12 m6 l6\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle textColor=\"white\" title=\"GWT Phonegap\" description=\"We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnDownloadPhonegap\" text=\"GWT Material APK\" backgroundColor=\"blue lighten-2\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialColumn&gt;<br> \\u2003&lt;/m:MaterialRow&gt;<br><br> \\u2003&lt;m:MaterialFooterCopyright&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"\\xA9 2015 Copyright GWT Material\" /&gt;<br> \\u2003&lt;/m:MaterialFooterCopyright&gt;<br> &lt;/m:MaterialFooter&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre11.element_0, 'lang-xml', true) , setStyleName(f_PrettyPre11.element_0, 'z-depth-1', true) , f_PrettyPre11), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction FooterView_BinderImpl$Widgets(){\n  var style;\n  style = ($clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_16);\n  $ensureInjected_22(style);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(1424, 1, {}, FooterView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl/Widgets', 1424);\nvar style_16;\nfunction $ensureInjected_22(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    inject(($clinit_LocaleInfo() , '.B0JM1SC-s-a{padding-left:0!important;margin-bottom:20px}'));\n    return true;\n  }\n  return false;\n}\n\nfunction FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1912, 1, {}, FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_107(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1912);\nfunction $clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_16 = new FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html2_1(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$) {\n    result0 = new FooterPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$) {\n    result = new FooterView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$;\n}\n\ndefineClass(750, 1, $intern_112);\n_.onSuccess_0 = function onSuccess_28(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(24);\n\n//# sourceURL=gwtmaterialdemo-24.js\n")
