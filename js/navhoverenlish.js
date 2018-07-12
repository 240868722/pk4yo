
window.onload = function(){
    //

    var aLi = document.querySelectorAll('.head_right_list li');
    console.log(aLi)
    switch (window.location.pathname){
        case '/Official-English/index.html':
            aLi[0].getElementsByTagName("a")[0].className = 'active';
            console.log(111)
            break;
        case '/Official-English/entertainment.html':
            aLi[1].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a1").innerText = "ENTERTAINMENT";
            break;
        case '/Official-English/gemzen.html':
            aLi[1].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a1").innerText = "GEMZEN";
            break;
        case '/Official-English/meyooyoo.html':
            aLi[4].getElementsByTagName("a")[0].className = 'active';
            console.log(document.getElementById("head_a2"));
            document.getElementById("head_a2").innerText = "MEYOOYOO";
            break;
        case '/Official-English/dmc.html':
            aLi[4].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a2").innerText = "DMC";
            break;
        case '/Official-English/contact.html':
            aLi[7].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a3").innerText = "CONTACT";
            break;
        case '/Official-English/team.html':
            aLi[7].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a3").innerText = "TEAM";
            break;

    };



}
