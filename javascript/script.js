// script.js

const questions = [
    "質問1",
    "質問2",
    "質問3",
    // ここに質問を追加してください
];

let currentQuestionIndex = 0;

function startDiagnosis() {
    document.getElementById('start-container').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    questionText.textContent = questions[currentQuestionIndex];
    questionContainer.style.display = 'block';
}

function nextQuestion() {
    const answerForm = document.getElementById('answer-form');
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // ここで選択された回答に対する処理を追加できます

        // 次の質問に進む
        currentQuestionIndex++;

        // 最後の質問でない場合、次の質問を表示
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            answerForm.reset(); // 回答をリセット
        } else {
            // 最後の質問の場合、診断結果を表示するか、別の処理を行うことができます
            alert("診断終了！");
            // ここに診断結果の処理を追加できます
        }
    } else {
        alert("回答を選択してください");
    }
}

// 最初に実行される部分
document.addEventListener("DOMContentLoaded", function () {
    // 初期表示では質問を非表示にする
    document.getElementById('question-container').style.display = 'none';
});
