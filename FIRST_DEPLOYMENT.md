# 🚀 First Deployment Guide

Since this is your first deployment, follow these steps:

## 1. Required GitHub Secrets and Variables

### Secrets (Settings → Secrets and variables → Actions → Secrets):
```
Name: SUI_KEYSTORE
Value: [paste your full keystore file content]
```

### Variables (Settings → Secrets and variables → Actions → Variables):
```
Name: SUI_ADDRESS  
Value: 0x8de8fac3c17c10311b7e0fb8ed8c972e42eac5732388af83ccf8e320ff226ee8

Name: WALRUS_CONFIG
Value: [paste your Walrus config YAML]

Name: WALRUS_SITE_OBJECT
Value: [LEAVE EMPTY for first deployment]
```

## 2. Get Your Configuration Values

```bash
# Get SUI_KEYSTORE (full file content)
cat ~/.sui/sui_config/sui.keystore

# Get SUI_ADDRESS (you already have this)
sui client active-address

# Get WALRUS_CONFIG (full file content)  
cat ~/.config/walrus/client_config.yaml
```

## 3. Deploy Process

1. **Set up secrets/variables** in GitHub (leave `WALRUS_SITE_OBJECT` empty)
2. **Push to main branch** - this will trigger first deployment
3. **Check GitHub Actions logs** for the site object ID
4. **Add the site object ID** to `WALRUS_SITE_OBJECT` variable
5. **Future pushes** will use `update` instead of `publish`

## 4. After First Deployment

Once you get the site object ID from the logs:

1. Go to Settings → Secrets and variables → Actions → Variables
2. Edit `WALRUS_SITE_OBJECT` 
3. Paste the site object ID
4. Save

Future deployments will then use the `update` command automatically!

## 5. Accessing Your Site

Your site will be available at: `https://[site-object-id].wal.app`