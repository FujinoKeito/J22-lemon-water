function goToStart() {
    // ページをリロードして最初の画面に戻る
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    //ホーム画面で質問と結果の画面を非表示
    document.getElementById('question-container1').style.display = 'none';
    document.getElementById('question-container2').style.display = 'none';
    document.getElementById('question-container3').style.display = 'none';
    document.getElementById('result-container1').style.display = 'none';
    document.getElementById('result-container2').style.display = 'none';
    document.getElementById('result-container3').style.display = 'none';

});

const questions1 = [ //性格診断
    "Q1. 個性的であることやユニークさを発揮することは何より大切だと思う",//芸術的
    "Q2. 自分のことは後回しにしても他人のお世話をすることがよくある",//社会的
    "Q3. 持っている情報や知識、時間はできるだけ自分のために使いたい",//現実的 研究的
    "Q4. 新しいことに挑戦するのが好き",//芸術的 企業的
    "Q5. 任されたことは忠実にその責任を果たそうとする",//慣習的
    "Q6. 物事を論理的に考えるのが得意だ",//研究的　企業的
    "Q7. 一段上の目標を設定し、自己を向上させるために努力する",//企業的
    "Q8. 社交的で周囲にも自分にとっても楽しい場を作ろうとする",//社会的
    "Q9. 関心があることに集中するためにも、一人になる時間は必要だ",//研究的　
    "Q10. 決められているルールや約束はきちんと守る",//慣習的
    
    // ここに質問を追加してください
];

const questions2 = [//動物診断
    "Q1. 他人との関わり方で当てはまるのは？",
    "Q2. 好奇心の強さで当てはまるのは？",
    "Q3. 複数人で議論するときに当てはまるのは？",
    "Q4. 嫌なことを言われてに怒りが湧いてきたときに当てはまるのは？",
    "Q5. 休日の過ごし方は？",
    "Q6. やらなければならないことがあるときに当てはまるのは？",
    "Q7. 好みの環境は？",
    "Q8. ストレスを感じた時はどうする？",
    "Q9. 他人との関係で当てはまるのは？",
    "Q10. チームではどんな役割が得意？",
    // ここに質問を追加してください
];
const questions3 = [ //マイカラー診断
    "Q1. 波風の立ちそうな状況からは身を引こうとする",
    "Q2. 得た知識や情報をよく考えて分析することが好きだ",
    "Q3. 持っている情報や知識、時間はできるだけ自分のために使いたい",
    "Q4. 任されたことは忠実にその責任を果たそうとする",
    "Q5. 休日は家でまったり過ごすことが多い",
    "Q6. ゆったりとしたペースが好きで、慌てることは少ない",
    "Q7. 他人の目や思惑はあまり気にせずに行動する",
    "Q8. 決められているルールや約束はきちんと守る",
    "Q9. 感情に振り回されることは少ない",
    "Q10. 人とは分けへだてなく公平公正に接する",
    // ここに質問を追加してください
];

let currentQuestionIndex1 = 0;
let currentQuestionIndex2 = 0;
let currentQuestionIndex3 = 0; //質問の要素番号を指定する変数
let scores1 = Array(questions1.length).fill(0); // 各質問の得点を保存する配列
let scores2 = Array(questions2.length).fill(0);
let scores3 = Array(questions3.length).fill(0);


