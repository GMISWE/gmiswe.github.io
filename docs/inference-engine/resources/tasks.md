---
toc_max_heading_level: 3
sidebar_position: 1
---

# Tasks
Tasks are designed to create dedicated endpoints for the provided official models or for custom models derived from the artifacts you have built.

## View Task
1. Click "Resources Overview" in the upper right corner of the menu.

   ![image-20250320142338452](/assets/image-20250320142338452.png)

2. Click on "Tasks" in the left-hand menu.You can view tasks dashboard.

   ![image-20250320142756262](/assets/image-20250320142756262.png)

- **Name**: Task name.

- **Artifact**: Task created from which artifact.

- **Spec**: One replica required resources specification. 

- **Access**: Service - dedicated endpoint URL

  ​        Dashboard - monitor task deployment

- **Schedule**: Task's scheduling, One-off or daily.

- **Created**: Task created time

- **Status**:  
  ​           Idle -  The task is not currently running and is waiting for execution. No resources are being used.

  ​           In-queue - The task is waiting in line to be executed. 

  ​           Starting - The task is in the process of initializing. Resources are being allocated, and the task is preparing to run.               

  ​           Running -  The task is currently executing. Resources are actively being used to perform the task.

  ​           Need Stop - The task is about to be terminated.

- **Actions**:  Click button <img src="/assets/image-20250320144748075.png" alt="image-20250320144748075" style="zoom:50%;" /> to deactive the running task.

  ​                 Click button <img src="/assets/image-20250320145006225.png" alt="image-20250320145006225" style="zoom:50%;" />  to active the idle task.

  ​                 Click Edit menu to edit the task.

  ​                 Click Archive menu to archive the task.

  ​                 <img src="/assets/image-20250320145128252.png" alt="image-20250320145128252" style="zoom:50%;" />

4. Click the status tab to review the tasks corresponding to each status.

   ![image-20250320145346198](/assets/image-20250320145346198.png)



## Launch Task

1. Click "Launch Task" button to launch task for provided models or customized artifacts.

2. Setting resource

   The resource cannot be edited; click the "Next" button.

   ![image-20250319164015889](/assets/image-20250319164015889.png)

3. Setting and scheduling

   **Task Name**: Define task name.

   **File Path**: Specify the script file name to be executed in the Docker image(without the file extension). Fox example, if the image includes a script named serve.py, enter serve here.

   **Deployment Name**: Specify the deployment name that will be exposed to the Ray cluster by the script. For example, you can use app as the deployment name.

   **Type**: One-off or Daily

   ​          One-off - The task runs once as scheduled time.

   ​          Daily - The task runs at the first scheduled time and can update replica numbers at subsequent daily scheduled times.           This option is designed for recurring, predictable workloads where scaling needs follow a consistent daily pattern.

   **Timezone**: Select the timezone for scheduling.

   **Time**: Select the time for scheduling.

   **Replicas**: Select the Min replicas and Max replicas for schedule.

   ![image-20250319164338359](/assets/image-20250319164338359.png)

   ![image-20250319165448700](/assets/image-20250319165448700.png)

4. Summary

   Review the information in the summary page.  After confirmation, click the "Launch" button to launch task. 

   ![image-20250320145850395](/assets/image-20250320145850395.png)

5. Active the Task

   In the task list, locate the task and then click button <img src="/assets/image-20250320145006225.png" alt="image-20250320145006225" style="zoom:50%;" />  to active the idle task.

   

   





 

 



