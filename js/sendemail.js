function sendMail() {
    var link = "mailto:myemail@testemail.com.hk"
         + "&subject=" + escape("This is my subject")
         + "&body=" + escape("This is my body");
    window.open(link, "_blank");   
}