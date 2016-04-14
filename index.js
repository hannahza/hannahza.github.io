	var oBtn=document.querySelector('.btn-bar');
	var oSlider=document.querySelector('.slider');
//小于768px时的header	
	oBtn.addEventListener('click',function(){
		if(oSlider.style.display=='block'){
		     oSlider.style.height=0;
		     setTimeout(function(){
				oSlider.style.display='none';
			},510);
		    
		}else{
			oSlider.style.display='block';
			setTimeout(function(){
				oSlider.style.height=210+'px';
			},10);
			
		}
	},false)