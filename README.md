<div align="center">
  <h1>🌟 Hiroko</h1>
  <p><i>A feature-rich, multi-purpose Discord bot designed for entertainment and utility.</i></p>
  
  [![Discord.js](https://img.shields.io/badge/Discord.js-v12.2.0-blue.svg)](https://discord.js.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-16.x-green.svg)](https://nodejs.org/)
  [![Mongoose](https://img.shields.io/badge/Mongoose-v5.9.x-red.svg)](https://mongoosejs.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

<hr>

## ✨ Features

- **Robust Command Handler**: Dynamically loads commands and categories.
- **Cooldowns & Rate Limiting**: Built-in mechanisms to prevent command spam.
- **Message Tracking**: Sniper and edit tracker functionality.
- **Entertainment Ecosystem**: Integrates with [Neko's Life](https://nekos.life/), [Urban Dictionary](https://www.urbandictionary.com/), [Tenor](https://tenor.com/), and Canvas to offer engaging interactive content.
- **Database Architecture**: Powered by MongoDB for scaling user actions and settings.
- **Dynamic Presence**: Custom status and rich presence.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16.x or newer recommended)
- [MongoDB](https://www.mongodb.com/) (If running locally, or use MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Anish-530/hiroko.git
cd hiroko
```

2. Install the necessary dependencies:
```bash
npm install
```

3. Configure your environment:
Create a `.env` file in the root directory and add your bot token (this file is ignored by Git to keep your token safe!):
```env
token=YOUR_DISCORD_BOT_TOKEN_HERE
```

### Usage

To start Hiroko, run the following command:
```bash
node index.js
```
*Alternatively, you can use \`pm2\` or similar process managers for keeping the bot alive 24/7.*

The default prefix is `hey ` (e.g., `hey help`).

## 🛠️ Built With

* [Discord.js (v12.2.0)](https://discord.js.org/) - Discord API Library
* [Mongoose](https://mongoosejs.com/) - MongoDB Object Modeling
* [Canvas](https://www.npmjs.com/package/canvas) - Image Manipulation
* [Express](https://expressjs.com/) - Minimalist Web Framework
* Custom Handlers & Collectors for complex interactions.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/hiroko/issues) if you want to contribute.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  <i>Developed with 💗 by Awish.</i>
</div>
