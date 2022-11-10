import swal from "sweetalert2";

const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
});

export const axiosErrorHandlingMixin = {
  data() {
    return {};
  },
  methods: {
    handleAxiosNetworkError(error) {
      let errResponse;

      if (error.response === undefined) {
        errResponse = error.message;
        toast.fire(
          "Error",
          errResponse + ", check your internet connexion",
          "error"
        );
        return errResponse;
      }

      if (error.response.data.message) {
        errResponse = error.response.data.message;
        toast.fire("Warning", errResponse, "warning");
        return errResponse;
      } else if (error.response.data.errors) {
        errResponse = error.response.data.errors[0];
        toast.fire("Warning", errResponse, "warning");
        return errResponse;
      } else {
        toast.fire("Error", "Unknown Error occurred", "error");
        return "Unknown Error occurred";
      }
    },
  },
};
