function SendMail (){
    var params ={
       from_name:document.getElementById("username").value,
       email_id:document.getElementById(" email_id").value,
       message :document.getElementById("message").value,
    }
    const service_id="service_uqrkn8r";
    const template_id="template_ezkwyz9";

    emailjs.send("service_uqrkn8r","template_ezkwyz9",params)
    .then(
        res =>{
          document.getElementById("username").value="";
           document.getElementById("email").value="";
           document.getElementById("description").value="";
        alert("suss");
      }
    )
    .catch((err)=>console.log(err))
}