const loginForm = document.querySelector(".login-form");
const logoutButton = document.querySelector(".logout");
const meForm = document.querySelector(".form-user-data");
const newpassword=document.querySelector(".form-user-password");
const login = async (email, password) => {
  // alert("Email :" + email + "   " + "Password " + " : " + password);
  try {
    const data = {
      email,
      password
    };
    const res = await axios.post("/api/user/login", data);
    // console.log(res);
    if (res.data.status === "user logged in") {
      alert("User logged in ");
      window.setTimeout(() => {
        location.assign("/diabetes");
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};
const logout = async () => {
  try {
    const res = await axios.get("/api/user/logout");
    // console.log(res);
    if (res.data.status === "user logged Out") {
      alert("User logged Out ");
      window.setTimeout(() => {
        location.assign("/home");
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};
const updateUser = async (Name, email) => {
  try {
    const res = await axios.patch("/api/user/updateUser", { Name, email });
    // console.log(res);
    if (res.data.status === "user Data Updated") {
      alert("User Data Updated ");
      location.reload(true);
    }
  } catch (err) {
    console.log(err);
  }
};
const updatePassword=async(CurrentPass,newPass,confirmPass)=>{
  try{
    const res=await axios.patch("/api/user/password",{CurrentPass,newPass,confirmPass});
    if(res.data.status==="user password updated"){
      alert("Password updated");
      location.assign("/home");
    }
  }catch(err){
    console.log(err);
  }
};

if (loginForm) {
  loginForm.addEventListener("submit", tushar => {
    tushar.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}
if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}
if (meForm) {
  meForm.addEventListener("submit", e => {
    e.preventDefault();
    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    updateUser(Name, email);
  });
}
if(newpassword){
  newpassword.addEventListener("submit",e=>{
    e.preventDefault();
    const CurrentPass=document.getElementById("password-current").value;
    const newPass=document.getElementById("password").value;
    const confirmPass=document.getElementById("password-confirm").value;
    updatePassword(CurrentPass,newPass,confirmPass);
  });
}
