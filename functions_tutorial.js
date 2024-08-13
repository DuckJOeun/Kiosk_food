/* 
[키오스크 - 음식]

1. 메인화면 : 매장/포장 버튼을 누르면 주문화면으로 넘어감

2. 주문화면
- 상단바 메뉴종류 버튼 클릭 시 메뉴를 바꿈
- 메뉴 버튼 클릭 시 메뉴를 장바구니에 담음
- 결제하기 클릭 시 결제화면으로 넘어감

3. 결제화면
- 이전화면 클릭 시 주문화면으로 돌아감
- 카드결제 클릭 시 카드결제창 띄움

4. 카드결제창
- 취소 클릭 시 카드결제창 없앰
- 완료 클릭 시 완료화면으로 넘어감

5. 완료화면
*/

/* 메인화면 버튼 클릭 */
function mainBtn(value) {
    document.querySelector("#메인화면").style.display = 'none';
    console.log(value + " clicked!");

    document.querySelector("#주문화면").style.display = 'grid';
}

/* 주문화면 - 상단바 메뉴종류 버튼 클릭 */
function topBarBtn(id) {
    document.getElementById("메인메뉴").style.display = 'none'
    document.getElementById("계절메뉴").style.display = 'none'
    document.getElementById("추가메뉴").style.display = 'none'
    document.getElementById("음료").style.display = 'none'

    document.getElementById(id).style.display = 'grid';
    console.log(id + " clicked!");
}


// 장바구니에 담은 아이템
function Item(id, price) {
    this.id = id;
    this.pcs = 1;
    this.price = parseInt(price);
}

// 장바구니 담은 메뉴 (메뉴이름, 수량, 가격)
var orderList = []; 
// 총 가격
var totalPrice = 0;

/* 주문화면 - 메뉴 클릭 */
function menuBtn(id, price) {
    for (i=0; i<orderList.length; i++) {
        if (id == orderList[i].id) {
            // 이미 장바구니에 담겨 있던 메뉴일 경우
            // 개수 +1
            orderList[i].pcs += 1;
                
            console.log(id + " + " + orderList[i].pcs);
            break;
        }
    }
    if ((orderList.length < 3) && (i == orderList.length)) {
        // 장바구니에 새로 추가하는 메뉴일 경우
        // 장바구니에 해당 메뉴를 1개 담기
        var order = new Item(id, price);
        orderList.push(order);

        console.log(id + " 담음!");
    }
    
    console.log("cart length : " + orderList.length);
    printCart(orderList); 
}

/* 주문화면 - 장바구니 내역 출력 */
function printCart(orderList) {
    for (i=0; i<orderList.length; i++) {
        var idx = i+1;
        document.getElementById("order_" + idx).style.display = "flex";

        document.getElementById("name_" + idx).innerText = orderList[i].id;
        document.getElementById("pcs_" + idx).innerText = orderList[i].pcs;
        document.getElementById("price_" + idx).innerText = (orderList[i].price * orderList[i].pcs) + "원";
    }
    printTotalPrice()
}

/* 주문화면 - 장바구니 '+' 버튼 */
function plusBtn(idx) {
    orderList[idx].pcs += 1;

    printCart(orderList);

    console.log("cart index " + idx + " plus!");
    console.log("cart length : " + orderList.length);
}

/* 주문화면 - 장바구니 '-' 버튼 */
function minusBtn(idx) {
    orderList[idx].pcs -= 1;
    
    if (orderList[idx].pcs == 0) {
        deleteBtn(idx);
    }
    else {
        printCart(orderList);

        console.log("cart index " + idx + " minus!");
        console.log("cart length : " + orderList.length);
    }
}

/* 주문화면 - 장바구니 'X' 버튼 */
function deleteBtn(idx) {
    orderList = orderList.filter((_, index) => index != idx);
    console.log(orderList);

    printCart(orderList);

    orderList.forEach((_, newIndex) => {
        const element = document.getElementById("order_" + newIndex);
        if (element) {
            element.id = "order_" + newIndex;
        }
    })
    document.getElementById("order_" + (orderList.length + 1)).style.display = 'none';

    console.log("cart index " + idx + " deleted!");
    console.log("cart length : " + orderList.length);
}

/* 주문화면 - 총 가격 출력 */
function printTotalPrice() {
    totalPrice = 0;
    for (i=0; i<orderList.length; i++) {
        totalPrice += orderList[i].pcs * orderList[i].price;
    }
    document.getElementById('total_price').innerText = totalPrice + "원";
}

/* 주문화면 - 하단 결제하기 버튼 클릭 */
function paymentBtn() {
    if (orderList.length > 0) {
        document.querySelector("#메인화면").style.display = 'none';
        document.querySelector("#주문화면").style.display = 'none';
        console.log("결제하기 clicked!");

        document.querySelector("#결제화면").style.display = 'grid';
        printOrderList();
    }
}

/* 결제화면 - 주문 내역 출력 */
function printOrderList() {
    var i=0;
    var idx;
    for (i=0; i<orderList.length; i++) {
        idx = i+1;
        document.getElementById("o_order_" + idx).style.display = 'grid';
        document.getElementById("o_order_" + idx).style.borderBottom = "1px solid gray";

        document.getElementById("o_name_" + idx).innerText = (idx) + ". " + orderList[i].id;
        document.getElementById("o_pcs_" + idx).innerText = "x " + orderList[i].pcs;
        document.getElementById("o_price_" + idx).innerText = (orderList[i].pcs * orderList[i].price) + "원";
    }
    console.log("i= " + i);

    for ( ;i <5; i++) {
        document.getElementById("o_order_" + (i+1)).style.display= 'none';
        console.log((i+1) + " not display");
        document.getElementById("o_order_" + (i+1)).style.borderBottom = 'none';
    }

    printOrderTotalPrice();
}

/* 결제화면 - 총 가격 출력 */
function printOrderTotalPrice() {
    document.getElementById('total_order_price').innerText = totalPrice;
}

/* 결제화면 - 이전화면 버튼 */
function prevBtn() {
    document.querySelector("#메인화면").style.display = 'none';
    document.querySelector("#결제화면").style.display = 'none';
    console.log("이전화면 clicked!");

    document.querySelector("#주문화면").style.display = 'grid';
}

/* 결제화면 - 카드결제 버튼 */
function cardBtn() {
    document.querySelector("#카드결제창").style.display = 'grid';
    // document.querySelector("#결제화면").style.filter = 'blur(2px)';
    document.querySelector("#결제화면").classList.add('overlay');
    
    document.getElementById("결제화면").style.pointerEvents = 'none';
}


/* 카드결제창 - 취소 버튼 */
function cancleBtn() {
    document.querySelector("#결제화면").style.display = 'grid';
    // document.querySelector("#결제화면").style.filter = 'none';
    document.querySelector("#결제화면").classList.remove('overlay');
    document.querySelector("#카드결제창").style.display = 'none';
    document.getElementById("결제화면").style.pointerEvents = 'auto';
}

/* 카드결제창 - 완료 버튼 */
function clearBtn() {
    document.querySelector("#카드결제창").style.display = 'none';
    document.querySelector("#결제화면").style.display = 'none';

    document.querySelector("#완료화면").style.display = 'grid';
}