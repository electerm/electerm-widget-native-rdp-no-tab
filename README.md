# Native RDP without a tab

[简体中文](README_CN.md)

When an RDP bookmark launches Windows Remote Desktop (`mstsc.exe`), this widget closes the corresponding Electerm tab. You can then sign in and work in the Remote Desktop window. If the client fails to launch, the tab stays open so you can retry.

## Install

Use a Windows desktop build of Electerm that supports client widget assets and autorun on import. Open **Settings → Widgets → Import** and enter `electerm/electerm-widget-native-rdp-no-tab`, or select a local clone with **Import folder**.

## Use

Enable the local RDP client in your bookmark and open it. The widget starts automatically on import and at subsequent Electerm launches. You can turn off **Start with Electerm** in the widget settings or toggle autorun under **Running instances**. Use **Stop** to disable the widget for the current session.

The widget acts only on successful external RDP launches. Embedded RDP sessions and other tab types keep their usual behavior.
