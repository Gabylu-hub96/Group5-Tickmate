// Header layout change toggle
const layoutChange = document.getElementById("layout-change");
console.log(layoutChange)

layoutChange.onclick  = (e) => {
    const layoutOptions = document.getElementsByClassName("layout-options")[0];
    layoutOptions.classList.toggle("is-open");
    layoutChange.classList.toggle("active");
} 