
    let userName =document.getElementById("floatingName");
    let userSurname =document.getElementById("floatingSurname");
    let userEmail =document.getElementById("floatingEmail");
    let userSmRift =document.getElementById("floatingSmRift");
    let formHtml= document.getElementById("leagueForm")
    
function exerciseMesage(){
    message=(`Ciao ${userName.value} ${userSurname.value} lo sapevi che ${userSmRift.value} è il champion più figo del gioco? `)
    message2=(`Volevamo dirti che attraverso delle ricerche incrociate abbiamo scoperto che l'indirizzo ${userEmail.value} è stato associato a 4 account PERMABANNATI!`)
    message3=(`Smetti di comprare account a 5$ perché il Gold non lo fai lo stesso !!!`)
    if (userSmRift.value=="Vladimir"){
    
    leagueForm.innerHTML="<h2>"+message+"</> "+ "<h3>"+message2+"</h3>"+ "<h3>"+message3+"</h3>";
   
}
else{
    message=(`Ciao ${userName.value} ${userSurname.value} lo sapevi che ${userSmRift.value} è per nabbi? `)
    leagueForm.innerHTML="<h2>"+message+"</> "+ "<h3>"+message2+"</h3>"+ "<h3>"+message3+"</h3>";
   
    
}
}