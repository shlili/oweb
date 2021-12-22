var isLiked1=false;
var a1=0;
 function onClick1()
  {
  isLiked1=!isLiked1;
  if(isLiked1) {
    a1 = document.getElementById("totalLikes1").innerHTML = parseInt(a1)+1;
  }
  else {

  a1 = document.getElementById("totalLikes1").innerHTML = parseInt(a1)-1;
  }

  }
  var isLiked2=false;
var a2=0;
 function onClick2()
  {
  isLiked2=!isLiked2;
  if(isLiked2) {
    a2 = document.getElementById("totalLikes2").innerHTML = parseInt(a2)+1;
  }
  else {

  a2 = document.getElementById("totalLikes2").innerHTML = parseInt(a2)-1;
  }

  }
  var isLiked3=false;
var a3=0;
 function onClick3()
  {
  isLiked3=!isLiked3;
  if(isLiked3) {
    a3 = document.getElementById("totalLikes3").innerHTML = parseInt(a3)+1;
  }
  else {

  a3 = document.getElementById("totalLikes3").innerHTML = parseInt(a3)-1;
  }

  }
  var isLiked4=false;
var a4=0;
 function onClick4()
  {
  isLiked4=!isLiked4;
  if(isLiked4) {
    a4 = document.getElementById("totalLikes4").innerHTML = parseInt(a4)+1;
  }
  else {

  a4 = document.getElementById("totalLikes4").innerHTML = parseInt(a4)-1;
  }

  }
  var isLiked5=false;
var a5=0;
 function onClick5()
  {
  isLiked5=!isLiked5;
  if(isLiked5) {
    a5 = document.getElementById("totalLikes5").innerHTML = parseInt(a5)+1;
  }
  else {

  a5 = document.getElementById("totalLikes5").innerHTML = parseInt(a5)-1;
  }

  }
  var isLiked6=false;
var a6=0;
 function onClick6()
  {
  isLiked6=!isLiked6;
  if(isLiked6) {
    a6 = document.getElementById("totalLikes6").innerHTML = parseInt(a6)+1;
  }
  else {

  a6 = document.getElementById("totalLikes6").innerHTML = parseInt(a6)-1;
  }

  }
  var isLiked7=false;
var a7=0;
 function onClick7()
  {
  isLiked7=!isLiked7;
  if(isLiked7) {
    a7 = document.getElementById("totalLikes7").innerHTML = parseInt(a7)+1;
  }
  else {

  a7 = document.getElementById("totalLikes7").innerHTML = parseInt(a7)-1;
  }

  }
  var isLiked8=false;
var a8=0;
 function onClick8()
  {
  isLiked8=!isLiked8;
  if(isLiked8) {
    a8 = document.getElementById("totalLikes8").innerHTML = parseInt(a8)+1;
  }
  else {

  a8 = document.getElementById("totalLikes8").innerHTML = parseInt(a8)-1;
  }

  }
  var isLiked9=false;
var a9=0;
 function onClick9()
  {
  isLiked9=!isLiked9;
  if(isLiked9) {
    a9 = document.getElementById("totalLikes9").innerHTML = parseInt(a9)+1;
  }
  else {

  a9 = document.getElementById("totalLikes9").innerHTML = parseInt(a9)-1;
  }

  }
  var isLiked10=false;
var a10=0;
 function onClick10()
  {
  isLiked10=!isLiked10;
  if(isLiked10) {
    a10 = document.getElementById("totalLikes10").innerHTML = parseInt(a10)+1;
  }
  else {

  a10 = document.getElementById("totalLikes10").innerHTML = parseInt(a10)-1;
  }

  }
  var isLiked11=false;
var a11=0;
 function onClick11()
  {
  isLiked11=!isLiked11;
  if(isLiked11) {
    a11 = document.getElementById("totalLikes11").innerHTML = parseInt(a11)+1;
  }
  else {

  a11 = document.getElementById("totalLikes11").innerHTML = parseInt(a11)-1;
  }

  }
  var isLiked12=false;
