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
  {
    id: 6,
    name: "Bánh canh hẹ",
    description:
      "Bánh canh hẹ là món ăn khá phổ biến ở miền Trung. Món ăn này có xuất xứ từ người dân Phú Yên và rất được yêu thích. Với hương vị thanh nhẹ, không nhiều dầu mỡ, thực khách có thể ăn bất kì lúc nào trong ngày.",
    category: "mien-trung",
    starRated: 5,
    price: 100,
  },
  {
    id: 7,
    name: "Bánh cuốn",
    description:
      "Bột làm bánh là gạo được xay ướt nên rất mịn. Sau khi đã được làm chín bởi hơi nước, lá bánh sẽ được cuốn lại với nhân thịt, mộc nhĩ và nấm hương đã được nấu chín. Sau đó người làm bánh sẽ dùng thanh tre chia bánh vừa cuốn đó ra làm 4 khúc ngắn hơn và bày vào đĩa. Sau khi xếp lần lượt hết vào đĩa, một ít ruốc tôm sẽ được rắc lên trên các miếng bánh cuốn và trên cùng điểm vài cọng rau thơm như rau bạc hà, rau mùi... Bánh cuốn sẽ được thưởng thức cùng với bát nước chấm có vài lát chả và chút hành khô trong đó.",
    category: "mien-trung",
    starRated: 5,
    price: 100,
  },
  {
    id: 8,
    name: "Bún bò Huế",
    description:
      "Bún bò có nguồn gốc từ Huế, một cố đô của Việt Nam. Ở ngoài thành phố Huế và một số vùng miền Trung Việt Nam, nó được gọi là bún bò Huế để biểu thị nguồn gốc của nó. Ở Huế và các thành phố lân cận, nó được gọi đơn giản là bún bò . Nước dùng được chế biến bằng cách ninh xương bò và móng bò với sả, sau đó nêm mắm tôm lên men và đường cho vừa ăn. Dầu ớt cay được thêm vào sau đó trong quá trình nấu.",
    category: "mien-trung",
    starRated: 5,
    price: 100,
  },
  {
    id: 9,
    name: "Mì Quảng",
    description:
      "Mì Quảng thường được làm từ bột gạo xay mịn với nước từ hạt dành dành và trứng cho có màu vàng và tráng thành từng lớp bánh mỏng. Dưới lớp mì là các loại rau sống, Mì Quảng phải ăn kèm với rau sống 9 vị thì mới tạo nên được hương vị nồng nàn: húng quế, xà lách tươi, cải non mới nụ, giá trắng có thể được trụng chín hoặc để sống, ngò rí, rau răm với hành hoa. Trên mì là thịt lợn, tôm, thịt gà, thịt ếch, thịt cá lóc cùng với nước dùng được hầm từ xương heo. Người ta còn bỏ thêm lạc rang khô và giã dập, hành lá thái nhỏ, rau thơm, ớt đỏ...",
    category: "mien-trung",
    starRated: 5,
    price: 100,
  },
  {
    id: 10,
    name: "Cơm gà Tam Kỳ",
    description:
      "Cơm gà Tam Kỳ là một trong những đặc sản nổi tiếng của vùng đất Quảng Nam với sự kết hợp của những nguyên liệu bình dân nhưng lại tạo nên một món ăn hết sức độc đáo. Cơm gà Tam Kỳ thu hút thực khách từ cái nhìn đầu tiên bởi hình thức được bày trí bắt mắt; những hạt cơm vàng óng, thơm mềm, bùi bùi ăn cùng với thịt gà ta dai ngọt và nước mắm chua ngọt hấp dẫn.",
    category: "mien-trung",
    starRated: 5,
    price: 100,
  },
  {
    id: 11,
    name: "Cơm tấm",
    description:
      "Cơm tấm là một món ăn Việt Nam có nguyên liệu chủ yếu từ gạo tấm, một đĩa Cơm tấm truyền thống thường có các thành phần nguyên liệu như sau: gạo tấm, nước chấm, mỡ hành, ăn kèm cùng các món mặn là sườn, bì, chả, trứng.",
    category: "mien-nam",
    starRated: 5,
    price: 100,
  },
  {
    id: 12,
    name: "Hủ tiếu Nam Vang",
    description:
      "Hủ tiếu Nam Vang là món hủ tiếu do người Hoa Campuchia và người Khmer chế biến, có nguồn gốc từ Nam Vang nguyên liệu chính là hủ tiếu bột lọc, nước dùng chính là thịt bằm nhỏ, lòng heo nấu cùng. Tùy theo khẩu vị của từng người, có thể thay thế lòng heo bằng tôm, cua, cá, mực, nhưng nhất thiết phải có thịt bằm.",
    category: "mien-nam",
    starRated: 5,
    price: 100,
  },
  {
    id: 13,
    name: "Lẩu cá kèo",
    description:
      "Lẩu cá kèo là món ăn nổi tiếng của người dân Nam Bộ, với hương vị thơm ngon và cực hấp dẫn khó ai có thể chối từ nếu đã một lần nếm thử. Vị ngọt thanh, hơi cay khi ăn kèm với các loại rau tạo nên món ăn hấp dẫn bất cứ thực khách nào.",
    category: "mien-nam",
    starRated: 5,
    price: 100,
  },
  {
    id: 14,
    name: "Bún mắm",
    description:
      "Bún mắm là một trong số các món ăn đặc sản của miền tây Nam bộ Việt Nam. Bún mắm có nguồn gốc từ Campuchia, được nấu từ mắm bù hốc. Khi sang đến Việt Nam thường được nấu bằng mắm cá linh hay cá sặc, đây là các loại cá có nhiều tại miền Tây, đặc biệt là các tỉnh Trà Vinh và Sóc Trăng.",
    category: "mien-nam",
    starRated: 5,
    price: 100,
  },
  {
    id: 15,
    name: "Bánh xèo",
    description:
      "Bánh xèo là một loại bánh phổ biến ở châu Á, có bột bên ngoài, bên trong có nhân là tôm, thịt, giá đỗ, kim chi, khoai tây, hẹ, được rán màu vàng, đúc thành hình tròn hoặc gấp lại thành hình bán nguyệt. Tuỳ theo từng địa phương tại Việt Nam mà bánh được thưởng thức với nét đặc trưng riêng. ",
    category: "mien-nam",
    starRated: 5,
    price: 100,
  },
];

let cart = [];
const amountElement = document.querySelector(".btn-cart .amount");
const listProductsElement = document.querySelector(".list-products");
const totalAmountElement = document.querySelector(".total-amount");

function updateListProduct(list) {
  if (!listProductsElement) return;
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

  totalAmountElement.innerText =
    totalAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") + "0đ";
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

  localStorage.setItem("cart", JSON.stringify(cart));

  updateListProduct(cart);
}

$(document).ready(function () {
  if (AOS) {
    AOS.init();
  }

  const cartLocalStorage = localStorage.getItem("cart");
  if (cartLocalStorage) {
    cart = JSON.parse(cartLocalStorage);
    updateListProduct(cart);
  }

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

  // Hide loading
  setTimeout(function () {
    $(".loading").hide();
  }, 600);
});
