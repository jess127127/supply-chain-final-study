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

// Quiz Questions with Hint Definitions
const quizQuestions = [
    // Chapter 8 - Operations Management Questions
    {
        chapter: 8,
        question: "Operations Management refers to managing the process to convert demand plans into forecast.",
        hint: "<strong>Operations Management Definition:</strong><br>The management of business operations to produce goods and services efficiently. It involves converting inputs (materials, labor, capital) into outputs (finished goods/services) to meet customer demands and organizational goals. NOT just converting demand plans into forecasts.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. Operations Management refers to managing the process to convert inputs into outputs (finished goods/services), not just converting demand plans into forecasts."
    },
    {
        chapter: 8,
        question: "Make-to-Order (MTO) is a manufacturing strategy in which manufacturing starts only after a customer's order is received.",
        hint: "<strong>Make-to-Order (MTO):</strong><br>A manufacturing strategy where production begins ONLY after receiving a customer order. This reduces inventory risk but increases lead time. Products are customized based on customer specifications. Aligns well with Job Shop processes.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. MTO strategy waits for customer orders before production begins, reducing inventory costs but increasing lead time."
    },
    {
        chapter: 8,
        question: "Which manufacturing strategy has the shortest lead time to get product to customer?",
        hint: "<strong>Manufacturing Strategy Comparison:</strong><br><strong>MTS (Make-to-Stock):</strong> Products made in advance and stored - SHORTEST lead time (product ready to ship immediately)<br><strong>ATO (Assemble-to-Order):</strong> Components ready, assembles after order - Medium lead time<br><strong>MTO (Make-to-Order):</strong> Production starts after order - Longer lead time<br><strong>ETO (Engineer-to-Order):</strong> Design and build from scratch - LONGEST lead time",
        options: [
            "ETO",
            "MTS",
            "ATO",
            "MTO"
        ],
        correct: 1,
        explanation: "MTS (Make-to-Stock) has the shortest lead time because products are already manufactured and in stock, ready for immediate delivery."
    },
    {
        chapter: 8,
        question: "Assemble-to-Order (ATO) is a manufacturing strategy in which the product is designed, engineered, and built to the customer's specifications after receipt of the order.",
        hint: "<strong>ATO vs ETO - KEY DIFFERENCE:</strong><br><strong>ATO (Assemble-to-Order):</strong> Pre-designed components/modules are assembled AFTER order. No design/engineering from scratch.<br><strong>ETO (Engineer-to-Order):</strong> DESIGNED, ENGINEERED, and built from scratch for customer specs. This definition describes ETO, NOT ATO!",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. That describes ETO (Engineer-to-Order). ATO involves assembling pre-made components after order receipt, not designing and engineering from scratch."
    },
    {
        chapter: 8,
        question: "Job Shop process works and aligns well to a 'Make To Stock' strategy.",
        hint: "<strong>Job Shop & Manufacturing Strategies:</strong><br><strong>Job Shop:</strong> Low-volume, highly customized production. Each job is unique and requires extensive setup time.<br><strong>Aligns WITH:</strong> MTO (Make-to-Order) or ETO (Engineer-to-Order)<br><strong>Does NOT align with:</strong> MTS (Make-to-Stock) - MTS needs high-volume, standardized production like Continuous Flow or Assembly Line.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. Job Shop aligns with MTO (Make-to-Order) or ETO strategies, not MTS. Job Shops are designed for customized, low-volume production."
    },
    {
        chapter: 8,
        question: "Manufacturing of a small, fixed quantity of an item in a single production run is related to what process?",
        hint: "<strong>Production Processes:</strong><br><strong>Batching:</strong> Producing a FIXED QUANTITY of one product, then stopping and switching to another product. Small batches of specific items.<br><strong>Continuous Flow:</strong> Non-stop production of the same product(s)<br><strong>Job Shop:</strong> One-of-a-kind, highly customized items",
        options: [
            "Continuous Flow",
            "Batching",
            "Job Shop"
        ],
        correct: 1,
        explanation: "Batching. This describes batch processing - producing a fixed quantity before stopping and switching to a different product."
    },
    {
        chapter: 8,
        question: "The concept of moving people and materials when and where needed, and as soon as possible is considered value stream mapping.",
        hint: "<strong>Key Lean Concepts:</strong><br><strong>Value Stream Mapping:</strong> A tool/method to VISUALIZE and identify waste in processes. Shows flow of materials and information.<br><strong>Just-in-Time (JIT):</strong> Moving materials/people when and where needed, as soon as possible. Minimizes inventory and waste.<br>The definition describes JIT, NOT value stream mapping.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. This describes Lean manufacturing principles and Just-in-Time (JIT), not value stream mapping. Value stream mapping is a tool used to visualize waste in processes."
    },
    {
        chapter: 8,
        question: "Crosby developed one of the first tools in the quality management process, the Cause-and-Effect Diagram.",
        hint: "<strong>Quality Management Pioneers:</strong><br><strong>Crosby:</strong> Known for 'Zero Defects' concept and Cost of Quality framework<br><strong>Ishikawa:</strong> Developed the Cause-and-Effect Diagram (also called Fishbone Diagram or Ishikawa Diagram)<br><strong>Deming:</strong> PDCA cycle and continuous improvement<br><strong>Juran:</strong> Quality trilogy",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. Crosby is known for Zero Defects and Cost of Quality concepts. The Cause-and-Effect Diagram (Fishbone Diagram) was developed by Ishikawa."
    },
    {
        chapter: 8,
        question: "The root cause is the core issue that sets in motion the entire cause-and-effect reaction that ultimately leads to the problem.",
        hint: "<strong>Root Cause Analysis:</strong><br>The ROOT CAUSE is the underlying reason or core issue that, if fixed, will ELIMINATE the problem and prevent it from happening again. It's the foundation that triggers the entire chain reaction of problems. Identifying root causes is essential for permanent solutions, not just treating symptoms.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. The root cause is the underlying reason that, when addressed, eliminates the problem and prevents recurrence."
    },
    {
        chapter: 8,
        question: "Who is quality defined by in operations?",
        hint: "<strong>Quality Definition - CRITICAL CONCEPT:</strong><br><strong>Quality is defined by the CUSTOMER</strong>, not by the manufacturer or supplier. Customer expectations, needs, and satisfaction determine what 'quality' means. If the customer is satisfied, it's quality. If not, it's not quality - regardless of what the company thinks.",
        options: [
            "Supplier",
            "Customer",
            "Manufacturer"
        ],
        correct: 1,
        explanation: "Customer. Quality is defined by the customer's perspective and requirements, not by the supplier or manufacturer alone."
    },
    
    // Additional Chapter 8 questions to supplement
    {
        chapter: 8,
        question: "Lean manufacturing focuses primarily on eliminating what from production?",
        hint: "<strong>Lean Manufacturing Core Principle:</strong><br><strong>WASTE (Muda)</strong> is the primary target. Lean identifies and eliminates all forms of waste including: overproduction, waiting time, transportation, excess inventory, defects, over-processing, and unused employee talent. Lean = LEAN OUT THE WASTE",
        options: [
            "Employees",
            "Waste",
            "Automation",
            "Quality checks"
        ],
        correct: 1,
        explanation: "Waste. Lean manufacturing's core principle is to identify and eliminate all forms of waste (muda) in the production process."
    },
    {
        chapter: 8,
        question: "Which of the following is a characteristic of continuous flow manufacturing?",
        hint: "<strong>Continuous Flow Manufacturing:</strong><br>• Products flow continuously through production with minimal stoppages<br>• HIGH-VOLUME, STANDARDIZED products<br>• Examples: Assembly lines, automotive plants, food processing<br>• Opposite: Batch, Job Shop, or MTO processes which have stoppages and setup times",
        options: [
            "Products are made in batches",
            "Production is customized per order",
            "Products flow continuously through production",
            "Each job is unique and requires setup time"
        ],
        correct: 2,
        explanation: "Continuous flow manufacturing maintains a steady stream of production with minimal interruption, typical of high-volume, standardized products."
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
        if (materialsDiv) {
            // Use the chapter value directly (it's already a string from the dropdown)
            materialsDiv.innerHTML = chapterMaterials[chapter] || chapterMaterials["all"];
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
    
    // Hide hint panel by default and display question-specific hint
    const hintPanel = document.getElementById('hintPanel');
    const hintBtn = document.getElementById('hintBtn');
    const materialsDiv = document.getElementById('studyMaterials');
    
    if (hintPanel && materialsDiv) {
        // Hide panel by default
        hintPanel.style.display = 'none';
        if (hintBtn) {
            hintBtn.textContent = '❓ Show Hint & Study Materials';
        }
        
        // Display question-specific hint
        if (question.hint) {
            materialsDiv.innerHTML = question.hint;
        } else {
            materialsDiv.innerHTML = '<p style="color: #999;">No hint available for this question.</p>';
        }
    }
    
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

// Toggle hint panel visibility
function toggleHint() {
    const hintPanel = document.getElementById('hintPanel');
    const hintBtn = document.getElementById('hintBtn');
    
    if(hintPanel && hintBtn) {
        if(hintPanel.style.display === 'none' || !hintPanel.style.display) {
            hintPanel.style.display = 'block';
            hintBtn.textContent = '✕ Hide Hint & Study Materials';
        } else {
            hintPanel.style.display = 'none';
            hintBtn.textContent = '❓ Show Hint & Study Materials';
        }
    }
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
window.toggleHint = toggleHint;
