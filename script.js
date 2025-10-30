// Research Project Dashboard JavaScript
class ResearchDashboard {
    constructor() {
        this.projects = [];
        this.currentFilter = 'all';
        this.currentSort = 'date';
        this.searchTerm = '';
        this.currentView = 'dashboard'; // dashboard, project-detail
        this.currentProjectId = null;
        
        this.initializeEventListeners();
        this.initializeNavigation();
        this.loadSampleData();
        this.initializeInteractiveFeatures();
    }

    // Load sample data
    loadSampleData() {
        this.projects = [
            {
                id: 1,
                title: "Project Harper (Former Resonance) - Resonance Frequency Sterilization",
                description: "Pioneer innovation on resonance frequency as sterilizer for infectious and invasive microorganisms affecting human daily lives. Applies the principle that every biological system possesses a natural resonance frequency that can be manipulated to influence cellular behavior. The research team designed a device that emits controlled acoustic electromagnetic waves to sterilize microbial surfaces and stimulate tissue repair without heat or chemicals.",
                status: "active",
                priority: "high",
                startDate: "2025-01-15",
                endDate: "2027-12-31",
                team: ["Ray Albert E. La Rosa"],
                budget: 0,
                createdDate: "2025-01-10",
                program: "Biotechnology Research Program",
                phase: "Phase 5 of 10: Environmental Validation & Parameter Optimization",
                trl: "TRL 5",
                trlDescription: "Laboratory validation achieved",
                irl: "IRL 4",
                irlDescription: "Functional concept established",
                targetTRL: "TRL 6 (Dec 2027)",
                targetIRL: "IRL 5 (Dec 2027)",
                objectives: [
                    "Sterilization of laboratory instruments, air, and surfaces",
                    "Therapeutic modalities for pain management, tissue regeneration, and non-invasive wound care",
                    "Potential diagnostic extension via resonance signature analysis"
                ],
                significance: "Addresses NUHRA Theme #4 (Health tech & innovation) and #3 (Health security/DRR). Aligns with DLSMHSI Research Agenda 1: Health Technology & Innovation, CALABARZON RUHRA (Hospital/health safety; infection control; diagnostics development), and HNRDA Clusters (Health; IEET). Supports SDG 3 (Good Health) and SDG 9 (Innovation).",
                expectedOutcomes: [
                    "Prototype sound-frequency generator completed",
                    "Patent filed under DLSMHSI to IPOPHL (Field: Sound Frequency Generation Technology)",
                    "Drafting of Research Publication Ongoing: calibration studies for microbial inactivation and biophysical modeling",
                    "Positions DLSMHSI as pioneer in resonance-based biomedical technologies",
                    "Foundation for future spin-off company development (Project Harper Spin-Off)"
                ],
                currentProgress: 50,
                milestones: [
                    { phase: "Phase 1", title: "Research & Conceptualization", status: "completed", date: "2025-02-28" },
                    { phase: "Phase 2", title: "Device Design & Prototyping", status: "completed", date: "2025-04-15" },
                    { phase: "Phase 3", title: "Laboratory Validation", status: "completed", date: "2025-06-30" },
                    { phase: "Phase 4", title: "Patent Filing to IPOPHL", status: "completed", date: "2025-08-30" },
                    { phase: "Phase 5", title: "Environmental Validation", status: "in-progress", date: "2026-06-30" },
                    { phase: "Phase 6", title: "Parameter Optimization", status: "pending", date: "2026-12-31" },
                    { phase: "Phase 7", title: "Smart Sensor Integration", status: "pending", date: "2027-06-30" },
                    { phase: "Phase 8", title: "Regulatory Testing", status: "pending", date: "2027-12-31" }
                ]
            },
            {
                id: 2,
                title: "Project Bioregrade - Air Pollution Bioremediation",
                description: "Pioneering innovation on bioremediation, harnessing microbial population from particulate matter of air pollution to produce useful by-products (Biofertilizers, drug development, and vaccines), and bioremediating the air with innovation on biofilter. The system's modular design features a downward airflow chamber lined with microbial matrices capable of degrading volatile organic compounds. The machine is also for expansion with bioreactors.",
                status: "active",
                priority: "high",
                startDate: "2027-01-01",
                endDate: "2029-12-31",
                team: ["Ray Albert E. La Rosa"],
                budget: 0,
                createdDate: "2026-12-15",
                program: "Biotechnology Research Program",
                phase: "Phase 4 of 8: Bioreactor Automation & Integration",
                trl: "TRL 4",
                trlDescription: "Component validation completed",
                irl: "IRL 3",
                irlDescription: "Prototype concept demonstrated",
                targetTRL: "TRL 5 (Dec 2029)",
                targetIRL: "IRL 4 (Dec 2029)",
                objectives: [
                    "Modular air-purification chamber with downward or lateral airflow configuration (optimized for open-air/roof settings)",
                    "Engineered microbial bio-layers sustained by nutrient microchannels",
                    "IoT-ready sensor integration for air-quality monitoring and system feedback",
                    "Air purification for hospitals, laboratories, and urban environments"
                ],
                significance: "Addresses NUHRA Themes #4 (Tech & innovation), #6 (Health promotion), and #10 (Nutrition & food security). Aligns with DLSMHSI Research Agenda 1: Health Tech & Innovation and Agenda 2: Nutrition & Food Safety, CALABARZON RUHRA (Environmental health; climate resilience; food safety & nutrition), and HNRDA Clusters (AANR; IEET; DRRCCA). Supports SDG 9 (Innovation), SDG 13 (Climate Action), and SDG 15 (Life on Land).",
                expectedOutcomes: [
                    "Patent draft completed and for Filing to IPOPHL",
                    "Prototype functional testing underway; microbial performance evaluation ongoing",
                    "Automated bioreactor extension for scalable microbial growth",
                    "Real-time air quality monitoring and adaptive biolayer regeneration",
                    "Patented biotech spin-off technology foundation"
                ],
                currentProgress: 40,
                milestones: [
                    { phase: "Phase 1", title: "Microbial Collection & Isolation", status: "completed", date: "2027-06-30" },
                    { phase: "Phase 2", title: "Microbial Characterization", status: "completed", date: "2027-12-31" },
                    { phase: "Phase 3", title: "Biofilter Prototype Development", status: "completed", date: "2028-06-30" },
                    { phase: "Phase 4", title: "Bioreactor Integration", status: "in-progress", date: "2028-12-31" },
                    { phase: "Phase 5", title: "IoT Sensor Integration", status: "pending", date: "2029-03-31" },
                    { phase: "Phase 6", title: "Real-time Monitoring System", status: "pending", date: "2029-06-30" },
                    { phase: "Phase 7", title: "Pilot Testing", status: "pending", date: "2029-09-30" },
                    { phase: "Phase 8", title: "Patent Filing", status: "pending", date: "2029-12-31" }
                ]
            },
            {
                id: 3,
                title: "Project Taal Volcano - Extremophile Microbial Research",
                description: "Pioneering research for Taal Volcano Island, investigating microbial population in the island to discover useful by-products from extreme microorganisms and creating awareness to local communities for the danger it brings to health. Explores microbial life and soil geophysics in extreme volcanic environments to uncover adaptive biological mechanisms and new microbial strains with biotechnological potential.",
                status: "active",
                priority: "high",
                startDate: "2028-01-01",
                endDate: "2031-12-31",
                team: ["Ray Albert E. La Rosa"],
                budget: 0,
                createdDate: "2027-12-15",
                program: "Biotechnology Research Program",
                phase: "Phase 3 of 6: Data Consolidation & Environmental Application",
                trl: "TRL 3",
                trlDescription: "Experimental proof of concept",
                irl: "IRL 2",
                irlDescription: "Exploratory research phase",
                targetTRL: "TRL 4 (Dec 2031)",
                targetIRL: "IRL 3 (Dec 2031)",
                objectives: [
                    "Discovery of novel extremophile-derived biomolecules and enzymes",
                    "Foundational data for Philippine extremophile genome research",
                    "Environmental baseline for volcanic ecosystem health",
                    "Establish Philippines' first Taal Volcano microbial dataset"
                ],
                significance: "Addresses NUHRA Themes #3 (Health security/DRRM) and #1 (Disease management). Aligns with DLSMHSI Research Agenda 3: Disease Prevention & Public Health, CALABARZON RUHRA (Environmental health; DRRM; diagnostics; AMR; urbanization/industrialization impacts), and HNRDA Clusters (AANR; DRRCCA). Supports SDG 13 (Climate Action) and SDG 15 (Life on Land).",
                expectedOutcomes: [
                    "Initial sampling and microbial identification completed",
                    "Publication draft in preparation for submission to peer-reviewed microbiology journal",
                    "Isolation of Staphylococcus species from hydrothermal soil zones of Taal Volcano Island",
                    "Identification of thermoacidophilic traits suggesting adaptation to volcanic conditions",
                    "Diagnostic kit prototype testing planned for 2027 for community health protection"
                ],
                currentProgress: 50,
                milestones: [
                    { phase: "Phase 1", title: "Site Assessment & Sampling Protocol", status: "completed", date: "2028-06-30" },
                    { phase: "Phase 2", title: "Microbial Sample Collection", status: "completed", date: "2029-03-31" },
                    { phase: "Phase 3", title: "Microbial Identification & Analysis", status: "completed", date: "2029-12-31" },
                    { phase: "Phase 4", title: "Data Consolidation for Environmental Model", status: "in-progress", date: "2030-06-30" },
                    { phase: "Phase 5", title: "Publication Preparation", status: "in-progress", date: "2030-12-31" },
                    { phase: "Phase 6", title: "Diagnostic Kit Prototype Development", status: "pending", date: "2031-12-31" }
                ]
            },
            {
                id: 4,
                title: "Project Cancer Research - Zinc Finger Nuclease Technology",
                description: "Pioneering research harnessing zinc finger nuclease technology for cancer treatment development. Develops ZFN tools for targeted gene editing in cancer models, aiming to establish a local molecular therapeutics platform capable of preclinical genetic modification and drug modeling. Through genetic engineering and designing, the research can develop therapeutic treatment for cancer, develop drugs and vaccine as response to AMR and other Invasive Infectious Diseases.",
                status: "pending",
                priority: "high",
                startDate: "2030-01-01",
                endDate: "2033-12-31",
                team: ["Ray Albert E. La Rosa"],
                budget: 0,
                createdDate: "2029-12-15",
                program: "Biotechnology Research Program",
                phase: "Phase 3 of 8: In Silico Software Development & AI Integration",
                trl: "TRL 3",
                trlDescription: "Prototype software for in-silico gene design developed",
                irl: "IRL 3",
                irlDescription: "Functional application concept validated",
                targetTRL: "TRL 4 (Dec 2033)",
                targetIRL: "IRL 4 (Dec 2033)",
                objectives: [
                    "ZFN Design & Modeling: In silico development of ZFN constructs targeting oncogenic loci",
                    "Simulated Pharmacokinetic and DNA-repair Modeling: Use of AI-assisted in silico simulation tools",
                    "Wet-Lab Translation (Phase II): Validation of constructs in cancer cell lines (future phase)",
                    "Precision oncology and gene-targeted therapies"
                ],
                significance: "Addresses NUHRA Themes #4 (Tech & innovation) and #1 (Disease management). Aligns with DLSMHSI Research Agenda 1: Health Tech & Innovation and Agenda 3: Disease Prevention & Public Health, CALABARZON RUHRA (Diagnostics capacity; health systems strengthening), and HNRDA Clusters (Health; IEET). Supports SDG 3 (Good Health) and SDG 9 (Innovation).",
                expectedOutcomes: [
                    "Bioinformatics framework completed",
                    "Proposal preparation for DOST-PCHRD and DEPDEV calls",
                    "Institutional biosafety and biosecurity documentation in drafting phase",
                    "AI-based sequence optimization and machine-learning modules for target specificity",
                    "Position DLSMHSI as biotechnology-driven medical research institution capable of developing gene-editing therapeutics"
                ],
                currentProgress: 30,
                milestones: [
                    { phase: "Phase 1", title: "Bioinformatics Framework Setup", status: "completed", date: "2030-06-30" },
                    { phase: "Phase 2", title: "ZFN Construct Design", status: "completed", date: "2030-12-31" },
                    { phase: "Phase 3", title: "In Silico Software Prototype", status: "in-progress", date: "2031-06-30" },
                    { phase: "Phase 4", title: "AI-based Sequence Optimization", status: "pending", date: "2031-12-31" },
                    { phase: "Phase 5", title: "Biosafety Documentation", status: "pending", date: "2032-06-30" },
                    { phase: "Phase 6", title: "DOST-PCHRD Proposal Submission", status: "pending", date: "2032-12-31" },
                    { phase: "Phase 7", title: "In-Vitro Validation Preparation", status: "pending", date: "2033-06-30" },
                    { phase: "Phase 8", title: "Wet-Lab Translation Setup", status: "pending", date: "2033-12-31" }
                ]
            }
        ];
        // Render the projects
        this.renderProjects();
        this.updateStatistics();
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.renderProjects();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.renderProjects();
            });
        });

        // Sort dropdown
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderProjects();
        });
    }

    // Initialize navigation system
    initializeNavigation() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state) {
                this.currentView = e.state.view;
                this.currentProjectId = e.state.projectId;
                this.renderCurrentView();
            }
        });
    }

    // Navigate to project detail view
    navigateToProject(projectId) {
        this.currentView = 'project-detail';
        this.currentProjectId = projectId;
        history.pushState({ view: 'project-detail', projectId: projectId }, '', `#project-${projectId}`);
        this.renderCurrentView();
    }

    // Navigate back to dashboard
    navigateToDashboard() {
        this.currentView = 'dashboard';
        this.currentProjectId = null;
        history.pushState({ view: 'dashboard' }, '', '#dashboard');
        this.renderCurrentView();
    }

    // Render current view based on navigation state
    renderCurrentView() {
        const dashboardContainer = document.querySelector('.dashboard-container');
        
        if (this.currentView === 'project-detail' && this.currentProjectId) {
            this.renderProjectDetailView(this.currentProjectId);
        } else {
            this.renderDashboardView();
        }
    }

    // Render dashboard view
    renderDashboardView() {
        const dashboardContainer = document.querySelector('.dashboard-container');
        dashboardContainer.innerHTML = this.getDashboardHTML();
        this.initializeEventListeners();
        this.renderProjects();
        this.updateStatistics();
    }

    // Get dashboard HTML template
    getDashboardHTML() {
        return `
            <!-- Header -->
            <header class="dashboard-header">
                <div class="header-content">
                    <div class="header-left">
                        <div class="institution-brand">
                            <div class="brand-logo">
                                <i class="fas fa-user-md"></i>
                            </div>
                            <div class="brand-text">
                                <span class="institution-name">De La Salle Medical and Health Sciences Institute</span>
                                <span class="department-name">Biotechnology Research Program - Research Services</span>
                            </div>
                        </div>
                        <h1><i class="fas fa-dna"></i> Research Dashboard</h1>
                        <p>Welcome to Biotechnology Research Program at DLSMHSI Research Services</p>
                    </div>
                    <div class="header-right">
                        <!-- Edit mode removed -->
                    </div>
                </div>
            </header>

            <!-- Program Overview -->        
            <section class="program-overview">
                <div class="program-card">
                    <div class="program-header">
                        <h2><i class="fas fa-microscope"></i> Biotechnology Research Program</h2>
                        <div class="program-status">
                            <span class="status-badge active">Active Program</span>
                        </div>
                    </div>
                    <p class="program-description">
                        The spearhead program for four major research projects, guiding research into community needs 
                        according to the research agenda of respective agencies and institutions.
                    </p>
                    <div class="program-projects">
                        <div class="project-summary">
                            <div class="project-icon harper"><i class="fas fa-wave-square"></i></div>
                            <span>Project Harper - Resonance Frequency Sterilization</span>
                        </div>
                        <div class="project-summary">
                            <div class="project-icon bioregrade"><i class="fas fa-leaf"></i></div>
                            <span>Project Bioregrade - Air Pollution Bioremediation</span>
                        </div>
                        <div class="project-summary">
                            <div class="project-icon taal"><i class="fas fa-mountain"></i></div>
                            <span>Project Taal Volcano - Extremophile Research</span>
                        </div>
                        <div class="project-summary">
                            <div class="project-icon cancer"><i class="fas fa-dna"></i></div>
                            <span>Project Cancer Research - Zinc Finger Technology</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Statistics Overview -->
            <section class="stats-section">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="totalProjects">0</h3>
                            <p>Total Projects</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon active">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="activeProjects">0</h3>
                            <p>Active Projects</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon completed">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="completedProjects">0</h3>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon pending">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="pendingProjects">0</h3>
                            <p>Pending Projects</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Filters and Search -->
            <section class="filters-section">
                <div class="filters-container">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="searchInput" placeholder="Search projects...">
                    </div>
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" data-filter="active">Active</button>
                        <button class="filter-btn" data-filter="completed">Completed</button>
                        <button class="filter-btn" data-filter="pending">Pending</button>
                    </div>
                    <div class="sort-dropdown">
                        <select id="sortSelect">
                            <option value="date">Sort by Date</option>
                            <option value="name">Sort by Name</option>
                            <option value="status">Sort by Status</option>
                            <option value="priority">Sort by Priority</option>
                        </select>
                    </div>
                </div>
            </section>

            <!-- Projects Grid -->
            <section class="projects-section">
                <div class="projects-grid" id="projectsGrid">
                    <!-- Projects will be dynamically inserted here -->
                </div>
            </section>
        `;
    }

    // Render project detail view
    renderProjectDetailView(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) {
            this.navigateToDashboard();
            return;
        }

        const dashboardContainer = document.querySelector('.dashboard-container');
        dashboardContainer.innerHTML = `
            <!-- Breadcrumb Navigation -->
            <nav class="breadcrumb">
                <button class="btn-link" onclick="dashboard.navigateToDashboard()">
                    <i class="fas fa-arrow-left"></i> Back to Dashboard
                </button>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-current">${project.title}</span>
            </nav>

            <!-- Project Header -->
            <header class="project-detail-header">
                <div class="project-detail-logo-container">
                    <div class="project-detail-logo project-logo-${project.id}">
                        <i class="fas ${project.id === 1 ? 'fa-wave-square' : project.id === 2 ? 'fa-leaf' : project.id === 3 ? 'fa-mountain' : 'fa-dna'}"></i>
                    </div>
                </div>
                <div class="project-detail-title">
                    <h1 data-field="title" data-id="${project.id}">${project.title}</h1>
                    <div class="project-badges">
                        <span class="project-status status-${project.status}">${project.status}</span>
                        <span class="priority-badge priority-${project.priority}">${project.priority.toUpperCase()} Priority</span>
                        <span class="program-badge">${project.program}</span>
                    </div>
                </div>
                <div class="project-actions">
                    <button class="btn btn-secondary" onclick="dashboard.editProject(${project.id})">
                        <i class="fas fa-edit"></i> Update Status
                    </button>
                </div>
            </header>

            <!-- Project Overview -->
            <section class="project-overview">
                <div class="overview-grid">
                    <div class="overview-card">
                        <h3><i class="fas fa-info-circle"></i> Project Information</h3>
                        <div class="info-grid">
                            <div class="info-item">
                                <label>Current Phase:</label>
                                <span>${project.phase || 'To be defined'}</span>
                            </div>
                            <div class="info-item">
                                <label>Duration:</label>
                                <span>${this.formatDate(project.startDate)} - ${this.formatDate(project.endDate)}</span>
                            </div>
                            <div class="info-item">
                                <label>TRL Level:</label>
                                <span class="trl-badge">${project.trl} - ${project.trlDescription}</span>
                                <span style="font-size: 0.85rem; color: #718096; margin-top: 4px;">Target: ${project.targetTRL}</span>
                            </div>
                            <div class="info-item">
                                <label>IRL Level:</label>
                                <span class="irl-badge">${project.irl} - ${project.irlDescription}</span>
                                <span style="font-size: 0.85rem; color: #718096; margin-top: 4px;">Target: ${project.targetIRL}</span>
                            </div>
                            <div class="info-item">
                                <label>Team Leader:</label>
                                <span>Ray Albert E. La Rosa</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="overview-card">
                        <h3><i class="fas fa-chart-line"></i> Progress Overview</h3>
                        <div class="progress-container">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${project.currentProgress}%"></div>
                            </div>
                            <div class="progress-text">${project.currentProgress}% Complete</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Project Description -->
            <section class="project-content">
                <div class="content-grid">
                    <div class="main-content">
                        <div class="content-card">
                            <h3><i class="fas fa-file-alt"></i> Project Description</h3>
                            <p data-field="description" data-id="${project.id}">${project.description}</p>
                        </div>

                        <div class="content-card">
                            <h3><i class="fas fa-bullseye"></i> Research Objectives</h3>
                            <ul class="objectives-list">
                                ${project.objectives.map((obj, idx) => `<li data-field="objectives" data-id="${project.id}" data-index="${idx}">${obj}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="content-card">
                            <h3><i class="fas fa-align-left"></i> Significance & Agenda Alignment</h3>
                            <p data-field="significance" data-id="${project.id}">${project.significance}</p>
                        </div>

                        <div class="content-card">
                            <h3><i class="fas fa-trophy"></i> Expected Outcomes & Deliverables</h3>
                            <ul class="outcomes-list">
                                ${project.expectedOutcomes.map((outcome, idx) => `<li data-field="expectedOutcomes" data-id="${project.id}" data-index="${idx}">${outcome}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="sidebar-content">
                        <div class="content-card">
                            <h3><i class="fas fa-user"></i> Program Leader</h3>
                            <div class="team-list">
                                <div class="team-member">
                                    <div class="member-avatar">
                                        <i class="fas fa-user-tie"></i>
                                    </div>
                                    <div class="member-info">
                                        <span class="member-name">Ray Albert E. La Rosa</span>
                                        <span class="member-role">Program Leader</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-card">
                            <h3><i class="fas fa-tasks"></i> Project Milestones</h3>
                            <div class="milestones-list">
                                ${project.milestones.map(milestone => `
                                    <div class="milestone-item milestone-${milestone.status}">
                                        <div class="milestone-icon">
                                            <i class="fas ${
                                                milestone.status === 'completed' ? 'fa-check-circle' :
                                                milestone.status === 'in-progress' ? 'fa-play-circle' :
                                                'fa-clock'
                                            }"></i>
                                        </div>
                                        <div class="milestone-content">
                                            <div class="milestone-title">${milestone.title}</div>
                                            <div class="milestone-phase">${milestone.phase}</div>
                                            <div class="milestone-date">${this.formatDate(milestone.date)}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Delete project - Disabled for presentation mode
    deleteProject(projectId) {
        this.showNotification('Delete function is disabled in presentation mode', 'info');
    }

    // Edit project (simplified - in a real app, this would open an edit modal)
    editProject(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (project) {
            const oldStatus = project.status;
            // For now, just cycle through statuses
            const statuses = ['pending', 'active', 'completed'];
            const currentIndex = statuses.indexOf(project.status);
            project.status = statuses[(currentIndex + 1) % statuses.length];
            
            // Trigger confetti if project was just marked as completed
            if (oldStatus !== 'completed' && project.status === 'completed') {
                this.celebrateCompletion();
                this.showNotification(`🎉 Congratulations! "${project.title}" has been completed!`, 'success');
            } else {
                this.showNotification(`Project status updated to ${project.status}!`, 'success');
            }
            
            // Re-render the current view
            if (this.currentView === 'project-detail') {
                this.renderProjectDetailView(projectId);
            } else {
                this.renderProjects();
            }
            this.updateStatistics();
        }
    }

    // Filter and sort projects
    getFilteredProjects() {
        let filtered = this.projects.filter(project => {
            // Filter by status
            if (this.currentFilter !== 'all' && project.status !== this.currentFilter) {
                return false;
            }
            
            // Filter by search term
            if (this.searchTerm && !project.title.toLowerCase().includes(this.searchTerm) && 
                !project.description.toLowerCase().includes(this.searchTerm)) {
                return false;
            }
            
            return true;
        });

        // Sort projects
        filtered.sort((a, b) => {
            switch (this.currentSort) {
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'status':
                    return a.status.localeCompare(b.status);
                case 'priority':
                    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
                    return priorityOrder[b.priority] - priorityOrder[a.priority];
                case 'date':
                default:
                    return new Date(b.createdDate) - new Date(a.createdDate);
            }
        });

        return filtered;
    }

    // Render projects
    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        const filteredProjects = this.getFilteredProjects();

        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <i class="fas fa-dna"></i>
                    <h3>No projects found</h3>
                    <p>The four Biotechnology Research Program projects should be displayed here!</p>
                </div>
            `;
            return;
        }

        projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <div class="project-logo-placeholder">
                        <div class="logo-icon project-logo-${project.id}">
                            <i class="fas ${project.id === 1 ? 'fa-wave-square' : project.id === 2 ? 'fa-leaf' : project.id === 3 ? 'fa-mountain' : 'fa-dna'}"></i>
                        </div>
                    </div>
                    <div>
                        <div class="project-title">${project.title}</div>
                        <span class="project-status status-${project.status}">${project.status}</span>
                    </div>
                </div>
                
                <div class="project-description">
                    ${project.description}
                </div>
                
                <div class="project-details">
                    ${project.program ? `
                        <div class="project-detail">
                            <i class="fas fa-folder"></i>
                            <span><strong>${project.program}</strong></span>
                        </div>
                    ` : ''}
                    
                    ${project.phase ? `
                        <div class="project-detail">
                            <i class="fas fa-tasks"></i>
                            <span>${project.phase}</span>
                        </div>
                    ` : ''}
                    
                    <div class="project-detail">
                        <i class="fas fa-flask"></i>
                        <span><strong>${project.trl}</strong> - ${project.trlDescription}</span>
                    </div>
                    
                    <div class="project-detail">
                        <i class="fas fa-lightbulb"></i>
                        <span><strong>${project.irl}</strong> - ${project.irlDescription}</span>
                    </div>
                    
                    <div class="project-detail">
                        <i class="fas fa-calendar"></i>
                        <span>${this.formatDate(project.startDate)} - ${project.endDate ? this.formatDate(project.endDate) : 'Ongoing'}</span>
                    </div>
                    
                    <div class="project-detail">
                        <i class="fas fa-flag"></i>
                        <span class="priority-${project.priority}">${project.priority.toUpperCase()} Priority</span>
                    </div>
                    
                    <div class="project-detail">
                        <i class="fas fa-users"></i>
                        <span>Program Leader: Ray Albert E. La Rosa</span>
                    </div>
                    
                    ${project.budget > 0 ? `
                        <div class="project-detail">
                            <i class="fas fa-dollar-sign"></i>
                            <span>$${project.budget.toLocaleString()}</span>
                        </div>
                    ` : ''}
                </div>
                
                <div class="project-actions">
                    <button class="btn btn-primary btn-small" onclick="dashboard.navigateToProject(${project.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="dashboard.editProject(${project.id})">
                        <i class="fas fa-edit"></i> Update Status
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Update statistics
    updateStatistics() {
        const total = this.projects.length;
        const active = this.projects.filter(p => p.status === 'active').length;
        const completed = this.projects.filter(p => p.status === 'completed').length;
        const pending = this.projects.filter(p => p.status === 'pending').length;

        document.getElementById('totalProjects').textContent = total;
        document.getElementById('activeProjects').textContent = active;
        document.getElementById('completedProjects').textContent = completed;
        document.getElementById('pendingProjects').textContent = pending;
    }

    // Format date
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' : '#667eea'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Initialize interactive features
    initializeInteractiveFeatures() {
        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Initialize tooltips
        this.initializeTooltips();
        
        // Add card animations on scroll
        this.initializeScrollAnimations();
    }

    // Initialize tooltips
    initializeTooltips() {
        // Add tooltip styles if not already present
        if (!document.getElementById('tooltip-styles')) {
            const tooltipStyles = document.createElement('style');
            tooltipStyles.id = 'tooltip-styles';
            tooltipStyles.textContent = `
                .tooltip {
                    position: absolute;
                    background: #2d3748;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.2s;
                    white-space: nowrap;
                }
                .tooltip.show {
                    opacity: 1;
                }
            `;
            document.head.appendChild(tooltipStyles);
        }
    }

    // Initialize scroll animations
    initializeScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        // Observe project cards when they're rendered
        this.cardObserver = observer;
    }

    // Add confetti effect for completed projects
    celebrateCompletion() {
        const colors = ['#667eea', '#48bb78', '#ed8936', '#e53e3e', '#38b2ac'];
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    top: -10px;
                    left: ${Math.random() * 100}%;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    animation: fall ${2 + Math.random() * 2}s linear forwards;
                `;
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 4000);
            }, i * 20);
        }

        // Add animation CSS
        if (!document.getElementById('confetti-styles')) {
            const style = document.createElement('style');
            style.id = 'confetti-styles';
            style.textContent = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new ResearchDashboard();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});