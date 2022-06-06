const success = document.querySelector(".button__success");
const warning = document.querySelector(".button__warning");
const error = document.querySelector(".button__error");

function toast(type, status, text) {
  const main = document.querySelector(".popup");

  if (main) {
    const toast = document.createElement("li");
    const icons = {
      success: "bx bxs-plane-take-off",
      warm: "bx bxs-bug-alt",
      error: "bx bxs-error-circle",
    };
    toast.classList.add("notification", `notification__${type}`);
    toast.classList.add(`notification__${type}`);
    main.appendChild(toast);
    

  }
}

success.onclick = function () {
  toast({
    type: "success",
    status: "Success",
    text: "Thông báo này màu xanh là an toàn",
  });
  console.log(123)
};

warning.onclick = function () {
  toast({
    type: "warning",
    status: "warning",
    text: "Thông báo này màu vàng là chú ý",
  });
};

error.onclick = function () {
  toast({
    type: "error",
    status: "error",
    text: "Thông báo này màu đỏ là nguy hiểm",
  });
};
