//Необходимо реализовать всплывающее окно, которое появляется только один раз
const modal = document.getElementById("subscribe-modal");
const times = document.querySelector(".modal__close_times");
const key = "modal_active";

const getCookie = (name) => {
    const value = document.cookie;
    const str = value.split(";").find((item) => item.startsWith(name + "="));
    if (str && str.includes("=")) {
        return str.split("=").pop();
    }
    return "";
}

times.onclick = () => {
    modal.classList.remove(key);
    document.cookie = `${key}=active`;
}

if (getCookie(key) === "active") {
    modal.classList.remove(key);
} else {
    modal.classList.add(key);
}