var data = [];

$('.name').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.1').addClass("next");
	  
    } else {
      $('.1').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.name').click(
  function(){
    console.log("Something");
	if((/\d/.test(document.getElementById("1input").value)))
	{
		alert("Numbers Not Allowed!");
		
	}
	else{
		
		$('.name-section').addClass("fold-up");
		$('.college-section').removeClass("folded");
		
	}
		
    
  }
);

$('.college').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.2').addClass("next");
    } else {
      $('.2').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.college').click(
  function(){
    console.log("Something");
    $('.college-section').addClass("fold-up");
    $('.dept-section').removeClass("folded");
  }
);


$('.dept').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.3').addClass("next");
    } else {
      $('.3').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.dept').click(
  function(){
    console.log("Something");
    $('.dept-section').addClass("fold-up");
    $('.place-section').removeClass("folded");
  }
);

$('.place').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.5').addClass("next");
    } else {
      $('.5').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.place').click(
  function(){
    console.log("Something");
    $('.place-section').addClass("fold-up");
    $('.pos-section').removeClass("folded");
  }
);


$('.pos').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.4').addClass("next");
    } else {
      $('.4').removeClass("next");
    }
  }
);



$('.next-button.pos').click(
  function(){
    console.log("Something");
    $('.pos-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
	data=[];
	data.push(document.getElementById("1input").value);
	data.push(document.getElementById("2input").value);
	data.push(document.getElementById("3input").value);
	data.push(document.getElementById("4input").value);

	
	
  }
);



