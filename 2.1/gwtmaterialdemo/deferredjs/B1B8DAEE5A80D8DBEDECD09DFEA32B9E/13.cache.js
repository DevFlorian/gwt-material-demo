$wnd.gwtmaterialdemo.runAsyncCallback13("function $setDepth(this$static, depth){\n  ($clinit_DOM() , this$static.element_0).style['zIndex'] = depth + '';\n}\n\nfunction MaterialButton_1(text_0){\n  MaterialButton.call(this);\n  $setText_3(this.span_1, text_0);\n  this.span_1.attached || $add_9(this, this.span_1);\n}\n\ndefineClass(23, 197, $intern_68, MaterialButton_1);\nfunction $addCloseHandler(this$static){\n  return $addHandler(this$static, new MaterialOverlay$1(this$static), TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n}\n\nfunction $addOpenHandler(this$static){\n  return $addHandler(this$static, new MaterialOverlay$2(this$static), (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));\n}\n\nfunction $close_0(this$static){\n  (body_1 == null && (body_1 = $wnd.$('body')) , body_1).attr('style', 'overflow: auto !important');\n  if (this$static.sourceElement) {\n    $reverseAnimate(this$static.animator);\n  }\n   else {\n    ($clinit_DOM() , this$static.element_0).style.opacity = 0;\n    $setVisibility(this$static, ($clinit_Style$Visibility() , HIDDEN_1));\n  }\n  fire_1(this$static, this$static);\n}\n\nfunction $lambda$0_9(this$static){\n  this$static.overlayTab?$minimize(this$static.overlayTab, this$static):(new IllegalStateException , $clinit_GWT() , !!logger_0 && undefined);\n}\n\nfunction $open_0(this$static, sourceElement){\n  this$static.sourceElement = sourceElement;\n  $wnd.$('body').attr('style', 'overflow: hidden !important');\n  $setSourceElement(this$static.animator, sourceElement);\n  $setTargetElement(this$static.animator, ($clinit_DOM() , this$static.element_0));\n  $animate(this$static.animator);\n  fire_2(this$static, this$static);\n}\n\nfunction $open_1(this$static, source){\n  $open_0(this$static, ($clinit_DOM() , source.element_0));\n}\n\nfunction MaterialOverlay$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(2125, 1, $intern_48, MaterialOverlay$1);\n_.onClose = function onClose_0(closeEvent){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Overlay Closed', $intern_67, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$1_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/1', 2125);\nfunction MaterialOverlay$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(2126, 1, $intern_95, MaterialOverlay$2);\n_.onOpen = function onOpen(openEvent){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Overlay Opened', $intern_67, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$2_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/2', 2126);\nfunction MaterialOverlay$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2127, 1, $intern_87, MaterialOverlay$lambda$0$Type);\n_.onMouseDown = function onMouseDown(arg0){\n  $lambda$0_9(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$lambda$0$Type_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/lambda$0$Type', 2127);\nfunction $close_1(this$static){\n  var overlay, overlay$iterator;\n  $setDisplay(this$static.leanOverlay, ($clinit_Display() , NONE_3));\n  for (overlay$iterator = new ArrayList$1(this$static.overlays); overlay$iterator.i < overlay$iterator.this$01.array.length;) {\n    overlay = castTo($next_6(overlay$iterator), 160);\n    $setVisibility(overlay, ($clinit_Style$Visibility() , HIDDEN_1));\n    ($clinit_DOM() , overlay.element_0).style.opacity = 0;\n    setStyleName(overlay.element_0, 'maximize', false);\n    setStyleName(overlay.element_0, 'hidden', false);\n    $transform(overlay.element_0);\n  }\n  $forEach(this$static.maximizeHandlers, new MaterialOverlayTab$0methodref$removeHandler$Type);\n  this$static.maximized = false;\n  $setDisplay(this$static.btnClose, NONE_3);\n}\n\nfunction $lambda$1_7(this$static, overlay_1){\n  $register(this$static, overlay_1);\n  ($clinit_DOM() , overlay_1.element_0).style['visibility'] = ($clinit_Style$Visibility() , 'hidden');\n  overlay_1.element_0.style.opacity = 0;\n}\n\nfunction $lambda$2_6(this$static, overlay_1){\n  $forEach_3($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.overlays)), new MaterialOverlayTab$lambda$7$Type(overlay_1)), new MaterialOverlayTab$lambda$8$Type);\n  setStyleName(($clinit_DOM() , overlay_1.element_0), 'maximize', false);\n}\n\nfunction $minimize(this$static, overlay){\n  var animator;\n  if (this$static.maximized) {\n    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new MaterialOverlayTab$lambda$2$Type(this$static, overlay));\n  }\n   else {\n    animator = new MaterialPathAnimator;\n    $setReverseCallback(animator, makeLambdaFunction(MaterialOverlayTab$lambda$1$Type.prototype.call_10, MaterialOverlayTab$lambda$1$Type, [this$static, overlay]));\n    $setSourceElement(animator, null.$_nullMethod());\n    $setTargetElement(animator, ($clinit_DOM() , overlay.element_0));\n    $wnd.$('document').ready(makeLambdaFunction(MaterialPathAnimator$lambda$1$Type.prototype.call_10, MaterialPathAnimator$lambda$1$Type, [animator]));\n    (body_1 == null && (body_1 = $wnd.$('body')) , body_1).attr('style', 'overflow: auto !important');\n  }\n  this$static.maximized = false;\n}\n\nfunction $register(this$static, overlay){\n  if ($indexOf_1(this$static.overlays, overlay, 0) == -1) {\n    setStyleName(($clinit_DOM() , overlay.element_0), 'tab', true);\n    $setDepth(overlay, this$static.zIndex_0);\n    $add_21(this$static.overlays, overlay);\n    $setText_8(this$static.badge, this$static.overlays.array.length + '');\n    ++this$static.zIndex_0;\n  }\n}\n\nfunction $transform(element){\n  $wnd.$(element).css('transform', 'translate3d(0px, 0px, 0px) scale(1)');\n  $wnd.$(element).css('-webkit-transform', 'translate3d(0px, 0px, 0px) scale(1)');\n}\n\nfunction MaterialOverlayTab(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['overlay-tab']));\n  this.btnClose = new MaterialButton;\n  this.badge = new MaterialBadge;\n  this.leanOverlay = new MaterialPanel;\n  this.overlays = new ArrayList;\n  this.zIndex_0 = 1002;\n  this.maximizeHandlers = new ArrayList;\n}\n\nfunction lambda$7(overlay_0, other_1){\n  return other_1 != overlay_0;\n}\n\ndefineClass(2119, 25, $intern_61, MaterialOverlayTab);\n_.onLoad = function onLoad_30(){\n  $onLoad(this);\n  $addStyleName(this.btnClose, 'close');\n  $setIconType(this.btnClose, ($clinit_IconType() , CLOSE));\n  $setType_1(this.btnClose, ($clinit_ButtonType() , FLOATING));\n  $setIconColor(this.btnClose, ($clinit_Color() , GREY));\n  $setBackgroundColor(this.btnClose, WHITE);\n  $setSize(this.btnClose, ($clinit_ButtonSize() , LARGE));\n  $setDisplay(this.btnClose, ($clinit_Display() , NONE_3));\n  $addClickHandler(this.btnClose, new MaterialOverlayTab$lambda$0$Type(this));\n  $add_9(this, this.btnClose);\n  $setText_8(this.badge, '0');\n  $setCircle(this.badge);\n  $setBackgroundColor(this.badge, PINK);\n  $setStyleName(this.leanOverlay, 'lean-overlay');\n  $add_9(this, this.leanOverlay);\n}\n;\n_.maximized = false;\n_.zIndex_0 = 0;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlayTab_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlayTab', 2119);\nfunction MaterialOverlayTab$0methodref$removeHandler$Type(){\n}\n\ndefineClass(2124, 1, {}, MaterialOverlayTab$0methodref$removeHandler$Type);\n_.accept_0 = function accept(arg0){\n  castTo(arg0, 652).removeHandler();\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlayTab$0methodref$removeHandler$Type_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlayTab/0methodref$removeHandler$Type', 2124);\nfunction MaterialOverlayTab$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2120, 1, $intern_64, MaterialOverlayTab$lambda$0$Type);\n_.onClick = function onClick_4(arg0){\n  $close_1(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlayTab$lambda$0$Type_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlayTab/lambda$0$Type', 2120);\nfunction MaterialOverlayTab$lambda$1$Type($$outer_0, overlay_1){\n  this.$$outer_0 = $$outer_0;\n  this.overlay_1 = overlay_1;\n}\n\ndefineClass(2958, $wnd.Function, {}, MaterialOverlayTab$lambda$1$Type);\n_.call_10 = function call_45(){\n  $lambda$1_7(this.$$outer_0, this.overlay_1);\n}\n;\nfunction MaterialOverlayTab$lambda$2$Type($$outer_0, overlay_1){\n  this.$$outer_0 = $$outer_0;\n  this.overlay_1 = overlay_1;\n}\n\ndefineClass(2123, 1, {}, MaterialOverlayTab$lambda$2$Type);\n_.execute_1 = function execute_23(){\n  $lambda$2_6(this.$$outer_0, this.overlay_1);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlayTab$lambda$2$Type_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlayTab/lambda$2$Type', 2123);\nfunction $test_0(this$static, arg0){\n  return lambda$7(this$static.overlay_0, arg0);\n}\n\nfunction MaterialOverlayTab$lambda$7$Type(overlay_0){\n  this.overlay_0 = overlay_0;\n}\n\ndefineClass(2121, 1, {}, MaterialOverlayTab$lambda$7$Type);\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlayTab$lambda$7$Type_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlayTab/lambda$7$Type', 2121);\nfunction MaterialOverlayTab$lambda$8$Type(){\n}\n\ndefineClass(2122, 1, {}, MaterialOverlayTab$lambda$8$Type);\n_.accept_0 = function accept_0(arg0){\n  $removeStyleName(castTo(arg0, 160), 'hidden');\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlayTab$lambda$8$Type_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlayTab/lambda$8$Type', 2122);\nfunction $setReverseCallback(this$static, reverseCallback){\n  this$static.reverseCallback = reverseCallback;\n}\n\nfunction OverlayPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(916, 53, $intern_54, OverlayPresenter);\n_.onReveal = function onReveal_21(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Overlay', 'Provides a meaningful transition of source widget to popup or overlay panel.', 'addins/scrollfire/OverlayView', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayPresenter', 916);\nfunction $lambda$0_49(this$static){\n  $open_0(this$static.overlay, $getElement(this$static.btnOpenOverlay));\n}\n\nfunction $lambda$4_5(this$static){\n  $open_0(this$static.overlayEvents, $getElement(this$static.btnOpenOverlayEvents));\n}\n\nfunction OverlayView(){\n  var btnOpen, i, lblLabel, lblNumber, lblTitle, overlay, overlayContainer;\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_9(new OverlayView_BinderImpl$Widgets(this)));\n  register_0(this.overlay, 2);\n  register_0(this.btnCloseOverlay, 1);\n  register_0(this.overlayEvents, 2);\n  register_0(this.btnCloseOverlayEvents, 1);\n  $addClickHandler(this.btnOpenOverlay, new OverlayView$lambda$0$Type(this));\n  $addClickHandler(this.btnCloseOverlay, new OverlayView$lambda$1$Type(this));\n  $addOpenHandler(this.overlayEvents);\n  $addCloseHandler(this.overlayEvents);\n  $addClickHandler(this.btnOpenOverlayEvents, new OverlayView$lambda$4$Type(this));\n  $addClickHandler(this.btnCloseOverlayEvents, new OverlayView$lambda$5$Type(this));\n  overlayContainer = new MaterialOverlayTab;\n  $add_9(this.panel, overlayContainer);\n  for (i = 1; i <= 5; i++) {\n    overlay = new MaterialOverlay;\n    $setBackgroundColor(overlay, ($clinit_Color() , WHITE));\n    ($clinit_DOM() , overlay.element_0).style['padding'] = ($clinit_Style$Unit() , '20.0px');\n    lblLabel = new MaterialLabel_0('Some Description ' + i);\n    $setFontSize_1((!lblLabel.fontSizeMixin_0 && (lblLabel.fontSizeMixin_0 = new FontSizeMixin(lblLabel)) , lblLabel.fontSizeMixin_0), '1em');\n    $add_1(overlay, lblLabel, overlay.element_0);\n    lblTitle = new MaterialLabel_0('Overlay Title ' + i);\n    $setFontSize_1((!lblTitle.fontSizeMixin_0 && (lblTitle.fontSizeMixin_0 = new FontSizeMixin(lblTitle)) , lblTitle.fontSizeMixin_0), '2em');\n    $setFontWeight(lblTitle, ($clinit_Style$FontWeight() , BOLD));\n    $add_1(overlay, lblTitle, overlay.element_0);\n    lblNumber = new MaterialLabel_0(i + '');\n    setStyleName(lblNumber.element_0, 'number', true);\n    $add_1(overlay, lblNumber, overlay.element_0);\n    overlay.overlayTab = overlayContainer;\n    $addStyleName(overlay.minimizeIcon, 'minimize-icon');\n    $addMouseDownHandler(overlay.minimizeIcon, new MaterialOverlay$lambda$0$Type(overlay));\n    $add_9(overlay, overlay.minimizeIcon);\n    $add_9(this.panel, overlay);\n    btnOpen = new MaterialButton_1('Open ' + i);\n    btnOpen.element_0.style['margin'] = '20.0px';\n    $addClickHandler(btnOpen, new OverlayView$lambda$6$Type(overlay, btnOpen));\n    $add_9(this.panel, btnOpen);\n  }\n}\n\ndefineClass(1297, 61, $intern_55, OverlayView);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView', 1297);\nfunction OverlayView$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1298, 1, $intern_64, OverlayView$lambda$0$Type);\n_.onClick = function onClick_84(arg0){\n  $lambda$0_49(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$0$Type', 1298);\nfunction OverlayView$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1299, 1, $intern_64, OverlayView$lambda$1$Type);\n_.onClick = function onClick_85(arg0){\n  $close_0(this.$$outer_0.overlay);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$1$Type', 1299);\nfunction OverlayView$lambda$4$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1300, 1, $intern_64, OverlayView$lambda$4$Type);\n_.onClick = function onClick_86(arg0){\n  $lambda$4_5(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$4$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$4$Type', 1300);\nfunction OverlayView$lambda$5$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1301, 1, $intern_64, OverlayView$lambda$5$Type);\n_.onClick = function onClick_87(arg0){\n  $close_0(this.$$outer_0.overlayEvents);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$5$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$5$Type', 1301);\nfunction OverlayView$lambda$6$Type(overlay_0, btnOpen_1){\n  this.overlay_0 = overlay_0;\n  this.btnOpen_1 = btnOpen_1;\n}\n\ndefineClass(1302, 1, $intern_64, OverlayView$lambda$6$Type);\n_.onClick = function onClick_88(arg0){\n  $open_1(this.overlay_0, this.btnOpen_1);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$6$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$6$Type', 1302);\nfunction $build_f_HTMLPanel1_9(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow8, f_MaterialRow13, f_MaterialTitle3, overlay, f_MaterialLabel4, f_MaterialLabel5, btnCloseOverlay, btnOpenOverlay, f_PrettyPre6, sb, f_PrettyPre7, sb_0, f_MaterialTitle9, overlayEvents, f_MaterialLabel10, f_MaterialLabel11, btnCloseOverlayEvents, btnOpenOverlayEvents, f_PrettyPre12, sb_1, f_MaterialTitle14, btnOverlayTab, panel, f_PrettyPre15, sb_2;\n  f_HTMLPanel1 = new HTMLPanel($html5_1(this$static.domId0, this$static.domId1, this$static.domId2).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Requires a source component when opening the overlay to transform it to overlay panel.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Basic'))).html_0)) , fire_5(f_MaterialTitle3, 'Basic') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (overlay = new MaterialOverlay , $add_9(overlay, (f_MaterialLabel4 = new MaterialLabel , $setTextAlign(f_MaterialLabel4, ($clinit_TextAlign() , CENTER_4)) , $setFontSize_1((!f_MaterialLabel4.fontSizeMixin_0 && (f_MaterialLabel4.fontSizeMixin_0 = new FontSizeMixin(f_MaterialLabel4)) , f_MaterialLabel4.fontSizeMixin_0), '2em') , $setText_7((!f_MaterialLabel4.textMixin && (f_MaterialLabel4.textMixin = new TextMixin(f_MaterialLabel4)) , f_MaterialLabel4.textMixin), 'This is an overlay') , fire_5(f_MaterialLabel4, 'This is an overlay') , f_MaterialLabel4.element_0.style['marginTop'] = ($clinit_Style$Unit() , '120.0px') , $setFontWeight(f_MaterialLabel4, ($clinit_Style$FontWeight() , LIGHTER)) , f_MaterialLabel4)) , $add_9(overlay, (f_MaterialLabel5 = new MaterialLabel , $setTextAlign(f_MaterialLabel5, CENTER_4) , f_MaterialLabel5.element_0.style['marginBottom'] = '40.0px' , $setText_7((!f_MaterialLabel5.textMixin && (f_MaterialLabel5.textMixin = new TextMixin(f_MaterialLabel5)) , f_MaterialLabel5.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel5, 'Some content goes here') , f_MaterialLabel5)) , $add_9(overlay, (btnCloseOverlay = new MaterialButton , $setText_3(btnCloseOverlay.span_1, 'Close Overlay') , btnCloseOverlay.span_1.attached || $add_9(btnCloseOverlay, btnCloseOverlay.span_1) , this$static.owner.btnCloseOverlay = btnCloseOverlay , btnCloseOverlay)) , $setBackgroundColor(overlay, ($clinit_Color() , BLUE)) , $setTextAlign(overlay, CENTER_4) , $setTextColor(overlay, WHITE) , this$static.owner.overlay = overlay , overlay)) , $add_9(f_MaterialRow2, (btnOpenOverlay = new MaterialButton , $setText_3(btnOpenOverlay.span_1, 'Open Overlay') , btnOpenOverlay.span_1.attached || $add_9(btnOpenOverlay, btnOpenOverlay.span_1) , this$static.owner.btnOpenOverlay = btnOpenOverlay , btnOpenOverlay)) , $add_9(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '\\u2003&lt;ma:overlay.MaterialOverlay ui:field=\"overlay\" textAlign=\"CENTER\" textColor=\"WHITE\"&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"This is an overlay\" marginTop=\"120\" fontWeight=\"LIGHTER\" fontSize=\"2em\" /&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"Some content goes here\" marginBottom=\"40\" /&gt;<br> \\u2003&lt;m:MaterialButton ui:field=\"btnCloseOverlay\" text=\"Close Overlay\" /&gt;<br> &lt;/ma:overlay.MaterialOverlay&gt;<br><br> &lt;m:MaterialButton ui:field=\"btnOpenOverlay\" text=\"Open Overlay\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-xml', true) , f_PrettyPre6)) , $add_9(f_MaterialRow2, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '\\u2003btnOpenOverlay.addClickHandler(clickEvent -&gt; overlay.open(btnOpenOverlay));<br> btnCloseOverlay.addClickHandler(e -&gt; overlay.close());' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-java', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow8 = new MaterialRow , $add_9(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setText_12(f_MaterialTitle9.paragraph, 'We have provided open and close events') , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , fire_5(f_MaterialTitle9, 'Events') , f_MaterialTitle9)) , $add_9(f_MaterialRow8, (overlayEvents = new MaterialOverlay , $add_9(overlayEvents, (f_MaterialLabel10 = new MaterialLabel , $setTextAlign(f_MaterialLabel10, CENTER_4) , $setFontSize_1((!f_MaterialLabel10.fontSizeMixin_0 && (f_MaterialLabel10.fontSizeMixin_0 = new FontSizeMixin(f_MaterialLabel10)) , f_MaterialLabel10.fontSizeMixin_0), '2em') , $setText_7((!f_MaterialLabel10.textMixin && (f_MaterialLabel10.textMixin = new TextMixin(f_MaterialLabel10)) , f_MaterialLabel10.textMixin), 'This is an overlay') , fire_5(f_MaterialLabel10, 'This is an overlay') , f_MaterialLabel10.element_0.style['marginTop'] = '120.0px' , $setFontWeight(f_MaterialLabel10, LIGHTER) , f_MaterialLabel10)) , $add_9(overlayEvents, (f_MaterialLabel11 = new MaterialLabel , $setTextAlign(f_MaterialLabel11, CENTER_4) , f_MaterialLabel11.element_0.style['marginBottom'] = '40.0px' , $setText_7((!f_MaterialLabel11.textMixin && (f_MaterialLabel11.textMixin = new TextMixin(f_MaterialLabel11)) , f_MaterialLabel11.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel11, 'Some content goes here') , f_MaterialLabel11)) , $add_9(overlayEvents, (btnCloseOverlayEvents = new MaterialButton , $setText_3(btnCloseOverlayEvents.span_1, 'Close Overlay') , btnCloseOverlayEvents.span_1.attached || $add_9(btnCloseOverlayEvents, btnCloseOverlayEvents.span_1) , this$static.owner.btnCloseOverlayEvents = btnCloseOverlayEvents , btnCloseOverlayEvents)) , $setBackgroundColor(overlayEvents, BLUE) , $setTextAlign(overlayEvents, CENTER_4) , $setTextColor(overlayEvents, WHITE) , this$static.owner.overlayEvents = overlayEvents , overlayEvents)) , $add_9(f_MaterialRow8, (btnOpenOverlayEvents = new MaterialButton , $setText_3(btnOpenOverlayEvents.span_1, 'Open Overlay') , btnOpenOverlayEvents.span_1.attached || $add_9(btnOpenOverlayEvents, btnOpenOverlayEvents.span_1) , this$static.owner.btnOpenOverlayEvents = btnOpenOverlayEvents , btnOpenOverlayEvents)) , $add_9(f_MaterialRow8, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_1 = new StringBuilder , sb_1.string += '\\u2003overlayEvents.addOpenHandler(openEvent -&gt; MaterialToast.fireToast(\"Overlay Opened\"));<br> overla yEvents.addCloseHandler(closeEvent -&gt; MaterialToast.fireToast(\"Overlay Closed\"));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-java', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow13 = new MaterialRow , $add_9(f_MaterialRow13, (f_MaterialTitle14 = new MaterialTitle , $setText_12(f_MaterialTitle14.paragraph, 'We have added another addin widget MaterialOverlayTab to group you overlays for minimize state.') , $setInnerHTML($getElement(f_MaterialTitle14.header), (new SafeHtmlString(htmlEscape('Overlay Tabs'))).html_0) , fire_5(f_MaterialTitle14, 'Overlay Tabs') , f_MaterialTitle14)) , $add_9(f_MaterialRow13, (btnOverlayTab = new MaterialButton , $setIconType(btnOverlayTab, ($clinit_IconType() , APPS)) , $setType_1(btnOverlayTab, ($clinit_ButtonType() , FLOATING)) , btnOverlayTab)) , $add_9(f_MaterialRow13, (panel = new MaterialPanel , this$static.owner.panel = panel , panel)) , $add_9(f_MaterialRow13, (f_PrettyPre15 = new PrettyPre , $setHTML_0(f_PrettyPre15, (sb_2 = new StringBuilder , sb_2.string += '\\u2003@UiField <br> MaterialPanel panel; <br><br> MaterialOverlayTab overlayContainer = new MaterialOverlayTab(); <br> panel.add(overlayContainer); <br> for (int i = 1; i &lt;= 5; i++) { <br> MaterialOverlay overlay = new MaterialOverlay(); <br> overlay.setBackgroundColor(Color.WHITE); <br> overlay.setPadding(20); <br><br> MaterialLabel lblLabel = new MaterialLabel(\"Some Description \" + i); <br> lblLabel.setFontSize(\"1em\"); <br> overlay.add(lblLabel); <br><br> MaterialLabel lblTitle = new MaterialLabel(\"Overlay Title \" + i); <br> lblTitle.setFontSize(\"2em\"); <br> lblTitle.setFontWeight(Style.FontWeight.BOLD); <br> overlay.add(lblTitle); <br><br> MaterialLabel lblNumber = new MaterialLabel(i + \"\"); <br> lblNumber.addStyleName(\"number\"); <br> overlay.add(lblNumber); <br><br> // Set the tab overlay for minimize function <br> overlay.setOverlayTab(overlayContainer); <br> panel.add(overlay); <br><br> MaterialButton btnOpen = new MaterialButton(\"Open \" + i); <br> btnOpen.setMargin(20); <br> btnOpen.addClickHandler(e -&gt; { <br> \\u2003overlay.open(btnOpen); <br> }); <br> panel.add(btnOpen);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre15.element_0, 'lan-java', true) , f_PrettyPre15)) , setStyleName(f_MaterialRow13.element_0, 'code', true) , f_MaterialRow13), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction OverlayView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(1742, 1, {}, OverlayView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView_BinderImpl/Widgets', 1742);\nfunction $html5_1(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$) {\n    result0 = new OverlayPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$) {\n    result = new OverlayView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$;\n}\n\ndefineClass(765, 1, $intern_106);\n_.onSuccess_0 = function onSuccess_14(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction $filter(this$static, predicate){\n  $throwIfTerminated(this$static);\n  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));\n}\n\nfunction $forEach_3(this$static, action){\n  $terminate(this$static);\n  this$static.spliterator.forEachRemaining(action);\n}\n\nfunction $lambda$0_59(this$static, action_1, item_1){\n  if ($test_0(this$static.filter_0, item_1)) {\n    this$static.found = true;\n    action_1.accept_0(item_1);\n  }\n}\n\nfunction StreamImpl$FilterSpliterator(filter, original){\n  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -65);\n  checkCriticalNotNull(filter);\n  this.filter_0 = filter;\n  this.original = original;\n}\n\ndefineClass(2687, 649, {}, StreamImpl$FilterSpliterator);\n_.tryAdvance = function tryAdvance_0(action){\n  this.found = false;\n  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))\n  ;\n  return this.found;\n}\n;\n_.found = false;\nvar Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 2687);\nfunction StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){\n  this.$$outer_0 = $$outer_0;\n  this.action_1 = action_1;\n}\n\ndefineClass(2690, 1, {}, StreamImpl$FilterSpliterator$lambda$0$Type);\n_.accept_0 = function accept_13(arg0){\n  $lambda$0_59(this.$$outer_0, this.action_1, arg0);\n}\n;\nvar Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 2690);\n$entry(onLoad_1)(13);\n\n//# sourceURL=gwtmaterialdemo-13.js\n")
