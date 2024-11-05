
$("#changeTextBtn").click(function(){
   $("#heading").text("hello");
});


$("#fullNameBtn").click(function(){
   var firstName = $("#firstName").val();
   var lastName = $("#lastName").val();
   var fulNmae = firstName + ' '+ lastName;
   $("#fullName").val(fulNmae);

});
// $("#styleOne").click(function(){
//    $("#resDiv").css({
//       'background':'black',
//       'border' : '1px solid red',
//       'height': '500px',
//       'width' : '500px',
//       'border-radius':'250px'
//    });
// });

$("#styleOne").click(function(){
   $("#resDiv").attr('class','styleOne');
});

$("#styleTwo").click(function(){
   $("#resDiv").attr('class','styleTwo');
});

$("#styleThree").click(function(){
   $("#resDiv").attr('class','styleThree');
});

$("#stylefour").click(function(){
   $("#resDiv").attr('class','stylefour');
});

$("#styleFive").click(function(){
   $("#resDiv").attr('class','styleFive');
});

$("#default").click(function(){
   $("#resDiv").attr('class','default');
});


//form validation;

function fullNameCheck(){
   var fullNameValue = $("#fulName").val();

   if(fullNameValue.length >=2 && fullNameValue.length <=20 ){
      $('#fullNameError').text(" ");

   } else{
      $("#fullNameError").text("Full Name should be 2 or less 20");
   }

}

$("#fulName").keyup(function(){
   fullNameCheck();

});











// var date = new Date();
//  var hours = date.getHours();
//  var minutes = date.getMinutes();
//  var seconds = date.getSeconds(); 
// var mywatch = hours+ ":" + minutes + ":" + ":"+ seconds;

 //console.log(hours + minutes + seconds);

 //console.log(seconds);

//  document.write("<b>Time = </b>");
//  document.write(hours+"h ");
//  document.write(minutes+"m ");
//  document.write(seconds+"s"); 
//console.log(mywatch);

//  function test(){
//     alert("Hello");
//  }

 //setInterval(test,3000);

 function smartWatch(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var mywatch = hours + " : " + minutes + ":" + seconds;
    document.getElementById("watchResult").innerText =  mywatch;

 }
 setInterval(smartWatch,1000);


 //jqeury


  //JavaScript Lisberay : jquery;
  
  //$(selector).action()
//$= jQuery object