// Supply Chain Study Game Data

// Chapter 7 - Supplier Relationship Management
const chapter7Terms = {
    "SUPPLIER": "A company or individual that provides goods or services to another business",
    "PROCUREMENT": "The process of acquiring goods and services from external sources",
    "VENDOR": "A business entity that sells products or services",
    "NEGOTIATION": "Discussion between buyer and seller to agree on terms",
    "CONTRACT": "A legally binding agreement between supplier and buyer",
    "QUALITY": "The standard of excellence for products or services",
    "CERTIFICATION": "Official approval that a supplier meets specific standards",
    "AUDIT": "An examination of supplier operations and records",
    "PERFORMANCE": "How well a supplier meets agreed-upon standards",
    "COLLABORATION": "Working together with suppliers for mutual benefit",
    "RELATIONSHIP": "The connection and interaction between buyer and supplier",
    "INTEGRATION": "Combining supplier operations with company processes",
    "TRANSPARENCY": "Open and honest communication with suppliers",
    "ETHICS": "Moral principles in supplier relationships",
    "LOYALTY": "Long-term commitment to supplier partnerships"
};

// Chapter 8 - Operations Management
const chapter8Terms = {
    "OPERATIONS": "The activities involved in producing goods or delivering services",
    "EFFICIENCY": "Using resources optimally to maximize output",
    "LEAN": "Manufacturing approach focused on eliminating waste",
    "CONTINUOUS": "Ongoing process of improvement in operations",
    "INVENTORY": "Stock of materials, components, or finished goods",
    "CAPACITY": "Maximum production ability of a facility",
    "SCHEDULING": "Planning when work or production will occur",
    "RESOURCE": "Materials, labor, or equipment needed for operations",
    "PROCESS": "A sequence of steps to achieve a desired outcome",
    "QUALITY": "Degree to which products meet specifications",
    "CONTROL": "Monitoring and regulating operations",
    "IMPROVEMENT": "Making operations better and more efficient",
    "PRODUCTION": "The process of creating goods",
    "DEMAND": "Customer requirement for products or services",
    "FORECAST": "Prediction of future demand or needs"
};

// Chapter 9 - Logistics & Warehousing
const chapter9Terms = {
    "LOGISTICS": "Management of the movement and storage of goods",
    "WAREHOUSING": "Storage of products before distribution",
    "DISTRIBUTION": "Process of delivering products to customers",
    "TRANSPORTATION": "Moving goods from one location to another",
    "FULFILLMENT": "Process of receiving and delivering customer orders",
    "INVENTORY": "Stock held in warehouses or facilities",
    "HANDLING": "Physical movement and care of materials",
    "STORAGE": "Keeping products in a safe location",
    "NETWORK": "System of facilities and routes for distribution",
    "LOCATION": "Physical placement of warehouses or distribution centers",
    "ROUTE": "Path taken by transportation vehicles",
    "COST": "Expense of moving and storing goods",
    "TIME": "How long it takes to deliver products",
    "TRACKING": "Monitoring the location of shipments",
    "OPTIMIZATION": "Making the logistics system work most efficiently"
};

