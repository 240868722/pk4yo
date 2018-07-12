
window.onload = function(){
    //

    var aLi = document.querySelectorAll('.head_right_list li');
    //console.log(aLi[2])
    //console.log(aLi[2].getElementsByTagName("a")[0]);
    switch (window.location.pathname){
        case '/index.html':
            aLi[0].getElementsByTagName("a")[0].className = 'active';
            break;
        case '/entertainment.html':
            aLi[1].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a1").innerText = "互动娱乐";
            break;
        case '/gemzen.html':
            aLi[1].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a1").innerText = "古与今";
            break;
        case '/meyooyoo.html':
            aLi[4].getElementsByTagName("a")[0].className = 'active';
            console.log(document.getElementById("head_a2"));
            document.getElementById("head_a2").innerText = "美优优";
            break;
        case '/dmc.html':
            aLi[4].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a2").innerText = "中心大数据";
            break;
        case '/contact.html':
            aLi[7].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a3").innerText = "联系我们";
            break;
        case '/team.html':
            aLi[7].getElementsByTagName("a")[0].className = 'active';
            document.getElementById("head_a3").innerText = "团队阵容";
            break;

    };



}
