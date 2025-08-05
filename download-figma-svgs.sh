#!/bin/bash

# Download script for Figma SVG icons from localhost:3845
# Run this when your Figma MCP server is running

echo "🔍 Checking if Figma MCP server is running..."

# Test if server is accessible
if curl -s -f http://localhost:3845/assets/73d5b13347ed85db82169a651fbeda99834beb96.svg > /dev/null; then
    echo "✅ Figma MCP server is accessible!"
    
    # Create directories
    mkdir -p public/images/icons
    
    echo "📥 Downloading SVG icons..."
    
    # Navigation Icons
    curl -s "http://localhost:3845/assets/9c7eac17fddcd7ea5c8b232c296752d7271da4c1.svg" -o "public/images/icons/menu.svg"
    curl -s "http://localhost:3845/assets/956cbbddf9b129d6836d9b5bf46d9d5715ce8faf.svg" -o "public/images/icons/search.svg"
    curl -s "http://localhost:3845/assets/d43a0db3041f240ac336b055b11aa602fdb0de94.svg" -o "public/images/icons/shopping-cart.svg"
    curl -s "http://localhost:3845/assets/eaabb68c96c1d6f7def7c7fa071e8ba7c29a13f7.svg" -o "public/images/icons/user.svg"
    
    # Star Icons
    curl -s "http://localhost:3845/assets/73d5b13347ed85db82169a651fbeda99834beb96.svg" -o "public/images/icons/star.svg"
    curl -s "http://localhost:3845/assets/ccdead16986336e4a0cdd569518f2dd34cd3c506.svg" -o "public/images/icons/star-large.svg"
    
    # UI Icons
    curl -s "http://localhost:3845/assets/c6be47d59b294ee161bb2b8a5a7e06462f98d4c3.svg" -o "public/images/icons/chevron-down.svg"
    curl -s "http://localhost:3845/assets/d54b8739fb91076a45931e2c18542a295f07d84a.svg" -o "public/images/icons/quote.svg"
    curl -s "http://localhost:3845/assets/80fde928db3dba4019015a5bced585af6a76ee9e.svg" -o "public/images/icons/tooltip-arrow.svg"
    
    # Material Icons
    curl -s "http://localhost:3845/assets/384ba08dbc32ce652268c97ad2230b72fe8df790.svg" -o "public/images/icons/droplet.svg"
    curl -s "http://localhost:3845/assets/61457940f7c62b7d5b06eeb2f7ff7d74dee28e62.svg" -o "public/images/icons/sun.svg"
    curl -s "http://localhost:3845/assets/e7b051882610c9aa44fc7b21b5e57702f53cf616.svg" -o "public/images/icons/shield.svg"
    
    # Footer Icons
    curl -s "http://localhost:3845/assets/f6a5929e30256351a3dacacde11428e96c049595.svg" -o "public/images/icons/email.svg"
    curl -s "http://localhost:3845/assets/45580883d036da82eff705526dad391efd0827db.svg" -o "public/images/icons/arrow-up.svg"
    
    # Social Media Icons
    curl -s "http://localhost:3845/assets/c52e4f983e2a1bef9c4945845be9b757dfd8793f.svg" -o "public/images/icons/twitter.svg"
    curl -s "http://localhost:3845/assets/4bc72de1af904aa052482c9b42bb0474e8697afa.svg" -o "public/images/icons/facebook.svg"
    curl -s "http://localhost:3845/assets/bbcf57591c6303575e82642e5d98d5f0afb29a4b.svg" -o "public/images/icons/instagram.svg"
    curl -s "http://localhost:3845/assets/e8d8a83cf69b0c9a05c0c2aa59281495c5681f5d.svg" -o "public/images/icons/youtube.svg"
    curl -s "http://localhost:3845/assets/082b1c8dd0751f94ed74a67cba36183b7dc19294.svg" -o "public/images/icons/discord.svg"
    curl -s "http://localhost:3845/assets/055e30e8403db36dcebe2d5098113ff2c602bded.svg" -o "public/images/icons/linkedin.svg"
    
    # Brand Icons
    curl -s "http://localhost:3845/assets/8d4d5a1e29af6224466db3a9ff6be3cf94782d62.svg" -o "public/images/icons/trustpilot-logo.svg"
    curl -s "http://localhost:3845/assets/e2ff32bccc67020bea9ee4ee759339205812e0c2.svg" -o "public/images/icons/arrow-shape.svg"
    
    echo "✅ All SVG icons downloaded successfully!"
    echo "📁 Icons saved to public/images/icons/ directory"
    
    # List downloaded files
    echo "📋 Downloaded SVG files:"
    find public/images/icons -name "*.svg" | sort
    
else
    echo "❌ Figma MCP server is not accessible on localhost:3845"
    echo "💡 Please start your Figma MCP server and try again"
    echo "🔧 Make sure the server is running on http://localhost:3845"
fi