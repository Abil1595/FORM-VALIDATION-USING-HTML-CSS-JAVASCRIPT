function form3()
{
	var username=document.getElementById('name').value;
	var email=document.getElementById('email').value;
	var password=document.getElementById('pass').value;
	var cpassword=document.getElementById('cpass').value;
	var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var passwordcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
	if (username!='') 
		{
			if (username.length>5) 
			{
				document.getElementById('a1').innerHTML="";
				if (email!='') 
					{
                       if (email.match(mailformat)) 
                       	{
                           document.getElementById('a2').innerHTML="";
                           if (password!='') 
                           {
                             if (password.match(passwordcheck)) 
                             	{
                                 document.getElementById('a3').innerHTML="";
                                 if (cpassword!='')
                                  {
                                    if (password.length==cpassword.length && password==cpassword) 
                                    	{
                                          document.getElementById('a4').innerHTML="";
                                          alert("logined as:"+username);
                                          document.getElementById('y').innerHTML="WELCOME GUEST:"+username;
                                    	} 
                                    	else
                                    	 {
                                             document.getElementById('a4').innerHTML="please enter asa same as create password";
                                    	 }
                                  }
                             	} 
                             	else
                             	 {
                                    document.getElementById('a3').innerHTML="please enter atleast 1 number,1upper & lowercase letter,1 special chars";
                             	 }
                           }
                       	} 
                       	else
                       	 {
                             document.getElementById('a2').innerHTML="please enter valid mail id";
                       	 }
					} 
					
				
			}
			else
			{
				document.getElementById('a1').innerHTML="please enter minimum 5 chars";
			}


		} 
		else
		 {
           document.getElementById('a1').innerHTML="please enter 5 chars";
           document.getElementById('a2').innerHTML="please enter email";
           document.getElementById('a3').innerHTML="please create password";
           document.getElementById('a4').innerHTML="please confirm password";

		 }
}
