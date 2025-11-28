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
    },
    
    // Chapter 7 - Supplier Relationship Management Questions
    {
        chapter: 7,
        question: "Strategic partnerships require are tactical in nature.",
        hint: "<strong>Strategic vs Tactical Partnerships:</strong><br><strong>Strategic Partnerships:</strong> Long-term, high-level alliances focused on major business objectives, competitive advantage, and mutual growth. NOT just tactical/operational details.<br><strong>Tactical:</strong> Short-term, operational activities. Strategic partnerships are STRATEGIC (not tactical) - they're about long-term vision and goals.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. Strategic partnerships are strategic in nature (long-term, focused on business objectives), not tactical. Tactical refers to short-term, operational activities."
    },
    {
        chapter: 7,
        question: "Supplier Management Relationships focuses on the front part of the supply chain.",
        hint: "<strong>Supplier Relationship Management (SRM) - Location in Supply Chain:</strong><br>SRM focuses on the <strong>FRONT/UPSTREAM</strong> part of the supply chain - managing and building relationships with <strong>suppliers</strong> and vendors who provide materials and components. It's about the sourcing and procurement side, not downstream distribution.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Supplier Relationship Management focuses on the front (upstream) part of the supply chain - managing suppliers and procurement."
    },
    {
        chapter: 7,
        question: "Which is not one of the keys to building a strategic relationship?",
        hint: "<strong>Keys to Building Strategic Relationships:</strong><br>✓ <strong>Lower Prices</strong> - Cost management is important<br>✓ <strong>Managing Change</strong> - Handling transitions and improvements<br>✓ <strong>Having a Shared Vision and Objectives</strong> - Alignment on goals<br>✓ <strong>Continuous Improvement</strong> - Ongoing enhancement<br>The question asks which is NOT a key - they're all important keys to strategic relationships, so examine the wording carefully.",
        options: [
            "Lower Prices",
            "Managing Change",
            "Continuous Improvement",
            "Having a Shared Vision and Objectives"
        ],
        correct: 0,
        explanation: "Lower Prices. While cost matters, the primary keys to strategic relationships are mutual vision/objectives, managing change, continuous improvement, and trust - not just lower prices alone."
    },
    {
        chapter: 7,
        question: "With trust, partners are less likely to work together or find compromise solutions to problems.",
        hint: "<strong>Trust in Supplier Relationships - CRITICAL:</strong><br><strong>WITH TRUST:</strong> Partners ARE MORE LIKELY to work together, communicate openly, find compromise solutions, and take risks.<br><strong>WITHOUT TRUST:</strong> Partners are LESS LIKELY to collaborate.<br>The statement is BACKWARDS - with trust, partners work better together, not worse.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. With trust, partners are MORE likely to work together and find compromise solutions. Trust enables collaboration, not hinders it."
    },
    {
        chapter: 7,
        question: "Making a series of small improvements over time results in the elimination of waste in a system. This is considered what?",
        hint: "<strong>Improvement Concepts:</strong><br><strong>Continuous Improvement:</strong> Making small, ongoing improvements over time. Also called 'Kaizen' in Japanese. Results in gradual but substantial elimination of waste.<br><strong>Lean:</strong> Overall manufacturing/operational philosophy focused on efficiency and waste elimination<br><strong>Bullwhip Effect:</strong> Demand distortion in supply chain<br><strong>Partnership:</strong> Supplier relationship type",
        options: [
            "Lean",
            "Continuous Improvement",
            "Bullwhip Effect",
            "Partnership"
        ],
        correct: 1,
        explanation: "Continuous Improvement. The practice of making a series of small improvements over time is called Continuous Improvement (also known as Kaizen)."
    },
    {
        chapter: 7,
        question: "Total Cost of Ownership is made up of all costs associated with the acquisition, use, and maintenance of a good or service.",
        hint: "<strong>Total Cost of Ownership (TCO) - DEFINITION:</strong><br>TCO includes ALL costs from beginning to end:<br>• <strong>Acquisition:</strong> Purchase price, setup, implementation<br>• <strong>Use:</strong> Training, support, operation<br>• <strong>Maintenance:</strong> Repairs, updates, sustaining<br>Not just purchase price - it's the TOTAL lifecycle cost.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Total Cost of Ownership (TCO) includes all costs from acquisition through use and maintenance of a good or service."
    },
    {
        chapter: 7,
        question: "It is important to actively monitor a supplier's performance and provide visibility and feedback.",
        hint: "<strong>Supplier Performance Management:</strong><br>YES - Active monitoring is CRITICAL for supplier relationships:<br>• Track quality, delivery, cost metrics<br>• Provide regular feedback (both positive and constructive)<br>• Visibility into supplier operations helps identify issues early<br>• Feedback enables improvements and prevents problems<br>This is a core practice in SRM.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Active monitoring of supplier performance and providing feedback is essential for effective supplier relationship management."
    },
    {
        chapter: 7,
        question: "ISO 9000 is a series of environmental standards in design, development, production, installation, and service.",
        hint: "<strong>ISO Standards - KEY DISTINCTION:</strong><br><strong>ISO 9000:</strong> Quality Management Systems standards - focused on QUALITY, not environment<br><strong>ISO 14000:</strong> Environmental Management Systems standards<br>The definition describes ISO 14000, not ISO 9000. ISO 9000 is about QUALITY management.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. ISO 9000 is a series of quality management standards, not environmental standards. ISO 14000 is the series for environmental standards."
    },
    {
        chapter: 7,
        question: "Supplier Development is the technical and financial assistance given to existing and potential suppliers to improve quality and/or delivery performance.",
        hint: "<strong>Supplier Development - DEFINITION:</strong><br>Supplier Development means providing:<br>• <strong>Technical Assistance:</strong> Helping suppliers improve processes, use better equipment, adopt best practices<br>• <strong>Financial Assistance:</strong> Investment, loans, or cost-sharing for improvements<br>Goal: Improve supplier's QUALITY and/or DELIVERY performance<br>This creates win-win relationships and strengthens the supply chain.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Supplier Development is the assistance given to suppliers to improve their quality and delivery performance."
    },
    {
        chapter: 7,
        question: "It is important to recognize that an SRM system can only be implemented in line with the associated business process changes.",
        hint: "<strong>SRM Implementation - System Alignment:</strong><br>SRM systems MUST be aligned with business processes:<br>• Can't just install SRM software and expect success<br>• Business processes, workflows, and operations must change to support SRM<br>• Requires organizational changes, training, and culture shift<br>• SRM success depends on holistic business process redesign<br>Technology alone without process change = failure",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. SRM system implementation must be aligned with and supported by business process changes for success."
    },
    
    // Chapter 9 - Logistics & Warehousing Questions
    {
        chapter: 9,
        question: "Logistics refers to the management of the movement and storage of goods and information throughout the supply chain.",
        hint: "<strong>Logistics Definition:</strong><br>Logistics is the comprehensive management of:<br>• <strong>Movement:</strong> Transportation of goods from point A to point B<br>• <strong>Storage:</strong> Warehousing and inventory management<br>• <strong>Information:</strong> Tracking, visibility, and communication<br>Logistics spans from suppliers through manufacturing to final delivery - it's about getting the right product to the right place at the right time in the most efficient way.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Logistics encompasses the movement, storage, and information management of goods throughout the supply chain."
    },
    {
        chapter: 9,
        question: "Which of the following is NOT a primary transportation mode in logistics?",
        hint: "<strong>Primary Transportation Modes:</strong><br>• <strong>Air:</strong> Fastest, most expensive, used for time-sensitive goods<br>• <strong>Road/Truck:</strong> Flexible, used for last-mile delivery and local distribution<br>• <strong>Rail:</strong> Cost-effective for large volumes over long distances<br>• <strong>Water/Maritime:</strong> Least expensive for bulk, international shipping<br>• <strong>Pipeline:</strong> Used for liquids and gases (oil, gas, chemicals)<br>All major modes are essential to logistics - this tests understanding of which ones actually exist and are used.",
        options: [
            "Rail",
            "Pipeline",
            "Helicopter",
            "Water"
        ],
        correct: 2,
        explanation: "Helicopter. While helicopters exist, they are not a primary transportation mode in logistics. The main modes are air, road, rail, water, and pipeline."
    },
    {
        chapter: 9,
        question: "Warehousing serves only to store inventory until products are needed for production or customer delivery.",
        hint: "<strong>Warehousing Functions - NOT JUST STORAGE:</strong><br>Warehousing includes multiple value-added activities:<br>• <strong>Storage:</strong> Keeping inventory safe<br>• <strong>Consolidation:</strong> Combining smaller shipments<br>• <strong>Cross-docking:</strong> Transferring goods with minimal storage<br>• <strong>Order fulfillment:</strong> Picking, packing, and labeling<br>• <strong>Customization:</strong> Final assembly, packaging, labeling<br>• <strong>Returns processing:</strong> Handling returns and damage<br>Warehousing is strategic, not just storage!",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. Warehousing involves multiple functions beyond storage including consolidation, cross-docking, order fulfillment, customization, and returns processing."
    },
    {
        chapter: 9,
        question: "A distribution network strategy that minimizes transportation cost but increases inventory carrying costs is typically focused on what?",
        hint: "<strong>Distribution Network Trade-offs:</strong><br><strong>More Distribution Centers:</strong> More locations = lower transportation costs (shorter distances) BUT higher inventory costs (more locations to stock)<br><strong>Fewer Distribution Centers:</strong> Fewer locations = higher transportation costs (longer distances) BUT lower inventory costs (centralized)<br>The question describes MORE distribution centers = minimized transportation costs but increased inventory costs. This is a <strong>customer service/responsiveness</strong> focused strategy.",
        options: [
            "Cost minimization",
            "Customer service and responsiveness",
            "Inventory reduction",
            "Supplier consolidation"
        ],
        correct: 1,
        explanation: "Customer service and responsiveness. More distribution centers reduce delivery time and transportation cost but increase inventory costs - prioritizing customer service."
    },
    {
        chapter: 9,
        question: "Last-Mile delivery refers to the final step in the logistics network where products are delivered from the warehouse to the customer.",
        hint: "<strong>Last-Mile Delivery - CRITICAL CONCEPT:</strong><br>Last-mile is the FINAL LEG of the supply chain:<br>• From distribution center/warehouse → directly to customer's doorstep<br>• Most expensive part of logistics (per unit cost)<br>• Critical for customer satisfaction and experience<br>• Includes delivery confirmation, returns handling<br>• Growing challenge due to e-commerce expectations for speed and flexibility<br>Often the most challenging and costly portion of the entire supply chain.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Last-Mile delivery is the final step from warehouse to customer, and it's typically the most expensive and critical part of the logistics network."
    },
    {
        chapter: 9,
        question: "Supply chain visibility refers to the ability to see and track products and shipments in real-time throughout the logistics network.",
        hint: "<strong>Supply Chain Visibility - STRATEGIC ADVANTAGE:</strong><br>Visibility enables:<br>• <strong>Tracking:</strong> Real-time location of shipments<br>• <strong>Risk Management:</strong> Early warning of delays or issues<br>• <strong>Decision-making:</strong> Informed choices about routing and resources<br>• <strong>Customer Service:</strong> Providing customers with accurate information<br>• <strong>Proactive Problem-solving:</strong> Addressing issues before they impact delivery<br>Modern supply chains use GPS, RFID, IoT, and data analytics for visibility.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Supply chain visibility is the ability to track and monitor products and shipments in real-time, which is essential for modern logistics."
    },
    {
        chapter: 9,
        question: "Which warehousing location strategy focuses on placing distribution centers near major customer concentrations?",
        hint: "<strong>Warehouse Location Strategies:</strong><br>• <strong>Geographic/Customer-focused:</strong> Place near customers = shorter delivery times, responsive to local needs<br>• <strong>Production-focused:</strong> Place near manufacturing = reduced inbound transportation<br>• <strong>Supply-focused:</strong> Place near suppliers = easier replenishment<br>• <strong>Hub-and-spoke:</strong> Central hub with satellite locations<br>Placing near customer concentrations = customer-centric strategy focused on service and responsiveness.",
        options: [
            "Production-focused strategy",
            "Supply-focused strategy",
            "Customer-focused/Geographic strategy",
            "Hub consolidation strategy"
        ],
        correct: 2,
        explanation: "Customer-focused/Geographic strategy. Locating distribution centers near major customer concentrations enables faster delivery and better customer service."
    },
    {
        chapter: 9,
        question: "The bullwhip effect in supply chain logistics results in less variability in demand as you move upstream in the supply chain.",
        hint: "<strong>Bullwhip Effect - DEMAND DISTORTION:</strong><br><strong>What happens:</strong> Small changes in customer demand at retail level create increasingly LARGER demand fluctuations as you move upstream (to distributors, manufacturers, suppliers)<br><strong>Why it's bad:</strong> Causes excessive inventory, inefficient production, wasted resources<br><strong>Example:</strong> 5% customer demand increase → 10% distributor order → 20% manufacturer order → 30% supplier order<br>Effect is like a whip - small movement at handle = large movement at tip. The statement is BACKWARDS - demand variability INCREASES upstream.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. The bullwhip effect causes demand variability to INCREASE as you move upstream in the supply chain, not decrease. Small retail demand changes create larger order fluctuations upstream."
    },
    {
        chapter: 9,
        question: "Cross-docking is a logistics strategy where goods are received, sorted, and transferred to outbound vehicles with minimal storage time.",
        hint: "<strong>Cross-Docking - EFFICIENT WAREHOUSING:</strong><br>Cross-docking is a <strong>high-speed transfer</strong> strategy:<br>• Goods arrive at dock, are sorted/consolidated<br>• Transferred directly to outbound trucks in hours (not days/weeks)<br>• Minimal or no storage time in warehouse<br>• Reduces inventory carrying costs significantly<br>• Requires coordinated transportation and excellent visibility<br>• Used by companies like Walmart and Amazon for speed and efficiency<br>It's like a transfer hub - goods pass through, not rest.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True. Cross-docking is a logistics strategy that minimizes storage time by transferring goods directly from inbound to outbound transportation."
    },
    {
        chapter: 9,
        question: "Optimization in logistics primarily focuses on minimizing transportation costs, even if it means slower delivery times to customers.",
        hint: "<strong>Logistics Optimization - HOLISTIC APPROACH:</strong><br>Optimization balances MULTIPLE objectives, not just cost:<br>• <strong>Cost:</strong> Transportation, warehousing, labor<br>• <strong>Service:</strong> Delivery speed, reliability, accuracy<br>• <strong>Sustainability:</strong> Environmental impact, emissions<br>• <strong>Risk:</strong> Reliability, contingency planning<br>Modern optimization uses analytics to find the BEST BALANCE between cost and service. You can't sacrifice customer service just for lower costs - that creates competitive disadvantage. The statement is too narrow.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False. Logistics optimization balances multiple factors including cost, service level, sustainability, and risk - not just minimizing transportation costs."
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
        // Return all questions mixed and randomized
        return quizQuestions.sort(() => Math.random() - 0.5);
    }
    // Return ALL questions for the chapter (not just 10) so student sees all concepts
    const filtered = quizQuestions.filter(q => q.chapter === parseInt(chapter) || q.chapter === 'mixed');
    return filtered.sort(() => Math.random() - 0.5);
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
    } else if (game === 'slides') {
        document.getElementById('slidesSection').classList.add('active');
        showAllSlides();
    }
}

