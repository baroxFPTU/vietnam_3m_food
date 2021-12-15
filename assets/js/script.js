const foods = [
  {
    id: 1,
    name: "Bún đậu mắm tôm",
    description:
      "Là món ăn đơn giản, dân dã trong ẩm thực miền Bắc Việt Nam. Thành phần chính gồm có bún tươi, đậu hũ chiên vàng, chả cốm, nem chua, mắm tôm pha chanh, ớt và ăn kèm với các loại rau thơm như tía tô, kinh giới, rau húng, xà lách, cà pháo...",
    category: "mien-bac",
    starRated: 5,
    price: 100,
  },
  {
    id: 2,
    name: "Chả cá lã vọng",
    description:
      "Là món chả cá đặc sản Hà Nội. Đây là món chả làm từ cá (thường là cá lăng) thái miếng đem tẩm ướp, nướng trên than củi rồi rán lại trong chảo mỡ.",
    category: "mien-bac",
    starRated: 5,
    price: 100,
  },
  {
    id: 3,
    name: "Chả giò",
    description:
      "Nguyên liệu chính là thịt lợn, miến, trứng gà, nấm mèo,... và một số gia vị thông dụng của ẩm thực Việt như hành lá, tiêu, nước mắm, được cuốn bằng bánh tráng và chiên ngập dầu. ĐĐược ăn kèm với nước mắm pha, đồ chua và rau xà lách, các loại rau thơm như húng quế, húng cây, diếp cá,...",
    category: "mien-bac",
    starRated: 5,
    price: 100,
  },
  {
    id: 4,
    name: "Phở bò Nam Định",
    description:
      "Bánh phở Nam Định là loại đặc biệt có sợi nhỏ ngon và mềm, khác với sợi bánh của vùng khác. Thịt bò được thái mỏng đập dập, nhúng và vớt trong khoảng thời gian phù hợp nên ăn mềm mà vẫn giữ được độ tươi ngon và dinh dưỡng của thịt...",
    category: "mien-bac",
    starRated: 5,
    price: 100,
  },
  {
    id: 5,
    name: "Nem chua rán",
    description:
      "Thịt làm nem bao gồm thịt nạc xay và bì lợn thái nhỏ. Hai phần thịt được ưa chuộng sử dụng nhất là thịc nạc mông hay nạc vai.",
    category: "mien-bac",
    starRated: 5,
    price: 100,
  },
];

const cart = [];
const amountElement = document.querySelector(".btn-cart .amount");
const listProductsElement = document.querySelector(".list-products");
const totalAmountElement = document.querySelector(".total-amount");

function updateListProduct(list) {
  const htmls = list
    .map(function (item) {
      return `
      <div class="product">
        <span class="product__name">${item.name}</span>
        <span class="product__amount">x ${item.amount}</span>
      </div>`;
    })
    .join("");

  listProductsElement.innerHTML = htmls;
  updateAmount(list);
  updateTotalAmount(list);
}

function updateTotalAmount(list) {
  const totalAmount = list.reduce(function (sum, item) {
    return sum + item.amount * item.price;
  }, 0);

  totalAmountElement.innerText = totalAmount + ".000đ";
}

function updateAmount(list) {
  const amount = list.reduce(function (sum, item) {
    return sum + item.amount;
  }, 0);

  amountElement.textContent = amount;
}

function addFood(id) {
  const food = foods.find((food) => food.id === id);
  if (cart.find((item) => item.id === food.id)) {
    cart.forEach((item) => {
      if (item.id === food.id) {
        item.amount += 1;
      }
    });
  } else {
    cart.push({
      name: food.name,
      id: food.id,
      price: food.price,
      amount: 1,
    });
  }

  updateListProduct(cart);
  console.log(cart);
}

$(document).ready(function () {
  // if (AOS) {
  //   AOS.init();
  // }

  let header = $("#header");
  const navbarBtn = $(".navbar__btn");
  const headerWrapper = header.children(".wrapper");
  const navbar = $(".navbar");
  const overlay = $("#header .wrapper .overlay");

  function showNavbar() {
    navbar.css("transform", "translateX(0px)");
    overlay.css("display", "block");
  }
  function hideNavbar() {
    navbar.css("transform", "translateX(100%)");
    overlay.css("display", "none");
  }

  $(document).scroll(function (e) {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      header.css("background-color", "#1c1c1c");
      headerWrapper.css({ "padding-top": "10px", "padding-bottom": "10px" });

      if (header.is(".not-fixed")) {
        header.css("position", "fixed");
      }
    } else {
      if (!header.is(".not-fixed")) {
        header.css("background-color", "transparent");
      } else {
        header.css("position", "relative");
      }

      headerWrapper.css({ "padding-top": "42px", "padding-bottom": "30px" });
    }
  });

  navbarBtn.click(showNavbar);

  overlay.click(hideNavbar);
});
