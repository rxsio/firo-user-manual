---
title: Proxy
version: 0.1.0
date: 21.08.2024
authors:
  - Patryk Filip Gryz, pfgryz@gmail.com
  - Gabriel Brzeziński
---

!!! expand
    Missing author's email address

## Browser Proxy

Replace:
- `<username>` with your personal account name 

### Establish SSH Tunnel

1. Open Windows Terminal:
  - Search for `Terminal` in the Windows search bar, or
  - Press ++windows+r++, then enter `cmd.exe`.
2. Execute the following command
```sh
ssh -D 2280 <username>@bastion.desy.de
```
3. Leave the window open

### Setup Browser

=== "Google Chrome"

    1. Open Chrome Settings:
       - Click :mdi-dots-vertical: in the top-right corner of the browser.
       - Select `Settings` from the dropdown menu.

    2. Access System Proxy Settings:
       - Scroll down and click on `System` in the left-hand menu.
       - Under `System` click on `Open your computer’s proxy settings.`

    3. Configure Proxy Settings:
       - In the proxy settings window, configure the proxy server details (IP address and port) as needed.
         - Activate the Option `Manual Proxy Configuration`
         - SOCKS Host: `localhost`
         - Port: `2280`
         - Activate the Option `SOCKS v5`
         - Activate the Option `Proxy DNS when using SOCKS v5`
         - Save the changes and close the settings window.

=== "Mozilla Firefox"
    !!! note
        Using a proxy in Firefox may cause difficulties in accessing rover cameras. We recommend using Google Chrome for a more reliable connection.

    1. Open Firefox Settings:
       - Click :octicons-three-bars-16: in the top-right corner of the browser.
       - Select `Settings` from the dropdown menu.

    2. Navigate to Network Settings:
       - Scroll down to the `Network Settings` section.
       - Click on the `Settings...` button.

    3. Configure Proxy Settings:
       - Activate the Option `Manual Proxy Configuration`
       - SOCKS Host: `localhost`
       - Port: `2280`
       - Activate the Option `SOCKS v5`
       - Activate the Option `Proxy DNS when using SOCKS v5`