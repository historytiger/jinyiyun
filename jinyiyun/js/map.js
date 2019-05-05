window.onload=function(){
	// 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(120.270326,31.567661);
    map.centerAndZoom(poi, 18);
    map.enableScrollWheelZoom();
//添加比例尺等控件
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    map.addControl(top_left_control);
    map.addControl(top_left_navigation); 
    map.addControl(top_right_navigation);
//
//略缩图控件
	var mapType1 = new BMap.MapTypeControl(
		{
			mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP],
			anchor: BMAP_ANCHOR_TOP_LEFT
		}
	);

	var overView = new BMap.OverviewMapControl();
	var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
		map.addControl(overView);          //添加默认缩略地图控件
		map.addControl(overViewOpen);      //右下角，打开
//
    var adress = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="img/mao.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '公司：无锡金易云信息技术有限公司<br/>电话：(010)59928888<br/>地址：无锡市滨湖区梁溪路万达广场A区写字楼1102。' +
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, adress, {
			title  : "百度大厦",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker);//在地图中添加marker
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	//样式1
	var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
		title: "信息框1", //标题
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
			BMAPLIB_TAB_FROM_HERE, //从这里出发
			BMAPLIB_TAB_SEARCH   //周边检索
		]
	});
	function openInfoWindow1() {
		searchInfoWindow1.open(new BMap.Point(120.270334,31.567704));
	}
	//样式2
	var searchInfoWindow2 = new BMapLib.SearchInfoWindow(map, "信息框2内容", {
		title: "信息框2", //标题
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
			BMAPLIB_TAB_SEARCH   //周边检索
		]
	});
	function openInfoWindow2() {
		searchInfoWindow2.open(new BMap.Point(116.324852,40.057031));
	}
	//样式3
	var searchInfoWindow3 = new BMapLib.SearchInfoWindow(map, "信息框3内容", {
		title: "信息框3", //标题
		width: 290, //宽度
		height: 40, //高度
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
		]
	});
	function openInfoWindow3() {
		searchInfoWindow3.open(new BMap.Point(116.328852,40.057031)); 
	}
	//
	function top(){
	var one = document.getElementById("move"); //红色横杠
	var getul = document.getElementById("get");
	var geta = getul.getElementsByTagName("a"); //得到a
	var timer = null;
	var lefth=0;
	// alert(getli.length)
	lefth=one.offsetLeft;
	for(var i = 0; i < geta.length; i++) {
		geta[i].index=i; //用来表示当前页数
		geta[i].onclick=function(){
			pagenumber=this.index;
		}
		geta[i].onmouseover = function() {
			//alert(geta[i].offsetLeft);
			//alert(this.offsetLeft)
			var thisa = this;
			clearInterval(timer);
			//alert(this.offsetLeft)
			timer = setInterval(function() {
				if(one.offsetLeft == thisa.offsetLeft) {
					clearInterval(timer);
				} else if(one.offsetLeft < thisa.offsetLeft) {
					//alert(one.offsetLeft)
					one.style.left = one.offsetLeft + 8 + 'px';
				} else {
					one.style.left = one.offsetLeft - 8 + 'px';
				}
			}, 18 - Math.abs(((thisa.offsetLeft - one.offsetLeft) / 96)) * 3);
		}
		div1.onmouseleave = function() {
			clearInterval(timer);
			timer = setInterval(function() {
				if(one.offsetLeft == lefth) {
					clearInterval(timer);
				} else if(one.offsetLeft >lefth) {
					one.style.left = one.offsetLeft - 8 + 'px';
				}else{
					one.style.left = one.offsetLeft + 8 + 'px';
				}
			}, 18 - (one.offsetLeft - 40) / 96 * 3);
		}
	}
	}
	top();
	//
}