let com = 0;//企業
let res = 0;//研究
let real = 0;//現実
let soci = 0;//社会
let art = 0;//芸術
let cus = 0;//慣習
let cat = 0;
let dog = 0;
let lion = 0;
let pig = 0;
let elephant = 0;
let koala = 0;

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
    if (scores1[answerIndex] === 1) {
        radioNodeList = answer_radio.elements[0].checked = true;
    } else if (scores1[answerIndex] === 2) {
        radioNodeList = answer_radio.elements[1].checked = true;
    } else {
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

    const questionContainer = document.getElementById('question-container2');
    const questionText = document.getElementById('question-text2');
    questionText.textContent = questions2[currentQuestionIndex2];
    questionContainer.style.display = 'block';

    const answerContainer0 = document.getElementById('answer-form2-0');
    answerContainer0.style.display = 'none';
    const answerContainer1 = document.getElementById('answer-form2-1');
    answerContainer1.style.display = 'none';
    const answerContainer2 = document.getElementById('answer-form2-2');
    answerContainer2.style.display = 'none';
    const answerContainer3 = document.getElementById('answer-form2-3');
    answerContainer3.style.display = 'none';
    const answerContainer4 = document.getElementById('answer-form2-4');
    answerContainer4.style.display = 'none';
    const answerContainer5 = document.getElementById('answer-form2-5');
    answerContainer5.style.display = 'none';
    const answerContainer6 = document.getElementById('answer-form2-6');
    answerContainer6.style.display = 'none';
    const answerContainer7 = document.getElementById('answer-form2-7');
    answerContainer7.style.display = 'none';
    const answerContainer8 = document.getElementById('answer-form2-8');
    answerContainer8.style.display = 'none';
    const answerContainer9 = document.getElementById('answer-form2-9');
    answerContainer9.style.display = 'none';

    //ラジオボタンの入力履歴を設定
    const answerIndex = currentQuestionIndex2;
    let answer_radio = document.getElementById('answer-form2-' + currentQuestionIndex2);

    if (scores2[answerIndex] === 1) {
        radioNodeList = answer_radio.elements[0].checked = true;
    } else if (scores2[answerIndex] === 2) {
        radioNodeList = answer_radio.elements[1].checked = true;
    } else {
        const answerForm = document.getElementById('answer-form2-' + currentQuestionIndex2);
        answerForm.reset();
    }

    if (currentQuestionIndex2 === 0) { //1問目の時だけ戻るボタンを非表示にする
        answerContainer0.style.display = 'block';
    } else if (currentQuestionIndex2 === 1) {
        answerContainer1.style.display = 'block';
    } else if (currentQuestionIndex2 === 2) {
        answerContainer2.style.display = 'block';
    } else if (currentQuestionIndex2 === 3) {
        answerContainer3.style.display = 'block';
    } else if (currentQuestionIndex2 === 4) {
        answerContainer4.style.display = 'block';
    } else if (currentQuestionIndex2 === 5) {
        answerContainer5.style.display = 'block';
    } else if (currentQuestionIndex2 === 6) {
        answerContainer6.style.display = 'block';
    } else if (currentQuestionIndex2 === 7) {
        answerContainer7.style.display = 'block';
    } else if (currentQuestionIndex2 === 8) {
        answerContainer8.style.display = 'block';
    } else if (currentQuestionIndex2 === 9) {
        answerContainer9.style.display = 'block';
    } else {

    }
}

