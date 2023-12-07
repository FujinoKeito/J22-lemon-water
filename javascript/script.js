const questions = [
    "その場の状況にあわせて柔軟に対応することは得意である",
    "自分のことは後回しにしても他人のお世話をすることがよくある",
    "持っている情報や知識、時間はできるだけ自分のために使いたい",
    "用心深く、いろいろなことを気にかけたり心配したりする",
    "任されたことは忠実にその責任を果たそうとする",
    "ゆったりとしたペースが好きで、慌てることは少ない",
    // ここに質問を追加してください
];

const animal = [
    "エラー", //エラー処理用
    "ライオン",
    "馬",
    "象",
]

const animalText = [
    "エラー", //エラー処理用
    "ライオンの文章",
    "馬の文章",
    "象の文章",
]

function goToStart() {
    // ページをリロードして最初の画面に戻る
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () { 
    //ホーム画面で質問と結果の画面を非表示
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
});

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
    const resultTextElement = document.getElementById('result-text');
    const animalTextElement = document.getElementById('animal-text');

    // 結果を比較して表示を変更
    let currentAnimalIndex = 0;
    if (questions.length <= totalScore <= 9) { // 6 7 8 9
        currentAnimalIndex = 1;
    } else if (totalScore <= 14) { // 10 11 12 13 14
        currentAnimalIndex = 2;
    } else if (totalScore <= 18) { // 15 16 17 18
        currentAnimalIndex = 3;
    } else {
        currentAnimalIndex = 0; // エラー処理
    }

    //動物を表示
    let resultText = animal[currentAnimalIndex];
    resultTextElement.textContent = resultText;

    //動物のテキストを表示
    let resultAnimalText = animalText[currentAnimalIndex];
    animalTextElement.textContent = resultAnimalText;

    // 質問画面を非表示
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer-form').style.display = 'none';
    resultContainer.style.display = 'block';
}


function calculateTotalScore() {
    // 各質問の得点を合算する
    return scores.reduce((total, score) => total + score, 0);
}
