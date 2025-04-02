document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const testScreen = document.getElementById('test-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionCounter = document.getElementById('question-counter');
    const progressBar = document.querySelector('.progress');
    const mbtiType = document.getElementById('mbti-type');

    // Test variables
    let currentQuestionIndex = 0;
    const answers = [];
    const scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };

    // Initialize the test
    function initTest() {
        currentQuestionIndex = 0;
        answers.length = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);
        
        // Initialize answers array with null values for all questions
        for (let i = 0; i < questions.length; i++) {
            answers.push(null);
        }
    }

    // Navigate to the next question or show results
    function goToNextQuestion() {
        // Check if current question is the last one
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            // If all questions are answered, show results
            const allAnswered = answers.every(answer => answer !== null);
            if (allAnswered) {
                showResults();
            } else {
                alert('请回答所有问题！');
                // Find the first unanswered question
                const firstUnanswered = answers.findIndex(answer => answer === null);
                if (firstUnanswered !== -1) {
                    currentQuestionIndex = firstUnanswered;
                    displayQuestion();
                }
            }
        }
    }

    // Display the current question
    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = `${question.id}. ${question.text}`;
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option.text;
            
            // Check if this option is already selected
            if (answers[currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            
            optionElement.addEventListener('click', () => {
                // Don't proceed if the same option is clicked again
                if (answers[currentQuestionIndex] === index) {
                    return;
                }
                
                // Remove selected class from all options
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to the clicked option
                optionElement.classList.add('selected');
                
                // Save the answer
                answers[currentQuestionIndex] = index;
                
                // Add a small delay before moving to next question
                setTimeout(() => {
                    goToNextQuestion();
                }, 300);
            });
            
            optionsContainer.appendChild(optionElement);
        });

        // Update question counter and progress bar
        questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Disable previous button on first question
        prevBtn.disabled = currentQuestionIndex === 0;
    }

    // Calculate MBTI type based on answers
    function calculateMBTI() {
        // Reset scores
        Object.keys(scores).forEach(key => scores[key] = 0);
        
        // Calculate scores based on answers
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] !== null) {
                const question = questions[i];
                const selectedOption = question.options[answers[i]];
                scores[selectedOption.value]++;
            }
        }
        
        // Determine the four-letter MBTI type
        let type = '';
        type += scores.E > scores.I ? 'E' : 'I';
        type += scores.S > scores.N ? 'S' : 'N';
        type += scores.T > scores.F ? 'T' : 'F';
        type += scores.J > scores.P ? 'J' : 'P';
        
        // Handle tie-breakers according to the rules
        if (scores.E === scores.I) type = type.replace('I', 'I');
        if (scores.S === scores.N) type = type.replace('S', 'N');
        if (scores.T === scores.F) type = type.replace('T', 'F');
        if (scores.J === scores.P) type = type.replace('J', 'P');
        
        return type;
    }

    // Show results
    function showResults() {
        const type = calculateMBTI();
        mbtiType.textContent = type;
        
        // Update the chart bars
        const dimensions = [
            {label1: 'e', label2: 'i', score1: scores.E, score2: scores.I},
            {label1: 's', label2: 'n', score1: scores.S, score2: scores.N},
            {label1: 't', label2: 'f', score1: scores.T, score2: scores.F},
            {label1: 'j', label2: 'p', score1: scores.J, score2: scores.P}
        ];
        
        dimensions.forEach(dim => {
            const total = dim.score1 + dim.score2;
            const percent1 = Math.round((dim.score1 / total) * 100);
            const percent2 = 100 - percent1;
            
            document.getElementById(`${dim.label1}-bar`).style.width = `${percent1}%`;
            document.getElementById(`${dim.label2}-bar`).style.width = `${percent2}%`;
            document.getElementById(`${dim.label1}-value`).textContent = dim.score1;
            document.getElementById(`${dim.label2}-value`).textContent = dim.score2;
        });
        
        // Hide test screen and show result screen
        testScreen.classList.remove('active');
        resultScreen.classList.add('active');
    }

    // Event Listeners
    startBtn.addEventListener('click', () => {
        initTest();
        startScreen.classList.remove('active');
        testScreen.classList.add('active');
        displayQuestion();
    });

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    });

    restartBtn.addEventListener('click', () => {
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
    });

    // Initialize the test when the page loads
    initTest();
}); 