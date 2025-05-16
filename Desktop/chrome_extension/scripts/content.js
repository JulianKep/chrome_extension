window.addEventListener("load", () => {
  const button = document.querySelector(".btn.login-identityprovider-btn.btn-block.btn-secondary");
  if (button) {
    button.click();
    console.log("Button clicked!");
  } else {
    console.log("Button not found.");
  }

   if (typeof Login !== "undefined" && Login.submitLoginRequest) {
    Login.submitLoginRequest();
    console.log("Called Login.submitLoginRequest() directly.");
  } else {
    console.log("Login function not found.");
  }
});