function showQuestion3() { //マイカラー診断
    console.log(currentQuestionIndex3);
    console.log(scores3);
    document.getElementById('question-mode3').textContent = 'マイカラー診断';
    const questionContainer = document.getElementById('question-container3');
    const questionText = document.getElementById('question-text3');
    questionText.textContent = questions3[currentQuestionIndex3];
    questionContainer.style.display = 'block';

    //ラジオボタンの入力履歴を設定
    const answerIndex = currentQuestionIndex3;
    let answer_radio = document.getElementById('answer-form3');
    if (scores3[answerIndex] === 3) {
        radioNodeList = answer_radio.elements[0].checked = true;
    } else if (scores3[answerIndex] === 1) {
        radioNodeList = answer_radio.elements[1].checked = true;
    } else if (scores3[answerIndex] === 2) {
        radioNodeList = answer_radio.elements[2].checked = true;
    } else {
        const answerForm = document.getElementById('answer-form3');
        answerForm.reset();
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

    switch (currentQuestionIndex1) {
        case 0:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    art += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    cus += 3;
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
            break;
        case 1:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    soci += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    real += 3;
                    art += 3;
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
            break;
        case 2:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    res += 5;
                    real += 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    soci += 3;
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
            break;
        case 3:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    art += 5;
                    com += 3;
                    res += 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    cus += 3;
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
            break;
        case 4:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    cus += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    art += 3;
                    cus -= 3;
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
            break;
        case 5:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    res += 5;
                    real += 3;
                    com += 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    cus += 1;
                    res -= 3;
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
            break;
        case 6:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    com += 5;
                    res += 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    com -= 3;
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
            break;
        case 7:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    soci += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    art += 1;
                    real += 1;
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
            break;
        case 8:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    res += 5;
                    real += 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    soci += 2;
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
            break;
        case 9:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    cus += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    art += 3;
                    cus -= 3;
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
            break;
        case 10:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    soci += 5;
                    com += 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    soci -= 3;
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
            break;
        case 11:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    real += 5;
                    com += 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    real -= 3;
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
            break;
        case 12:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    com += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    com -= 3;
                    cus += 2;
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
            break;
        case 13:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    art += 5;
                    real += 3
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    soci += 5;
                    cus += 3;
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
            break;
        case 14:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    com -= 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    com += 3;
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
            break;
        case 15:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    real += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    art += 1;
                    cus += 1;
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
            break;
        case 16:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    art += 5;
                    cus -= 3;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    cus += 5;
                    res += 2;
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
            break;
        case 17:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    real += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    cus += 1;
                    com += 1;
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
            break;
        case 18:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    soci += 5;
                    art -= 1;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    res += 1;
                    real += 1;
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
            break;
        case 19:
            if (selectedAnswer) {
                const answerIndex = currentQuestionIndex1;
                if (selectedAnswer.value === "yes") { //「はい」を選択で+3点
                    res += 5;
                } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
                    soci += 1;
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
            break;
    }
}

function nextQuestion2() {
    //「次へ」ボタンが押されたときの処理
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const selectedAnswer1 = document.querySelector('input[name="answer1"]:checked');
    const selectedAnswer2 = document.querySelector('input[name="answer2"]:checked');
    const selectedAnswer3 = document.querySelector('input[name="answer3"]:checked');
    const selectedAnswer4 = document.querySelector('input[name="answer4"]:checked');
    const selectedAnswer5 = document.querySelector('input[name="answer5"]:checked');
    const selectedAnswer6 = document.querySelector('input[name="answer6"]:checked');
    const selectedAnswer7 = document.querySelector('input[name="answer7"]:checked');
    const selectedAnswer8 = document.querySelector('input[name="answer8"]:checked');
    const selectedAnswer9 = document.querySelector('input[name="answer9"]:checked');
    switch (currentQuestionIndex2) {
        case 0:
            if (selectedAnswer) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer.value === "1") { //「はい」を選択で+3点
                    cat += 1;
                    koala += 3;
                    pig += 1;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer.value === "2") { //「いいえ」を選択で+1点
                    dog += 1;
                    lion += 1;
                    elephant += 1;
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
            break;
        case 1:
            if (selectedAnswer1) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer1.value === "1") { //「はい」を選択で+3点
                    koala += 1;
                    cat += 1;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer1.value === "2") { //「いいえ」を選択で+1点
                    dog += 1;
                    lion += 1;
                    pig += 1;
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
            break;
        case 2:
            if (selectedAnswer2) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer2.value === "1") { //「はい」を選択で+3点
                    lion += 3;
                    cat += 2;
                    pig += 2;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer2.value === "2") { //「いいえ」を選択で+1点
                    dog += 2;
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
            break;
        case 3:
            if (selectedAnswer3) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer3.value === "1") { //「はい」を選択で+3点
                    pig += 2;
                    cat += 2;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer3.value === "2") { //「いいえ」を選択で+1点
                    elephant += 3;
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
            break;
        case 4:
            if (selectedAnswer4) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer4.value === "1") { //「はい」を選択で+3点
                    koala += 3;
                    cat += 1;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer4.value === "2") { //「いいえ」を選択で+1点
                    pig += 2;
                    dog += 1;
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
            break;
        case 5:
            if (selectedAnswer5) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer5.value === "1") { //「はい」を選択で+3点
                    elephant += 1;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer5.value === "2") { //「いいえ」を選択で+1点
                    pig += 1;
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
            break;
        case 6:
            if (selectedAnswer6) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer6.value === "1") { //「はい」を選択で+3点
                    koala += 2;
                    cat += 1;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer6.value === "2") { //「いいえ」を選択で+1点
                    dog += 1;
                    pig += 2;
                    lion += 1;
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
            break;
        case 7:
            if (selectedAnswer7) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer7.value === "1") { //「はい」を選択で+3点
                    koala += 1;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer7.value === "2") { //「いいえ」を選択で+1点
                    dog += 1;
                    elephant += 1;
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
            break;
        case 8:
            if (selectedAnswer8) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer8.value === "1") { //「はい」を選択で+3点
                    cat += 2;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer8.value === "2") { //「いいえ」を選択で+1点
                    lion += 2;
                    dog += 2;
                    elephant += 2;
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
            break;
        case 9:
            if (selectedAnswer9) {
                // ここで選択された回答に対する処理を追加
                const answerIndex = currentQuestionIndex2;
                if (selectedAnswer9.value === "1") { //「はい」を選択で+3点
                    lion += 3;
                    elephant += 2;
                    scores2[answerIndex] = 1;
                } else if (selectedAnswer9.value === "2") { //「いいえ」を選択で+1点
                    dog += 1;
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
            break;
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
        } else if (selectedAnswer.value === "no") { //「いいえ」を選択で+1点
            scores3[answerIndex] = 1;
        } else if (selectedAnswer.value === "neutral") { //「どちらでもない」を選択で+2点
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

function showResult1() {
    // 結果画面の表示

    const resultContainer = document.getElementById('result-container1');
    const resultTextElement = document.getElementById('result-text1');
    const resultTextElement1 = document.getElementById('result-text1-1');
    const resultTextElement2 = document.getElementById('result-text1-2');
    const resultTextElement3 = document.getElementById('result-text1-3');

    // 結果を比較して表示を変更
    let resultText = "";
    let resultText1 = "";
    let resultText2 = "";
    let resultText3 = "";
    if (com > res && com > real && com > soci && com > art && com > cus) {
        resultText = "企業的タイプ";
        resultTextElement.style.color = "gold";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('personalityimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/personality1.png');
        resultText1 = "人やデータを扱う仕事を得意としており、リーダーシップを持ち合わせています。";
        resultText2 = "エネルギーにあふれており、権力やお金が好きな野心家な傾向があって社交性・積極性に優れていますが、他人に従うことは好みません。";
        resultText3 = "政治家や経営者、管理者などの仕事に向いています。";
    } else if (res > com && res > real && res > soci && res > art && res > cus) {
        resultText = "研究的タイプ";
        resultTextElement.style.color = "green";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('personalityimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/personality2.png');
        resultText1 = "論理的な思考力があり知的好奇心があります。データを扱い研究や調査、分析をするのが得意です。";
        resultText2 = "また、個人での活動を好みグループで活動することは好きでなく、人への指導や取りまとめることは不得意です。";
        resultText3 = "論理的思考能力を活かせる科学や医療、エンジニアなどの仕事に向いています。";
    } else if (real > com && real > res && real > soci && real > art && real > cus) {
        resultText = "現実的タイプ";
        resultTextElement.style.color = "gray";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('personalityimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/personality3.png');
        resultText1 = "実用性や協調性を重視する性格です。競争心や自己主張も強く何事もストイックな姿勢で取り組みます。";
        resultText2 = "仕組みや手順の筋道がはっきりとしているものを得意とする反面、人を相手にするようなあいまいさを含む仕事は好まず、不得意です。";
        resultText3 = "農家や漁師、消防士などのモノを扱う技術的な仕事に向いています。";
    } else if (soci > com && soci > res && soci > real && soci > art && soci > cus) {
        resultText = "社会的タイプ";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('personalityimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/personality4.png');
        resultTextElement.style.color = "blue";
        resultText1 = "人と関わることや奉仕活動を好みます。";
        resultText2 = "人の役に立つことや直接感謝されることに対して喜びを感じ、他人の気持ちを理解して良好な人間関係を構築することを得意としています。";
        resultText2 = "コミュニケーションを取る教師やカウンセラー、販売店員など対人の仕事に向いています。";
    } else if (art > com && art > res && art > real && art > soci && art > cus) {
        resultText = "芸術的タイプ";
        resultTextElement.style.color = "purple";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('personalityimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/personality5.png');
        resultText1 = "独創的な性格でクリエイティブな活動を好みます。また身につけるものやライフスタイルには独特のこだわりを持っています。";
        resultText2 = "慣習的なことを嫌い、型にはめられることや自由を制限されると窮屈だと感じます。";
        resultText3 = "想像力を活かせるデザイナーや音楽家、俳優などの仕事に向いています。";
    } else if (cus > com && cus > rea && cus > real && cus > soci && cus > art) {
        resultText = "慣習的タイプ";
        resultTextElement.style.color = "light blue";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('personalityimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/personality6.png');
        resultText1 = "秩序やルールを守り責任感が強い性格です。冷静で何事にも動じない安定した心を持っています。";
        resultText2 = "資料を体系的に整理することや反復する作業を正確に行るような仕事に関心を持っています。組織を主導するよりも上の者に従うことのほうを好んでいます。";
        resultText3 = "几帳面な部分を活かせる事務員や税理士、警備員などの仕事に向いています。";
    } else {
        resultText = "慣習的タイプ";
        resultTextElement.style.color = "light blue";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('personalityimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/personality7.png');
        resultText1 = "秩序やルールを守り責任感が強い性格です。冷静で何事にも動じない安定した心を持っています。";
        resultText2 = "資料を体系的に整理することや反復する作業を正確に行るような仕事に関心を持っています。組織を主導するよりも上の者に従うことのほうを好んでいます。";
        resultText3 = "几帳面な部分を活かせる事務員や税理士、警備員などの仕事に向いています。";
    }

    resultTextElement.textContent = resultText;
    resultTextElement1.textContent = resultText1;
    resultTextElement2.textContent = resultText2;
    resultTextElement3.textContent = resultText3;

    // 質問画面を非表示
    document.getElementById('question-container1').style.display = 'none';
    document.getElementById('answer-form1').style.display = 'none';
    resultContainer.style.display = 'block';
}

function calculateTotalScore1() {
    // 各質問の得点を合算する
    return scores1.reduce((total, score) => total + score, 0);
}

function showResult2() {
    // 結果画面の表示
    const resultContainer = document.getElementById('result-container2');
    const resultTextElement = document.getElementById('result-text2');
    const resultTextElement2 = document.getElementById('result-text2-1');
    const resultTextElement3 = document.getElementById('result-text2-2');
    const resultTextElement4 = document.getElementById('result-text2-3');

    // 結果を比較して表示を変更
    let resultText = "";
    let resultText1 = "";
    let resultText2 = "";
    let resultText3 = "";
    if (dog > cat && dog > lion && dog > koala && dog > pig && dog > elephant) {
        resultText = "イヌ";
        resultTextElement.style.color = "sienna";
        resultText1 = "イヌのアピールポイントは社交性、忠誠心です。";
        resultText2 = "素直で人懐っこく人見知りしない性格でコミュニケーションが得意です。";
        resultText3 = "また忠誠心が強く、一度信頼した人には従順に従う習性があるので言われたことを忠実に実行できる力があります。";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('animalimage');
            imageElement.src = imagePath;
        }
        // 画像を表示する
        setImageSource('img/animal1.png');
    } else if (cat > dog && cat > lion && cat > koala && cat > pig && cat > elephant) {
        resultText = "ネコ";
        resultTextElement.style.color = "peach";
        resultText1 = "ネコのアピールポイントは洞察力と自己主張です。";
        resultText2 = "ネコは繊細な感受性と優れた洞察力を持っています。彼らは微細な変化や他人の感情を敏感に察知し、共感することができます。彼らは言葉だけでなく、相手の態度や表情からも多くの情報を読み取ることができます。また、直感的に物事を理解し、深い洞察力を持っているため、周囲の人たちから頼りにされることも多いです。";
        resultText3 = "また自己主張が強く、自分の意見や信念を持っています。彼らは他人の意見や評価に左右されず、自分の道を進むことができます。";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('animalimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/animal2.png');
    } else if (lion > dog && lion > cat && lion > koala && lion > pig && lion > elephant) {
        resultText = "ライオン";
        resultTextElement.style.color = "gold";
        resultText1 = "ライオンのアピールポイントは責任感やリーダーシップです。";
        resultText2 = "ライオンは「百獣の王」とも呼ばれ、群れで行動している動物です。群れのメンバーを大切にすることから、リーダシップ・協調性をアピールできます。";
        resultText3 = "また責任感があり、与えられた役割をやり遂げる力があります。";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('animalimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/animal3.png');
    } else if (koala > dog && koala > cat && koala > lion && koala > pig && koala > elephant) {
        resultText = "コアラ";
        resultTextElement.style.color = "gray";
        resultText1 = "コアラのアピールポイントはマイペースや安心感です。";
        resultText2 = "コアラは穏やかでのんびりした性格が一般的です。なので他人に左右されることなく自分のペースで役割をこなすことができます。";
        resultText3 = "また落ち着いており、周囲の人とのトラブラや衝突をさける調和性も持ち合わせています。";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('animalimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/animal4.png');
    } else if (pig > dog && pig > cat && pig > lion && pig > koala && pig > elephant) {
        resultText = "イノシシ";
        resultTextElement.style.color = "brown";
        resultText1 = "イノシシのアピールポイントは向上心や警戒心です。";
        resultText2 = "一つのやりたい物事に対する熱量を持っており、目標に向けて努力できることをアピールできます。";
        resultText3 = "また警戒心が強く、新しい環境や物事に対して慎重で注意深い側面も持ち合わせています。";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('animalimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/animal5.png');
    } else if (elephant > dog && elephant > cat && elephant > lion && elephant > koala && elephant > pig) {
        resultText = "ゾウ";
        resultTextElement.style.color = "skyblue";
        resultText1 = "ゾウのアピールポイントは社交性や包容力です。";
        resultText2 = "ゾウは群れで行動しており、仲間と協力して生活しています。なので高いコミュニケーション力や協調性を持っています。";
        resultText3 = "また仲間思いで、周りに優しく大切にする包容力があります。";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('animalimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/animal6.png');
    } else {
        resultText = "サル"; // それ以外の場合にも対応する場合
        resultTextElement.style.color = "orange";
        resultText1 = "サルのアピールポイントは好奇心や行動力です。";
        resultText2 = "サルは好奇心旺盛な性格をしているため、新しいことを学ぶことや挑戦することが好きです。";
        resultText3 = "また行動力があり、興味を持ったことにはすぐに行動に移すフットワークの軽さも持ち合わせています。"
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('animalimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/animal7.png');
    }

    resultTextElement.textContent = resultText;
    resultTextElement2.textContent = resultText1;
    resultTextElement3.textContent = resultText2;
    resultTextElement4.textContent = resultText3;

    // 質問画面を非表示
    document.getElementById('question-container2').style.display = 'none';
    resultContainer.style.display = 'block';
}


function calculateTotalScore2() {
    // 各質問の得点を合算する
    return scores2.reduce((total, score) => total + score, 0);

}
function showResult3() {
    // 結果画面の表示
    const totalScore = calculateTotalScore3();  // calculateTotalScore の結果を変数に代入
    console.log(scores3);
    console.log("結果" + totalScore);

    const resultContainer = document.getElementById('result-container3');
    const resultTextElement = document.getElementById('result-text3');
    const resultTextElement1 = document.getElementById('result-text3-1');
    const resultTextElement2 = document.getElementById('result-text3-2');


    // 結果を比較して表示を変更
    let resultText3 = "";
    let resultText4 = "";
    let resultText5 = "";
    if (totalScore <= 12) {
        resultText3 = "青";
        resultTextElement.style.color = "blue";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('colorimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/color1.png');
        resultText4 = "青色に当てはまる性格は「まじめ・理性的・我慢強い」です。";
        resultText5 = "また冷静で責任感が強く、非常に頼れる存在ですが、プライドが高い傾向や消極的な傾向にあるので取っ付きにくい印象を持たれることも。";
    } else if (totalScore <= 16) {
        resultText3 = "紫";
        resultTextElement.style.color = "purple";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('colorimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/color2.png');
        resultText4 = "紫色に当てはまる性格は「個性的・感受性が強い・ミステリアス」です。";
        resultText5 = "また身につけるものやライフスタイルには独特のこだわりを持ち、オリジナリティの高い美意識を持っています。人と違う側面を持っていることから「変わった人」と思われることも少なくありません。";
    } else if (totalScore <= 20) {
        resultText3 = "緑";
        resultTextElement.style.color = "green";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('colorimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/color3.png');
        resultText4 = "緑色に当てはまる性格は「平和主義・礼儀正しい・謙虚」です。";
        resultText5 = "また人に優しく気配りもでき誰からも好印象を持たれます。しかし、優しいあまり頼まれたら断れない、イヤなことでもイヤと言えないといった部分があり、他人に都合よくつかわれてしまうことや自分の気持ちを率直に口に出せないため、ついついストレスをためこんでしまう傾向にあります。";
    } else if (totalScore <= 24) {
        resultText3 = "黄";
        resultTextElement.style.color = "yellow";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('colorimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/color4.png');
        resultText4 = "黄色に当てはまる性格は「好奇心旺盛・マイペース・ユーモラス」です。";
        resultText5 = "また新しいものや目立つものが好きで興味のあることに対しては勉強熱心です。一方で飽きっぽい側面や物事をあまり深く考えず行動することもあり気分屋な性格ともいえます。";
    } else if (totalScore <= 27) {
        resultText3 = "オレンジ";
        resultTextElement.style.color = "orange";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('colorimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/color5.png');
        resultText4 = "オレンジに当てはまる性格は「社交的・親しみやすい・ポジティブ」です。";
        resultText5 = "また赤を好む人に比べると他人を思いやるサービス精神にも恵まれていて、人にも愛される親しみやすさの持ち主です。しかし、周囲に人がいなくなると不安になるといった一面もあり、ついつい周囲に流されてしまうこともあります。";
    } else if (totalScore <= 30) {
        resultText3 = "赤";
        resultTextElement.style.color = "red";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('colorimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/color6.png');
        resultText4 = "赤色に当てはまる性格は「目立ちたがり・積極的・リーダーシップがある」です。";
        resultText5 = "またエネルギッシュで、夢や目標の実現に向けて努力することを惜しまないだけでなく、スピード感のある決断力も持ち合わせています。しかし、深く考えず行動してしまうことや、失敗しても反省せず、他人のせいにしたり、気分にムラがあるといった側面もあります。";
    } else {
        resultText3 = "灰"; // それ以外の場合にも対応する場合
        resultTextElement.style.color = "gray";
        function setImageSource(imagePath) {
            const imageElement = document.getElementById('colorimage');
            imageElement.src = imagePath;
        }
        // 例: 画像を表示する
        setImageSource('img/color7.png');
        resultText4 = "灰色に当てはまる性格は「控えめ、用心深い、デリケート」です。";
        resultText5 = "また自分を高めるためには努力を惜しまず、仕事で結果を出す人も多いです。一方で色の通り白黒はっきりつけない優柔不断な面があるので行動を起こすのに時間がかかることもあります。";
    }

    resultTextElement.textContent = resultText3;
    resultTextElement1.textContent = resultText4;
    resultTextElement2.textContent = resultText5;

    // 質問画面を非表示
    document.getElementById('question-container3').style.display = 'none';
    document.getElementById('answer-form3').style.display = 'none';
    resultContainer.style.display = 'block';
}


function calculateTotalScore3() {
    // 各質問の得点を合算する
    return scores3.reduce((total, score) => total + score, 0);
}
