# Walrus Site Example

An example site with automatic deployment and updates to Walrus Mainnet.

## 🚀 Features

- **Walrus Mainnet Deployment**: Automatic deployment to Walrus network on every main branch push
- **Distributed Storage**: High availability guaranteed by distributed storage across 100+ nodes worldwide
- **Real-time Updates**: Code changes are reflected immediately
- **CI/CD Pipeline**: Automated build and deployment via GitHub Actions
- **Modern Tech Stack**: React + Vite + MystenLabs site-builder

## 🛠️ Setup Guide

### 1. Sui Wallet Setup

First, you need a Sui wallet:

```bash
# Install Suibase
curl -fsSL https://raw.githubusercontent.com/suibase/suibase/main/scripts/common/install.sh | bash

# Start mainnet environment
~/suibase/scripts/start mainnet

# Generate new wallet address
sui client new-address --alias walrus-deploy
```

### 2. GitHub Secrets and Variables Setup

**Secrets** (Settings → Secrets and variables → Actions → Secrets):
- `SUI_PRIVATE_KEY`: Add your Sui wallet's private key

**Variables** (Settings → Secrets and variables → Actions → Variables):
- `WALRUS_SITE_OBJECT`: Site object ID (auto-created on first deployment)

### 3. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build
npm run build

# Deploy to Walrus mainnet (local)
npm run deploy:walrus

# Deploy to Walrus testnet (for testing)
npm run deploy:walrus:testnet
```

### 4. SUI and WAL Token Preparation

For Walrus deployment, you need:
- **SUI tokens**: Transaction gas fees
- **WAL tokens**: Walrus storage costs

```bash
# Check wallet balance
sui client balance

# Buy WAL tokens (if needed)
# walrus-sites-deploy provides auto-purchase option
```

### 5. Auto Deployment Verification

1. Push code changes to `main` branch
2. Check workflow execution in GitHub Actions tab
3. After deployment completion, check site at `https://[site-id].wal.app`

## 📁 Project Structure

```
walrus-site-example/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Walrus deployment workflow
├── public/
│   └── walrus.svg             # Favicon
├── src/
│   ├── App.jsx                # Main component
│   ├── App.css                # Styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── .env.example               # Environment variables example
├── walrus.config.json         # Walrus deployment config
├── index.html                 # HTML template
├── package.json               # Package config (includes walrus-sites-deploy)
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## 🔄 Walrus Deployment Process

1. **Code Push** → GitHub repository
2. **GitHub Actions Trigger** → Automatic build starts
3. **Suibase Setup** → Configure Sui mainnet environment
4. **Build and Deploy** → Install dependencies, build, run Walrus Sites Deploy
5. **Distributed Storage** → Files are distributed across Walrus network
6. **Site Registration** → Site information registered on Sui blockchain
7. **Site Activation** → Accessible at `https://[site-id].wal.app`

## 🌐 Live Site

Deployed site: `https://[site-id].wal.app`

- Site ID is auto-generated during deployment
- Can be found in GitHub Actions logs

## 📝 Customization

- `src/App.jsx`: Modify main component
- `src/App.css`: Change styles
- `.github/workflows/deploy.yml`: Adjust Walrus deployment settings
- `walrus.config.json`: Change Walrus network configuration
- `vite.config.js`: Modify build settings

## ⚡ Walrus Features

- **Distributed Storage**: Data distributed across 100+ nodes worldwide
- **High Availability**: Site accessible even if 2/3 of nodes go offline
- **Censorship Resistance**: Strong against censorship with no centralized servers
- **Fast Access**: Quick loading with optimized data encoding
- **Blockchain Security**: Data integrity guaranteed through Sui blockchain
- **Cost Effective**: Lower cost compared to traditional cloud hosting

## 💰 Cost Information

- **WAL tokens**: Storage costs (for epochs duration)
- **SUI tokens**: Transaction gas fees
- **1 epoch = 24 hours** (adjustable in configuration)
- Example: 5 epochs = 5 days of hosting

## 🔧 Advanced Configuration

### Custom Deployment Settings

You can adjust the following in `walrus.config.json`:

```json
{
  "network": "mainnet",        // mainnet or testnet
  "epochs": 5,                 // hosting duration (days)
  "gas_budget": 100000000,     // gas budget
  "force_update": false        // force update flag
}
```

### Environment-specific Deployment

```bash
# Testnet deployment
npm run deploy:walrus:testnet

# Mainnet deployment (production)
npm run deploy:walrus
```