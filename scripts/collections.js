//signup
let signUp = document.getElementById("signUp");
let signUpClose = document.querySelector(".signUpClose");

signUpClose.addEventListener("click", function () {
  signUp.classList.add("hidden");
})

//sidebar
let sidebar = document.querySelector(".sidebar");
let navbarToggle = document.querySelector(".navbar-toggle");
let navbarClose = document.querySelector(".navbar-close");

navbarToggle.addEventListener("click", function () {
  sidebar.classList.remove("-left-1/2");
  sidebar.classList.add('left-0');
})

navbarClose.addEventListener("click", function () {
  sidebar.classList.add("-left-1/2");
  sidebar.classList.remove('left-0');
})




let checkboxes = document.querySelectorAll("input[type='checkbox']");
let products = document.querySelectorAll(".product");
let searchInput = document.querySelector('input[type="text"]')

//checkbox
checkboxes.forEach(checkbox =>{
  checkbox.addEventListener("change", ()=>{
    let selected = [];

    //selected checkboxes 
    checkboxes.forEach(cb =>{
      if(cb.checked){
        selected.push(cb.value);
      }
    });

    //filter products based on selected checkboxes

    products.forEach(product =>{
      let tags = product.dataset.tags.split(",");
      let show = false;
      
      selected.forEach(tag =>{
        if(tags.includes(tag)){
          show = true;
        }
      });

      //if no checkboxes are selected, show all products
      if(selected.length === 0 || show){
        product.classList.remove("hidden");
      }
      else{
        product.classList.add("hidden");
      }

    });
  });
});

//search

searchInput.addEventListener("keyup",()=>{
  const searchValue = searchInput.value.toLowerCase();

  products.forEach(product =>{
    const productName = product.dataset.tags.toLowerCase();

    if(productName.includes(searchValue)){
      product.classList.remove("hidden");
    }
    else{
      product.classList.add("hidden");
    }
  })
})






