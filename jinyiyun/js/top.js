window.onload = function(){
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