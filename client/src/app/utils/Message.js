import Swal from "sweetalert2";

export const showMessage = (msg = "", type = "success") => {
  const toast = Swal.mixin({
    toast: true,
    position: "left",
    showConfirmButton: false,
    timer: 3000,
    customClass: { container: "toast" },
  });
  toast.fire({
    icon: type,
    title: msg,
    padding: "10px 20px",
  });
};

export const showPermanentMessage = (msg = "", type = "success") => {
  Swal.fire({
    icon: `${type}`,
    title: `${msg}`,
  });
};
