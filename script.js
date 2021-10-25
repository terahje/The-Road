//   Tour Cards 
  Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
      item.parentElement.parentElement.classList.toggle("change");
    };
  });

//  End of Tour Cards 