var a12=0;
 function onClick12()
  {
  isLiked12=!isLiked12;
  if(isLiked12) {
    a12 = document.getElementById("totalLikes12").innerHTML = parseInt(a12)+1;
  }
  else {

  a12 = document.getElementById("totalLikes12").innerHTML = parseInt(a12)-1;
  }

  }

  document.querySelector('.like-button1').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked1');
  });
  document.querySelector('.like-button2').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked2');
  });
  document.querySelector('.like-button3').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked3');
  });
  document.querySelector('.like-button4').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked4');
  });
  document.querySelector('.like-button5').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked5');
  });
  document.querySelector('.like-button6').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked6');
  });
  document.querySelector('.like-button7').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked7');
  });
  document.querySelector('.like-button8').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked8');
  });
  document.querySelector('.like-button9').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked9');
  });
  document.querySelector('.like-button10').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked10');
  });
  document.querySelector('.like-button11').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked11');
  });
  document.querySelector('.like-button12').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked12');
  });

 


  var guest = prompt("Hello", "Please enter your name here");
            
            const onLoad = () => {
                let json1 = [];
                let string1 = "";
                if (localStorage.getItem('comments1')) {
                    json1 = JSON.parse(localStorage.getItem('comments1'));
                    string1 = "";
                    for (var i = 0; i < json1.length; i++) {
                        var obj1 = json1[i];
                        let st1 = JSON.stringify(obj1);
                        string1 += st1;
                        string1 += "<hr>";
                    }
                }
                document.getElementById("comment1").innerHTML = string1;
            }
            function comment1() {
                event.preventDefault()
                let t1 = document.getElementById("input1").value;
                let comm1 = JSON.parse(localStorage.getItem('comments1')) || [];
                var datum1 = new Date();
                t1 = guest + ': ' + t1 + '<br>' + datum1.toUTCString();
                comm1.push(t1)
                localStorage.setItem('comments1', JSON.stringify(comm1))
                console.log(comm1)
                let newString1 = ""
                comm1.forEach(element => {
                    newString1 += element
                    newString1 += "<hr>"
                });
                document.getElementById("comment1").innerHTML = newString1;

                let json2 = [];
                let string2 = "";
                if (localStorage.getItem('comments2')) {
                    json2 = JSON.parse(localStorage.getItem('comments2'));
                    string2 = "";
                    for (var i = 0; i < json2.length; i++) {
                        var obj2 = json2[i];
                        let st2 = JSON.stringify(obj2);
                        string2 += st2;
                        string2 += "<hr>";
                    }
                }
                document.getElementById("comment2").innerHTML = string2;
            }
            function comment2() {
                event.preventDefault()
                let t2 = document.getElementById("input2").value;
                let comm2 = JSON.parse(localStorage.getItem('comments2')) || [];
                var datum2 = new Date();
                t2 = guest + ': ' + t2 + '<br>' + datum2.toUTCString();
                comm2.push(t2)
                localStorage.setItem('comments2', JSON.stringify(comm2))
                console.log(comm2)
                let newString2 = ""
                comm2.forEach(element => {
                    newString2 += element
                    newString2 += "<hr>"
                });
                document.getElementById("comment2").innerHTML = newString2;
            }

            let json3 = [];
                let string3 = "";
                if (localStorage.getItem('comments3')) {
                    json3 = JSON.parse(localStorage.getItem('comments3'));
                    string3 = "";
                    for (var i = 0; i < json3.length; i++) {
                        var obj3 = json3[i];
                        let st3 = JSON.stringify(obj3);
                        string3 += st3;
                        string3 += "<hr>";
                    }
                }
                document.getElementById("comment3").innerHTML = string3;
            
            function comment3() {
                event.preventDefault()
                let t3 = document.getElementById("input3").value;
                let comm3 = JSON.parse(localStorage.getItem('comments3')) || [];
                var datum3 = new Date();
                t3 = guest + ': ' + t3 + '<br>' + datum3.toUTCString();
                comm3.push(t3)
                localStorage.setItem('comments3', JSON.stringify(comm3))
                console.log(comm3)
                let newString3 = ""
                comm3.forEach(element => {
                    newString3 += element
                    newString3 += "<hr>"
                });
                document.getElementById("comment3").innerHTML = newString3;
            }

            let json4 = [];
                let string4 = "";
                if (localStorage.getItem('comments4')) {
                    json4 = JSON.parse(localStorage.getItem('comments4'));
                    string4 = "";
                    for (var i = 0; i < json4.length; i++) {
                        var obj4 = json4[i];
                        let st4 = JSON.stringify(obj4);
                        string4 += st4;
                        string4 += "<hr>";
                    }
                }
                document.getElementById("comment4").innerHTML = string4;
            
            function comment4() {
                event.preventDefault()
                let t4 = document.getElementById("input4").value;
                let comm4 = JSON.parse(localStorage.getItem('comments4')) || [];
                var datum4 = new Date();
                t4 = guest + ': ' + t4 + '<br>' + datum4.toUTCString();
                comm4.push(t4)
                localStorage.setItem('comments4', JSON.stringify(comm4))
                console.log(comm4)
                let newString4 = ""
                comm4.forEach(element => {
                    newString4 += element
                    newString4 += "<hr>"
                });
                document.getElementById("comment4").innerHTML = newString4;
              }
                let json5 = [];
                let string5 = "";
                if (localStorage.getItem('comments5')) {
                    json5 = JSON.parse(localStorage.getItem('comments5'));
                    string5 = "";
                    for (var i = 0; i < json5.length; i++) {
                        var obj5 = json5[i];
                        let st5 = JSON.stringify(obj5);
                        string5 += st5;
                        string5 += "<hr>";
                    }
                }
                document.getElementById("comment5").innerHTML = string5;
            
            function comment5() {
                event.preventDefault()
                let t5 = document.getElementById("input5").value;
                let comm5 = JSON.parse(localStorage.getItem('comments5')) || [];
                var datum5 = new Date();
                t5 = guest + ': ' + t5 + '<br>' + datum5.toUTCString();
                comm5.push(t5)
                localStorage.setItem('comments5', JSON.stringify(comm5))
                console.log(comm5)
                let newString5 = ""
                comm5.forEach(element => {
                    newString5 += element
                    newString5 += "<hr>"
                });
                document.getElementById("comment5").innerHTML = newString5;
            }

            let json6 = [];
                let string6 = "";
                if (localStorage.getItem('comments6')) {
                    json6 = JSON.parse(localStorage.getItem('comments6'));
                    string6 = "";
                    for (var i = 0; i < json6.length; i++) {
                        var obj6 = json6[i];
                        let st6 = JSON.stringify(obj6);
                        string6 += st6;
                        string6 += "<hr>";
                    }
                }
                document.getElementById("comment6").innerHTML = string6;
            
            function comment6() {
                event.preventDefault()
                let t6 = document.getElementById("input6").value;
                let comm6 = JSON.parse(localStorage.getItem('comments6')) || [];
                var datum6 = new Date();
                t6 = guest + ': ' + t6 + '<br>' + datum6.toUTCString();
                comm6.push(t6)
                localStorage.setItem('comments6', JSON.stringify(comm6))
                console.log(comm6)
                let newString6 = ""
                comm6.forEach(element => {
                    newString6 += element
                    newString6 += "<hr>"
                });
                document.getElementById("comment6").innerHTML = newString6;
            }

            let json7 = [];
                let string7 = "";
                if (localStorage.getItem('comments7')) {
                    json7 = JSON.parse(localStorage.getItem('comments7'));
                    string7 = "";
                    for (var i = 0; i < json7.length; i++) {
                        var obj7 = json7[i];
                        let st7 = JSON.stringify(obj7);
                        string7 += st7;
                        string7 += "<hr>";
                    }
                }
                document.getElementById("comment7").innerHTML = string7;
            
            function comment7() {
                event.preventDefault()
                let t7 = document.getElementById("input7").value;
                let comm7 = JSON.parse(localStorage.getItem('comments7')) || [];
                var datum7 = new Date();
                t7 = guest + ': ' + t7 + '<br>' + datum7.toUTCString();
                comm7.push(t7)
                localStorage.setItem('comments7', JSON.stringify(comm7))
                console.log(comm7)
                let newString7 = ""
                comm7.forEach(element => {
                    newString7 += element
                    newString7 += "<hr>"
                });
                document.getElementById("comment7").innerHTML = newString7;
            }

            let json8 = [];
                let string8 = "";
                if (localStorage.getItem('comments8')) {
                    json8 = JSON.parse(localStorage.getItem('comments8'));
                    string8 = "";
                    for (var i = 0; i < json8.length; i++) {
                        var obj8 = json8[i];
                        let st8 = JSON.stringify(obj8);
                        string8 += st8;
                        string8 += "<hr>";
                    }
                }
                document.getElementById("comment8").innerHTML = string8;
            
            function comment8() {
                event.preventDefault()
                let t8 = document.getElementById("input8").value;
                let comm8 = JSON.parse(localStorage.getItem('comments8')) || [];
                var datum8 = new Date();
                t8 = guest + ': ' + t8 + '<br>' + datum8.toUTCString();
                comm8.push(t8)
                localStorage.setItem('comments8', JSON.stringify(comm8))
                console.log(comm8)
                let newString8 = ""
                comm8.forEach(element => {
                    newString8 += element
                    newString8 += "<hr>"
                });
                document.getElementById("comment8").innerHTML = newString8;
            }

            let json9 = [];
                let string9 = "";
                if (localStorage.getItem('comments9')) {
                    json9 = JSON.parse(localStorage.getItem('comments9'));
                    string9 = "";
                    for (var i = 0; i < json9.length; i++) {
                        var obj9 = json9[i];
                        let st9 = JSON.stringify(obj9);
                        string9 += st9;
                        string9 += "<hr>";
                    }
                }
                document.getElementById("comment9").innerHTML = string9;
            
            function comment9() {
                event.preventDefault()
                let t9 = document.getElementById("input9").value;
                let comm9 = JSON.parse(localStorage.getItem('comments9')) || [];
                var datum9 = new Date();
                t9 = guest + ': ' + t9 + '<br>' + datum9.toUTCString();
                comm9.push(t9)
                localStorage.setItem('comments9', JSON.stringify(comm9))
                console.log(comm9)
                let newString9 = ""
                comm9.forEach(element => {
                    newString9 += element
                    newString9 += "<hr>"
                });
                document.getElementById("comment9").innerHTML = newString9;
            }

            let json10 = [];
                let string10 = "";
                if (localStorage.getItem('comments10')) {
                    json10 = JSON.parse(localStorage.getItem('comments10'));
                    string10 = "";
                    for (var i = 0; i < json10.length; i++) {
                        var obj10 = json10[i];
                        let st10 = JSON.stringify(obj10);
                        string10 += st10;
                        string10 += "<hr>";
                    }
                }
                document.getElementById("comment10").innerHTML = string10;
            
            function comment10() {
                event.preventDefault()
                let t10 = document.getElementById("input10").value;
                let comm10 = JSON.parse(localStorage.getItem('comments10')) || [];
                var datum10 = new Date();
                t10 = guest + ': ' + t10 + '<br>' + datum10.toUTCString();
                comm10.push(t10)
                localStorage.setItem('comments10', JSON.stringify(comm10))
                console.log(comm10)
                let newString10 = ""
                comm10.forEach(element => {
                    newString10 += element
                    newString10 += "<hr>"
                });
                document.getElementById("comment10").innerHTML = newString10;
            }

            let json11 = [];
                let string11 = "";
                if (localStorage.getItem('comments11')) {
                    json11 = JSON.parse(localStorage.getItem('comments11'));
                    string11 = "";
                    for (var i = 0; i < json11.length; i++) {
                        var obj11 = json11[i];
                        let st11 = JSON.stringify(obj11);
                        string11 += st11;
                        string11 += "<hr>";
                    }
                }
                document.getElementById("comment11").innerHTML = string11;
            
            function comment11() {
                event.preventDefault()
                let t11 = document.getElementById("input11").value;
                let comm11 = JSON.parse(localStorage.getItem('comments11')) || [];
                var datum11 = new Date();
                t11 = guest + ': ' + t11 + '<br>' + datum11.toUTCString();
                comm11.push(t11)
                localStorage.setItem('comments11', JSON.stringify(comm11))
                console.log(comm11)
                let newString11 = ""
                comm11.forEach(element => {
                    newString11 += element
                    newString11 += "<hr>"
                });
                document.getElementById("comment11").innerHTML = newString11;
            }

            let json12 = [];
                let string12 = "";
                if (localStorage.getItem('comments12')) {
                    json12 = JSON.parse(localStorage.getItem('comments12'));
                    string12 = "";
                    for (var i = 0; i < json12.length; i++) {
                        var obj12 = json12[i];
                        let st12 = JSON.stringify(obj12);
                        string12 += st12;
                        string12 += "<hr>";
                    }
                }
                document.getElementById("comment12").innerHTML = string12;
            
            function comment12() {
                event.preventDefault()
                let t12 = document.getElementById("input12").value;
                let comm12 = JSON.parse(localStorage.getItem('comments12')) || [];
                var datum12 = new Date();
                t12 = guest + ': ' + t12 + '<br>' + datum12.toUTCString();
                comm12.push(t12)
                localStorage.setItem('comments12', JSON.stringify(comm12))
                console.log(comm12)
                let newString12 = ""
                comm12.forEach(element => {
                    newString12 += element
                    newString12 += "<hr>"
                });
                document.getElementById("comment12").innerHTML = newString12;
            }