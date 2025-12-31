# Duosub SRT — Dual Subtitles for Video 🎬

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](#)

**Duosub SRT** is a powerful, lightweight browser extension designed for language learners and cinephiles. It allows you to overlay custom secondary subtitles from local `.srt` files onto almost any video player.

🔗 **Official Website & Privacy Policy:** [https://duosub.github.io](https://duosub.github.io)

---

## ✨ Key Features
* **Universal Compatibility:** Works with most HTML5 video players.
* **Local File Support:** Load your own `.srt` files directly from your device.
* **Privacy First:** No data is uploaded to servers. Everything is processed locally in your browser.
* **Customizable UI:** Adjust font size, color, and position to ensure a perfect viewing experience.
* **Manifest V3:** Built using the latest extension standards for better security and performance.

## 🛠 Installation

### 🚀 Installation

#### Option 1: Chrome Web Store (Recommended)
You can install **DuoSub** directly from the official store for automatic updates:

[![Available in the Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-DuoSub-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://chromewebstore.google.com/detail/duosub-subtitle-creator/dnlmeijkfchinlchooiolkcchbcmpikj)

#### Option 2: Manual Installation (Developer Mode)
1. Download the [latest release ZIP](https://github.com/duosub/duosub.github.io/releases/download/v1.0.0/duosub_v1.0.0.zip).
2. Unpack the archive on your computer.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** (toggle in the top right).
5. Click **Load unpacked** and select the extension folder.
   
## 🚀 Technical Implementation
The extension uses a **MutationObserver** to monitor the DOM for video elements. Once detected, it creates a transparent overlay layer where the secondary subtitles are rendered using **Vanilla JavaScript**. This ensures zero lag and high compatibility without modifying the original site scripts.

## 📄 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
*Created by [duosub](https://github.com/duosub)*