// Quiz Questions
const quizQuestions = [
    // Chapter 7 Questions
    {
        chapter: 7,
        question: "What is the primary goal of supplier relationship management?",
        options: [
            "To reduce supplier costs at all times",
            "To develop long-term partnerships that create value for both parties",
            "To eliminate all negotiations",
            "To have multiple identical suppliers"
        ],
        correct: 1,
        explanation: "Good supplier relationships are built on mutual value creation and long-term partnership."
    },
    {
        chapter: 7,
        question: "What does supplier certification ensure?",
        options: [
            "The supplier is the cheapest option",
            "The supplier meets specific quality, safety, or operational standards",
            "The supplier has been in business the longest",
            "The supplier is located nearby"
        ],
        correct: 1,
        explanation: "Certification is an official approval that a supplier meets agreed-upon standards."
    },
    {
        chapter: 7,
        question: "Which of these is a key component of supplier evaluation?",
        options: [
            "Only price comparison",
            "Performance metrics like quality, delivery, and responsiveness",
            "Supplier's company size alone",
            "Color of supplier's logo"
        ],
        correct: 1,
        explanation: "Performance evaluation includes quality, on-time delivery, and responsiveness."
    },
    {
        chapter: 7,
        question: "What is procurement?",
        options: [
            "Selling products to customers",
            "The process of acquiring goods and services from external sources",
            "Manufacturing products",
            "Delivering finished goods"
        ],
        correct: 1,
        explanation: "Procurement is the acquisition of goods and services needed by an organization."
    },
    {
        chapter: 7,
        question: "Why is transparency important in supplier relationships?",
        options: [
            "It increases costs unnecessarily",
            "It allows for open communication and problem-solving",
            "It is not important at all",
            "It only benefits the supplier"
        ],
        correct: 1,
        explanation: "Transparency builds trust and enables effective collaboration."
    },

    // Chapter 8 Questions
    {
        chapter: 8,
        question: "What is the main focus of Lean manufacturing?",
        options: [
            "Hiring fewer employees",
            "Eliminating waste and improving efficiency",
            "Reducing product quality",
            "Increasing inventory levels"
        ],
        correct: 1,
        explanation: "Lean manufacturing focuses on eliminating waste and maximizing value."
    },
    {
        chapter: 8,
        question: "What does operational efficiency measure?",
        options: [
            "How long employees work",
            "How well resources are used to produce output",
            "The color of the facility",
            "The age of equipment"
        ],
        correct: 1,
        explanation: "Efficiency measures how effectively resources are converted into products."
    },
    {
        chapter: 8,
        question: "What is capacity in operations management?",
        options: [
            "The cost of materials",
            "The number of employees",
            "The maximum amount of production possible",
            "The time operations are open"
        ],
        correct: 2,
        explanation: "Capacity is the maximum amount a facility can produce in a given period."
    },
    {
        chapter: 8,
        question: "What is continuous improvement?",
        options: [
            "Keeping everything the same",
            "Only making changes once per year",
            "Ongoing process of making operations better",
            "Firing employees regularly"
        ],
        correct: 2,
        explanation: "Continuous improvement is an ongoing effort to enhance operations."
    },
    {
        chapter: 8,
        question: "Why is inventory control important?",
        options: [
            "To maximize storage space usage",
            "To maintain sufficient stock while minimizing excess inventory and costs",
            "To buy as much as possible",
            "To never run out of any item"
        ],
        correct: 1,
        explanation: "Good inventory control balances availability with cost efficiency."
    },

    // Chapter 9 Questions
    {
        chapter: 9,
        question: "What is the difference between logistics and warehousing?",
        options: [
            "They are the same thing",
            "Logistics involves movement; warehousing is storage",
            "Warehousing involves movement; logistics is storage",
            "Logistics is only for small companies"
        ],
        correct: 1,
        explanation: "Logistics covers movement of goods; warehousing specifically handles storage."
    },
    {
        chapter: 9,
        question: "What does distribution refer to in supply chain?",
        options: [
            "Making products more attractive",
            "Delivering products from suppliers to customers",
            "Designing packaging",
            "Advertising products"
        ],
        correct: 1,
        explanation: "Distribution is the process of getting products to customers."
    },
    {
        chapter: 9,
        question: "Which of these is a key metric in logistics performance?",
        options: [
            "Employee happiness alone",
            "On-time delivery and cost efficiency",
            "Building color",
            "Office furniture quality"
        ],
        correct: 1,
        explanation: "Key logistics metrics include delivery time, accuracy, and cost."
    },
    {
        chapter: 9,
        question: "What is order fulfillment?",
        options: [
            "Creating new products",
            "Selling products to wholesalers",
            "Receiving and delivering customer orders",
            "Manufacturing goods"
        ],
        correct: 2,
        explanation: "Fulfillment is the complete process of picking, packing, and delivering orders."
    },
    {
        chapter: 9,
        question: "Why is tracking important in logistics?",
        options: [
            "It increases shipping costs",
            "It allows customers and companies to know where shipments are",
            "It slows down delivery",
            "It is not important"
        ],
        correct: 1,
        explanation: "Tracking provides visibility and enables proactive problem-solving."
    },

    // Mixed Chapter Questions
    {
        chapter: "mixed",
        question: "Which concept applies across Supplier Management, Operations, and Logistics?",
        options: [
            "Only cost reduction",
            "Continuous improvement and efficiency",
            "Increasing product prices",
            "Hiring more staff"
        ],
        correct: 1,
        explanation: "Continuous improvement and efficiency are key in all supply chain areas."
    },
    {
        chapter: "mixed",
        question: "What is the ultimate goal of supply chain management?",
        options: [
            "To maximize supplier costs",
            "To deliver customer value efficiently",
            "To create the most complex process",
            "To employ as many people as possible"
        ],
        correct: 1,
        explanation: "Supply chain success means delivering value to customers efficiently."
    }
];

