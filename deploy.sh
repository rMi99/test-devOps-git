#!/bin/bash

echo "🚀 Starting deployment..."

cd /var/www/test-devOps-git || exit

echo "📥 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🔄 Restarting app..."
pkill node || true

echo "🔥 Starting app..."
nohup node app.js > app.log 2>&1 &

echo "✅ Deployment complete!"
