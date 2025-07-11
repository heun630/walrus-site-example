# Walrus Mainnet Deployment Guide

This project is configured for Walrus Mainnet deployment.

## Configuration

- **Network**: Sui Mainnet
- **Target**: Walrus Mainnet
- **Deployment**: Automatic via GitHub Actions

## 🎯 Mainnet Deployment Steps

### 1. GitHub Secrets Setup

Go to GitHub repository Settings → Secrets and variables → Actions:

```
Name: SUI_PRIVATE_KEY
Value: <your_exported_sui_private_key>
```

Export your private key using:
```bash
sui keytool export --key-identity <your-key-alias>
```

### 2. Token Preparation

**Required tokens:**
- **SUI**: Transaction gas fees (~0.1-1 SUI)
- **WAL**: Storage costs (depends on epochs)

**Check balance:**
```bash
sui client balance
```

**Buy WAL tokens** (if needed):
- Exchange SUI → WAL on Sui DEX or exchanges
- Or let walrus-sites-deploy auto-purchase

### 3. Local Testing (Optional)

```bash
# Build test
npm run build

# Mainnet deployment test (uses real tokens!)
npm run deploy:walrus
```

### 4. GitHub Actions Auto Deployment

```bash
git add .
git commit -m "Deploy to Walrus mainnet"
git push origin main
```

## ⚠️ Important Notes

1. **Mainnet uses real tokens**
2. **Ensure sufficient SUI/WAL tokens before deployment**
3. **Keep private keys secure**
4. **Start with small tests**

## 🔍 Post-Deployment Verification

1. Check site ID in GitHub Actions logs
2. Visit `https://[site-id].wal.app`
3. Verify deployment info on the site

## 💰 Estimated Costs

- **Gas fees**: ~0.01-0.1 SUI
- **Storage (5 epochs)**: ~0.01-0.1 WAL
- **Total cost**: A few dollars (depending on market rates)

## Troubleshooting

1. **Insufficient tokens**: Purchase more SUI/WAL
2. **Deployment fails**: Check GitHub Actions logs
3. **Site inaccessible**: Verify site ID and wait for propagation