// Chapter Study Materials - Simplified
const chapterMaterials = {
    "7": `<strong>Chapter 7: Supplier Relationship Management</strong><br><br>
        <strong>Key Topics:</strong><br>
        • Supplier Selection & Evaluation<br>
        • Vendor Management<br>
        • Procurement Process<br>
        • Contracts & Negotiations<br>
        • Quality Standards & Certifications<br>
        • Performance Metrics<br>
        • Strategic Partnerships<br>
        • Risk Management<br><br>
        <strong>Key Terms:</strong> Procurement, Vendor, Contract, Certification, Audit, Performance`,
    "8": `<strong>Chapter 8: Operations Management</strong><br><br>
        <strong>Key Topics:</strong><br>
        • Lean Production & Waste Elimination<br>
        • Just-in-Time (JIT) Manufacturing<br>
        • Capacity Planning<br>
        • Quality Control<br>
        • Process Improvement<br>
        • Inventory Management<br>
        • Production Scheduling<br>
        • Six Sigma Methodology<br><br>
        <strong>Key Terms:</strong> Lean, Efficiency, Capacity, Inventory, Control, Improvement`,
    "9": `<strong>Chapter 9: Logistics & Warehousing</strong><br><br>
        <strong>Key Topics:</strong><br>
        • Warehouse Management<br>
        • Distribution Networks<br>
        • Transportation Modes<br>
        • Order Fulfillment<br>
        • Supply Chain Visibility<br>
        • Last-Mile Delivery<br>
        • Location Strategy<br>
        • Cost Optimization<br><br>
        <strong>Key Terms:</strong> Logistics, Warehousing, Distribution, Transportation, Tracking`,
    "all": `<strong>Supply Chain Overview</strong><br><br>
        <strong>All Chapters Cover:</strong><br>
        • Chapter 7: Managing suppliers for quality<br>
        • Chapter 8: Operating efficiently<br>
        • Chapter 9: Moving products to customers<br><br>
        Select a specific chapter to see detailed materials!`
};


// Hangman Functions
function getRandomTerm(chapter) {
    let terms = [];
    if (chapter === 'all') {
        terms = Object.keys(chapter7Terms).concat(Object.keys(chapter8Terms)).concat(Object.keys(chapter9Terms));
    } else if (chapter === '7') {
        terms = Object.keys(chapter7Terms);
    } else if (chapter === '8') {
        terms = Object.keys(chapter8Terms);
    } else if (chapter === '9') {
        terms = Object.keys(chapter9Terms);
    }
    return terms[Math.floor(Math.random() * terms.length)];
}

function getTermDefinition(term) {
    if (chapter7Terms[term]) return chapter7Terms[term];
    if (chapter8Terms[term]) return chapter8Terms[term];
    if (chapter9Terms[term]) return chapter9Terms[term];
    return "Supply chain term";
}

function resetHangman() {
    const chapter = document.getElementById('hangmanChapter').value;
    hangmanWord = getRandomTerm(chapter).toUpperCase();
    hangmanHint = getTermDefinition(hangmanWord);
    guessedLetters = [];
    wrongGuesses = 0;
    selectedAnswer = null;
    document.getElementById('hangmanResult').innerHTML = '';
    drawHangman();
    updateWordDisplay();
    createLetterButtons();
}

function drawHangman() {
    const hangmanStages = [
        ` 
  +---+
  |   |
      |
      |
      |
      |
=========`,
        `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
        `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
        `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
        `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
        `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
        `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
    ];
    document.getElementById('hangmanDrawing').textContent = hangmanStages[wrongGuesses];
    document.getElementById('guessesLeft').textContent = maxWrongGuesses - wrongGuesses;
}

