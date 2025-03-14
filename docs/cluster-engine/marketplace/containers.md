# Rent Containers

## Choose container spec

1. Select a container template to rent

![image-20250311-075152.png](/assets/image-20250311-075152.png)

1. Choose a proper resource spec

**Resource spec:**

- **GPU**: Specify the number of GPU cards required for the container.
- **CPU**: Define the CPU resources needed for the container.
- **Memory**: Set the amount of memory required for the container.
- **Ephemeral Storage**: Allocate the disk space needed for the container.

![image-20250311-072033.png](/assets/image-20250311-072033.png)

1. Enter rental end date and quantity

![image-20250311-072059.png](/assets/image-20250311-072059.png)

1. Click “**Next**”

## Container settings

1. Configure Container settings

- **Container Name**: Specify a name for the container
- **Ports**: Define the service ports to access the container

![image-20250311-081304.png](/assets/image-20250311-081304.png)

- **(Optional) Expose SSH Port**:

> [!WARNING]
> When using container templates provided by GMI Cloud, you can select this option to enable SSH access to the container. Please enter your SSH Public Key.

- **(Optional) Expose Jupyter Notebook Port**:

> [!WARNING]
> When using container templates provided by GMI Cloud, you can select this option to enable Jupyter Notebook access to the container.

- **(Optional) Set Environment Variables**: Define any necessary environment variables for the container.

![image-20250311-081840.png](/assets/image-20250311-081840.png)

1. Review the container summary and click “**Add To Cart”**

![image-20250311-082512.png](/assets/image-20250311-082512.png)

