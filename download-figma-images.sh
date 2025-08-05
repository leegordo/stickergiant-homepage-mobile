#!/bin/bash

# Download script for Figma images from localhost:3845
# Run this when your Figma MCP server is running

echo "🔍 Checking if Figma MCP server is running..."

# Test if server is accessible
if curl -s -f http://localhost:3845/assets/03e88ece3e6f92ec8bd37715933b78819c091571.png > /dev/null; then
    echo "✅ Figma MCP server is accessible!"
    
    # Create directories
    mkdir -p public/images/{brand,hero,features,collections,materials,blog}
    
    echo "📥 Downloading images..."
    
    # Brand images
    curl -s "http://localhost:3845/assets/03e88ece3e6f92ec8bd37715933b78819c091571.png" -o "public/images/brand/stickergiant-logo.png"
    curl -s "http://localhost:3845/assets/f05de3166898487f6041a01acc1b5e37a518198f.png" -o "public/images/brand/satisfaction-guaranteed.png"
    curl -s "http://localhost:3845/assets/efc9bbf9674e628ae0ca280b4caa3b75e8db3e0d.png" -o "public/images/brand/every-sticker-story.png"
    
    # Hero images
    curl -s "http://localhost:3845/assets/cb45312f8fdbce2ef5a415cd640f17b61ac9fbec.png" -o "public/images/hero/hand-holding-stickers.png"
    curl -s "http://localhost:3845/assets/2180fdd4fda0a7c591c4b5a9a5f80aaebea715fb.png" -o "public/images/hero/coffee-cup-sticker.png"
    
    # Feature icons
    curl -s "http://localhost:3845/assets/a0ab28c68b78ee2ffe62c00744f441ae3dbba87a.png" -o "public/images/features/superior-service.png"
    curl -s "http://localhost:3845/assets/7d826fb2af589afae1c55e008e3eaa5a122d5838.png" -o "public/images/features/simple-customization.png"
    curl -s "http://localhost:3845/assets/4e92c4fedb863b36903eff3fd96cb631c5382741.png" -o "public/images/features/exceptional-quality.png"
    
    # Collection backgrounds
    curl -s "http://localhost:3845/assets/5197f000e4657fef7f567d2e2765a65feb9b1763.png" -o "public/images/collections/cannabis-collection.png"
    curl -s "http://localhost:3845/assets/7b1363911d2988f6c11681a604131a52f89e08a3.png" -o "public/images/collections/brewery-collection.png"
    curl -s "http://localhost:3845/assets/86e4a1c93070aa1e2553e0b49ab3e03a91f67a68.png" -o "public/images/collections/cafe-collection.png"
    
    # Material textures
    curl -s "http://localhost:3845/assets/0bfcf9da3e43ebdfcf86d27182df6b8ef419785a.png" -o "public/images/materials/glow-in-dark.png"
    curl -s "http://localhost:3845/assets/0001d536e357f9d15b70ec91452fe042a56cae04.png" -o "public/images/materials/glitter.png"
    curl -s "http://localhost:3845/assets/3de6c0912f62de8970ab67db9302acbd6999e6a5.png" -o "public/images/materials/holographic.png"
    curl -s "http://localhost:3845/assets/7b31a669a3b99752ac4f05981351e0ab85d27b10.png" -o "public/images/materials/clear.png"
    curl -s "http://localhost:3845/assets/c86e9b0da0f8774a9e083fd53edfee15d7d41a28.png" -o "public/images/materials/showcase-container.png"
    
    # Blog images
    curl -s "http://localhost:3845/assets/9f83efc251bdcd58acab3f0409bfe15f99eabc94.png" -o "public/images/blog/article-1.png"
    curl -s "http://localhost:3845/assets/dc48d483c2133ff5be271930827bc18f88619385.png" -o "public/images/blog/article-2.png"
    curl -s "http://localhost:3845/assets/7d9bd87944ea714a2202493fe2783ebfa1e755a4.png" -o "public/images/blog/article-3.png"
    
    echo "✅ All images downloaded successfully!"
    echo "📁 Images saved to public/images/ directory"
    
    # List downloaded files
    echo "📋 Downloaded files:"
    find public/images -name "*.png" -o -name "*.svg" | sort
    
else
    echo "❌ Figma MCP server is not accessible on localhost:3845"
    echo "💡 Please start your Figma MCP server and try again"
    echo "🔧 Make sure the server is running on http://localhost:3845"
fi