function backToMenu() {
    document.getElementById('hangmanSection').classList.remove('active');
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('slidesSection').classList.remove('active');
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

// Study Slides Content
const slidesContent = {
    "7": {
        title: "Chapter 7: Supplier Relationship Management",
        content: `
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Overview</h3>
            <p>Supplier Relationship Management (SRM) focuses on the front part of the supply chain, managing and building strategic relationships with suppliers and vendors who provide critical materials and components.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Strategic vs Tactical Partnerships</h3>
            <p><strong>Strategic Partnerships:</strong> Long-term alliances focused on major business objectives, competitive advantage, and mutual growth. Not just tactical/operational details.</p>
            <p><strong>Tactical Relationships:</strong> Short-term, operational activities and transactions.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Keys to Building Strategic Relationships</h3>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Managing Change:</strong> Handling transitions and improvements effectively</li>
                <li><strong>Having a Shared Vision and Objectives:</strong> Alignment on goals and direction</li>
                <li><strong>Continuous Improvement:</strong> Ongoing enhancement of quality and processes</li>
                <li><strong>Cost Management:</strong> Working together on cost optimization</li>
                <li><strong>Trust:</strong> Foundation for open communication and problem-solving</li>
            </ul>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Role of Trust</h3>
            <p><strong>WITH TRUST:</strong> Partners are MORE LIKELY to work together, communicate openly, find compromise solutions, and take risks together.</p>
            <p><strong>WITHOUT TRUST:</strong> Partners are LESS LIKELY to collaborate and may focus only on minimizing individual risk.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Continuous Improvement (Kaizen)</h3>
            <p>Making a series of small improvements over time results in the elimination of waste in a system. This ongoing enhancement is critical in supplier relationships.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Total Cost of Ownership (TCO)</h3>
            <p>TCO includes ALL costs associated with a good or service:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Acquisition:</strong> Purchase price, setup, implementation</li>
                <li><strong>Use:</strong> Training, support, operation</li>
                <li><strong>Maintenance:</strong> Repairs, updates, sustaining</li>
            </ul>
            <p>Not just purchase price - it's the TOTAL lifecycle cost.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Supplier Performance Management</h3>
            <p>It is critical to actively monitor a supplier's performance and provide visibility and feedback through:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Regular tracking of quality, delivery, and cost metrics</li>
                <li>Providing constructive feedback for improvements</li>
                <li>Offering visibility into operations to identify issues early</li>
                <li>Preventing problems through proactive communication</li>
            </ul>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">ISO Standards</h3>
            <p><strong>ISO 9000:</strong> A series of QUALITY MANAGEMENT standards, not environmental.</p>
            <p><strong>ISO 14000:</strong> Environmental Management Systems standards.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Supplier Development</h3>
            <p>The technical and financial assistance given to existing and potential suppliers to improve quality and/or delivery performance. This creates win-win relationships and strengthens the supply chain.</p>
            <p>Includes process improvements, equipment upgrades, training, and investments.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">SRM System Implementation</h3>
            <p>An SRM system can ONLY be implemented successfully when aligned with associated business process changes. Technology alone is not sufficient - organizations must:</p>
            <ul style="margin-left: 20px;">
                <li>Change workflows and processes</li>
                <li>Train employees on new approaches</li>
                <li>Shift organizational culture</li>
                <li>Redesign procedures holistically</li>
            </ul>
        `
    },
    "8": {
        title: "Chapter 8: Operations Management",
        content: `
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Overview</h3>
            <p>Operations Management refers to managing the process to convert inputs (materials, labor, capital) into outputs (finished goods/services) to meet customer demands and organizational goals efficiently.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Manufacturing Strategies</h3>
            <p><strong>Make-to-Stock (MTS):</strong> Products made in advance and stored. SHORTEST lead time (product ready to ship immediately).</p>
            <p><strong>Make-to-Order (MTO):</strong> Production begins ONLY after receiving customer order. Reduces inventory but increases lead time. Works well with Job Shop processes.</p>
            <p><strong>Assemble-to-Order (ATO):</strong> Pre-designed components ready; assembly happens after order. Medium lead time.</p>
            <p><strong>Engineer-to-Order (ETO):</strong> Design, engineer, and build from scratch for customer specifications. LONGEST lead time.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Production Processes</h3>
            <p><strong>Job Shop:</strong> Low-volume, highly customized production. Each job is unique and requires extensive setup time. Aligns with MTO or ETO.</p>
            <p><strong>Batching:</strong> Producing a fixed quantity of one product, then stopping and switching to another product.</p>
            <p><strong>Continuous Flow:</strong> Non-stop production of the same product(s). High-volume, standardized products. Aligns with MTS.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Lean Manufacturing</h3>
            <p>Lean focuses primarily on eliminating WASTE (Muda) from production. Forms of waste include:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Overproduction</li>
                <li>Waiting time</li>
                <li>Transportation inefficiency</li>
                <li>Excess inventory</li>
                <li>Defects and rework</li>
                <li>Over-processing</li>
                <li>Unused employee talent</li>
            </ul>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Just-in-Time (JIT)</h3>
            <p>Moving people and materials when and where needed, as soon as possible. JIT minimizes inventory and waste - it's a Lean principle, not the same as value stream mapping.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Value Stream Mapping</h3>
            <p>A tool/method to VISUALIZE and identify waste in processes. Shows the flow of materials and information. Used to support Lean and JIT implementation.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Quality Management Pioneers</h3>
            <p><strong>Ishikawa:</strong> Developed the Cause-and-Effect Diagram (Fishbone Diagram)</p>
            <p><strong>Crosby:</strong> Known for "Zero Defects" concept and Cost of Quality framework</p>
            <p><strong>Deming:</strong> PDCA cycle and continuous improvement</p>
            <p><strong>Juran:</strong> Quality trilogy (Planning, Control, Improvement)</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Root Cause Analysis</h3>
            <p>The ROOT CAUSE is the underlying reason or core issue that, if fixed, will ELIMINATE the problem and prevent it from happening again. It's the foundation that triggers the entire chain reaction of problems. Identifying root causes is essential for permanent solutions, not just treating symptoms.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Quality Definition</h3>
            <p>Quality is defined by the CUSTOMER, not by the manufacturer or supplier. Customer expectations, needs, and satisfaction determine what 'quality' means.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Continuous Flow Manufacturing</h3>
            <p>Characteristics of continuous flow:</p>
            <ul style="margin-left: 20px;">
                <li>Products flow continuously through production with minimal stoppages</li>
                <li>HIGH-VOLUME, STANDARDIZED products</li>
                <li>Examples: Assembly lines, automotive plants, food processing</li>
            </ul>
        `
    },
    "9": {
        title: "Chapter 9: Logistics & Warehousing",
        content: `
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Overview</h3>
            <p>Logistics refers to the management of the movement and storage of goods and information throughout the supply chain. It encompasses transportation, warehousing, tracking, and coordination.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Primary Transportation Modes</h3>
            <p><strong>Air:</strong> Fastest, most expensive. Used for time-sensitive goods and emergency shipments.</p>
            <p><strong>Road/Truck:</strong> Flexible and adaptable. Used for last-mile delivery and local distribution. Most widely used for final delivery.</p>
            <p><strong>Rail:</strong> Cost-effective for large volumes over long distances. Good for heavy bulk goods.</p>
            <p><strong>Water/Maritime:</strong> Least expensive per unit. Best for international and bulk shipping.</p>
            <p><strong>Pipeline:</strong> Used for liquids and gases (oil, natural gas, chemicals).</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Warehousing Functions</h3>
            <p>Warehousing involves multiple value-added activities beyond just storage:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Storage:</strong> Keeping inventory safe and organized</li>
                <li><strong>Consolidation:</strong> Combining smaller shipments into larger ones</li>
                <li><strong>Cross-docking:</strong> Transferring goods with minimal storage time</li>
                <li><strong>Order fulfillment:</strong> Picking, packing, and labeling orders</li>
                <li><strong>Customization:</strong> Final assembly, packaging, labeling</li>
                <li><strong>Returns processing:</strong> Handling returns and damaged goods</li>
            </ul>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Distribution Network Strategies</h3>
            <p><strong>More Distribution Centers:</strong> Lower transportation costs (shorter distances) but higher inventory costs (more locations to stock). Focuses on CUSTOMER SERVICE AND RESPONSIVENESS.</p>
            <p><strong>Fewer Distribution Centers:</strong> Higher transportation costs (longer distances) but lower inventory costs (centralized). Focuses on COST MINIMIZATION.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Last-Mile Delivery</h3>
            <p>The final step in the logistics network where products are delivered from the distribution center/warehouse directly to the customer's doorstep.</p>
            <p><strong>Why it matters:</strong> Most expensive part of logistics on a per-unit basis. Critical for customer satisfaction and experience. Growing challenge due to e-commerce expectations for speed and flexibility.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Supply Chain Visibility</h3>
            <p>The ability to see and track products and shipments in real-time throughout the logistics network. Enables:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Real-time tracking of shipment location</li>
                <li>Early warning of delays or issues</li>
                <li>Informed decision-making about routing and resources</li>
                <li>Accurate customer information</li>
                <li>Proactive problem-solving before delivery impact</li>
            </ul>
            <p>Modern supply chains use GPS, RFID, IoT sensors, and data analytics for visibility.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Warehouse Location Strategies</h3>
            <p><strong>Customer-Focused/Geographic:</strong> Place distribution centers near major customer concentrations. Enables faster delivery and better customer service.</p>
            <p><strong>Production-Focused:</strong> Place near manufacturing. Reduces inbound transportation costs.</p>
            <p><strong>Supply-Focused:</strong> Place near suppliers. Easier replenishment and inbound logistics.</p>
            <p><strong>Hub-and-Spoke:</strong> Central hub with satellite locations for efficiency.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Bullwhip Effect</h3>
            <p>Small changes in customer demand at retail level create increasingly LARGER demand fluctuations as you move upstream (to distributors, manufacturers, suppliers).</p>
            <p><strong>Example:</strong> 5% customer demand increase → 10% distributor order → 20% manufacturer order → 30% supplier order</p>
            <p><strong>Why it's bad:</strong> Causes excessive inventory, inefficient production, and wasted resources throughout the supply chain.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Cross-Docking</h3>
            <p>A high-speed transfer logistics strategy where goods are:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Received at the dock</li>
                <li>Sorted and consolidated</li>
                <li>Transferred directly to outbound trucks in hours (not days/weeks)</li>
                <li>Minimal or no storage time in warehouse</li>
            </ul>
            <p>Benefits: Reduces inventory carrying costs significantly. Requires coordinated transportation and excellent visibility. Used by companies like Walmart and Amazon for speed and efficiency.</p>
            
            <h3 style="color: #667eea; margin: 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Logistics Optimization</h3>
            <p>Optimization balances MULTIPLE objectives, not just cost:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Cost:</strong> Transportation, warehousing, labor</li>
                <li><strong>Service:</strong> Delivery speed, reliability, accuracy</li>
                <li><strong>Sustainability:</strong> Environmental impact, emissions</li>
                <li><strong>Risk:</strong> Reliability, contingency planning</li>
            </ul>
            <p>Modern optimization uses analytics to find the BEST BALANCE between cost and service. You cannot sacrifice customer service just for lower costs.</p>
        `
    }
};

function toggleTextToSpeech() {
    textToSpeechEnabled = !textToSpeechEnabled;
    const btn = document.getElementById('speakBtn');
    if (textToSpeechEnabled) {
        btn.textContent = '🔊 Text-to-Speech: ON (Click text to hear)';
        btn.style.background = '#667eea';
        btn.style.color = 'white';
        makeTextClickable();
    } else {
        btn.textContent = '🔇 Enable Text-to-Speech';
        btn.style.background = '';
        btn.style.color = '';
        removeTextClickable();
    }
}

// Text-to-Speech functionality
let textToSpeechEnabled = false;

function toggleTextToSpeech() {
    textToSpeechEnabled = !textToSpeechEnabled;
    const btn = document.getElementById('speakBtn');
    if (textToSpeechEnabled) {
        btn.textContent = '🔊 Text-to-Speech: ON (Click text to hear)';
        btn.style.background = '#667eea';
        btn.style.color = 'white';
        makeTextClickable();
    } else {
        btn.textContent = '🔇 Enable Text-to-Speech';
        btn.style.background = '';
        btn.style.color = '';
        removeTextClickable();
    }
}

function makeTextClickable() {
    const slideContent = document.getElementById('allSlideContent');
    if (!slideContent) return;
    
    // Make all text elements clickable
    const elements = slideContent.querySelectorAll('p, li, h3, h2, h1');
    elements.forEach(el => {
        el.style.cursor = 'pointer';
        el.style.transition = 'background-color 0.2s ease';
        el.addEventListener('click', function(e) {
            e.stopPropagation();
            speakText(this.textContent);
        });
        el.addEventListener('mouseenter', function() {
            if (textToSpeechEnabled) {
                this.style.backgroundColor = '#ffe0b2';
            }
        });
        el.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

function removeTextClickable() {
    const slideContent = document.getElementById('allSlideContent');
    if (!slideContent) return;
    
    const elements = slideContent.querySelectorAll('p, li, h3, h2, h1');
    elements.forEach(el => {
        el.style.cursor = 'default';
        el.style.backgroundColor = '';
        el.removeEventListener('click', function(e) {
            e.stopPropagation();
        });
        el.removeEventListener('mouseenter', function() {});
        el.removeEventListener('mouseleave', function() {});
    });
}

function speakText(text) {
    if (!textToSpeechEnabled) return;
    
    // Cancel any currently speaking text
    speechSynthesis.cancel();
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Speak
    speechSynthesis.speak(utterance);
}

function showAllSlides() {
    const allSlideContent = document.getElementById('allSlideContent');
    
    if (allSlideContent) {
        // Combine all chapters into one HTML
        let allContent = '';
        
        // Chapter 7
        allContent += `<h2 style="color: #667eea; margin-top: 30px; margin-bottom: 20px; border-bottom: 3px solid #667eea; padding-bottom: 10px;">Chapter 7: Supplier Relationship Management</h2>`;
        allContent += slidesContent["7"].content;
        
        // Chapter 8
        allContent += `<h2 style="color: #667eea; margin-top: 40px; margin-bottom: 20px; border-bottom: 3px solid #667eea; padding-bottom: 10px;">Chapter 8: Operations Management</h2>`;
        allContent += slidesContent["8"].content;
        
        // Chapter 9
        allContent += `<h2 style="color: #667eea; margin-top: 40px; margin-bottom: 20px; border-bottom: 3px solid #667eea; padding-bottom: 10px;">Chapter 9: Logistics & Warehousing</h2>`;
        allContent += slidesContent["9"].content;
        
        allSlideContent.innerHTML = allContent;
        
        // Re-apply text-to-speech if enabled
        if (textToSpeechEnabled) {
            makeTextClickable();
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
window.toggleTextToSpeech = toggleTextToSpeech;
window.speakText = speakText;
window.showAllSlides = showAllSlides;
