function goToStart() {a
    // ページをリロードして最初の画面に戻る
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () { 
    //ホーム画面で質問と結果の画面を非表示
    document.getElementById('question-container1').style.display = 'none';
    document.getElementById('result-container1').style.display = 'none';
    document.getElementById('question-container2').style.display = 'none';
    document.getElementById('result-container2').style.display = 'none';
    document.getElementById('question-container3').style.display = 'none';
    document.getElementById('result-container3').style.display = 'none';
});

const questions1 = [
    "その場の状況にあわせて柔軟に対応することは得意である",
    "自分のことは後回しにしても他人のお世話をすることがよくある",
    "持っている情報や知識、時間はできるだけ自分のために使いたい",
    "用心深く、いろいろなことを気にかけたり心配したりする",
    "任されたことは忠実にその責任を果たそうとする",
    "ゆったりとしたペースが好きで、慌てることは少ない",
    // ここに質問を追加してください
];
const questions2 = [
    "任されたことは忠実にその責任を果たそうとする",
    "ゆったりとしたペースが好きで、慌てることは少ない",
    // ここに質問を追加してください
];
const questions3 = [
    "持っている情報や知識、時間はできるだけ自分のために使いたい",
    "用心深く、いろいろなことを気にかけたり心配したりする",
    // ここに質問を追加してください
];

let currentQuestionIndex1 = 0;
let currentQuestionIndex2 = 0;
let currentQuestionIndex3 = 0; //質問の要素番号を指定する変数
let scores1 = Array(questions1.length).fill(0); // 各質問の得点を保存する配列
let scores2 = Array(questions2.length).fill(0);
let scores3 = Array(questions3.length).fill(0);

function startDiagnosis1() {
    document.getElementById('start-container').style.display = 'none';
    showQuestion1();
}

function startDiagnosis2() {
    document.getElementById('start-container').style.display = 'none';
    showQuestion2();
}

function startDiagnosis3() {
    document.getElementById('start-container').style.display = 'none';
    showQuestion3();
}
function showQuestion1() {
    console.log(currentQuestionIndex1);
    console.log(scores1);
    const questionContainer1 = document.getElementById('question-container1');
    const questionText1 = document.getElementById('question-text1');
    questionText1.textContent = questions1[currentQuestionIndex1];
    questionContainer1.style.display = 'block';

    //ラジオボタンの入力履歴を設定
    const answerIndex = currentQuestionIndex1;
    let answer_radio = document.getElementById('answer-form1');
    if(scores1[answerIndex] === 3){
        radioNodeList = answer_radio.elements[0].checked = true;
    }else if(scores1[answerIndex] === 1){
        radioNodeList = answer_radio.elements[1].checked = true;
    }else if(scores1[answerIndex] === 2){
        radioNodeList = answer_radio.elements[2].checked = true;
    }else{
        const answerForm1 = document.getElementById('answer-form1');
        answerForm1.reset();
    }

    if (currentQuestionIndex1 === 0) { //1問目の時だけ戻るボタンを非表示にする
        document.getElementById('Backbutton').style.display = 'none';
    } else {
        document.getElementById('Backbutton').style.display = 'inline-block';
    }
}
function showQuestion2() {
    console.log(currentQuestionIndex2);
    console.log(scores2);
    const questionContainer2 = document.getElementById('question-container2');
    const questionText2 = document.getElementById('question-text2');
    questionText2.textContent = questions2[currentQuestionIndex2];
    questionContainer2.style.display = 'block';

    //ラジオボタンの入力履歴を設定
    const answerIndex = currentQuestionIndex2;
    let answer_radio = document.getElementById('answer-form2');
    if(scores2[answerIndex] === 3){
        radioNodeList = answer_radio.elements[0].checked = true;
    }else if(scores2[answerIndex] === 1){
        radioNodeList = answer_radio.elements[1].checked = true;
    }else if(scores2[answerIndex] === 2){
        radioNodeList = answer_radio.elements[2].checked = true;
    }else{
        const answerForm2 = document.getElementById('answer-form2');
        answerForm2.reset();
    }

    if (currentQuestionIndex2 === 0) { //1問目の時だけ戻るボタンを非表示にする
        document.getElementById('Backbutton').style.display = 'none';
    } else {
        document.getElementById('Backbutton').style.display = 'inline-block';
    }
}

