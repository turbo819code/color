$(function() {
    $("#blue").click(function() {
        $("body").css("background-color","blue");
        alert("blue");
    });
    $("#red").click(function() {
        $("body").css("background-color","red");
        alert("red");
    })
    $("#white").click(function() {
        $("body").css("background-color","white");
        alert("white");
    })
    $("#yellow").click(function() {
        $("body").css("background-color","yellow");
        alert("yellow");
    })
    $("#ii").click(function() {
        $("body").css("background-color","cornflowerblue")
        alert("良い感じの色")
    })
    $("#misesu").click(function() {
        $("body").css("background-color","#0e722c")
        alert("ミセスっぽ色")
    })
    $("#send").click(function() {
        var na = prompt("ユーザー名を入力してください。");
        var message = prompt( na + "さん、メッセージを入力してください。");
        var kakunin = "送信しますか？";
        var toi = confirm(kakunin);
        var ka = na + ":"+ message; 
        var a=("送信が完了しました。");
        alert(a);
        var element = document.createElement("p");
        var text = document.createTextNode(ka);
        document.body.appendChild(element).appendChild(text);
    });
});
