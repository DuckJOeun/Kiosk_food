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

/* 지시문 관련 변수 */
var audio = new Audio('voice/v_0.mp3');
audio.loop = false;
audio.autoplay = false;
audio.volume = 1.0;

let instruction = [
    "안녕하세요<br>만나서 반가워요<br><br>지금부터 저와<br>키오스크로 음식 주문하는 방법을 배워봐요",
    "지금 보이는 화면은<br>키오스크의<br>시작 화면이에요",
    "[매장에서 식사하기]<br>또는 [포장하기]를<br>선택할 수 있어요",
    "오늘은 매장에서 식사하려고 해요<br><br>[매장에서 식사] 버튼을<br>눌러 주세요",
    "음식 종류를 고르고<br>메뉴를 선택할 수 있는<br><br>[주문 화면] 이에요",
    "메뉴가 다 보이지 않을 때는<br>손가락을 이용해서<br>메뉴판을 위아래로 쓸어내리면 된답니다",
    "먼저 어떤 음식들이 있는지<br>확인해볼까요?",
    "키오스크 위쪽의<br>[메인메뉴], [계절메뉴],<br>[추가메뉴], [음료] 버튼을<br>한 번씩 눌러 보세요",
    "이제 음식을 담아봐요<br><br>오늘은<br>순대국밥과 모듬만두를<br>먹으려고 해요",
    "위쪽의 버튼들을 눌러보며<br>[순대국밥]과 [모듬만두]를 찾아서<br>장바구니에 담아 주세요",
    "메뉴를 잘 담았어요<br><br>이제 키오스크 아래쪽의<br>[결제하기] 버튼을<br>눌러 주세요",
    "담은 메뉴들과 총 결제금액을 확인할 수 있는<br><br>[결제 화면] 이에요",
    "\"카드 결제\" 또는 <br>\"기타 결제\"를<br>선택할 수 있어요",
    "이 키오스크에서는<br>카드 결제만 가능해요<br><br>[카드 결제] 버튼을<br>눌러 주세요",
    "카드를 키오스크 아래의<br>투입구에 넣으면<br>결제가 완료돼요",
    "[완료] 버튼을<br>눌러 주세요",
    "음식 주문이<br>완료되었어요!<br><br>앞으로는 혼자서도<br>잘 할 수 있을 거예요",
]
let inst_idx = 0;
/* 지시문 다음 버튼 */
function instBtn() {
    if (inst_idx == 1) {
        document.getElementById("다음지시").style.display = 'none';
        return step1();
    }
    inst_write(instruction[inst_idx]);
    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_idx += 1;
    document.getElementById("다음지시").innerText = '다음';
    
    console.log("지시문 번호: "+ inst_idx);
} 

