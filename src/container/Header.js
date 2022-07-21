import React from "react";

function Header() {
  return (
    <template>
      <div class="w-full border-b-2 md:border-b-0 md:shadow-md z-40 bg-white">
        <header class="container mx-auto py-2">
          <a href="/" class="block mx-2">
            <img
              src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/images/stencil/250x100/subtract_1617795361__77099.original.png"
              alt="Kapiva"
              width="250"
              height="81"
              class="w-32"
            />
          </a>
        </header>
      </div>
    </template>
  );
}

export default Header;
