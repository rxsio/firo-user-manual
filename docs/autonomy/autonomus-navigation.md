---
title: Autonomy User Manual
version: 1.0.0
date: 16.10.2025
authors:
  - Kacper Marchlewicz, marchlewicz.kac@gmail.com
---
## Accessing ROS

ROS is running within its own Docker container. To access it, use:

```bash
sudo docker exec -it rover-ros-1 bash
```


## Launching the Visualization Web App

To launch the simple web app for data visualization and goal sending, run:

```bash
ros2 launch vizanti_server vizanti_rws.launch.py
```

You can then access it in your browser at:

```
http://<host_ip>:5000
```

> **Note:** The `<host_ip>` depends on your connection method — it may be via VPN or local network.

Make sure to **switch to the map frame**. Topics will appear once nodes are launched.  
If the connection becomes unstable, try restarting (either use “Force Reload” in the app or restart the `vizanti_server` node).


## Autonomous Mode Setup

Before launching autonomous mode, a **map of the environment** must be prepared.  
The robot’s odometry currently has limited accuracy, so mapping requires a **static environment** (avoid mapping when dynamic obstacles are present as they will be added to map as static ones).

### Steps

1. **Launch sensors and odometry:**  
   ```bash
   ros2 launch firo_navigation sensors.launch.py
   ```

2. **Launch data fusion nodes:**  
   ```bash
   ros2 launch firo_navigation localization.launch.py
   ```

3. **Launch SLAM mode:**  
   ```bash
   ros2 launch firo_navigation slam.launch.py
   ```

After launching, add the **map topic**, **robot frame**, and **2D point cloud** to display in the app.  
Drive the robot around to build the map — it updates every ~0.45 meters or radians of change.

> If the robot completes a loop (e.g., a circle or rectangle), *loop closure* might not occur immediately. Give it time, continue driving.

Avoid long, featureless areas (e.g., “infinite corridors”) — they reduce SLAM quality. Try approaching them from other directions.


## Saving the Map

When the map quality is satisfactory, save it using:

```bash
ros2 run nav2_map_server map_saver_cli -f map_name
```

Then, close the **data fusion** and **SLAM** nodes (`CTRL+C` in their terminals), but **keep sensors running**.

Edit the navigation configuration file to set the map name:

```bash
nano install/firo_navigation/share/firo_navigation/config/navigation_params.yaml
```

Find and update the following section:

```yaml
map_server:
  ros__parameters:
    yaml_filename: "test_map.yaml"
```

Replace `"test_map..."` with your own map name.  
Save and exit with `CTRL+X`, then `Y`, then `Enter`.


## Launching Navigation

With the sensors still running, start the navigation system:

```bash
ros2 launch firo_navigation navigation.launch.py
```

> Launch may take some time. If it fails on the first attempt, try again.

In the web app, display:
- **Map**
- **Global Costmap**
- **Local Costmap**

Before driving, set the **initial pose** (green arrow → click, hold, and rotate for orientation).  
Move the robot slightly forward/backward to improve localization accuracy.  
Once localized, you can send navigation goals (purple arrow → set pose and orientation).

Monitor the terminal running navigation — it will show status messages (e.g., receiving goal, recovery behavior).


## Docking Station

Docking station coordinates are used by the **docking server** for automatic docking and undocking (using a PID controller).

> Start detection when the robot is about **0.5 m** from the docking station.  
> Initiate docking when about **1.5 m** away and facing the station.

### Steps

1. **Detect the docking station shape:**  
   ```bash
   ros2 launch firo_navigation dock_save_pose.launch.py
   ```

   You can visualize the detected candidate shape in the web app.

2. **Save the dock position:**  
   ```bash
   ros2 service call /save_dock_pose std_srvs/srv/Trigger "{}"
   ```

3. **Move the robot ~1 meter back** and save the **approach pose:**  
   ```bash
   ros2 service call /save_approach_dock_pose std_srvs/srv/Trigger "{}"
   ```

4. **Approach the docking station:**  
   ```bash
   ros2 service call /send_approach_dock_pose std_srvs/srv/Trigger "{}"
   ```

5. **Perform docking:**  
   ```bash
   ros2 launch firo_navigation dock_action_docking_launch.py
   ```

6. **Perform undocking:**  
   ```bash
   ros2 launch firo_navigation dock_action_udocking_launch.py
   ```



