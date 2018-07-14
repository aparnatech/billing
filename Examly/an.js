function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.email.value == "Admin" && form.psw.value == "Admin") {
                    window.open('co.html')/*opens the target page while Id & password matches*/
                }
                else if (form.email.value == "biller" && form.psw.value == "biller") {
                    window.open('j.html')/*opens the target page while Id & password matches*/
                }
                else{
                  alert("wrong password or email");

                }
                }
