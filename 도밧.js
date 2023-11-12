let 돈 = {};
let 빛 = {};
var 어 = {};
var aa = "\u200b".repeat(500);
var 엔 = "\n";
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == "!가입"){
        if(돈[sender]==undefined){
           돈[sender]=0;
        }
        if (빛[sender]==undefined){
            빛[sender]=0;
        }
        if (어[sender]==undefined){
            어[sender]=0;
        }
        replier.reply("가입 완료");
    }
    if(msg=="돈줘"){
      replier.reply("돈을 줬습니다.");
      돈[sender]+=5;
    }
    if(msg=="지갑"){
      replier.reply(sender+"님의 지갑 : "+돈[sender]);
    }
    if(msg=="일하기"){
      replier.reply("일을 시작합니다.");
      java.lang.Thread.sleep(3000); //1000=1초
      replier.reply("일을 완료 하였습니다.");
      돈[sender]+=300;
    }
    if (msg == "대출"){
        replier.reply ("대출을 시작합니다.");
        java.lang.Thread.sleep(1000);
        replier.reply("대출중......");
        java.lang.Thread.sleep(2000);
        빛[sender]+=1000;
        replier.reply("대출완료\n대출금액:1000원\n빛:"+빛[sender]);
        돈[sender]+=1000;
        빛[sender]+=1000;
        어[sender]+=1000;
    }
    if (msg == "빛 갚기"){
        replier.reply ("빛 갚기를 시작합니다.");
        java.lang.Thread.sleep(1000);
        replier.reply("돈 불러오는중......");
        java.lang.Thread.sleep(2000);
        replier.reply("빛 불러오는중....");
        java.lang.Thread.sleep(300);
        if (돈 => 어[sender]){
            replier.reply("갚기완료\n갚은금액:"+빛[sender]+"\n남은 돈:"+돈[sender]);
            돈[sender]-=빛[sender];
            빛[sender]-=어[sender];
            어[sender] = 0;
        } else {
          replier.reply("돈 부족");
        }
    }
    if (msg == "초기화"){
        replier.reply(sender+"님 초기화 시작합니다.");
        java.lang.Thread.sleep(1000);
        replier.reply("초기화중....");
        java.lang.Thread.sleep(3000);
        돈[sender]=0;
        replier.reply("초기화 완료(빛 제외)");
    }
    if (msg == "빛 보기"){
        replier.reply("빛을 불러오고있습니다.");
        java.lang.Thread.sleep(3000);
        replier.reply("빛 보기\n빛:"+빛[sender]+엔+"내야 할돈:"+어[sender]);
    }
    if (msg == "초기화--12"){
        돈[sender]=0;
        빛[sender]=0;
        어[sender]=0;
        replier.reply("초완");
    }
    if (msg == "상점"){
        replier.reply("상점목록입니다."+aa+"모든 사기 명령어는 !사기 로 시작합니다."+엔+"학교:학교+학생+선생님+교감(교장은"+sender+"님)(15000)"+엔+"총:?(10000000)"+엔+"집:집이요 (10000)\n연필 1자루(500)\n장례식(5000):장례식을 시작합니다.");
    }
    if (msg == "!사기 학교"){
       replier.reply("학교를 삽니다. (15000원)");
       java.lang.Thread.sleep(1000);
       replier.reply("사는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("가격불러오는중....");
       java.lang.Thread.sleep(1000);
       replier.reply("돈 불러오는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("불러오기 완료");
       if (돈[sender]>=15000){
          돈[sender]-=15000;
          replier.reply("사기 성공!\n 남은 돈:"+돈[sender]);
       } else {
         replier.reply("실패 하였습니다.(이유:돈 부족)");
       }
    }
    if (msg == "!사기 집"){
       replier.reply("집를 삽니다. (10000원)");
       java.lang.Thread.sleep(1000);
       replier.reply("사는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("가격불러오는중....");
       java.lang.Thread.sleep(1000);
       replier.reply("돈 불러오는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("불러오기 완료");
       java.lang.Thread.sleep(1000);
       if (돈[sender]>=10000){
          돈[sender]-=10000;
          replier.reply("사기 성공!\n 남은 돈:"+돈[sender]);
       } else {
         replier.reply("실패 하였습니다.(이유:돈 부족)");
       }
    }
    if (msg == "!사기 총"){
       replier.reply("총를 삽니다. (10000000원)");
       java.lang.Thread.sleep(1000);
       replier.reply("사는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("가격불러오는중....");
       java.lang.Thread.sleep(1000);
       replier.reply("돈 불러오는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("불러오기 완료");
       if (돈[sender]>=10000000){
          돈[sender]-=10000000;
          replier.reply("사기 성공!\n 남은 돈:"+돈[sender]);
       } else {
         replier.reply("실패 하였습니다.(이유:돈 부족)");
       }
    }
    if (msg == "!사기 연필 1자루"){
       replier.reply("연필1자루를 삽니다. (500원)");
       java.lang.Thread.sleep(1000);
       replier.reply("사는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("가격불러오는중....");
       java.lang.Thread.sleep(1000);
       replier.reply("돈 불러오는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("불러오기 완료");
       if (돈[sender]>=500){
          돈[sender]-=500;
          replier.reply("사기 성공!\n 남은 돈:"+돈[sender]);
       } else {
         replier.reply("실패 하였습니다.(이유:돈 부족)");
       }
    }
    if (msg == "!사기 장례식"){
       replier.reply("장례식을 시작합니다. (5000원)");
       java.lang.Thread.sleep(1000);
       replier.reply("시작하는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("메세지불러오는중....");
       java.lang.Thread.sleep(1000);
       replier.reply("돈 불러오는중....");
       java.lang.Thread.sleep(3000);
       replier.reply("불러오기 완료");
       if (돈[sender]>=5000){
          돈[sender]-=5000;
          replier.reply("시작합니다.\nhttps://youtu.be/SS711ldWuBs?si=esJxxHmSMAw41TcZ");
       } else {
         replier.reply("실패 하였습니다.(이유:돈 부족)");
       }
    }  
}