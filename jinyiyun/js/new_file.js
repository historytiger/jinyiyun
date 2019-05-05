window.onload = function() {
    var one = document.getElementById("move"); //红色横杠
	var getul = document.getElementById("get");
	var geta = getul.getElementsByTagName("a"); //得到a
	var timer=null;
	// alert(getli.length)
	for(var i = 0; i < geta.length; i++) {
		geta[i].index=i; //用来表示当前页数
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
				if(one.offsetLeft == 40 ){
					clearInterval(timer);
				} else {
					one.style.left = one.offsetLeft - 8 + 'px';
				}
			}, 18 - (one.offsetLeft - 40) / 96 * 3);
		}
	}
	//顶部滚条动画结束
	var mtest = document.getElementById('test');
	var divimg = document.getElementById('achieve-list');
	var getimg = divimg.getElementsByTagName('img')
	var look = null;
	for(var i = 0; i < getimg.length; i++) {
		//getimg[i].style.float='left';
		getimg[i].style.opacity = 0.7
	}
	//alert(mtest.offsetTop)距离文档最高处的距离
	//alert(document.body.scrollTop)滚动条滚动的距离
	//document.documentElement.scrollTop 谷歌兼容的去滚动条高度
	look = setInterval(function() {
		var array = [1, 9, 0, 8, 1, 0, 8, 0, 0, 9];
		if(document.body.scrollTop > 1642 || document.documentElement.scrollTop>1642) {
			//第一个数字
			var move1 = setInterval(function() {
				getimg[0].src = "img/n" + array[0] + ".png";
				array[0] += 2;
				if(array[0] > 9) {
					clearInterval(move1)
				}
			}, 500)
			// 第二个数字
			var move2 = setInterval(function() {
				getimg[1].src = "img/n" + array[1] + ".png";
				array[1]--;
				if(array[1] < 5) {
					clearInterval(move2)
				}
			}, 500)
			//第三个数字
			var move3 = setInterval(function() {
				getimg[2].src = "img/n" + array[2] + ".png";
				array[2]++;
				if(array[2] > 6) {
					clearInterval(move3)
				}
			}, 500)
			//第四个数字
			var move4 = setInterval(function() {
				getimg[3].src = "img/n" + array[3] + ".png";
				array[3]--;
				if(array[3] < 4) {
					clearInterval(move4)
				}
			}, 500)
			//第五个数字
			var move5 = setInterval(function() {
				getimg[4].src = "img/n" + array[4] + ".png";
				array[4]++;
				if(array[4] > 5) {
					clearInterval(move5)
				}
			}, 500)
			//第六个
			var move6 = setInterval(function() {
				getimg[5].src = "img/n" + array[5] + ".png";
				array[5]++;
				if(array[5] > 1) {
					clearInterval(move6)
				}
			}, 500)
			//第七个
			var move7 = setInterval(function() {
				getimg[6].src = "img/n" + array[6] + ".png";
				array[6] -= 2;
				if(array[6] < 4) {
					clearInterval(move7)
				}
			}, 500)
			//第九个
			var move9 = setInterval(function() {
				getimg[8].src = "img/n" + array[8] + ".png";
				array[8]++;
				if(array[8] > 3) {
					clearInterval(move9)
				}
			}, 500)
			//第十个
			var move10 = setInterval(function() {
				getimg[9].src = "img/n" + array[9] + ".png";
				array[9]--;
				if(array[9] < 4) {
					clearInterval(move10)
				}
			}, 500)
			clearInterval(look);
		}
	}, 30)
	//悬浮微信qq
	var wx = document.getElementById('wechat');
	var qq = document.getElementById('QQ');
	var ewm = document.getElementById('wechat-pg');
	wx.onclick = function() {
		ewm.style.display = "block";
	}
	wx.onmouseout = function() {
		ewm.style.display = "none";
	}
	//down点一下跳转
	var down = document.getElementById('down');
	down.onclick= function () {
		var turndown = setInterval(function() {
			if(document.body.scrollTop==0){
				document.documentElement.scrollTop+=20;
				if(document.documentElement.scrollTop > 1200){
					clearInterval(turndown);
				}
			}else{
				document.body.scrollTop += 20;
				if(document.body.scrollTop > 1100) {
				clearInterval(turndown);
			}
			}
			//alert(document.documentElement.scrollTop);
			
		}, 10)
	}
	//cs3特效
	var cs3=document.getElementById('cs3')
		cs3.parentElement.onmouseover=function(){
			cs3.className='textcs3';
		}
		cs3.parentElement.onmouseout=function(){
			cs3.className='cs3';
		}
	
}
