---
toc_max_heading_level: 3
sidebar_position: 2
---
# Artifacts

Artifacts manage model artifacts and their dependencies, including Docker containers, model files, and associated scripts. They offer secure storage and versioning capabilities for all deployment components. After building artifacts, you can launch tasks for custom models.

## View Artifacts
1. Click "Resources Overview" in the upper right corner of the menu.

   ![image-20250320142338452](/assets/image-20250320142338452.png)

2. Click on "Artifacts" in the left-hand menu.You can view artifacts dashboard.

   ![image-20250320154058961](/assets/image-20250320154058961.png)

   **Custom Models**: Custom Modes are built by you.

   **Offical Modes**: Offical Models are provided by GMI Cloud.

## Create Artifacts from template

1. Click the arrow next to button "Create Custom Artifact".

   ![image-20250320154727392](/assets/image-20250320154727392.png)

2. You will see template list, choose the template, then will create custom models artifact from template.

   ![image-20250320155357774](/assets/image-20250320155357774.png)

## Create Custom Artifacts

1. Click the button "Create Custom Artifact".

   ![image-20250320155704401](/assets/image-20250320155704401.png)

   **Artifact Name** : Input artifact name.

   **Description**: Input description.

   **Upload Icon**: Upload Icon

   **Build File**: Upload a build ZIP file including Docker containers and associated scripts. E.g.

   ​                    <img src="/assets/image-20250320162015376.png" alt="image-20250320162015376" style={{ width: '50%', height: 'auto' }} />


2. Click the "Create" button to create an artifact. You will then see the artifact in the artifact dashboard under custom models, along with its building status.

   ![image-20250320161903711](/assets/image-20250320161903711.png)

3. Upload model files by clicking button ![image-20250320162908676](/assets/image-20250320162908676.png)

   <img src="/assets/image-20250320162838929.png" alt="image-20250320162838929" style={{ width: '50%', height: 'auto' }} />

4. Wait for the artifact to reach "Running" status (this may take several minutes), and then you can launch a task from the built artifact.
