function goToStart() {
    // ページをリロードして最初の画面に戻る
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () { 
    //ホーム画面で質問と結果の画面を非表示
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
});

const questions = [
    "質問1",
    "質問2",
    "質問3",
    "質問4",
    "質問5",
    "質問6",
    // ここに質問を追加してください
];

let currentQuestionIndex = 0; //質問の要素番号を指定する変数
let scores = Array(questions.length).fill(0); // 各質問の得点を保存する配列

function startDiagnosis() {
    document.getElementById('start-container').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    console.log(currentQuestionIndex);
    console.log(scores);
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    questionText.textContent = questions[currentQuestionIndex];
    questionContainer.style.display = 'block';


    //ラジオボタンの入力履歴を設定
    const answerIndex = currentQuestionIndex;
    let answer_radio = document.getElementById('answer-form');
    if(scores[answerIndex] === 3){
        radioNodeList = answer_radio.elements[0].checked = true;
    }else if(scores[answerIndex] === 1){
        radioNodeList = answer_radio.elements[1].checked = true;
    }else if(scores[answerIndex] === 2){
        radioNodeList = answer_radio.elements[2].checked = true;
    }else{
        const answerForm = document.getElementById('answer-form');
        answerForm.reset();
    }

    if (currentQuestionIndex === 0) { //1問目の時だけ戻るボタンを非表示にする
        document.getElementById('Backbutton').style.display = 'none';
    } else {
        document.getElementById('Backbutton').style.display = 'inline-block';
    }
}

function nextQuestion() {
    //「次へ」ボタンが押されたときの処理
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // ここで選択された回答に対する処理を追加
        const answerIndex = currentQuestionIndex;
        if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
            scores[answerIndex] = 3;
        }else if(selectedAnswer.value === "no"){ //「いいえ」を選択で+1点
            scores[answerIndex] = 1;
        }else if (selectedAnswer.value === "neutral") { //「どちらでもない」を選択で+2点
            scores[answerIndex] = 2;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) { //次へボタンの処理
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert("回答を選択してください");
    }
}

function goBack() {
    // 「戻る」ボタンが押されたときの処理
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showResult() {
    // 結果画面の表示
    const totalScore = calculateTotalScore();  // calculateTotalScore の結果を変数に代入
    console.log(scores);
    console.log("結果" + totalScore);

    const resultContainer = document.getElementById('result-container');

    // 結果を比較して表示を変更
    let resultText = "";
    if (totalScore <= 8) {
        resultText = "診断結果: 甲";
    } else if (totalScore <= 14) {
        resultText = "診断結果: 乙";
    } else if (totalScore <= 20) {
        resultText = "診断結果: 丙";
    } else {
        resultText = "診断結果: その他"; // それ以外の場合にも対応する場合
    }

    resultContainer.textContent = resultText;

    // 質問画面を非表示
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer-form').style.display = 'none';
    resultContainer.style.display = 'block';
}


function calculateTotalScore() {
    // 各質問の得点を合算する
    return scores.reduce((total, score) => total + score, 0);
}
