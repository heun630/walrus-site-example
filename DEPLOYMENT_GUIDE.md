# Walrus Mainnet Deployment Guide

This project is configured for Walrus Mainnet deployment.

## Configuration

- **Network**: Sui Mainnet
- **Target**: Walrus Mainnet
- **Deployment**: Automatic via GitHub Actions

## 🎯 Mainnet Deployment Steps

### 1. GitHub Secrets and Variables Setup

**Repository Secrets** (Settings → Secrets and variables → Actions → Secrets):
```
Name: SUI_KEYSTORE
Value: <full_keystore_file_content>
```

**Repository Variables** (Settings → Secrets and variables → Actions → Variables):
```
Name: SUI_ADDRESS
Value: <your_sui_wallet_address>

Name: WALRUS_SITE_OBJECT  
Value: <site_object_id_after_first_deployment>

Name: WALRUS_CONFIG
Value: <walrus_client_config_yaml_content>
```

**Get your values:**
```bash
# Get SUI_KEYSTORE (full file content)
cat ~/.sui/sui_config/sui.keystore

# Get SUI_ADDRESS
sui client active-address

# Get WALRUS_CONFIG (full file content)
cat ~/.config/walrus/client_config.yaml
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

### 3. First Deployment

For the **first deployment**, you need to use `publish` instead of `update`:

```bash
# Local first deployment (to get WALRUS_SITE_OBJECT)
npm run build
curl -L https://storage.googleapis.com/mysten-walrus-binaries/site-builder-mainnet-latest-ubuntu-x86_64 -o site-builder
chmod +x site-builder
./site-builder publish dist --epochs 5
```

Save the returned **site object ID** and add it to GitHub Variables as `WALRUS_SITE_OBJECT`.

### 4. GitHub Actions Auto Deployment

```bash
git add .
git commit -m "Deploy to Walrus mainnet"
git push origin main
```

**Uses**: Exact same workflow as MystenLabs/walrus documentation:
- Same `site-builder update` command
- Same environment variables (`SUI_KEYSTORE`, `SUI_ADDRESS`, `WALRUS_CONFIG`)
- Same `--check-extend` flag

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

