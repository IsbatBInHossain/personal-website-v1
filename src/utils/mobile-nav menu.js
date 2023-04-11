const mobileNavFn = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");
  const mobileNav = document.querySelector(".mobile-nav");

  headerBtn.addEventListener("click", handleClick);
  mobileLinks.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });
  let isMenuOpen = false;

  function handleClick() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  }

  function handleLinkClick() {
    isMenuOpen = false;
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  }
};

export default mobileNavFn;
