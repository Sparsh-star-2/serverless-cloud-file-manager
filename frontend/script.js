<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CloudVault | Serverless File Manager</title>

    <link rel="stylesheet" href="style.css">

    <!-- Modern icons -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    >
</head>

<body>

    <!-- Background decoration -->
    <div class="background-glow glow-one"></div>
    <div class="background-glow glow-two"></div>


    <div class="app">

        <!-- =========================
             SIDEBAR
        ========================== -->

        <aside class="sidebar">

            <div class="logo">
                <div class="logo-icon">
                    <i class="fa-solid fa-cloud"></i>
                </div>

                <span>CloudVault</span>
            </div>


            <nav class="nav-menu">

                <a href="#" class="nav-item active">
                    <i class="fa-solid fa-grid-2"></i>
                    <span>Overview</span>
                </a>

                <a href="#files-section" class="nav-item">
                    <i class="fa-solid fa-folder"></i>
                    <span>My Files</span>
                </a>

                <a href="#upload-section" class="nav-item">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    <span>Upload</span>
                </a>

            </nav>


            <div class="sidebar-bottom">

                <div class="storage-card">

                    <div class="storage-title">
                        <span>Cloud Storage</span>
                        <i class="fa-solid fa-database"></i>
                    </div>

                    <div class="storage-bar">
                        <div class="storage-progress"></div>
                    </div>

                    <p>
                        <span id="fileCount">0</span> files stored
                    </p>

                </div>

            </div>

        </aside>



        <!-- =========================
             MAIN CONTENT
        ========================== -->

        <main class="main-content">

            <!-- TOP BAR -->

            <header class="topbar">

                <div class="page-heading">

                    <p class="eyebrow">
                        SERVERLESS CLOUD STORAGE
                    </p>

                    <h1>
                        Your files, <span>simplified.</span>
                    </h1>

                    <p class="subtitle">
                        Upload, access, download and manage your files
                        securely through a serverless AWS architecture.
                    </p>

                </div>


                <div class="system-status">

                    <span class="status-dot"></span>

                    <span>System Online</span>

                </div>

            </header>



            <!-- =========================
                 STATS
            ========================== -->

            <section class="stats-grid">

                <div class="stat-card">

                    <div class="stat-icon files-icon">
                        <i class="fa-solid fa-folder-open"></i>
                    </div>

                    <div>
                        <p>Total Files</p>

                        <h2 id="totalFiles">
                            0
                        </h2>
                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon storage-icon">
                        <i class="fa-solid fa-hard-drive"></i>
                    </div>

                    <div>
                        <p>Total Storage</p>

                        <h2 id="totalStorage">
                            0 B
                        </h2>
                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon server-icon">
                        <i class="fa-solid fa-bolt"></i>
                    </div>

                    <div>
                        <p>Architecture</p>

                        <h2 class="architecture-text">
                            Serverless
                        </h2>
                    </div>

                </div>

            </section>



            <!-- =========================
                 UPLOAD SECTION
            ========================== -->

            <section
                class="upload-section"
                id="upload-section"
            >

                <div class="section-heading">

                    <div>

                        <p class="section-label">
                            CLOUD UPLOAD
                        </p>

                        <h2>
                            Upload a new file
                        </h2>

                    </div>

                </div>


                <div
                    class="upload-zone"
                    id="uploadZone"
                >

                    <input
                        type="file"
                        id="fileInput"
                        hidden
                    >


                    <div class="upload-icon">

                        <i class="fa-solid fa-cloud-arrow-up"></i>

                    </div>


                    <h3>
                        Drag & drop your file here
                    </h3>

                    <p>
                        or choose a file from your computer
                    </p>


                    <button
                        type="button"
                        class="browse-button"
                        id="browseButton"
                    >

                        <i class="fa-solid fa-folder-open"></i>

                        Browse Files

                    </button>


                    <div
                        class="selected-file"
                        id="selectedFile"
                    >

                        <i class="fa-solid fa-file"></i>

                        <span id="selectedFileName">
                            No file selected
                        </span>

                    </div>


                    <button
                        type="button"
                        class="upload-button"
                        id="uploadButton"
                        disabled
                    >

                        <i class="fa-solid fa-cloud-arrow-up"></i>

                        Upload to Cloud

                    </button>


                    <!-- Upload progress -->

                    <div
                        class="progress-container"
                        id="progressContainer"
                    >

                        <div class="progress-info">

                            <span>
                                Uploading file...
                            </span>

                            <span id="progressPercent">
                                0%
                            </span>

                        </div>


                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                id="progressFill"
                            ></div>

                        </div>

                    </div>

                </div>


                <!-- Status message -->

                <div
                    class="status-message"
                    id="statusMessage"
                ></div>

            </section>



            <!-- =========================
                 FILES SECTION
            ========================== -->

            <section
                class="files-section"
                id="files-section"
            >

                <div class="files-header">

                    <div>

                        <p class="section-label">
                            CLOUD FILES
                        </p>

                        <h2>
                            Your files
                        </h2>

                        <p class="files-description">
                            Manage everything stored in your
                            secure cloud storage.
                        </p>

                    </div>


                    <button
                        type="button"
                        class="refresh-button"
                        id="refreshButton"
                    >

                        <i class="fa-solid fa-arrows-rotate"></i>

                        Refresh

                    </button>

                </div>



                <!-- FILE LIST -->

                <div
                    class="file-list-container"
                    id="fileList"
                >

                    <!-- JavaScript will dynamically add files -->

                    <div class="loading-state">

                        <div class="loader"></div>

                        <p>
                            Loading your files...
                        </p>

                    </div>

                </div>

            </section>



            <!-- Footer -->

            <footer class="footer">

                <p>
                    Powered by
                    <span>Amazon S3</span>,
                    <span>AWS Lambda</span>
                    &amp;
                    <span>API Gateway</span>
                </p>

            </footer>

        </main>

    </div>


    <!-- =========================
         DELETE CONFIRMATION MODAL
    ========================== -->

    <div
        class="modal-overlay"
        id="deleteModal"
    >

        <div class="delete-modal">

            <div class="modal-icon">

                <i class="fa-solid fa-trash"></i>

            </div>


            <h2>
                Delete this file?
            </h2>

            <p>
                This action will permanently remove the file
                from your cloud storage.
            </p>


            <div class="modal-actions">

                <button
                    class="cancel-button"
                    id="cancelDelete"
                >
                    Cancel
                </button>


                <button
                    class="confirm-delete-button"
                    id="confirmDelete"
                >

                    <i class="fa-solid fa-trash"></i>

                    Delete File

                </button>

            </div>

        </div>

    </div>


    <script src="script.js"></script>

</body>

</html>
