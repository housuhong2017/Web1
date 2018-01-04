var wrap=document.getElementsByClassName('wrap')[0];
	var imgs=wrap.getElementsByTagName('a');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	var i=0;
	function imgTab(){
		imgs[i%3].style.display='none';
		i++;
		imgs[i%3].style.display='block';
	}
	var timer=setInterval(
		imgTab,3000)
	wrap.onmouseover=function(){
		clearInterval(timer)
	}
	wrap.onmouseout=function(){
		timer=setInterval(imgTab,3000)
	}
	prev.onclick=function(){
		imgs[i%3].style.display='none';
		i--;
		if(i<0){
			i=2;
		}
		imgs[i%3].style.display='block';
	}
	next.onclick=function(){
		imgTab();
	}
	var list=document.getElementsByClassName('li');
		list[7].parentNode.removeChild(list[7]);
		list[0].removeAtrribute('id');