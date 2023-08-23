var a= Math.floor(Math.random()*6)+1;
var b= Math.floor(Math.random()*6)+1;
document.getElementsByName("h1").innerHTML="refresh";
if(a===1){
   
document.querySelector(".c").setAttribute("src","1.png");
}
else if(a===2){
 
    document.querySelector(".c").setAttribute("src","2.png");
    }
else if(a===3){
   
        document.querySelector(".c").setAttribute("src","3.png");
        }
else if(a===4){
    
            document.querySelector(".c").setAttribute("src","4.png");
            }
else if(a===5){
   
                document.querySelector(".c").setAttribute("src","5.png");
                }
else if(a===6){
 
                    document.querySelector(".c").setAttribute("src","6.png");
                    }
                    if(b===1){
                        document.querySelector(".d").setAttribute("src","1.png");
                        }
                        else if(b===2){
                            document.querySelector(".d").setAttribute("src","2.png");
                            }
                        else if(b===3){
                                document.querySelector(".d").setAttribute("src","3.png");
                                }
                        else if(b===4){
                                    document.querySelector(".d").setAttribute("src","4.png");
                                    }
                        else if(b===5){
                                        document.querySelector(".d").setAttribute("src","5.png");
                                        }
                        else if(b===6){
                                            document.querySelector(".d").setAttribute("src","6.png");
                                            }
if(a>b){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
}
else if(a<b){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else if(a===b){
    document.querySelector("h1").innerHTML="Draw!";
}