/* 튜토리얼 단계별 */
function step1() {
    /* 매장에서 식사 선택 */
    console.log("step1");

    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_write(instruction[inst_idx]);
    inst_idx += 1;

    audio.addEventListener('ended', function() {
        audio.src = "voice/v_" + inst_idx + ".mp3";
        audio.load();
        audio.play();
    
        inst_write(instruction[inst_idx]);
        inst_idx += 1;
        
        audio.addEventListener('ended', function() {
            audio.src = "voice/v_" + inst_idx + ".mp3";
            audio.load();
            audio.play();
    
            inst_write(instruction[inst_idx]);
            inst_idx += 1;
            
            audio.addEventListener('ended', function() {
                document.getElementById('메인화면').style.pointerEvents = 'auto';
            }, {once : true});
        }, {once : true});
    }, {once : true});
}
function step2() {
    document.querySelector("#메인화면").style.display = 'none';
    document.querySelector("#주문화면").style.display = 'grid';
    /* 메뉴 종류 버튼 한 번씩 눌러보기 */
    console.log("step2");

    inst_idx = 4;
    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_write(instruction[inst_idx]);
    inst_idx += 1;

    audio.addEventListener('ended', function() {
        audio.src = "voice/v_" + inst_idx + ".mp3";
        audio.load();
        audio.play();
    
        inst_write(instruction[inst_idx]);
        inst_idx += 1;
        
        audio.addEventListener('ended', function() {
            audio.src = "voice/v_" + inst_idx + ".mp3";
            audio.load();
            audio.play();
    
            inst_write(instruction[inst_idx]);
            inst_idx += 1;
            
            audio.addEventListener('ended', function() {
                audio.src = "voice/v_" + inst_idx + ".mp3";
                audio.load();
                audio.play();
    
                inst_write(instruction[inst_idx]);
                inst_idx += 1;

                audio.addEventListener('ended', function() {
                    document.getElementById('지시부분_단계2').style.border = '3px solid rgb(179, 135, 25)';
                    document.getElementById('지시부분_단계2').style.pointerEvents = 'auto';
                }, {once : true});
            }, {once : true});
        }, {once : true});
    }, {once : true});
}
function step3() {
    document.querySelector("#메인화면").style.display = 'none';
    document.querySelector("#주문화면").style.display = 'grid';
    /* 메뉴 담기 (순대국밥, 모듬만두) */
    document.getElementById('지시부분_단계2').style.border = 'none';
    document.getElementById('지시부분_단계2').style.pointerEvents = 'none';

    inst_idx = 8;
    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_write(instruction[inst_idx]);
    inst_idx += 1;

    audio.addEventListener('ended', function() {
        audio.src = "voice/v_" + inst_idx + ".mp3";
        audio.load();
        audio.play();

        inst_write(instruction[inst_idx]);
        inst_idx += 1;

        audio.addEventListener('ended', function() {
            document.getElementById('지시부분_단계2').style.pointerEvents = 'auto';
            document.getElementById('지시부분_단계3').style.pointerEvents = 'auto';
        }, {once : true});
    }, {once : true});
}
function step4() {
    /* 결제하기 버튼 누르기 */
    document.getElementById('지시부분_단계2').style.pointerEvents = 'none';
    document.getElementById('지시부분_단계3').style.pointerEvents = 'none';

    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_write(instruction[inst_idx]);
    inst_idx += 1;

    audio.addEventListener('ended', function() {
        document.getElementById('지시부분_단계4').style.pointerEvents = 'auto';
    }, {once : true});
}
function step5() {
    /* 카드결제 버튼 누르기 */
    document.getElementById('지시부분_단계4').style.pointerEvents = 'none';
    
    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_write(instruction[inst_idx]);
    inst_idx += 1;

    audio.addEventListener('ended', function() {
        audio.src = "voice/v_" + inst_idx + ".mp3";
        audio.load();
        audio.play();

        inst_write(instruction[inst_idx]);
        inst_idx += 1;
        
        audio.addEventListener('ended', function() {
            audio.src = "voice/v_" + inst_idx + ".mp3";
            audio.load();
            audio.play();

            inst_write(instruction[inst_idx]);
            inst_idx += 1;

            audio.addEventListener('ended', function() {
                document.getElementById('지시부분_단계5').style.pointerEvents = 'auto';
            }, {once : true});
        }, {once : true});
    }, {once : true});
}
function step6() {
    /* 결제 완료 */
    document.getElementById('지시부분_단계5').style.pointerEvents = 'none';

    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_write(instruction[inst_idx]);
    inst_idx += 1;

    audio.addEventListener('ended', function() {
        audio.src = "voice/v_" + inst_idx + ".mp3";
            audio.load();
            audio.play();

            inst_write(instruction[inst_idx]);
            inst_idx += 1;

            audio.addEventListener('ended', function() {
                document.getElementById('지시부분_단계6').style.pointerEvents = 'auto';
            }, {once : true});
    }, {once : true});
}
function step7() {
    /* 완료! */
    document.getElementById('지시부분_단계6').style.pointerEvents = 'none';

    audio.pause();
    audio.src = "voice/v_" + inst_idx + ".mp3";
    audio.load();
    audio.play();

    inst_write(instruction[inst_idx]);
}
function inst_write(string) {
    document.getElementById("instruction").innerHTML = string;
}
/* 메인화면 버튼 클릭 */
function mainBtn(value) {
    document.querySelector("#메인화면").style.display = 'none';
    console.log(value + " clicked!");

    document.querySelector("#주문화면").style.display = 'grid';
    step2();
}

/* 주문화면 - 상단바 메뉴종류 버튼 클릭 */
let topBarBtn_Clicked = {};
let step2_clear = false;
function topBarBtn(id) {
    document.getElementById("메인메뉴").style.display = 'none'
    document.getElementById("계절메뉴").style.display = 'none'
    document.getElementById("추가메뉴").style.display = 'none'
    document.getElementById("음료").style.display = 'none'

    document.getElementById(id).style.display = 'grid';
    topBarBtn_Clicked[id] += 1;
    
    console.log(id + " clicked!");

    if ((step2_clear == false) && (Object.keys(topBarBtn_Clicked).length == 4)) {
        step2_clear = true;
        step3();
    }
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

    // step3() 완료 여부 확인
    if (orderList.length == 2) {
        step4();
    } 
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

        step5();
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

    for ( ;i <3; i++) {
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
    
    document.getElementById("결제화면").style.pointerEvents = 'none';
    document.getElementById("결제overlay").style.display = 'block';

    step6();
}


/* 카드결제창 - 취소 버튼 */
function cancleBtn() {
    document.querySelector("#결제화면").style.display = 'grid';
    document.getElementById("결제overlay").style.display = 'none';

    document.querySelector("#카드결제창").style.display = 'none';
    document.getElementById("결제화면").style.pointerEvents = 'auto';
}

/* 카드결제창 - 완료 버튼 */
function clearBtn() {
    document.querySelector("#카드결제창").style.display = 'none';
    document.querySelector("#결제화면").style.display = 'none';

    document.querySelector("#완료화면").style.display = 'grid';

    step7();
}