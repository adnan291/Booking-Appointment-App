async function saveToLocalStorage(event) {  
    try{
         event.preventDefault();
      const name = event.target.username.value;
      const email = event.target.emailId.value;
      const phonenumber = event.target.phonenumber.value;


      const obj = {
        name,
        email,
        phonenumber
      }

    const res =  await axios.post("http://localhost:4000/user/add-user",obj);

        showNewUserOnScreen(res.data);




    }catch(err){
        console.log(err);
      }

    }

    window.addEventListener("DOMContentLoaded", async () => {
      try{
       const res = await axios.get("http://localhost:4000/user/get-user")

        for(var i=0;i<res.data.length; i++){
        showNewUserOnScreen(res.data[i]);
        }
        // console.log(res)
      } 
       catch(err){

        console.log(err);
      }
    })



     function showNewUserOnScreen(user) {

       document.getElementById('email').value = '';
      document.getElementById('username').value = '';
      document.getElementById('phonenumber').value = '';


      const parentNode = document.getElementById('listOfUsers');
      const childHTML = `<li id=${user.id}> ${user.name} - ${user.email}'
                                        <button onclick=deleteUser('${user.id}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user.id}')> Edit User </button>
                                     </li>`

      parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }

    //Edit user
    function editUserDetails(email,name,phonenumber,userId){

       document.getElementById('email').value = email;
      document.getElementById('username').value = name;
      document.getElementById('phonenumber').value = phonenumber;


      deleteUser(userId)

    }


 async function deleteUser(userId) {
    try{
         await axios.delete(`http://localhost:4000/user/delete-user/${userId}`)

          removeUserFromScreen(userId)

      } 
        catch(err) {
        console.log(err)
      }

    }

    function removeUserFromScreen(userId) {
      const parentNode = document.getElementById('listOfUsers');
      const childNodeToBeDeleted = document.getElementById(userId);

        parentNode.removeChild(childNodeToBeDeleted)


    }