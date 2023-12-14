function goToStart() {
    // ページをリロードして最初の画面に戻る
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () { 
    //ホーム画面で質問と結果の画面を非表示
    document.getElementById('question-container1').style.display = 'none';
    document.getElementById('question-container2').style.display = 'none';
    document.getElementById('result-container2').style.display = 'none';
    document.getElementById('question-container3').style.display = 'none';
 
});

const questions1 = [ //性格診断
    "その場の状況にあわせて柔軟に対応することは得意である",
    "自分のことは後回しにしても他人のお世話をすることがよくある",
    "持っている情報や知識、時間はできるだけ自分のために使いたい",
    "用心深く、いろいろなことを気にかけたり心配したりする",
    "任されたことは忠実にその責任を果たそうとする",
    "ゆったりとしたペースが好きで、慌てることは少ない",
    // ここに質問を追加してください
];
<<<<<<< HEAD
const questions2 = [
    "Q1. 他人との関わり方で当てはまるのは？ 1.自分のペースで過ごすことが好き 2.積極的に他人と交流することが好き",
    "Q2. 好奇心の強さで当てはまるのは？ 1.慎重でなかなか新しいことに挑戦しない 2.新しいものに興味津々 ",
    "Q3. 複数人で議論するときに当てはまるのは？ 1.自分のこだわりを曲げない 2.周りの意見に合わせる",
    "Q4. 失敗してしまったときに当てはまるのは？ 1.あのときああしてればよかったと後悔 2.終わったことは気にせず切り替える",
    "Q5. 休日の過ごし方は？？ 1.家でまったり 2.外でアクティブに遊ぶ",
    "Q6. やらなければならないことがあるときに当てはまるのは？ 1.計画を立ててコツコツと努力する 2.少ない期間に一気にやり遂げる",
    "Q7. 好みの環境は？ 1.静かな場所や自分だけの空間 2.賑やかな環境で活動的",
    "Q8. ストレスを感じた時はどうする？ 1.一人で抱え込む 2.すぐ周りに相談",
    "Q9.他人との関係で当てはまるのは？ 1.時間をかけて深い関係を築く 2.誰とでもすぐに仲良くなれる",
    "Q10. チームではどんな役割が得意？ 1.周りを引っ張るリーダー 2.周りに合わせながら適応するなんでも屋",
=======
const questions2 = [ //動物診断
    "任されたことは忠実にその責任を果たそうとする",
    "ゆったりとしたペースが好きで、慌てることは少ない",
>>>>>>> 1bb51b93ed494e7f3035de51ffdb1d569da46c6b
    // ここに質問を追加してください
];
const questions3 = [ //マイカラー診断
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

function showQuestion1() { //性格診断
    console.log(currentQuestionIndex1);
    console.log(scores1);
    document.getElementById('question-mode1').textContent = '性格診断';
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

function showQuestion2() { // 動物診断
    console.log(currentQuestionIndex2);
    console.log(scores2);
    document.getElementById('question-mode2').textContent = '動物診断';
<<<<<<< HEAD
    const questionContainer = document.getElementById('question-container2');
    const questionText = document.getElementById('question-text2');
    questionText.textContent = questions2[currentQuestionIndex2];
    questionContainer.style.display = 'block';
=======
    const questionContainer2 = document.getElementById('question-container2');
    const questionText2 = document.getElementById('question-text2');
    questionText2.textContent = questions2[currentQuestionIndex2];
    questionContainer2.style.display = 'block';
>>>>>>> 1bb51b93ed494e7f3035de51ffdb1d569da46c6b

    //ラジオボタンの入力履歴を設定
    const answerIndex = currentQuestionIndex2;
    let answer_radio = document.getElementById('answer-form2');
    if(scores2[answerIndex] === 3){
        radioNodeList = answer_radio.elements[0].checked = true;
    }else if(scores2[answerIndex] === 1){
        radioNodeList = answer_radio.elements[1].checked = true;
    }else{
        const answerForm = document.getElementById('answer-form2');
        answerForm.reset();
    }

    if (currentQuestionIndex2 === 0) { //1問目の時だけ戻るボタンを非表示にする
        document.getElementById('Backbutton').style.display = 'none';
    } else {
        document.getElementById('Backbutton').style.display = 'inline-block';
    }
}

function showQuestion3() { //マイカラー診断
    console.log(currentQuestionIndex3);
    console.log(scores3);
    document.getElementById('question-mode3').textContent = 'マイカラー診断';
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
        if (selectedAnswer.value === "1") { //「はい」を選択で+3点
            scores2[answerIndex] = 3;
        }else if(selectedAnswer.value === "2"){ //「いいえ」を選択で+1点
            scores2[answerIndex] = 1;
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
        const answerIndex = currentQuestionIndex3;
        if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
            scores3[answerIndex] = 3;
        }else if(selectedAnswer.value === "no"){ //「いいえ」を選択で+1点
            scores3[answerIndex] = 1;
        }else if (selectedAnswer.value === "neutral") { //「どちらでもない」を選択で+2点
            scores3[answerIndex] = 2;
        }

        currentQuestionIndex3++;

        if (currentQuestionIndex3 < questions3.length) { //次へボタンの処理
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

function goBack3() {
    // 「戻る」ボタンが押されたときの処理
    if (currentQuestionIndex3 > 0) {
        currentQuestionIndex3--;
        showQuestion3();
    }
}

function showResult2() {
    // 結果画面の表示
    const totalScore = calculateTotalScore2();  // calculateTotalScore の結果を変数に代入
    console.log(scores2);
    console.log("結果" + totalScore);

    const resultContainer = document.getElementById('result-container2');
    const resultTextElement = document.getElementById('result-text2');


    // 結果を比較して表示を変更
    let resultText = "";
    if (totalScore <= 12) {
        resultText = "犬";
    } else if (totalScore <= 16) {
        resultText = "馬";
    } else if (totalScore <= 20) {
        resultText = "ライオン";
    } else if (totalScore <= 24) {
        resultText = "ゾウ";
    } else if (totalScore <= 27) {
        resultText = "猫";
    } else if (totalScore <= 30) {
        resultText = "コアラ";
    } else {
        resultText = "その他"; // それ以外の場合にも対応する場合
    }

    resultTextElement.textContent = resultText;

    // 質問画面を非表示
    document.getElementById('question-container2').style.display = 'none';
    document.getElementById('answer-form2').style.display = 'none';
    resultContainer.style.display = 'block';
}


function calculateTotalScore2() {
    // 各質問の得点を合算する
<<<<<<< HEAD
    return scores2.reduce((total, score) => total + score, 0);
=======
    return scores1.reduce((total, score) => total + score, 0);
>>>>>>> 1bb51b93ed494e7f3035de51ffdb1d569da46c6b
}