function updateWordDisplay() {
    let display = '';
    for (let letter of hangmanWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    document.getElementById('wordDisplay').textContent = display.trim();
    document.getElementById('hint').innerHTML = `<strong>Hint:</strong> ${hangmanHint}`;
}

function createLetterButtons() {
    const letterContainer = document.getElementById('letterButtons');
    letterContainer.innerHTML = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (let letter of letters) {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.className = 'letter-btn';
        btn.onclick = () => guessLetter(letter, btn);
        if (guessedLetters.includes(letter)) {
            btn.disabled = true;
        }
        letterContainer.appendChild(btn);
    }
}

function guessLetter(letter, btn) {
    guessedLetters.push(letter);
    btn.disabled = true;

    if (!hangmanWord.includes(letter)) {
        wrongGuesses++;
    }

    drawHangman();
    updateWordDisplay();
    checkHangmanResult();
}

function checkHangmanResult() {
    const wordComplete = hangmanWord.split('').every(letter => guessedLetters.includes(letter));
    
    if (wordComplete) {
        setTimeout(() => {
            document.getElementById('hangmanResult').innerHTML = `
                <div class="game-result">
                    <div class="result-message win">🎉 You Won! 🎉</div>
                    <p>The word was: <strong>${hangmanWord}</strong></p>
                    <p>${hangmanHint}</p>
                </div>
            `;
            document.getElementById('letterButtons').innerHTML = '';
        }, 100);
    } else if (wrongGuesses >= maxWrongGuesses) {
        setTimeout(() => {
            document.getElementById('hangmanResult').innerHTML = `
                <div class="game-result">
                    <div class="result-message lose">Game Over!</div>
                    <p>The word was: <strong>${hangmanWord}</strong></p>
                    <p>${hangmanHint}</p>
                </div>
            `;
            document.getElementById('letterButtons').innerHTML = '';
        }, 100);
    }
}

// Quiz Functions
function getQuizQuestions(chapter) {
    if (chapter === 'all') {
        return quizQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
    }
    const filtered = quizQuestions.filter(q => q.chapter === parseInt(chapter) || q.chapter === 'mixed');
    return filtered.sort(() => Math.random() - 0.5).slice(0, 10);
}

function resetQuiz() {
    const chapter = document.getElementById('quizChapter').value;
    currentQuiz = getQuizQuestions(chapter);
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedAnswer = null;
    document.getElementById('quizResult').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'none';
    
    // Update study materials
    const materialKey = chapter === 'all' ? 'all' : parseInt(chapter);
    const materialsDiv = document.getElementById('studyMaterials');
    if (materialsDiv) {
        materialsDiv.innerHTML = chapterMaterials[materialKey] || chapterMaterials.all;
    }
    
    showQuestion();
}

// Update study materials when chapter changes
function updateStudyMaterials() {
    try {
        const chapter = document.getElementById('quizChapter').value;
        const materialsDiv = document.getElementById('studyMaterials');
        if (materialsDiv && chapterMaterials[chapter]) {
            materialsDiv.innerHTML = chapterMaterials[chapter];
        } else if (materialsDiv) {
            materialsDiv.innerHTML = chapterMaterials.all;
        }
    } catch(e) {
        console.error('Error updating study materials:', e);
    }
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        finishQuiz();
        return;
    }

    const question = currentQuiz[currentQuestionIndex];
    selectedAnswer = null;
    
    document.getElementById('questionNumber').textContent = 
        `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
    
    document.getElementById('questionText').textContent = question.question;
    
    const progressPercent = ((currentQuestionIndex) / currentQuiz.length) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';

    const answerContainer = document.getElementById('answerOptions');
    answerContainer.innerHTML = '';
    
    for (let i = 0; i < question.options.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = question.options[i];
        btn.onclick = () => selectAnswer(i, btn);
        answerContainer.appendChild(btn);
    }

    document.getElementById('quizResult').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'none';
    
    updateQuizScore();
}

function selectAnswer(index, btn) {
    const question = currentQuiz[currentQuestionIndex];
    selectedAnswer = index;

    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach(b => b.style.pointerEvents = 'none');

    if (index === question.correct) {
        btn.classList.add('correct');
        quizScore++;
    } else {
        btn.classList.add('incorrect');
        document.querySelectorAll('.answer-btn')[question.correct].classList.add('correct');
    }

    document.getElementById('quizResult').innerHTML = `
        <div class="hint">
            <strong>${index === question.correct ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
            ${question.explanation}
        </div>
    `;

    updateQuizScore();
    
    if (currentQuestionIndex < currentQuiz.length - 1) {
        document.getElementById('nextBtn').style.display = 'inline-block';
    } else {
        document.getElementById('finishBtn').style.display = 'inline-block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function finishQuiz() {
    const percentage = Math.round((quizScore / currentQuiz.length) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = '🌟 Excellent! You mastered this material!';
    } else if (percentage >= 80) {
        message = '⭐ Great job! You have a solid understanding.';
    } else if (percentage >= 70) {
        message = '👍 Good effort! Review the missed questions.';
    } else {
        message = '📚 Keep studying! Try again to improve.';
    }

    document.getElementById('quizSection').innerHTML = `
        <button class="btn-secondary back-btn" onclick="backToMenu()">← Back to Menu</button>
        
        <div class="game-result">
            <div class="result-message" style="color: #667eea;">${message}</div>
            <div style="font-size: 2.5em; color: #667eea; font-weight: bold; margin: 20px 0;">
                ${quizScore} / ${currentQuiz.length}
            </div>
            <div style="font-size: 1.2em; color: #666;">
                ${percentage}% Correct
            </div>
            <button class="btn-primary" onclick="location.reload()" style="margin-top: 20px;">Try Again</button>
        </div>
    `;
}

function updateQuizScore() {
    document.getElementById('quizScore').textContent = quizScore;
    document.getElementById('quizTotal').textContent = currentQuiz.length;
}

// Navigation
function startGame(game) {
    document.getElementById('mainMenu').classList.remove('active');
    if (game === 'hangman') {
        document.getElementById('hangmanSection').classList.add('active');
        resetHangman();
    } else if (game === 'quiz') {
        document.getElementById('quizSection').classList.add('active');
        // Initialize with default chapter
        const materialsDiv = document.getElementById('studyMaterials');
        if (materialsDiv) {
            materialsDiv.innerHTML = chapterMaterials["all"];
        }
        resetQuiz();
    }
}

function backToMenu() {
    document.getElementById('hangmanSection').classList.remove('active');
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('mainMenu').classList.add('active');
    
    // Reset quiz section
    document.getElementById('quizSection').innerHTML = `
        <button class="btn-secondary back-btn" onclick="backToMenu()">← Back to Menu</button>
        
        <div class="chapter-select">
            <label>Select Chapter:</label>
            <select id="quizChapter" onchange="updateStudyMaterials(); resetQuiz()">
                <option value="all">All Chapters (Mixed)</option>
                <option value="7">Chapter 7 - Supplier Relationship Management</option>
                <option value="8">Chapter 8 - Operations Management</option>
                <option value="9">Chapter 9 - Logistics & Warehousing</option>
            </select>
        </div>

        <div class="score">Score: <span id="quizScore">0</span> / <span id="quizTotal">10</span></div>
        
        <div class="progress-bar">
            <div class="progress-fill" id="progressFill"></div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px;">
            <!-- Question Section -->
            <div>
                <div class="question-number" id="questionNumber"></div>
                
                <div class="question-text" id="questionText"></div>
                
                <div class="answer-options" id="answerOptions"></div>
                
                <div id="quizResult"></div>
            </div>

            <!-- Study Materials Section -->
            <div>
                <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; border-left: 4px solid #667eea;">
                    <h3 style="color: #667eea; margin-bottom: 15px;">📖 Study Materials</h3>
                    <div id="studyMaterials" style="max-height: 500px; overflow-y: auto; font-size: 0.95em; line-height: 1.6; color: #333;">
                        <p style="color: #999;">Select a chapter to see key concepts...</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="button-group" style="margin-top: 20px;">
            <button class="btn-primary" id="nextBtn" onclick="nextQuestion()" style="display: none;">Next Question →</button>
            <button class="btn-primary" id="finishBtn" onclick="finishQuiz()" style="display: none;">Finish Quiz</button>
        </div>
    `;
}

// Initialize on page load
window.addEventListener('load', function() {
    console.log('Game script loaded');
});

// Make functions globally available
window.startGame = startGame;
window.backToMenu = backToMenu;
window.resetHangman = resetHangman;
window.guessLetter = guessLetter;
window.resetQuiz = resetQuiz;
window.updateStudyMaterials = updateStudyMaterials;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.finishQuiz = finishQuiz;