function showQuestion3() {
    console.log(currentQuestionIndex3);
    console.log(scores3);
    const questionContainer3 = document.getElementById('question-container3');
    const questionText3= document.getElementById('question-text3');
    questionText3.textContent = questions3[currentQuestionIndex3];
    questionContainer3.style.display = 'block';

    //ラジオボタンの入力履歴を設定
    const answerIndex = currentQuestionIndex3;
    let answer_radio = document.getElementById('answer-form3');
    if(scores3[answerIndex] === 3){
        radioNodeList = answer_radio.elements[0].checked = true;
    }else if(scores3[answerIndex] === 1){
        radioNodeList = answer_radio.elements[1].checked = true;
    }else if(scores3[answerIndex] === 2){
        radioNodeList = answer_radio.elements[2].checked = true;
    }else{
        const answerForm3 = document.getElementById('answer-form3');
        answerForm3.reset();
    }

    if (currentQuestionIndex3 === 0) { //1問目の時だけ戻るボタンを非表示にする
        document.getElementById('Backbutton').style.display = 'none';
    } else {
        document.getElementById('Backbutton').style.display = 'inline-block';
    }
}

function nextQuestion1() {
    //「次へ」ボタンが押されたときの処理
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // ここで選択された回答に対する処理を追加
        const answerIndex = currentQuestionIndex1;
        if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
            scores1[answerIndex] = 3;
        }else if(selectedAnswer.value === "no"){ //「いいえ」を選択で+1点
            scores1[answerIndex] = 1;
        }else if (selectedAnswer.value === "neutral") { //「どちらでもない」を選択で+2点
            scores1[answerIndex] = 2;
        }

        currentQuestionIndex1++;

        if (currentQuestionIndex1 < questions1.length) { //次へボタンの処理
            showQuestion1();
        } else {
            showResult1();
        }
    } else {
        alert("回答を選択してください");
    }
}

function nextQuestion2() {
    //「次へ」ボタンが押されたときの処理
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // ここで選択された回答に対する処理を追加
        const answerIndex = currentQuestionIndex2;
        if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
            scores2[answerIndex] = 3;
        }else if(selectedAnswer.value === "no"){ //「いいえ」を選択で+1点
            scores2[answerIndex] = 1;
        }else if (selectedAnswer.value === "neutral") { //「どちらでもない」を選択で+2点
            scores2[answerIndex] = 2;
        }

        currentQuestionIndex2++;

        if (currentQuestionIndex2 < questions2.length) { //次へボタンの処理
            showQuestion2();
        } else {
            showResult2();
        }
    } else {
        alert("回答を選択してください");
    }
}

function nextQuestion3() {
    //「次へ」ボタンが押されたときの処理
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // ここで選択された回答に対する処理を追加
        const answerIndex = currentQuestionIndex2;
        if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
            scores3[answerIndex] = 3;
        }else if(selectedAnswer.value === "no"){ //「いいえ」を選択で+1点
            scores3[answerIndex] = 1;
        }else if (selectedAnswer.value === "neutral") { //「どちらでもない」を選択で+2点
            scores3[answerIndex] = 2;
        }

        currentQuestionIndex2++;

        if (currentQuestionIndex2 < questions3.length) { //次へボタンの処理
            showQuestion3();
        } else {
            showResult3();
        }
    } else {
        alert("回答を選択してください");
    }
}

function goBack1() {
    // 「戻る」ボタンが押されたときの処理
    if (currentQuestionIndex1 > 0) {
        currentQuestionIndex1--;
        showQuestion1();
    }
}

function goBack2() {
    // 「戻る」ボタンが押されたときの処理
    if (currentQuestionIndex2 > 0) {
        currentQuestionIndex2--;
        showQuestion2();
    }
}

function goBack2() {
    // 「戻る」ボタンが押されたときの処理
    if (currentQuestionIndex3 > 0) {
        currentQuestionIndex3--;
        showQuestion2();
    }
}

function showResult1() {
    // 結果画面の表示
    const totalScore = calculateTotalScore1();  // calculateTotalScore の結果を変数に代入
    console.log(scores1);
    console.log("結果" + totalScore);

    const resultContainer1 = document.getElementById('result-container1');
    const resultTextElement1 = document.getElementById('result-text1');

    // 結果を比較して表示を変更
    let resultText = "";
    if (totalScore <= 8) {
        resultText = "象";
    } else if (totalScore <= 14) {
        resultText = "馬";
    } else if (totalScore <= 20) {
        resultText = "ライオン";
    } else {
        resultText = "その他"; // それ以外の場合にも対応する場合
    }

    resultTextElement1.textContent = resultText;

    // 質問画面を非表示
    document.getElementById('question-container1').style.display = 'none';
    document.getElementById('answer-form1').style.display = 'none';
    resultContainer1.style.display = 'block';
}


function calculateTotalScore1() {
    // 各質問の得点を合算する
    return scores1.reduce((total, score) => total + score, 0);
}