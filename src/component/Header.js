import React from "react";

export default function Header() {
  return (
    <header
      class="header main-header default"
      role="banner"
      style="position: fixed;"
    >
      <div class="announcementBlock" style="display: block;">
        <div class="announcement-block">
          <p class="announcement-block-wrap">
            21 Days for a good habit, 60 days for good health!
          </p>

          <p>
            <a
              class="free-consultation-link-top-header"
              href="https://www.kapiva.in/login.php"
            >
              Get 5% cashback on all orders! Login NOW
            </a>
          </p>
        </div>
        <a href="javascript:void(0)" class="close-btn">
          X
        </a>
      </div>

      <div class="HeaderWrap">
        <a
          href="javascript:void(0)"
          class="mobileMenu-toggle"
          data-mobile-menu-toggle="menu"
          aria-controls="menu"
          aria-expanded="false"
        >
          <span class="mobileMenu-toggleIcon">Toggle menu</span>
        </a>
        <div class="HeaderLogo">
          <h1 class="header-logo header-logo--center">
            <a
              href="https://www.kapiva.in/"
              class="header-logo__link"
              data-header-logo-link=""
            >
              <div class="header-logo-image-container">
                <img
                  class="header-logo-image"
                  src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/images/stencil/250x100/subtract_1617795361__77099.original.png"
                  alt="Kapiva"
                  title="Kapiva"
                />
              </div>
            </a>
          </h1>
        </div>
        <div class="navPages-container desktop-hide" id="menu" data-menu="">
          <nav class="navPages mobile-nav">
            <button class="close-btn-menu" onclick="myFunctionbtn()">
              <span>X</span>
            </button>
            <ul class="navPages-list">
              <li class="navPages-item has-sub-nav">
                <a href="javascript:;">
                  Shop <i class="arrow"></i>
                </a>
                <div class="nav-wrap-list">
                  <div class="sub-nav-header">
                    <a href="javascript:;" class="back">
                      <i class="back-arrow"></i> Back
                    </a>
                  </div>
                  <ul class="sub-nav-list">
                    <li class="child-list has-sub-nav">
                      <a href="javascript:;" aria-label="All Solution">
                        Solution <i class="arrow"></i>
                      </a>
                      <div class="nav-wrap-list">
                        <div class="sub-nav-header">
                          <a href="javascript:;" class="back">
                            <i class="back-arrow move-up"></i>
                          </a>
                          <a href="https://www.kapiva.in/solution/">
                            {" "}
                            All Solution
                          </a>
                        </div>
                        <ul class="sub-nav-list">
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/solution/weight-management/"
                              aria-label="Weight Management"
                            >
                              Weight Management
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="/solution/mens-care/"
                              aria-label="Men's Health"
                            >
                              Men's Health
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/solution/skin/"
                              aria-label="Skin Care"
                            >
                              Skin Care
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/solution/lifestyle-diseases/"
                              aria-label="Lifestyle Diseases"
                            >
                              Lifestyle Diseases
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/solution/hair/"
                              aria-label="Hair Care"
                            >
                              Hair Care
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/solution/daily-wellness/"
                              aria-label="Daily Wellness"
                            >
                              Daily Wellness
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/womens-health/"
                              aria-label="Women's Health"
                            >
                              Women's Health
                            </a>
                          </li>

                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/skin-hair/"
                              aria-label="Skin &amp; Hair"
                            >
                              Skin &amp; Hair
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="child-list has-sub-nav">
                      <a href="javascript:;" aria-label="All Ingredients">
                        Ingredients <i class="arrow"></i>
                      </a>
                      <div class="nav-wrap-list">
                        <div class="sub-nav-header">
                          <a href="javascript:;" class="back">
                            <i class="back-arrow move-up"></i>
                          </a>
                          <a href="https://www.kapiva.in/ingredients/">
                            {" "}
                            All Ingredients
                          </a>
                        </div>
                        <ul class="sub-nav-list">
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/aloe-vera/"
                              aria-label="Aloe Vera"
                            >
                              Aloe Vera
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/amla/"
                              aria-label="Amla"
                            >
                              Amla
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/ashwagandha/"
                              aria-label="Ashwagandha"
                            >
                              Ashwagandha
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/brahmi/"
                              aria-label="Brahmi"
                            >
                              Brahmi
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/garcinia/"
                              aria-label="Garcinia"
                            >
                              Garcinia
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/giloy/"
                              aria-label="Giloy"
                            >
                              Giloy
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/moringa/"
                              aria-label="Moringa"
                            >
                              Moringa
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/noni/"
                              aria-label="Noni"
                            >
                              Noni
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/rose/"
                              aria-label="Rose"
                            >
                              Rose
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/shilajeet/"
                              aria-label="Shilajeet"
                            >
                              Shilajeet
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/spirulina/"
                              aria-label="Spirulina"
                            >
                              Spirulina
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/tulsi/"
                              aria-label="Tulsi"
                            >
                              Tulsi
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ingredients/turmeric/"
                              aria-label="Turmeric"
                            >
                              Turmeric
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/wheatgrass/"
                              aria-label="Wheatgrass"
                            >
                              Wheatgrass
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/plant-protein/"
                              aria-label="Plant Protein"
                            >
                              Plant Protein
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="child-list has-sub-nav">
                      <a href="javascript:;" aria-label="All Product">
                        Product <i class="arrow"></i>
                      </a>
                      <div class="nav-wrap-list">
                        <div class="sub-nav-header">
                          <a href="javascript:;" class="back">
                            <i class="back-arrow move-up"></i>
                          </a>
                          <a href="https://www.kapiva.in/product/">
                            {" "}
                            All Product
                          </a>
                        </div>
                        <ul class="sub-nav-list">
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/juices/"
                              aria-label="Juices"
                            >
                              Juices
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/slim-shakes/"
                              aria-label="Slim Shakes"
                            >
                              Slim Shakes
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/capsules/"
                              aria-label="Capsules"
                            >
                              Capsules
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/tea/"
                              aria-label="Tea"
                            >
                              Tea
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/breakfast-mix/"
                              aria-label="Breakfast Mix"
                            >
                              Breakfast Mix
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/effervescent-powders/"
                              aria-label="Effervescent Powders"
                            >
                              Effervescent Powders
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/gummies/"
                              aria-label="Gummies"
                            >
                              Gummies
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/ghee/"
                              aria-label="Ghee"
                            >
                              Ghee
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/honey/"
                              aria-label="Honey"
                            >
                              Honey
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/combos/"
                              aria-label="Combos"
                            >
                              Combos
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/product/vegan-protein/"
                              aria-label="Vegan Protein"
                            >
                              Vegan Protein
                            </a>
                          </li>
                          <li class="child-list">
                            <a
                              href="https://www.kapiva.in/oils/"
                              aria-label="Oils"
                            >
                              Oils
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="child-list has-sub-nav">
                      <a href="/solution/mens-care/">Men</a>
                    </li>
                    <li class="child-list has-sub-nav">
                      <a href="/solution/womens-care/">Women</a>
                    </li>
                    <li class="child-list has-sub-nav">
                      <a href="/product/combos/">Combos</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="navPages-item">
                <a
                  href="https://www.kapiva.in/consult-a-doctor/"
                  aria-label="Consult A Doctor"
                >
                  Consult A Doctor
                </a>
              </li>
              <li class="navPages-item">
                <a href="https://www.kapiva.in/blog/" aria-label="Blog">
                  Blog
                </a>
              </li>
              <li class="navPages-item">
                <a href="https://www.kapiva.in/about-us/" aria-label="About Us">
                  About Us
                </a>
              </li>
            </ul>
            <ul class="navPages-list navPages-list--user">
              <li class="navPages-item">
                <a
                  class="navPages-action"
                  href="/login.php"
                  aria-label="Sign in"
                >
                  Sign in
                </a>

                <a
                  class="navPages-action"
                  href="/login.php?action=create_account"
                  aria-label="Register"
                >
                  Register
                </a>
              </li>
            </ul>
          </nav>
          {/* <script>
function myFunctionbtn() {
  var element = document.getElementById("menu");
  element.classList.remove("is-open");
}
</script> */}
        </div>
        <div class="RighrtHeader-Wrap">
          <div class="HeaderSearch">
            <form class="form" action="/search.php">
              <fieldset class="form-fieldset">
                <div class="form-field">
                  <label class="is-srOnly" for="">
                    Search
                  </label>
                  <span class="search-mobile-img">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 13.7182L11.5755 10.3419C11.9917 9.8261 12.3246 9.22236 12.5743 8.53068C12.824 7.839 12.9489 7.11802 12.9489 6.36772C12.9489 5.48847 12.7765 4.66198 12.4316 3.88824C12.0987 3.11449 11.6379 2.44041 11.0493 1.86596C10.4608 1.29152 9.77408 0.834311 8.9893 0.494333C8.20451 0.166078 7.36623 0.00195312 6.47443 0.00195312C5.58263 0.00195312 4.74436 0.166078 3.95957 0.494333C3.17479 0.834311 2.48811 1.29152 1.89952 1.86596C1.31094 2.44041 0.85018 3.11449 0.517241 3.88824C0.172412 4.66198 0 5.48847 0 6.36772C0 7.2587 0.172412 8.09105 0.517241 8.86479C0.85018 9.63853 1.31094 10.3126 1.89952 10.8871C2.48811 11.4615 3.17479 11.9187 3.95957 12.2587C4.74436 12.5869 5.58263 12.7511 6.47443 12.7511C7.23544 12.7511 7.95481 12.628 8.63258 12.3818C9.31035 12.1356 9.9346 11.8073 10.5054 11.397L13.9298 14.7733C14.0131 14.8554 14.1052 14.914 14.2063 14.9492C14.3074 14.9844 14.3936 15.002 14.4649 15.002C14.5363 15.002 14.6225 14.9844 14.7235 14.9492C14.8246 14.914 14.9168 14.8554 15 14.7733C15.1546 14.6209 15.2319 14.4451 15.2319 14.2458C15.2319 14.0465 15.1546 13.8707 15 13.7182ZM1.53389 6.36772C1.53389 5.69949 1.65874 5.06643 1.90844 4.46854C2.17004 3.88237 2.52378 3.36655 2.96968 2.92106C3.41558 2.47557 3.94173 2.12974 4.54816 1.88355C5.14269 1.62563 5.78478 1.49668 6.47443 1.49668C7.16409 1.49668 7.80618 1.62563 8.40071 1.88355C9.00714 2.12974 9.53329 2.47557 9.97919 2.92106C10.4251 3.36655 10.7788 3.88237 11.0404 4.46854C11.2901 5.06643 11.415 5.69949 11.415 6.36772C11.415 7.04768 11.2901 7.68073 11.0404 8.2669C10.7907 8.85307 10.434 9.37475 9.97027 9.83197C9.51843 10.2775 8.99525 10.6262 8.40071 10.8783C7.80618 11.1303 7.16409 11.2563 6.47443 11.2563C5.78478 11.2563 5.14269 11.1274 4.54816 10.8695C3.94173 10.6116 3.41558 10.2628 2.96968 9.82317C2.52378 9.38355 2.17004 8.86479 1.90844 8.2669C1.65874 7.68073 1.53389 7.04768 1.53389 6.36772Z"></path>
                    </svg>
                  </span>
                  <div class="wizzy-search-form-mobile-wrapper"></div>
                  <input
                    class="form-input wizzy-search-input"
                    name="search_query_adv"
                    id="search_query_adv"
                    data-error-message="Search field cannot be empty."
                    placeholder="Product or Usage"
                  />
                  <button
                    class="navUser-action navUser-action--quickSearch search-btn"
                    type="submit"
                  >
                    <span>x</span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 13.7182L11.5755 10.3419C11.9917 9.8261 12.3246 9.22236 12.5743 8.53068C12.824 7.839 12.9489 7.11802 12.9489 6.36772C12.9489 5.48847 12.7765 4.66198 12.4316 3.88824C12.0987 3.11449 11.6379 2.44041 11.0493 1.86596C10.4608 1.29152 9.77408 0.834311 8.9893 0.494333C8.20451 0.166078 7.36623 0.00195312 6.47443 0.00195312C5.58263 0.00195312 4.74436 0.166078 3.95957 0.494333C3.17479 0.834311 2.48811 1.29152 1.89952 1.86596C1.31094 2.44041 0.85018 3.11449 0.517241 3.88824C0.172412 4.66198 0 5.48847 0 6.36772C0 7.2587 0.172412 8.09105 0.517241 8.86479C0.85018 9.63853 1.31094 10.3126 1.89952 10.8871C2.48811 11.4615 3.17479 11.9187 3.95957 12.2587C4.74436 12.5869 5.58263 12.7511 6.47443 12.7511C7.23544 12.7511 7.95481 12.628 8.63258 12.3818C9.31035 12.1356 9.9346 11.8073 10.5054 11.397L13.9298 14.7733C14.0131 14.8554 14.1052 14.914 14.2063 14.9492C14.3074 14.9844 14.3936 15.002 14.4649 15.002C14.5363 15.002 14.6225 14.9844 14.7235 14.9492C14.8246 14.914 14.9168 14.8554 15 14.7733C15.1546 14.6209 15.2319 14.4451 15.2319 14.2458C15.2319 14.0465 15.1546 13.8707 15 13.7182ZM1.53389 6.36772C1.53389 5.69949 1.65874 5.06643 1.90844 4.46854C2.17004 3.88237 2.52378 3.36655 2.96968 2.92106C3.41558 2.47557 3.94173 2.12974 4.54816 1.88355C5.14269 1.62563 5.78478 1.49668 6.47443 1.49668C7.16409 1.49668 7.80618 1.62563 8.40071 1.88355C9.00714 2.12974 9.53329 2.47557 9.97919 2.92106C10.4251 3.36655 10.7788 3.88237 11.0404 4.46854C11.2901 5.06643 11.415 5.69949 11.415 6.36772C11.415 7.04768 11.2901 7.68073 11.0404 8.2669C10.7907 8.85307 10.434 9.37475 9.97027 9.83197C9.51843 10.2775 8.99525 10.6262 8.40071 10.8783C7.80618 11.1303 7.16409 11.2563 6.47443 11.2563C5.78478 11.2563 5.14269 11.1274 4.54816 10.8695C3.94173 10.6116 3.41558 10.2628 2.96968 9.82317C2.52378 9.38355 2.17004 8.86479 1.90844 8.2669C1.65874 7.68073 1.53389 7.04768 1.53389 6.36772Z"></path>
                    </svg>
                  </button>
                </div>
              </fieldset>
            </form>
            <section
              class="quickSearchResults"
              data-bind="html: results"
            ></section>
            <p
              role="status"
              aria-live="polite"
              class="aria-description--hidden"
              data-search-aria-message-predefined-text="product results for"
            ></p>
          </div>
          <div class="header-search-suggestion">
            <ul>
              <li>
                <div class="search-suggestion">
                  <a href="/solution/skin/">
                    <div class="image">
                      <img
                        src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/skin_care.webp"
                        data-src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/skin_care.webp"
                        class="kapiva-curve small lazyloaded"
                        alt="skin"
                        width="25px"
                        height="25px"
                      />
                    </div>
                    <div class="search-text">
                      <span>Skin</span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div class="search-suggestion">
                  <a href="/solution/hair/">
                    <div class="image">
                      <img
                        src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/hair_care.webp"
                        data-src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/hair_care.webp"
                        class="kapiva-curve small lazyloaded"
                        alt="hair care"
                        width="25px"
                        height="25px"
                      />
                    </div>
                    <div class="search-text">
                      <span>hair Care</span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div class="search-suggestion">
                  <a href="/weight-management/">
                    <div class="image">
                      <img
                        src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/01weightmanagment.webp"
                        data-src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/01weightmanagment.webp"
                        class="kapiva-curve small lazyloaded"
                        alt="weight management"
                        width="25px"
                        height="25px"
                      />
                    </div>
                    <div class="search-text">
                      <span>WEIGHT MANAGEMENT</span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div class="search-suggestion">
                  <a href="/solution/sexual-wellness/">
                    <div class="image">
                      <img
                        src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/wellness.webp"
                        data-src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/images/Homepage/wellness.webp"
                        class="kapiva-curve small lazyloaded"
                        alt="sexual wellness"
                        width="25px"
                        height="25px"
                      />
                    </div>
                    <div class="search-text">
                      <span>Sexual Wellness</span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div class="NavLinks">
            <nav class="navUser">
              <ul class="navUser-section navUser-section--alt">
                <li class="navUser-item">
                  <a
                    class="navUser-action navUser-item--compare"
                    href="/compare"
                    data-compare-nav=""
                    aria-label="Compare"
                  >
                    Compare{" "}
                    <span class="countPill countPill--positive countPill--alt"></span>
                  </a>
                </li>
                <li class="navUser-item search">
                  <form class="form" action="/search.php">
                    <fieldset class="form-fieldset">
                      <div class="form-field">
                        <label class="is-srOnly" for="nav-quick-search">
                          Search
                        </label>
                        <span class="search-mobile-img">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15 13.7182L11.5755 10.3419C11.9917 9.8261 12.3246 9.22236 12.5743 8.53068C12.824 7.839 12.9489 7.11802 12.9489 6.36772C12.9489 5.48847 12.7765 4.66198 12.4316 3.88824C12.0987 3.11449 11.6379 2.44041 11.0493 1.86596C10.4608 1.29152 9.77408 0.834311 8.9893 0.494333C8.20451 0.166078 7.36623 0.00195312 6.47443 0.00195312C5.58263 0.00195312 4.74436 0.166078 3.95957 0.494333C3.17479 0.834311 2.48811 1.29152 1.89952 1.86596C1.31094 2.44041 0.85018 3.11449 0.517241 3.88824C0.172412 4.66198 0 5.48847 0 6.36772C0 7.2587 0.172412 8.09105 0.517241 8.86479C0.85018 9.63853 1.31094 10.3126 1.89952 10.8871C2.48811 11.4615 3.17479 11.9187 3.95957 12.2587C4.74436 12.5869 5.58263 12.7511 6.47443 12.7511C7.23544 12.7511 7.95481 12.628 8.63258 12.3818C9.31035 12.1356 9.9346 11.8073 10.5054 11.397L13.9298 14.7733C14.0131 14.8554 14.1052 14.914 14.2063 14.9492C14.3074 14.9844 14.3936 15.002 14.4649 15.002C14.5363 15.002 14.6225 14.9844 14.7235 14.9492C14.8246 14.914 14.9168 14.8554 15 14.7733C15.1546 14.6209 15.2319 14.4451 15.2319 14.2458C15.2319 14.0465 15.1546 13.8707 15 13.7182ZM1.53389 6.36772C1.53389 5.69949 1.65874 5.06643 1.90844 4.46854C2.17004 3.88237 2.52378 3.36655 2.96968 2.92106C3.41558 2.47557 3.94173 2.12974 4.54816 1.88355C5.14269 1.62563 5.78478 1.49668 6.47443 1.49668C7.16409 1.49668 7.80618 1.62563 8.40071 1.88355C9.00714 2.12974 9.53329 2.47557 9.97919 2.92106C10.4251 3.36655 10.7788 3.88237 11.0404 4.46854C11.2901 5.06643 11.415 5.69949 11.415 6.36772C11.415 7.04768 11.2901 7.68073 11.0404 8.2669C10.7907 8.85307 10.434 9.37475 9.97027 9.83197C9.51843 10.2775 8.99525 10.6262 8.40071 10.8783C7.80618 11.1303 7.16409 11.2563 6.47443 11.2563C5.78478 11.2563 5.14269 11.1274 4.54816 10.8695C3.94173 10.6116 3.41558 10.2628 2.96968 9.82317C2.52378 9.38355 2.17004 8.86479 1.90844 8.2669C1.65874 7.68073 1.53389 7.04768 1.53389 6.36772Z"></path>
                          </svg>
                        </span>
                        <div class="wizzy-search-form-mobile-wrapper"></div>
                        <input
                          class="form-input wizzy-search-input"
                          name="search_query_adv"
                          id="search_query_adv"
                          data-error-message="Search field cannot be empty."
                          placeholder="Product or Usage"
                        />
                        <button
                          class="navUser-action navUser-action--quickSearch search-btn"
                          type="submit"
                        >
                          <span>x</span>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15 13.7182L11.5755 10.3419C11.9917 9.8261 12.3246 9.22236 12.5743 8.53068C12.824 7.839 12.9489 7.11802 12.9489 6.36772C12.9489 5.48847 12.7765 4.66198 12.4316 3.88824C12.0987 3.11449 11.6379 2.44041 11.0493 1.86596C10.4608 1.29152 9.77408 0.834311 8.9893 0.494333C8.20451 0.166078 7.36623 0.00195312 6.47443 0.00195312C5.58263 0.00195312 4.74436 0.166078 3.95957 0.494333C3.17479 0.834311 2.48811 1.29152 1.89952 1.86596C1.31094 2.44041 0.85018 3.11449 0.517241 3.88824C0.172412 4.66198 0 5.48847 0 6.36772C0 7.2587 0.172412 8.09105 0.517241 8.86479C0.85018 9.63853 1.31094 10.3126 1.89952 10.8871C2.48811 11.4615 3.17479 11.9187 3.95957 12.2587C4.74436 12.5869 5.58263 12.7511 6.47443 12.7511C7.23544 12.7511 7.95481 12.628 8.63258 12.3818C9.31035 12.1356 9.9346 11.8073 10.5054 11.397L13.9298 14.7733C14.0131 14.8554 14.1052 14.914 14.2063 14.9492C14.3074 14.9844 14.3936 15.002 14.4649 15.002C14.5363 15.002 14.6225 14.9844 14.7235 14.9492C14.8246 14.914 14.9168 14.8554 15 14.7733C15.1546 14.6209 15.2319 14.4451 15.2319 14.2458C15.2319 14.0465 15.1546 13.8707 15 13.7182ZM1.53389 6.36772C1.53389 5.69949 1.65874 5.06643 1.90844 4.46854C2.17004 3.88237 2.52378 3.36655 2.96968 2.92106C3.41558 2.47557 3.94173 2.12974 4.54816 1.88355C5.14269 1.62563 5.78478 1.49668 6.47443 1.49668C7.16409 1.49668 7.80618 1.62563 8.40071 1.88355C9.00714 2.12974 9.53329 2.47557 9.97919 2.92106C10.4251 3.36655 10.7788 3.88237 11.0404 4.46854C11.2901 5.06643 11.415 5.69949 11.415 6.36772C11.415 7.04768 11.2901 7.68073 11.0404 8.2669C10.7907 8.85307 10.434 9.37475 9.97027 9.83197C9.51843 10.2775 8.99525 10.6262 8.40071 10.8783C7.80618 11.1303 7.16409 11.2563 6.47443 11.2563C5.78478 11.2563 5.14269 11.1274 4.54816 10.8695C3.94173 10.6116 3.41558 10.2628 2.96968 9.82317C2.52378 9.38355 2.17004 8.86479 1.90844 8.2669C1.65874 7.68073 1.53389 7.04768 1.53389 6.36772Z"></path>
                          </svg>
                        </button>
                      </div>
                    </fieldset>
                  </form>
                  <section
                    class="quickSearchResults"
                    data-bind="html: results"
                  ></section>
                  <p
                    role="status"
                    aria-live="polite"
                    class="aria-description--hidden"
                    data-search-aria-message-predefined-text="product results for"
                  ></p>
                </li>
                <li class="navUser-item">
                  <a href="/track-order/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26.08 18.923"
                    >
                      <g id="truck_icon" transform="translate(-332.92 -62.421)">
                        <path
                          id="Path_24"
                          data-name="Path 24"
                          d="M335.156,79.56c-.495,0-.961,0-1.426,0-.724,0-.808-.085-.809-.806q0-5.043,0-10.088,0-2.7,0-5.409c0-.723.094-.827.789-.827q7.749,0,15.5-.008c.561,0,.8.192.794.783-.026,1.517-.009,3.034-.009,4.622.249.012.462.031.676.032,1.478,0,2.958-.021,4.436.02a1.277,1.277,0,0,1,.846.415c.952,1.157,1.865,2.346,2.765,3.544a1.392,1.392,0,0,1,.265.768c.021,2.066,0,4.132.019,6.2.005.547-.2.793-.748.76-.282-.017-.568.015-.85-.007-.665-.051-1.171,0-1.512.773a1.876,1.876,0,0,1-1.994,1,2.27,2.27,0,0,1-2.059-1.748c-.174-.009-.353-.025-.532-.025q-5.561,0-11.122,0c-.266,0-.537-.081-.683.312a2.1,2.1,0,0,1-2.153,1.466,2.167,2.167,0,0,1-2.106-1.634A.857.857,0,0,0,335.156,79.56Zm-1.331-.954c.168.015.268.022.368.032.588.059,1.023.013,1.318-.686a1.921,1.921,0,0,1,2.008-1.091,2.045,2.045,0,0,1,1.9,1.284.731.731,0,0,0,.821.5c2.735-.014,5.47-.007,8.205-.009.211,0,.423-.023.634-.035V63.408H333.825Zm16.2.031c.551,0,1.037.026,1.517-.016a.62.62,0,0,0,.4-.332,2.278,2.278,0,0,1,4.219-.019.638.638,0,0,0,.395.35c.5.043,1,.017,1.514.017V73.283h-8.047Zm7.935-6.313c-.93-1.2-1.781-2.3-2.645-3.394a.518.518,0,0,0-.348-.184c-1.635-.012-3.27-.008-4.934-.008v3.586Zm-3.894,8.1a1.338,1.338,0,0,0,1.337-1.353,1.374,1.374,0,0,0-1.322-1.32,1.352,1.352,0,0,0-1.359,1.337A1.316,1.316,0,0,0,354.063,80.424Zm-16.669,0a1.34,1.34,0,0,0,1.362-1.33,1.376,1.376,0,0,0-1.363-1.345,1.33,1.33,0,0,0-1.309,1.316A1.3,1.3,0,0,0,337.394,80.424Z"
                        />
                        <path
                          id="Path_25"
                          data-name="Path 25"
                          d="M335.62,65.152a6.124,6.124,0,0,1-.021,1.2c-.045.214-.3.382-.464.571-.143-.184-.386-.356-.41-.555a12.477,12.477,0,0,1-.02-1.511.552.552,0,0,1,.633-.627c1.07,0,2.14,0,3.21,0,.33,0,.675.082.605.474a.769.769,0,0,1-.582.424c-.743.053-1.492.021-2.239.022Z"
                        />
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M341.2,64.681c-.3.22-.479.446-.607.42a.672.672,0,0,1-.44-.412c-.027-.106.235-.4.376-.405C340.7,64.276,340.879,64.48,341.2,64.681Z"
                        />
                        <path
                          id="Path_27"
                          data-name="Path 27"
                          d="M351.82,70.559c-.01.166.023.308-.033.39a4.3,4.3,0,0,1-.432.476,2.551,2.551,0,0,1-.42-.48,1.105,1.105,0,0,1-.016-.476c0-.749.074-.82.828-.828a3.09,3.09,0,0,1,.84.021c.206.058.368.273.55.419a2.411,2.411,0,0,1-.579.461A2.265,2.265,0,0,1,351.82,70.559Z"
                        />
                        <path
                          id="Path_28"
                          data-name="Path 28"
                          d="M355.142,70.121c-.308.193-.491.394-.665.387-.137-.005-.392-.3-.366-.408a.647.647,0,0,1,.435-.406C354.68,69.673,354.854,69.9,355.142,70.121Z"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li class="navUser-item navUser-item--account">
                  <a
                    class="navUser-action"
                    href="/login.php"
                    aria-label="Sign in"
                  >
                    Login
                  </a>
                </li>
                <li
                  id="MobileSearchIcon"
                  class="navUser-item MobileSearch-Icon"
                >
                  <a class="navUser-action" href="javascript:void(0);">
                    <svg
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 13.7163L11.5755 10.34C11.9917 9.82415 12.3246 9.2204 12.5743 8.52872C12.824 7.83704 12.9489 7.11607 12.9489 6.36577C12.9489 5.48651 12.7765 4.66003 12.4316 3.88628C12.0987 3.11254 11.6379 2.43846 11.0493 1.86401C10.4608 1.28956 9.77408 0.832358 8.9893 0.49238C8.20451 0.164125 7.36623 0 6.47443 0C5.58263 0 4.74436 0.164125 3.95957 0.49238C3.17479 0.832358 2.48811 1.28956 1.89952 1.86401C1.31094 2.43846 0.85018 3.11254 0.517241 3.88628C0.172412 4.66003 0 5.48651 0 6.36577C0 7.25675 0.172412 8.08909 0.517241 8.86284C0.85018 9.63658 1.31094 10.3107 1.89952 10.8851C2.48811 11.4596 3.17479 11.9168 3.95957 12.2567C4.74436 12.585 5.58263 12.7491 6.47443 12.7491C7.23544 12.7491 7.95481 12.626 8.63258 12.3798C9.31035 12.1336 9.9346 11.8054 10.5054 11.3951L13.9298 14.7714C14.0131 14.8535 14.1052 14.9121 14.2063 14.9472C14.3074 14.9824 14.3936 15 14.4649 15C14.5363 15 14.6225 14.9824 14.7235 14.9472C14.8246 14.9121 14.9168 14.8535 15 14.7714C15.1546 14.619 15.2319 14.4431 15.2319 14.2438C15.2319 14.0445 15.1546 13.8687 15 13.7163ZM1.53389 6.36577C1.53389 5.69754 1.65874 5.06448 1.90844 4.46659C2.17004 3.88042 2.52378 3.3646 2.96968 2.91911C3.41558 2.47362 3.94173 2.12779 4.54816 1.88159C5.14269 1.62368 5.78478 1.49472 6.47443 1.49472C7.16409 1.49472 7.80618 1.62368 8.40071 1.88159C9.00714 2.12779 9.53329 2.47362 9.97919 2.91911C10.4251 3.3646 10.7788 3.88042 11.0404 4.46659C11.2901 5.06448 11.415 5.69754 11.415 6.36577C11.415 7.04572 11.2901 7.67878 11.0404 8.26495C10.7907 8.85112 10.434 9.3728 9.97027 9.83001C9.51843 10.2755 8.99525 10.6243 8.40071 10.8763C7.80618 11.1284 7.16409 11.2544 6.47443 11.2544C5.78478 11.2544 5.14269 11.1254 4.54816 10.8675C3.94173 10.6096 3.41558 10.2608 2.96968 9.82122C2.52378 9.38159 2.17004 8.86284 1.90844 8.26495C1.65874 7.67878 1.53389 7.04572 1.53389 6.36577Z"></path>
                    </svg>
                  </a>
                </li>
                <li class="navUser-item MobileWish-Icon">
                  <a class="navUser-action" href="/wishlist.php">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.0005 19.0001C9.35551 18.4281 8.62651 17.8331 7.85551 17.2001H7.84551C5.13051 14.9801 2.05351 12.4681 0.694511 9.45815C0.248029 8.49987 0.0114151 7.45727 0.000499687 6.40015C-0.00248211 4.94963 0.579282 3.55913 1.61432 2.54292C2.64936 1.5267 4.0503 0.970542 5.50051 1.00015C6.68114 1.00201 7.83635 1.34323 8.82851 1.98315C9.26448 2.26612 9.65893 2.6084 10.0005 3.00015C10.344 2.60994 10.7386 2.26786 11.1735 1.98315C12.1652 1.3431 13.3202 1.00187 14.5005 1.00015C15.9507 0.970542 17.3517 1.5267 18.3867 2.54292C19.4217 3.55913 20.0035 4.94963 20.0005 6.40015C19.9903 7.45896 19.7537 8.50334 19.3065 9.46315C17.9475 12.4731 14.8715 14.9841 12.1565 17.2001L12.1465 17.2081C11.3745 17.8371 10.6465 18.4321 10.0015 19.0081L10.0005 19.0001ZM5.50051 3.00015C4.56902 2.98849 3.67058 3.34499 3.00051 3.99215C2.3549 4.62631 1.99407 5.49519 2.00043 6.40015C2.01184 7.17065 2.18634 7.93 2.51251 8.62815C3.15402 9.92685 4.01962 11.1022 5.06951 12.1001C6.06051 13.1001 7.20051 14.0681 8.18651 14.8821C8.45951 15.1071 8.73751 15.3341 9.01551 15.5611L9.19051 15.7041C9.45751 15.9221 9.73351 16.1481 10.0005 16.3701L10.0135 16.3581L10.0195 16.3531H10.0255L10.0345 16.3461H10.0395H10.0445L10.0625 16.3311L10.1035 16.2981L10.1105 16.2921L10.1215 16.2841H10.1275L10.1365 16.2761L10.8005 15.7311L10.9745 15.5881C11.2555 15.3591 11.5335 15.1321 11.8065 14.9071C12.7925 14.0931 13.9335 13.1261 14.9245 12.1211C15.9745 11.1237 16.8402 9.94866 17.4815 8.65015C17.8136 7.94595 17.9906 7.17865 18.0005 6.40015C18.0047 5.49799 17.644 4.63244 17.0005 4.00015C16.3317 3.35007 15.4331 2.99063 14.5005 3.00015C13.3624 2.99048 12.2744 3.46752 11.5105 4.31115L10.0005 6.05115L8.49051 4.31115C7.72657 3.46752 6.63859 2.99048 5.50051 3.00015Z" />
                    </svg>
                  </a>
                </li>
                <li class="navUser-item MobileWish-Icon track-order">
                  <a href="/track-order/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26.08 18.923"
                    >
                      <g id="truck_icon" transform="translate(-332.92 -62.421)">
                        <path
                          id="Path_24"
                          data-name="Path 24"
                          d="M335.156,79.56c-.495,0-.961,0-1.426,0-.724,0-.808-.085-.809-.806q0-5.043,0-10.088,0-2.7,0-5.409c0-.723.094-.827.789-.827q7.749,0,15.5-.008c.561,0,.8.192.794.783-.026,1.517-.009,3.034-.009,4.622.249.012.462.031.676.032,1.478,0,2.958-.021,4.436.02a1.277,1.277,0,0,1,.846.415c.952,1.157,1.865,2.346,2.765,3.544a1.392,1.392,0,0,1,.265.768c.021,2.066,0,4.132.019,6.2.005.547-.2.793-.748.76-.282-.017-.568.015-.85-.007-.665-.051-1.171,0-1.512.773a1.876,1.876,0,0,1-1.994,1,2.27,2.27,0,0,1-2.059-1.748c-.174-.009-.353-.025-.532-.025q-5.561,0-11.122,0c-.266,0-.537-.081-.683.312a2.1,2.1,0,0,1-2.153,1.466,2.167,2.167,0,0,1-2.106-1.634A.857.857,0,0,0,335.156,79.56Zm-1.331-.954c.168.015.268.022.368.032.588.059,1.023.013,1.318-.686a1.921,1.921,0,0,1,2.008-1.091,2.045,2.045,0,0,1,1.9,1.284.731.731,0,0,0,.821.5c2.735-.014,5.47-.007,8.205-.009.211,0,.423-.023.634-.035V63.408H333.825Zm16.2.031c.551,0,1.037.026,1.517-.016a.62.62,0,0,0,.4-.332,2.278,2.278,0,0,1,4.219-.019.638.638,0,0,0,.395.35c.5.043,1,.017,1.514.017V73.283h-8.047Zm7.935-6.313c-.93-1.2-1.781-2.3-2.645-3.394a.518.518,0,0,0-.348-.184c-1.635-.012-3.27-.008-4.934-.008v3.586Zm-3.894,8.1a1.338,1.338,0,0,0,1.337-1.353,1.374,1.374,0,0,0-1.322-1.32,1.352,1.352,0,0,0-1.359,1.337A1.316,1.316,0,0,0,354.063,80.424Zm-16.669,0a1.34,1.34,0,0,0,1.362-1.33,1.376,1.376,0,0,0-1.363-1.345,1.33,1.33,0,0,0-1.309,1.316A1.3,1.3,0,0,0,337.394,80.424Z"
                        ></path>
                        <path
                          id="Path_25"
                          data-name="Path 25"
                          d="M335.62,65.152a6.124,6.124,0,0,1-.021,1.2c-.045.214-.3.382-.464.571-.143-.184-.386-.356-.41-.555a12.477,12.477,0,0,1-.02-1.511.552.552,0,0,1,.633-.627c1.07,0,2.14,0,3.21,0,.33,0,.675.082.605.474a.769.769,0,0,1-.582.424c-.743.053-1.492.021-2.239.022Z"
                        ></path>
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M341.2,64.681c-.3.22-.479.446-.607.42a.672.672,0,0,1-.44-.412c-.027-.106.235-.4.376-.405C340.7,64.276,340.879,64.48,341.2,64.681Z"
                        ></path>
                        <path
                          id="Path_27"
                          data-name="Path 27"
                          d="M351.82,70.559c-.01.166.023.308-.033.39a4.3,4.3,0,0,1-.432.476,2.551,2.551,0,0,1-.42-.48,1.105,1.105,0,0,1-.016-.476c0-.749.074-.82.828-.828a3.09,3.09,0,0,1,.84.021c.206.058.368.273.55.419a2.411,2.411,0,0,1-.579.461A2.265,2.265,0,0,1,351.82,70.559Z"
                        ></path>
                        <path
                          id="Path_28"
                          data-name="Path 28"
                          d="M355.142,70.121c-.308.193-.491.394-.665.387-.137-.005-.392-.3-.366-.408a.647.647,0,0,1,.435-.406C354.68,69.673,354.854,69.9,355.142,70.121Z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li class="navUser-item navUser-item--cart">
                  <a
                    class="navUser-action"
                    data-cart-preview=""
                    data-dropdown="cart-preview-dropdown"
                    data-options="align:right"
                    href="/cart.php"
                    aria-label="Cart with 2 items"
                  >
                    <div class="cart-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20.866 18.55"
                      >
                        <path
                          id="cart_icon"
                          d="M370.632,63.272c-.931,0-1.81,0-2.69,0-.156,0-.349.034-.46-.043-.17-.117-.4-.328-.387-.477a.633.633,0,0,1,.457-.406c.593-.051,1.194-.021,1.792-.022.5,0,1.007.014,1.51,0a.581.581,0,0,1,.689.585c.138,1.121.3,2.239.457,3.416h15.107c.867,0,1.011.206.711,1.02q-1.7,4.619-3.407,9.237a3.537,3.537,0,0,0-.143.589.484.484,0,0,0,.324.582,1.616,1.616,0,0,1,.838,1.869,1.674,1.674,0,0,1-3.231.023,1.686,1.686,0,0,1,.806-1.9,2.179,2.179,0,0,0,.32-.29,1.643,1.643,0,0,0-.45-.135q-4.531-.012-9.064,0a1.6,1.6,0,0,0-.412.116,1.621,1.621,0,0,0,.3.293,1.65,1.65,0,0,1,.842,1.871,1.625,1.625,0,0,1-1.607,1.269,1.65,1.65,0,0,1-1.616-1.205,1.625,1.625,0,0,1,.833-1.915.473.473,0,0,0,.3-.546c-.147-1.217-.282-2.434-.442-3.649q-.629-4.791-1.275-9.579C370.709,63.754,370.672,63.538,370.632,63.272ZM386.824,67.3H372.137l.1.8h9.988c.141,0,.316-.048.417.017.164.106.383.282.389.435s-.2.355-.355.462c-.111.075-.3.033-.461.033h-9.861c.309,2.3.627,4.522.892,6.752.058.481.229.571.669.568q4.508-.027,9.015,0a.675.675,0,0,0,.762-.549c.689-1.937,1.418-3.861,2.13-5.79C386.156,69.136,386.481,68.24,386.824,67.3ZM373.662,79.213a.738.738,0,0,0-1.475-.031.738.738,0,0,0,1.475.031Zm10.877-.025a.725.725,0,1,0-1.45.041.7.7,0,0,0,.744.685A.709.709,0,0,0,384.539,79.188Z"
                          transform="translate(-367.094 -62.314)"
                        ></path>
                      </svg>
                      <span class="countPill cart-quantity countPill--positive">
                        2
                      </span>
                    </div>
                  </a>

                  <div
                    class="dropdown-menu"
                    id="cart-preview-dropdown"
                    data-dropdown-content=""
                    aria-hidden="true"
                  ></div>
                </li>
              </ul>
              <div
                class="dropdown dropdown--quickSearch"
                id="quickSearch"
                aria-hidden="true"
                data-prevent-quick-search-close=""
              >
                <form class="form" action="/search.php">
                  <fieldset class="form-fieldset">
                    <div class="form-field">
                      <label class="is-srOnly" for="nav-quick-search">
                        Search
                      </label>
                      <span class="search-mobile-img">
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15 13.7182L11.5755 10.3419C11.9917 9.8261 12.3246 9.22236 12.5743 8.53068C12.824 7.839 12.9489 7.11802 12.9489 6.36772C12.9489 5.48847 12.7765 4.66198 12.4316 3.88824C12.0987 3.11449 11.6379 2.44041 11.0493 1.86596C10.4608 1.29152 9.77408 0.834311 8.9893 0.494333C8.20451 0.166078 7.36623 0.00195312 6.47443 0.00195312C5.58263 0.00195312 4.74436 0.166078 3.95957 0.494333C3.17479 0.834311 2.48811 1.29152 1.89952 1.86596C1.31094 2.44041 0.85018 3.11449 0.517241 3.88824C0.172412 4.66198 0 5.48847 0 6.36772C0 7.2587 0.172412 8.09105 0.517241 8.86479C0.85018 9.63853 1.31094 10.3126 1.89952 10.8871C2.48811 11.4615 3.17479 11.9187 3.95957 12.2587C4.74436 12.5869 5.58263 12.7511 6.47443 12.7511C7.23544 12.7511 7.95481 12.628 8.63258 12.3818C9.31035 12.1356 9.9346 11.8073 10.5054 11.397L13.9298 14.7733C14.0131 14.8554 14.1052 14.914 14.2063 14.9492C14.3074 14.9844 14.3936 15.002 14.4649 15.002C14.5363 15.002 14.6225 14.9844 14.7235 14.9492C14.8246 14.914 14.9168 14.8554 15 14.7733C15.1546 14.6209 15.2319 14.4451 15.2319 14.2458C15.2319 14.0465 15.1546 13.8707 15 13.7182ZM1.53389 6.36772C1.53389 5.69949 1.65874 5.06643 1.90844 4.46854C2.17004 3.88237 2.52378 3.36655 2.96968 2.92106C3.41558 2.47557 3.94173 2.12974 4.54816 1.88355C5.14269 1.62563 5.78478 1.49668 6.47443 1.49668C7.16409 1.49668 7.80618 1.62563 8.40071 1.88355C9.00714 2.12974 9.53329 2.47557 9.97919 2.92106C10.4251 3.36655 10.7788 3.88237 11.0404 4.46854C11.2901 5.06643 11.415 5.69949 11.415 6.36772C11.415 7.04768 11.2901 7.68073 11.0404 8.2669C10.7907 8.85307 10.434 9.37475 9.97027 9.83197C9.51843 10.2775 8.99525 10.6262 8.40071 10.8783C7.80618 11.1303 7.16409 11.2563 6.47443 11.2563C5.78478 11.2563 5.14269 11.1274 4.54816 10.8695C3.94173 10.6116 3.41558 10.2628 2.96968 9.82317C2.52378 9.38355 2.17004 8.86479 1.90844 8.2669C1.65874 7.68073 1.53389 7.04768 1.53389 6.36772Z"></path>
                        </svg>
                      </span>
                      <div class="wizzy-search-form-mobile-wrapper"></div>
                      <input
                        class="form-input wizzy-search-input"
                        name="search_query_adv"
                        id="search_query_adv"
                        data-error-message="Search field cannot be empty."
                        placeholder="Product or Usage"
                      />
                      <button
                        class="navUser-action navUser-action--quickSearch search-btn"
                        type="submit"
                      >
                        <span>x</span>
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15 13.7182L11.5755 10.3419C11.9917 9.8261 12.3246 9.22236 12.5743 8.53068C12.824 7.839 12.9489 7.11802 12.9489 6.36772C12.9489 5.48847 12.7765 4.66198 12.4316 3.88824C12.0987 3.11449 11.6379 2.44041 11.0493 1.86596C10.4608 1.29152 9.77408 0.834311 8.9893 0.494333C8.20451 0.166078 7.36623 0.00195312 6.47443 0.00195312C5.58263 0.00195312 4.74436 0.166078 3.95957 0.494333C3.17479 0.834311 2.48811 1.29152 1.89952 1.86596C1.31094 2.44041 0.85018 3.11449 0.517241 3.88824C0.172412 4.66198 0 5.48847 0 6.36772C0 7.2587 0.172412 8.09105 0.517241 8.86479C0.85018 9.63853 1.31094 10.3126 1.89952 10.8871C2.48811 11.4615 3.17479 11.9187 3.95957 12.2587C4.74436 12.5869 5.58263 12.7511 6.47443 12.7511C7.23544 12.7511 7.95481 12.628 8.63258 12.3818C9.31035 12.1356 9.9346 11.8073 10.5054 11.397L13.9298 14.7733C14.0131 14.8554 14.1052 14.914 14.2063 14.9492C14.3074 14.9844 14.3936 15.002 14.4649 15.002C14.5363 15.002 14.6225 14.9844 14.7235 14.9492C14.8246 14.914 14.9168 14.8554 15 14.7733C15.1546 14.6209 15.2319 14.4451 15.2319 14.2458C15.2319 14.0465 15.1546 13.8707 15 13.7182ZM1.53389 6.36772C1.53389 5.69949 1.65874 5.06643 1.90844 4.46854C2.17004 3.88237 2.52378 3.36655 2.96968 2.92106C3.41558 2.47557 3.94173 2.12974 4.54816 1.88355C5.14269 1.62563 5.78478 1.49668 6.47443 1.49668C7.16409 1.49668 7.80618 1.62563 8.40071 1.88355C9.00714 2.12974 9.53329 2.47557 9.97919 2.92106C10.4251 3.36655 10.7788 3.88237 11.0404 4.46854C11.2901 5.06643 11.415 5.69949 11.415 6.36772C11.415 7.04768 11.2901 7.68073 11.0404 8.2669C10.7907 8.85307 10.434 9.37475 9.97027 9.83197C9.51843 10.2775 8.99525 10.6262 8.40071 10.8783C7.80618 11.1303 7.16409 11.2563 6.47443 11.2563C5.78478 11.2563 5.14269 11.1274 4.54816 10.8695C3.94173 10.6116 3.41558 10.2628 2.96968 9.82317C2.52378 9.38355 2.17004 8.86479 1.90844 8.2669C1.65874 7.68073 1.53389 7.04768 1.53389 6.36772Z"></path>
                        </svg>
                      </button>
                    </div>
                  </fieldset>
                </form>
                <section
                  class="quickSearchResults"
                  data-bind="html: results"
                ></section>
                <p
                  role="status"
                  aria-live="polite"
                  class="aria-description--hidden"
                  data-search-aria-message-predefined-text="product results for"
                ></p>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="navPage-subMenu"
        id="navPages-shopMenu"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="megaMenu_custom">
          <div class="box menu_left">
            <ul class="navPage-subMenu-list">
              <li class="navPage-subMenu-item">
                <a
                  class="navPage-subMenu-action navPages-action"
                  href="https://www.kapiva.in/solution/"
                  aria-label="All Solution"
                >
                  Solution
                </a>
                <ul class="navPage-childList">
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/weight-management/"
                      aria-label="Weight Management"
                    >
                      Weight Management
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/mens-health/"
                      aria-label="Men's Health"
                    >
                      Men's Health
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/skin/"
                      aria-label="Skin Care"
                    >
                      Skin Care
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/lifestyle-diseases/"
                      aria-label="Lifestyle Diseases"
                    >
                      Lifestyle Diseases
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/hair/"
                      aria-label="Hair Care"
                    >
                      Hair Care
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/daily-wellness/"
                      aria-label="Daily Wellness"
                    >
                      Daily Wellness
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/womens-health/"
                      aria-label="Women's Health"
                    >
                      Women's Health
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/mens-care/"
                      aria-label="Men's - Care"
                    >
                      Men's - Care
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/sexual-wellness/"
                      aria-label="Sexual Wellness"
                    >
                      Sexual Wellness
                    </a>
                  </li>
                  <a
                    class="navPage-childList-action navPages-action"
                    href="/weight-management/"
                    aria-label="Weight Loss"
                  >
                    Weight Loss
                  </a>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/womens-care/"
                      aria-label="Women's Care"
                    >
                      Women's Care
                    </a>
                  </li>
                  <a
                    class="navPage-childList-action navPages-action"
                    href="/digestion-page/"
                    aria-label="Digestion"
                  >
                    Digestion
                  </a>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/daily-diet/"
                      aria-label="Daily Diet"
                    >
                      Daily Diet
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/immunity/"
                      aria-label="Immunity"
                    >
                      Immunity
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/solution/diabetes/"
                      aria-label="Diabetes"
                    >
                      Diabetes
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/skin-hair/"
                      aria-label="Skin &amp; Hair"
                    >
                      Skin &amp; Hair
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/blood-pressure/"
                      aria-label="Blood Pressure"
                    >
                      Blood Pressure
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="navPage-subMenu-item inner-li">
                    <a
                      class="navPage-subMenu-action navPages-action"
                      href="/solution/mens-care/"
                    >
                      Men
                    </a>
                  </li>
                  <li class="navPage-subMenu-item inner-li">
                    <a
                      class="navPage-subMenu-action navPages-action"
                      href="/solution/womens-care/"
                    >
                      Women
                    </a>
                  </li>
                  <li class="navPage-subMenu-item inner-li">
                    <a
                      class="navPage-subMenu-action navPages-action"
                      href="/product/combos/"
                    >
                      Combos
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navPage-subMenu-item">
                <a
                  class="navPage-subMenu-action navPages-action"
                  href="https://www.kapiva.in/ingredients/"
                  aria-label="All Ingredients"
                >
                  Ingredients
                </a>
                <ul class="navPage-childList">
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/aloe-vera/"
                      aria-label="Aloe Vera"
                    >
                      Aloe Vera
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/amla/"
                      aria-label="Amla"
                    >
                      Amla
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/ashwagandha/"
                      aria-label="Ashwagandha"
                    >
                      Ashwagandha
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/brahmi/"
                      aria-label="Brahmi"
                    >
                      Brahmi
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/garcinia/"
                      aria-label="Garcinia"
                    >
                      Garcinia
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/giloy/"
                      aria-label="Giloy"
                    >
                      Giloy
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/moringa/"
                      aria-label="Moringa"
                    >
                      Moringa
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/noni/"
                      aria-label="Noni"
                    >
                      Noni
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/rose/"
                      aria-label="Rose"
                    >
                      Rose
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/shilajeet/"
                      aria-label="Shilajeet"
                    >
                      Shilajeet
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/spirulina/"
                      aria-label="Spirulina"
                    >
                      Spirulina
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/tulsi/"
                      aria-label="Tulsi"
                    >
                      Tulsi
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ingredients/turmeric/"
                      aria-label="Turmeric"
                    >
                      Turmeric
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/wheatgrass/"
                      aria-label="Wheatgrass"
                    >
                      Wheatgrass
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/plant-protein/"
                      aria-label="Plant Protein"
                    >
                      Plant Protein
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navPage-subMenu-item">
                <a
                  class="navPage-subMenu-action navPages-action"
                  href="https://www.kapiva.in/product/"
                  aria-label="All Product"
                >
                  Product
                </a>
                <ul class="navPage-childList">
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/juices/"
                      aria-label="Juices"
                    >
                      Juices
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/slim-shakes/"
                      aria-label="Slim Shakes"
                    >
                      Slim Shakes
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/capsules/"
                      aria-label="Capsules"
                    >
                      Capsules
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/tea/"
                      aria-label="Tea"
                    >
                      Tea
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/breakfast-mix/"
                      aria-label="Breakfast Mix"
                    >
                      Breakfast Mix
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/effervescent-powders/"
                      aria-label="Effervescent Powders"
                    >
                      Effervescent Powders
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/gummies/"
                      aria-label="Gummies"
                    >
                      Gummies
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/ghee/"
                      aria-label="Ghee"
                    >
                      Ghee
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/honey/"
                      aria-label="Honey"
                    >
                      Honey
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/combos/"
                      aria-label="Combos"
                    >
                      Combos
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/product/vegan-protein/"
                      aria-label="Vegan Protein"
                    >
                      Vegan Protein
                    </a>
                  </li>
                  <li class="navPage-childList-item">
                    <a
                      class="navPage-childList-action navPages-action"
                      href="https://www.kapiva.in/oils/"
                      aria-label="Oils"
                    >
                      Oils
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
